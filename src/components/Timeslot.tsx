import React from "react";
import { IAgendaItem } from "../agendaUtils";
import Talk from "./Talk";


interface ITimeSlotProps {
  talks: IAgendaItem[];
  timeslot: string;
  location: string;
}

const TimeSlot: React.FC<ITimeSlotProps> = ({ talks, timeslot, location }) => (
  <div className="Timeslot">
    <h4>{timeslot}</h4>
    {talks.map(item => (
      <Talk
        key={`${item.speaker}${item.title}${item.location}`}
        title={item.title}
        speaker={item.speaker}
        location={item.location}
      />
    ))}
  </div>
);

export default TimeSlot;