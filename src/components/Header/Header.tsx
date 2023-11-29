import DigitalDisplay from '../shared/DigitalDisplay/DigitalDisplay';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles['header-container']}>
      <DigitalDisplay value="14.46" />
      <span>Exchange Rates</span>
      <DigitalDisplay value="14.46" />
    </header>
  );
}

export default Header;
