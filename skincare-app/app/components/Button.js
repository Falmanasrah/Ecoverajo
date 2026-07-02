import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  type = 'button',
  className = '',
  disabled = false,
  ...props 
}) {
  const btnClass = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={btnClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={btnClass} 
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
