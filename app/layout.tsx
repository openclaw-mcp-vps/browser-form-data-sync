import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormSync – Sync Form Data Across Devices & Browsers",
  description: "Automatically saves and syncs partially filled forms across all your devices and browsers. Never lose form progress again.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="de7eb13c-cf83-489f-9c57-a462cc279897"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
