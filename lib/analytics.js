"use client";

import { sendGTMEvent } from "@next/third-parties/google";

/**
 * One push shape for every custom event, so GTM triggers key off `event` and
 * read the rest from the same flat payload. No-ops when GTM never loaded
 * (ad blockers, preview builds) rather than throwing inside a click handler.
 */
export const track = (event, params = {}) => {
  try {
    sendGTMEvent({ event, ...params });
  } catch {
    /* analytics must never break an interaction */
  }
};
