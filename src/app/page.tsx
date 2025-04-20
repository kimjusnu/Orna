"use client";

import HomeIntro from "@/components/homepage/HomeIntro";
import PartySelect from "@/components/homepage/PartySelect";

export default function HomePage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 gap-10">
            <HomeIntro />
            <PartySelect />
        </main>
    );
}
