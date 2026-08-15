import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = "kodesbykris — Custom websites and software, built by Kris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F7F7F5",
          color: "#111111",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "#B8F23D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#111111",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              &lt;/&gt;
            </div>
            <span style={{ fontSize: "34px", fontWeight: 600 }}>
              kodes<span style={{ color: "#82AE20" }}>by</span>kris
            </span>
          </div>

          <div
            style={{
              marginTop: "48px",
              fontSize: "68px",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>I build software that solves</span>
            <span>
              <span style={{ color: "#82AE20" }}>real</span> business problems.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(17,17,17,0.15)",
            paddingTop: "28px",
            fontSize: "22px",
            letterSpacing: "0.2em",
          }}
        >
          <span>BUILD • SOLVE • DELIVER</span>
          <span>{SITE.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
