import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.column}>
          <h3>Ecovera</h3>
          <p>Natural, eco-friendly Swedish skincare designed to nourish your skin and the planet.</p>
        </div>
        
        <div className={styles.column}>
          <h4>Shop</h4>
          <ul>
            <li><Link href="/shop?category=Moisturizers">Moisturizers</Link></li>
            <li><Link href="/shop?category=Cleansers">Cleansers</Link></li>
            <li><Link href="/shop?category=Toners">Toners</Link></li>
            <li><Link href="/shop?category=Hydrators">Hydrators</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/policy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Ecovera Skincare. All rights reserved.</p>
      </div>
    </footer>
  );
}
