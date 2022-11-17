import Image from 'next/image';
import Link from 'next/link';
import classes from './event-item.module.css';

const EventItem = (props) => {
  const { id, title, location, date, image } = props;

  const formattedDate = new Date(date).toDateString();
  const formattedLocation = location.replace(', ', '\n');

  return (
    <li className={classes.item}>
      <Image src={`/${image}`} alt={title} width="200" height="200" />
      <div>
        <div className={classes.content}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
