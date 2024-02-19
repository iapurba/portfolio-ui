import Container from "@mui/material/Container"
import Box from "@mui/material/Box";
import PageHeader from "../PageHeader/PageHeader";

interface PageBuilderProps {
    id: string;
    className?: string;
    title?: string;
    subtitle1?: string;
    subtitle2?: string;
    children: React.ReactNode;
    sx?: Object;
}
const PageBuilder: React.FC<PageBuilderProps> = ({
    id,
    className,
    title,
    subtitle1,
    subtitle2,
    children,
    sx
}) => {
    return (
        <Box id={id} sx={{ padding: "30px 0", ...sx }}>
            <Container
                className={className
                    ? className : `${id}-container`}
                sx={{ margin: "auto" }}
            >
                {(title && subtitle1) &&
                    <PageHeader
                        title={title}
                        subtitle1={subtitle1}
                        subtitle2={subtitle2 ?? ''}
                    />
                }
                <Box sx={{ margin: "30px 0 80px" }}>
                    {children}
                </Box>
            </Container>
        </Box>
    );
};

export default PageBuilder;