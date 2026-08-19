"use client";

import { MotionConfig } from "framer-motion";

/** Springs are JS-driven, so reduced-motion has to be honoured here too, not just in CSS. */
const MotionRoot = ({ children }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionRoot;
