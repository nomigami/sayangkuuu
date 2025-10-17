import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "RANI 💖",
  description: "Website romantis dengan nuansa alam dan warna pink futuristik",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-b from-pink-200 via-pink-300 to-blue-200 min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
