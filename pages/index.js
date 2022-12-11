import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-utils';

const HomePage = ({ events }) => {
  return <EventList events={events} />;
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return { props: { events: featuredEvents }, revalidate: 600 };
}

export default HomePage;
