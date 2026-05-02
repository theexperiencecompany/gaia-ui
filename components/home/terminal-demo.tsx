"use client";

import * as React from "react";

const COMMAND = "npx shadcn@latest add https://ui.heygaia.io/r/composer.json";

const OUTPUT_LINES = [
	{ text: "✓ Checking registry", delay: 700 },
	{ text: "✓ Installing dependencies", delay: 500 },
	{ text: "✓ Created components/ui/composer.tsx", delay: 500 },
	{ text: "✨ Done in 1.2s", delay: 500 },
];

const TYPE_INTERVAL = 35;
const RESTART_DELAY = 4000;

type Phase = "typing" | "running" | "done";

export function TerminalDemo() {
	const [typedChars, setTypedChars] = React.useState(0);
	const [visibleLines, setVisibleLines] = React.useState(0);
	const [phase, setPhase] = React.useState<Phase>("typing");

	// biome-ignore lint/correctness/useExhaustiveDependencies: phase is the loop key
	React.useEffect(() => {
		const timeouts: ReturnType<typeof setTimeout>[] = [];

		if (phase === "typing") {
			if (typedChars < COMMAND.length) {
				timeouts.push(
					setTimeout(() => setTypedChars((n) => n + 1), TYPE_INTERVAL),
				);
			} else {
				timeouts.push(setTimeout(() => setPhase("running"), 500));
			}
		} else if (phase === "running") {
			if (visibleLines < OUTPUT_LINES.length) {
				timeouts.push(
					setTimeout(
						() => setVisibleLines((n) => n + 1),
						OUTPUT_LINES[visibleLines].delay,
					),
				);
			} else {
				timeouts.push(setTimeout(() => setPhase("done"), 600));
			}
		} else {
			timeouts.push(
				setTimeout(() => {
					setTypedChars(0);
					setVisibleLines(0);
					setPhase("typing");
				}, RESTART_DELAY),
			);
		}

		return () => {
			for (const t of timeouts) clearTimeout(t);
		};
	}, [phase, typedChars, visibleLines]);

	const typed = COMMAND.slice(0, typedChars);
	const showCursor = phase === "typing" || phase === "done";

	return (
		<div className="w-full max-w-2xl rounded-xl border border-border bg-zinc-950 shadow-xl overflow-hidden font-mono text-sm">
			<div className="flex items-center gap-1.5 border-b border-zinc-800 px-3 py-2.5 bg-zinc-900/60">
				<span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
				<span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
				<span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
				<span className="ml-3 text-xs text-zinc-500 select-none">
					~/your-project
				</span>
			</div>

			<div className="px-4 py-3.5 text-[13px] leading-relaxed min-h-[180px] text-zinc-200">
				<div className="flex items-start gap-2">
					<span className="text-zinc-500 shrink-0">$</span>
					<span className="break-all">
						<span className="text-zinc-100">{typed}</span>
						{showCursor && (
							<span className="inline-block w-[7px] h-[14px] bg-zinc-300 align-middle ml-0.5 animate-[terminal-cursor-blink_1s_steps(2)_infinite]" />
						)}
					</span>
				</div>

				<div className="mt-2 space-y-1">
					{OUTPUT_LINES.slice(0, visibleLines).map((line, i) => (
						<div
							key={line.text}
							className="flex items-start gap-2 text-zinc-400 animate-[terminal-line-in_180ms_ease-out_both]"
							style={{ animationDelay: `${i * 30}ms` }}
						>
							<span className="break-all">
								<span
									className={
										line.text.startsWith("✓")
											? "text-emerald-400"
											: line.text.startsWith("✨")
												? "text-cyan-300"
												: ""
									}
								>
									{line.text.slice(0, 2)}
								</span>
								<span>{line.text.slice(2)}</span>
							</span>
						</div>
					))}
				</div>
			</div>

			<style>
				{`
					@keyframes terminal-cursor-blink {
						0%, 50% { opacity: 1; }
						50.01%, 100% { opacity: 0; }
					}
					@keyframes terminal-line-in {
						from { opacity: 0; transform: translateY(2px); }
						to { opacity: 1; transform: translateY(0); }
					}
				`}
			</style>
		</div>
	);
}
