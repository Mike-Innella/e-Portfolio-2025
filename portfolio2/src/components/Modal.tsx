"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  labelledBy?: string;
  describedBy?: string;
  children: React.ReactNode;
};

export default function Modal({
  open,
  onClose,
  labelledBy,
  describedBy,
  children,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  // Restore focus to the last focused element when closing
  useEffect(() => {
    if (open) {
      lastFocused.current = document.activeElement as HTMLElement | null;
      
      // Only set initial focus if no element is already focused
      const focusTimer = setTimeout(() => {
        if (document.activeElement === document.body) {
          const first = dialogRef.current?.querySelector<HTMLElement>(
            "input, textarea, select, button, [href], [tabindex]:not([tabindex='-1'])"
          );
          first?.focus();
        }
      }, 150);

      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
          return;
        }
        
        // Very conservative focus trap - only activate when actually leaving modal
        if (e.key === "Tab") {
          const focusables = Array.from(
            dialogRef.current?.querySelectorAll<HTMLElement>(
              "input, textarea, select, button, [href], [tabindex]:not([tabindex='-1'])"
            ) || []
          ).filter(el => {
            // Check if element is disabled (for form elements) and visible
            const isDisabled = 'disabled' in el && (el as HTMLInputElement | HTMLButtonElement | HTMLSelectElement | HTMLTextAreaElement).disabled;
            const isVisible = el.offsetParent !== null;
            return !isDisabled && isVisible;
          });
          
          if (focusables.length === 0) return;

          const firstEl = focusables[0];
          const lastEl = focusables[focusables.length - 1];
          const activeEl = document.activeElement as HTMLElement;
          
          // Only prevent default if we're actually at the boundaries trying to leave
          if (e.shiftKey && activeEl === firstEl) {
            e.preventDefault();
            lastEl.focus();
          } else if (!e.shiftKey && activeEl === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
          // Otherwise, let natural Tab behavior work completely normally
        }
      };
      
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      
      return () => {
        clearTimeout(focusTimer);
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
        // Restore focus
        if (lastFocused.current) {
          setTimeout(() => {
            lastFocused.current?.focus?.();
          }, 0);
        }
      };
    }
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className={s.backdrop} aria-hidden={false} onClick={onClose}>
      <div
        className={s.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
