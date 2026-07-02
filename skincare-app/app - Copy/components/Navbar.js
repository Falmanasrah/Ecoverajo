import Link from 'next/link';
import { useCart } from '../context/CartContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`} aria-label="Main Navigation">
        <div className={styles.logo}>
          <Link href="/">Ecovera</Link>
        </div>
        
        <ul className={styles.navLinks}>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/quiz">Skin Quiz</Link></li>
        </ul>

        <div className={styles.actions}>
          <button 
            className={styles.cartBtn} 
            onClick={() => setIsCartOpen(true)}
            aria-label={`Open shopping cart. ${cartCount} items.`}
          >
            Cart ({cartCount})
          </button>
        </div>
      </nav>
    </header>
  );
}
