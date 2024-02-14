import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export const IntroductionWrapper = styled(Container)({
    display: "flex",
    flexDirection: "column",
    padding: "100px 0px",
});

export const NameText = styled(Typography)({
    fontSize: "60px",
    fontWeight: "540",
});

export const BioText = styled(Typography)({
    fontSize: "16px",
    marginTop: "24px",
});

export const LinksContainer = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginTop: "24px",
});
