import { useRouter } from 'next/router';
import ResultsTitle from '../../components/results-title/results-title';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { getFilteredEvents } from '../../dummy-data';

const FilteredEventsPage = () => {
  const { query } = useRouter();

  if (!query.slug) {
    return <></>;
  }

  const year = parseInt(query.slug[0], 10);
  const month = parseInt(query.slug[1], 10);

  const filteredEvents = getFilteredEvents({ year, month });

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;

