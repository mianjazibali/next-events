import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import LinkIcon from '../icons/arrow-right-icon';
import classes from './event-item.module.css';
import ImageLoader from '../../helpers/image';

const EventItem = (props) => {
  const { id, title, location, date, image } = props;

  const formattedDate = new Date(date).toDateString();
  const formattedLocation = location.replace(', ', '\n');

  return (
    <li className={classes.item}>
      <Image
        loader={ImageLoader}
        src={image}
        alt={title}
        width="200"
        height="200"
      />
      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button href={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <LinkIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
