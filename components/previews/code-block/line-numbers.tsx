"use client";

import { CodeBlock } from "@/registry/new-york/ui/code-block";

export default function CodeBlockLineNumbers() {
  const code = `import React from "react";
import { cn } from "@/lib/utils";

export function Component({ className }) {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className={cn("container", className)}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`;

  return (
    <div className="flex justify-center w-full">
      <CodeBlock 
        language="typescript" 
        filename="component.tsx"
        showLineNumbers
      >
        {code}
      </CodeBlock>
    </div>
  );
}
