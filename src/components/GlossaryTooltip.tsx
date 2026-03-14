"use client";

import { useState } from "react";
import styles from "./GlossaryTooltip.module.css";
import { Info } from "lucide-react";

interface GlossaryTooltipProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

export default function GlossaryTooltip({ term, definition, children }: GlossaryTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      className={styles.tooltipContainer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      tabIndex={0}
      aria-describedby={`tooltip-${term}`}
    >
      <span className={styles.triggerText}>{children}</span>
      <Info size={14} className={styles.iconInfo} />

      {isVisible && (
        <span
          id={`tooltip-${term}`}
          className={styles.tooltipBox}
          role="tooltip"
        >
          <strong className={styles.tooltipTerm}>{term}</strong>
          <span className={styles.tooltipDef}>{definition}</span>
        </span>
      )}
    </span>
  );
}
