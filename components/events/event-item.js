import Image from 'next/image';
import Link from 'next/link';

const EventItem = (props) => {
  const { id, title, location, date, image } = props;

  const formattedDate = new Date(date).toDateString();
  const formattedLocation = location.replace(', ', '\n');

  return (
    <li>
      <Image src={`/${image}`} alt={title} width="200" height="200" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{formattedDate}</time>
          </div>
          <div>
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
