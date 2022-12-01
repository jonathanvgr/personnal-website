import React from 'react'

import { Typography, Stack } from '@mui/material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import { TimeLineItems } from "../../constants"

const getDotColor = (type) => {
    switch (type) {
        case "Study":
            return "info"
        case "Job":
            return "warning"
        default:
            return "error"
    }
}


const MyTimeline = React.forwardRef((props, ref) => {
    return (
        <Stack justifyContent="center" alignItems="center" ref={ref} sx={{ height: "100%" }}>
            <Timeline
                sx={{
                    m: 0,
                    flexGrow: 0,
                    p: 0,
                    width: "100%",
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: {
                            xs: 0.2,
                            sm: 1
                        }
                    },
                }}>
                {TimeLineItems.map((item, i) => (
                    <TimelineItem key={`Item ${i}`}>
                        <TimelineOppositeContent>
                            {item.year}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color={getDotColor(item.type)} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent pr={0}>
                            <Typography variant="h6" >
                                {item.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {item.subtitle}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Stack>
    )
});

export default MyTimeline