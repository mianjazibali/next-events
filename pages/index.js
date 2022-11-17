import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Show Featured Events</h1>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default HomePage;
