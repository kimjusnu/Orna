"use client";

import React from "react";
import {
    Card,
    CardContent,
    CardActionArea,
    Typography,
    Stack,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Candidate } from "@/constants/candidates";

interface Props {
    candidate: Candidate;
}

const CandidateCard = ({ candidate }: Props) => {
    const router = useRouter();

    return (
        <Card variant="outlined">
            <CardActionArea
                onClick={() => router.push(`/themes/${candidate.id}`)}
            >
                <CardContent>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Image
                            src={candidate.image}
                            alt={candidate.name}
                            width={48}
                            height={48}
                            style={{ borderRadius: "50%" }}
                        />
                        <div>
                            <Typography
                                fontWeight={600}
                                sx={{ color: "#211951" }}
                            >
                                {candidate.name}
                            </Typography>
                            <Typography fontSize={14} sx={{ color: "#909094" }}>
                                {candidate.title}
                            </Typography>
                        </div>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CandidateCard;
