"use client";

import { CodeBlock } from "@/registry/new-york/ui/code-block";

export default function CodeBlockDefault() {
	const code = `function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome to GAIA UI\`;
}

greet("Developer");`;

	return (
		<div className="flex justify-center w-full">
			<CodeBlock language="javascript" filename="example.js">
				{code}
			</CodeBlock>
		</div>
	);
}
