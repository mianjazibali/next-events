import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';

const EventsPage = () => {
  const allEvents = getAllEvents();
  return <EventList events={allEvents} />;
};

export default EventsPage;
