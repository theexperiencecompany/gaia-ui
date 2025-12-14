"use client";

import { CodeBlock } from "@/registry/new-york/ui/code-block";

export default function CodeBlockLanguages() {
  const pythonCode = `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))`;

  const typescriptCode = `interface User {
  id: string;
  name: string;
  email: string;
}

const createUser = (data: User): User => {
  return { ...data };
};`;

  const bashCode = `#!/bin/bash
# Deploy script
echo "Building application..."
npm run build
echo "Deploying to production..."
npm run deploy`;

  return (
    <div className="flex flex-col gap-6 w-full">
      <CodeBlock language="python" filename="fibonacci.py">
        {pythonCode}
      </CodeBlock>
      
      <CodeBlock language="typescript" filename="types.ts">
        {typescriptCode}
      </CodeBlock>
      
      <CodeBlock language="bash" filename="deploy.sh">
        {bashCode}
      </CodeBlock>
    </div>
  );
}
