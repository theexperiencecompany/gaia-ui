import { getSourceCode } from "@/lib/source";
import { SourceCodeClient } from "./source-code-client";

interface SourceCodeProps {
	filePath: string;
	title?: string;
	language?: string;
}

/**
 * Generate a display title from the file path
 * Examples:
 * - "registry/new-york/ui/author-tooltip.tsx" -> "components/ui/author-tooltip.tsx"
 * - "lib/utils/colorUtils.ts" -> "lib/utils/colorUtils.ts" (unchanged)
 */
function generateTitle(filePath: string): string {
	// Convert registry paths to components paths
	return filePath.replace(/^registry\/[^/]+\//, "components/");
}

/**
 * Server component to display source code from a file
 * Automatically reads the file and displays it with syntax highlighting
 * Title is auto-generated from filePath if not provided
 */
export function SourceCode({ filePath, title, language }: SourceCodeProps) {
	const code = getSourceCode(filePath);

	// Infer language from file extension if not provided
	const lang = language || filePath.split(".").pop() || "tsx";

	// Auto-generate title from filePath if not provided
	const displayTitle = title || generateTitle(filePath);

	return <SourceCodeClient code={code} title={displayTitle} language={lang} />;
}
