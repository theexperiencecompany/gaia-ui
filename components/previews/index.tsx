/**
 * Preview Components Registry
 * Auto-registers all preview components using dynamic imports
 */

import { ComponentType } from "react";

type PreviewComponent = ComponentType<any>;

/**
 * Get a preview component by its name
 * Handles nested folder structure with path format: component/variant
 * Examples: "navbar-menu/basic" -> previews/navbar-menu/basic.tsx
 *           "raised-button/default" -> previews/raised-button/default.tsx
 */
export async function getPreviewComponent(
  name: string
): Promise<PreviewComponent | null> {
  try {
    // Dynamic import based on path (folder/file)
    // Next.js will bundle all files in the previews directory
    const module = await import(`@/components/previews/${name}`);
    return module.default;
  } catch (error) {
    console.error(`Error loading preview component: ${name}`, error);
    return null;
  }
}
