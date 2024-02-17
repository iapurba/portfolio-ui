import Typography from '@mui/material/Typography';
import React from 'react';
import { ResumeContentWrapper, CustomHeader, CustomBox, CustomChildBox, SchoolIcon, ResumeContentHeaderWrapper } from './styles';

interface Education {
    institution: string;
    degree: string;
    stream: string;
    startYear: string;
    endYear: string;
}

interface EducationProps {
    educationHistory: Education[];
}

const EducationHistory: React.FC<EducationProps> = ({
    educationHistory
}) => {

    return (
        <ResumeContentWrapper className="education-container">
            <ResumeContentHeaderWrapper>
                <SchoolIcon />
                <CustomHeader>Education</CustomHeader>
            </ResumeContentHeaderWrapper>
            <CustomBox>
                {educationHistory.map((item, i) => (
                    <CustomChildBox
                        key={i}
                        className={`${i === 0 ? 'first' : ''} 
                        ${i === (educationHistory.length - 1) ? 'last' : ''}`}
                    >
                        <Typography variant="h6" component="h2">
                            {item.institution}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {`${item.degree}, ${item.stream}`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {`${item.startYear} - ${item.endYear}`}
                        </Typography>
                    </CustomChildBox>
                ))}
            </CustomBox>
        </ResumeContentWrapper>
    );
};

export default EducationHistory;
