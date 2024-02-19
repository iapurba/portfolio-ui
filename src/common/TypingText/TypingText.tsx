import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const useStyles = {
    animation: "$typingEffect 1s steps(20, end)",
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderRight: "2px solid #000",
    color: "#1CBE59",
    fontWeing: "600",
    width: "fit-content",
    "@keyframes typingEffect": {
        from: { width: 0 },
        to: { width: "100%" },
    },
};

interface TypingTextProps {
    text: string;
    sx?: Object;
}

const TypingText: React.FC<TypingTextProps> = ({ text, sx }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.substring(0, index));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 100);
        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <Typography sx={sx}>{``}<span style={useStyles}>{displayText}</span></Typography>
    );
};

export default TypingText;
