export interface Candidate {
    id: string;
    name: string;
    title: string;
    image: string; // SVG 경로
    team: "kukhim" | "minju";
}

export const candidates: Candidate[] = [
    {
        id: "handonghoon",
        name: "한동훈",
        title: "법무부 장관",
        image: "/handonghoon.svg",
        team: "kukhim",
    },
    {
        id: "hongjunpyo",
        name: "홍준표",
        title: "대구시장",
        image: "/hongjunpyo.svg",
        team: "kukhim",
    },
    {
        id: "naegyeongwon",
        name: "나경원",
        title: "전 의원",
        image: "/naegyeongwon.svg",
        team: "kukhim",
    },
    {
        id: "kimmoonsoo",
        name: "김문수",
        title: "전 경기도지사",
        image: "/kimmoonsoo.svg",
        team: "kukhim",
    },
    {
        id: "leejaemyung",
        name: "이재명",
        title: "전 경기도지사",
        image: "/leejaemyung.svg",
        team: "minju",
    },
    {
        id: "kimdongyeon",
        name: "김동연",
        title: "전 경제부총리",
        image: "/kimdongyeon.svg",
        team: "minju",
    },
    {
        id: "kimkyungsoo",
        name: "김경수",
        title: "전 경남도지사",
        image: "/kimkyungsoo.svg",
        team: "minju",
    },
];
