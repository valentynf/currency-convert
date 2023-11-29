import useExchangeRates from '../../hooks/useExchangeRates';
import DigitalDisplay from '../shared/DigitalDisplay/DigitalDisplay';
import styles from './Header.module.css';

function Header() {
  const { ratesData, isLoading } = useExchangeRates();
  const { dollarRate, euroRate } = ratesData;

  return (
    <header className={styles['header-container']}>
      <DigitalDisplay isBlank={isLoading} value={dollarRate} />
      <span>Exchange Rates</span>
      <DigitalDisplay isBlank={isLoading} value={euroRate} />
    </header>
  );
}

export default Header;
