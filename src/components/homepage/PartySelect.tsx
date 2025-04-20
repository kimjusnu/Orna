"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function PartySelect() {
    const router = useRouter();

    return (
        <div className="w-full flex flex-col gap-4">
            <Card
                onClick={() => router.push("/lineup/kukhim")}
                className="w-full cursor-pointer py-4 px-6 text-white font-semibold text-center rounded-xl shadow-md transition hover:opacity-90"
                style={{ backgroundColor: "#C64B4B" }}
            >
                국민의힘 후보 보기
            </Card>

            <Card
                onClick={() => router.push("/lineup/minju")}
                className="w-full cursor-pointer py-4 px-6 text-white font-semibold text-center rounded-xl shadow-md transition hover:opacity-90"
                style={{ backgroundColor: "#2C6BED" }}
            >
                더불어민주당 후보 보기
            </Card>
        </div>
    );
}
