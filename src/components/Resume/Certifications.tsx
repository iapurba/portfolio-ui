import Typography from "@mui/material/Typography";
import React from "react";
import {
    ResumeContentWrapper,
    CustomHeader,
    CustomBox,
    CustomChildBox,
    CertificateIcon,
    ResumeContentHeaderWrapper,
} from "./styles";

interface Cert {
    name: string;
    issuer: string;
    issuedOn: string;
}

interface CertificationsProps {
    certList: Cert[];
}

const Certifications: React.FC<CertificationsProps> = ({ certList }) => {
    return (
        <ResumeContentWrapper className="education-container">
            <ResumeContentHeaderWrapper>
                <CertificateIcon />
                <CustomHeader>Certifications</CustomHeader>
            </ResumeContentHeaderWrapper>
            <CustomBox>
                {certList.map((item, i) => (
                    <CustomChildBox
                        key={i}
                        className={`${i === 0 ? "first" : ""} 
                        ${i === certList.length - 1 ? "last" : ""}`}
                    >
                        <Typography variant="h6" component="h2">
                            {item?.name}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {item?.issuer}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {`Issued ${item?.issuedOn}`}
                        </Typography>
                    </CustomChildBox>
                ))}
            </CustomBox>
        </ResumeContentWrapper>
    );
};

export default Certifications;
