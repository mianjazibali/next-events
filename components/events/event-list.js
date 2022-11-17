import EventItem from './event-item';

const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
