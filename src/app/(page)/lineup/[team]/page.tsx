import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import CandidateCard from "@/components/lineup/CandidateCard";
import { candidates } from "@/constants/candidates";

interface Props {
    params: {
        team: "kukhim" | "minju";
    };
}

export default function LineupPage({ params }: Props) {
    const { team } = params;

    // 해당 정당에 속한 후보만 필터링
    const filteredCandidates = candidates.filter(
        candidate => candidate.team === team
    );

    const teamName = team === "kukhim" ? "국민의힘" : "더불어민주당";

    return (
        <Container
            maxWidth="xs"
            sx={{ py: 6, minHeight: "100vh", backgroundColor: "#F0F3FF" }}
        >
            {/* 타이틀 */}
            <Typography
                variant="h6"
                fontWeight="bold"
                textAlign="center"
                mb={4}
                sx={{ color: "#211951" }}
            >
                {teamName} 후보 목록
            </Typography>

            {/* 후보 카드 리스트 */}
            <Stack spacing={2}>
                {filteredCandidates.map(candidate => (
                    <CandidateCard key={candidate.id} candidate={candidate} />
                ))}
            </Stack>
        </Container>
    );
}
