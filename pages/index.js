import Head from 'next/head';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-utils';

const HomePage = ({ events }) => {
  return (
    <>
      <Head>
        <title>Featured Events</title>
        <meta
          name="description"
          context="A list of featured events"
        />
      </Head>
      <EventList events={events} />
    </>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return { props: { events: featuredEvents }, revalidate: 1800 };
}

export default HomePage;
