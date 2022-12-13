import Head from 'next/head';
import EventSearch from '../../components/events/event-search';
import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../helpers/api-utils';
import { useRouter } from 'next/router';

const EventsPage = ({ events }) => {
  const router = useRouter();
  const searchHandler = (year, month) => {
    router.replace(`/events/${year}/${month}`);
  };

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" context="A list of all events" />
      </Head>
      <EventSearch onSearch={searchHandler} />
      <EventList events={events} />
    </>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return { props: { events }, revalidate: 60 };
}

export default EventsPage;
