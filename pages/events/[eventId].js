import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

const EventDetailPage = () => {
  const { query } = useRouter();
  const event = getEventById(query.eventId);

  if (!event) {
    return <p>No Event Found</p>;
  }

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

export default EventDetailPage;
