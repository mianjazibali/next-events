import Link from 'next/link';
import classes from './button.module.css';

const Button = (props) => {
  const { href, onClick, children } = props;

  if (href) {
    return (
      <Link href={href} className={classes.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
};

export default Button;

