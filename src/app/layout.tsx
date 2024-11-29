import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "هاي فايف",
  description:'اكتشف منزلك المثالي مع هاي فايف للعقارات، شريكك الموثوق في مجال العقارات. استكشف مجموعة واسعة من العقارات الفاخرة والشقق والمنازل المصممة لتلبية أسلوب حياتك. سواء كنت تشتري، أو تؤجر، أو تبيع، نحن نجعل رحلتك العقارية سلسة وخالية من الإجهاد.',
  icons: {
    icon: "/logo.svg", // Replace with the path to your logo image in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400..700&family=Merienda:wght@300..900&family=Noto+Kufi+Arabic:wght@100..900&display=swap" as="font" type="font-opentype"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
