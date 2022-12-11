import { useRouter } from 'next/router';
import {
  getEventById,
  getFeaturedEvents,
} from '../../helpers/api-utils';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

const EventDetailPage = ({ event }) => {
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        image={event.image}
        imageAlt={event.title}
        date={event.date}
        address={event.location}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getStaticProps(context) {
  const event = await getEventById(context.params.eventId);

  if (!event) {
    return { notFound: true };
  }

  return { props: { event }, revalidate: 30 };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => {
    return { params: { eventId: event.id } };
  });

  return { paths, fallback: 'blocking' };
}

export default EventDetailPage;

