import Box from "@mui/material/Box";
import { Subtitle1, Subtitle2, Title } from "./PageHeader.styles";

interface PageHeaderProps {
    title: string;
    subtitle1: string;
    subtitle2?: string;
    sx?: object;
}
const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    subtitle1,
    subtitle2,
    sx = { textAlign: 'center' },
}) => {
    return (
        <Box sx={{ margin: 'auto', maxWidth: '600px', ...sx }}>
            <Title>{title}</Title>
            <Subtitle1>{subtitle1}</Subtitle1>
            {subtitle2 ?? <Subtitle2>{subtitle2}</Subtitle2>}
        </Box>
    )
};

export default PageHeader;