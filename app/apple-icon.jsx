import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #eeeef2 0%, #e3e3e9 100%)",
          color: "#4c4fd4",
          fontSize: 76,
          letterSpacing: -2,
        }}
      >
        GS
      </div>
    ),
    size
  );
}
