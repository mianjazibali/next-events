import EventSearch from '../../components/events/event-search';
import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';
import { useRouter } from 'next/router';

const EventsPage = () => {
  const router = useRouter();
  const allEvents = getAllEvents();
  const searchHandler = (year, month) => {
    router.replace(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventSearch onSearch={searchHandler} />
      <EventList events={allEvents} />
    </>
  );
};

export default EventsPage;

