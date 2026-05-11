"use client";

import { IPhoneMockup } from "@/registry/new-york/ui/iphone-mockup";

export default function IPhoneMockupDefault() {
	return (
		<div className="flex w-full items-center justify-center p-8">
			<IPhoneMockup>
				<div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
					<div className="text-[44px] font-semibold tracking-tight text-black">
						Hello
					</div>
					<div className="text-[15px] leading-snug text-zinc-500">
						An iPhone mockup with a realistic Dynamic Island, side buttons,
						status bar and home indicator.
					</div>
				</div>
			</IPhoneMockup>
		</div>
	);
}
