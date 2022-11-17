import EventItem from './event-item';
import classes from './event-list.module.css';

const EventList = ({ events }) => {
  if (!events || events.length === 0) {
    return <p className={classes.msg}>No Events Found</p>;
  }

  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;

