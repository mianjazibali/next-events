import EventSearch from '../../components/events/event-search';
import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';

const EventsPage = () => {
  const allEvents = getAllEvents();
  return (
    <>
      <EventSearch />
      <EventList events={allEvents} />
    </>
  );
};

export default EventsPage;

