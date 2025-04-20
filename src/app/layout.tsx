import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "오르나 | 정치 테마주 추적 웹앱",
    description:
        "누가 오르면, 주가도 오르나? 테마주 타이밍은 오르나에서 먼저 확인하세요.",
    viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body
                className="bg-[#F0F3FF] text-[#211951] antialiased"
                style={{ fontFamily: "Pretendard-Regular, sans-serif" }}
            >
                <div className="w-full max-w-[480px] mx-auto min-h-screen bg-white">
                    {children}
                </div>
            </body>
        </html>
    );
}
