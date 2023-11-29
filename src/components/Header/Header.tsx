import useExchangeRates from '../../hooks/useExchangeRates';
import DigitalDisplay from '../shared/DigitalDisplay/DigitalDisplay';
import styles from './Header.module.css';

function Header() {
  const { ratesData, isLoading } = useExchangeRates();
  //   const ratesData = { dollarRate: '36.37', euroRate: '39.31' };
  //   const isLoading = false;
  const { dollarRate, euroRate } = ratesData;

  return (
    <header className={styles['header-container']}>
      <DigitalDisplay
        from="USD"
        to="UAH"
        isBlank={isLoading}
        value={dollarRate}
      />
      <span className={styles['title']}>Exchange Rates</span>
      <DigitalDisplay
        from="EUR"
        to="UAH"
        isBlank={isLoading}
        value={euroRate}
      />
    </header>
  );
}

export default Header;
