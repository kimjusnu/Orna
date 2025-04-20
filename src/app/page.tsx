"use client";

import React from "react";
import { Container, Box, Typography, Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

export default function HomePage() {
    const router = useRouter();

    return (
        <Container
            maxWidth="xs"
            sx={{
                py: 8,
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#F0F3FF",
            }}
        >
            {/* 인트로 텍스트 */}
            <Box textAlign="center" mb={6}>
                <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{ color: "#211951", mb: 1 }}
                >
                    누가 오르면, 주가도 오르나?
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ color: "#909094", lineHeight: 1.6 }}
                >
                    정치 테마주 실시간 추적 웹앱
                    <br />
                    오르나에 오신 걸 환영합니다.
                </Typography>
            </Box>

            {/* 정당 선택 버튼 */}
            <Stack spacing={2}>
                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                        backgroundColor: "#C64B4B",
                        color: "#FFFFFF",
                        fontWeight: 600,
                        "&:hover": { backgroundColor: "#b03f3f" },
                    }}
                    endIcon={<FaChevronRight />}
                    onClick={() => router.push("/lineup/kukhim")}
                >
                    국민의힘 후보 보기
                </Button>

                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                        backgroundColor: "#2C6BED",
                        color: "#FFFFFF",
                        fontWeight: 600,
                        "&:hover": { backgroundColor: "#1f57be" },
                    }}
                    endIcon={<FaChevronRight />}
                    onClick={() => router.push("/lineup/minju")}
                >
                    더불어민주당 후보 보기
                </Button>
            </Stack>
        </Container>
    );
}
