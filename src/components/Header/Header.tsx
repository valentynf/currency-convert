import useExchangeRates from '../../hooks/useExchangeRates';
import DigitalDisplay from './DigitalDisplay/DigitalDisplay';
import styles from './Header.module.css';

function Header() {
  const { ratesData: dollarRate, isLoading: isLoadingDollar } =
    useExchangeRates('USD', 'UAH');
  const { ratesData: euroRate, isLoading: isLoadingEuro } = useExchangeRates(
    'EUR',
    'UAH'
  );

  return (
    <header className={styles['header-container']}>
      <DigitalDisplay
        from="USD"
        to="UAH"
        isBlank={isLoadingDollar}
        value={dollarRate}
      />
      <span className={styles['title']}>Exchange Rates</span>
      <DigitalDisplay
        from="EUR"
        to="UAH"
        isBlank={isLoadingEuro}
        value={euroRate}
      />
    </header>
  );
}

export default Header;
