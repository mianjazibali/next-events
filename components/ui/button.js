import Link from 'next/link';
import classes from './button.module.css';

const Button = (props) => {
  const { href, children } = props;
  return (
    <Link href={href} className={classes.btn}>
      {children}
    </Link>
  );
};

export default Button;
