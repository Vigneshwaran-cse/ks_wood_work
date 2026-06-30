/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Icons from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = "", size = 24 }: IconProps) {
  // Safe lookup for Lucide React icons
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) {
    // Return a fallback hammer icon if not found
    const Fallback = Icons.Hammer;
    return <Fallback className={className} size={size} />;
  }
  return <LucideIcon className={className} size={size} />;
}
