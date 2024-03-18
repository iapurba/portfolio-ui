import React from "react";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    timelineItemClasses,
} from "@mui/lab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ResumeContentWrapper, CustomHeader, OfficeIcon, ResumeContentHeaderWrapper } from "./styles";
import { WorkExperienceType } from "../../types/Resume.type";

interface WorkExperienceProps {
    experiences: WorkExperienceType[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
    return (
        <ResumeContentWrapper>
            <ResumeContentHeaderWrapper>
                <OfficeIcon />
                <CustomHeader>Work Experience</CustomHeader>
            </ResumeContentHeaderWrapper>
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                {experiences.map((experience, i) => (
                    <React.Fragment key={i}>
                        {experience.jobs.map((job, j) => (
                            <TimelineItem key={j}>
                                <TimelineSeparator>
                                    <TimelineDot
                                        sx={{ backgroundColor: "#F75023" }}
                                    />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Box>
                                        <Typography variant="h6">
                                            {job.title}
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            {experience.organization}
                                        </Typography>
                                        <Typography variant="body2">
                                            {job.startDate} - {job.endDate}
                                        </Typography>
                                        <Typography variant="body2">
                                            {job.description}
                                        </Typography>
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </React.Fragment>
                ))}
            </Timeline>
        </ResumeContentWrapper>
    );
};

export default WorkExperience;
