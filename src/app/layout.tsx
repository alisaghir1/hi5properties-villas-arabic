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
  title: "فلل دبي الفاخرة | شراء، تأجير، واستثمار في العقارات",
  description:'اكتشف الفيلا المثالية مع Hi5 Villas، شريكك الموثوق في العقارات. استكشف مجموعة واسعة من الفلل الفاخرة المصممة لتناسب أسلوب حياتك. سواء كنت تشتري، تستأجر، أو تبيع، نحن نجعل رحلتك مع الفلل سهلة وخالية من الإجهاد',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
