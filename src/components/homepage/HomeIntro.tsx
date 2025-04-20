import React from "react";
import { Typography, Box } from "@mui/material";

const HomeIntro = () => {
    return (
        <Box textAlign="center" mb={6}>
            <Typography
                variant="h5"
                fontWeight="bold"
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
    );
};

export default HomeIntro;
