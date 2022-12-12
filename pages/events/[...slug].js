import { useRouter } from 'next/router';
import ResultsTitle from '../../components/results-title/results-title';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { getFilteredEvents } from '../../helpers/api-utils';

const FilteredEventsPage = ({ year, month, events }) => {
  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={events} />
    </>
  );
};

export async function getServerSideProps(context) {
  const year = parseInt(context.query.slug[0], 10);
  const month = parseInt(context.query.slug[1], 10);

  const events = await getFilteredEvents({ year, month });
  return { props: { year, month, events } };
}

export default FilteredEventsPage;

