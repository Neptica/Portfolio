import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import { styles } from "../links/links";

const lineContentStyling = { m: "auto 0", pb: "24px", pt: "18px" };
const oppositeContentStyling = { m: "19px 0" };
const dotSize = {};
const connectorStyle = { transform: "translateY(17px)" };

const TimeLine = ({ data }: { data: (string | string[])[][] }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {data.map(([time, item], index) => {
        if (index === 0) {
          return (
            <div className={styles}>
              <TimelineItem key={`${time}`}>
                <TimelineOppositeContent
                  sx={oppositeContentStyling}
                  align="right"
                  variant="body2"
                >
                  {time}
                </TimelineOppositeContent>
                <TimelineSeparator sx={connectorStyle}>
                  <TimelineDot sx={dotSize} />
                  {data.length - 1 != 0 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={lineContentStyling}>
                  <Typography variant="h6" component="span">
                    {item[0]}
                  </Typography>
                  <Typography>{item[1]}</Typography>
                </TimelineContent>
              </TimelineItem>
            </div>
          );
        }
        if (index === data.length - 1) {
          return (
            <div className={styles}>
              <TimelineItem key={`${time}`}>
                <TimelineOppositeContent
                  sx={oppositeContentStyling}
                  align="right"
                  variant="body2"
                >
                  {time}
                </TimelineOppositeContent>
                <TimelineSeparator sx={connectorStyle}>
                  <TimelineDot sx={dotSize} />
                </TimelineSeparator>
                <TimelineContent
                  sx={lineContentStyling}
                  align="right"
                  variant="body2"
                >
                  <Typography variant="h6" component="span">
                    {item[0]}
                  </Typography>
                  <Typography>{item[1]}</Typography>
                </TimelineContent>
              </TimelineItem>
            </div>
          );
        }
        return (
          <div className={styles}>
            <TimelineItem key={`${time}`}>
              <TimelineOppositeContent sx={oppositeContentStyling}>
                {time}
              </TimelineOppositeContent>
              <TimelineSeparator sx={connectorStyle}>
                <TimelineDot sx={dotSize} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={lineContentStyling}>
                <Typography variant="h6" component="span">
                  {item[0]}
                </Typography>
                <Typography>{item[1]}</Typography>
              </TimelineContent>
            </TimelineItem>
          </div>
        );
      })}
    </Timeline>
  );
};

export default TimeLine;
