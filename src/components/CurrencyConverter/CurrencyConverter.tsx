import { useState } from 'react';
import { Currency } from '../../types/appTypes';
import styles from './CurrencyConverter.module.css';
import useExchangeRates from '../../hooks/useExchangeRates';

function CurrencyConverter() {
  const [firstCurrency, setFirstCurrency] = useState<Currency>('UAH');
  const [secondCurrency, setSecondCurrency] = useState<Currency>('EUR');
  const [firstAmount, setFirstAmount] = useState<string>('1');
  const [secondAmount, setSecondAmount] = useState<string>('loading');

  const { ratesData } = useExchangeRates(firstCurrency, secondCurrency);

  const handleChangeFirstCurrency = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFirstCurrency(e.target.value as Currency);
  };

  const handleChangeSecondFirstCurrency = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSecondCurrency(e.target.value as Currency);
  };

  const handleChangeFirstAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFirstAmount(newValue);
    setSecondAmount(() => (Number(newValue) * Number(ratesData)).toFixed(3));
  };

  const handleChangeSecondAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSecondAmount(newValue);
    setFirstAmount(() => (Number(newValue) / Number(ratesData)).toFixed(3));
  };

  return (
    <div className={styles['converter-background']}>
      <div className={styles['converter-container']}>
        <span className={styles['currency-from']}>
          1 {firstCurrency} equals
        </span>
        <span className={styles['result']}>
          {ratesData} {secondCurrency}
        </span>
        <div className={styles['input']}>
          <div className={styles['currency-container']}>
            <input
              value={firstAmount}
              onChange={handleChangeFirstAmount}
              className={styles['currency-amount']}
              type="text"
            />
            <select
              className={styles['currency-dropdown']}
              value={firstCurrency}
              onChange={handleChangeFirstCurrency}
            >
              <option value="UAH">Ukrainian hryvnia</option>
              <option value="USD">US Dollar</option>
              <option value="EUR">Euro</option>
            </select>
          </div>
          <div className={styles['currency-container']}>
            <input
              value={secondAmount}
              onChange={handleChangeSecondAmount}
              className={styles['currency-amount']}
              type="text"
            />
            <select
              className={styles['currency-dropdown']}
              value={secondCurrency}
              onChange={handleChangeSecondFirstCurrency}
            >
              <option value="UAH">Ukrainian hryvnia</option>
              <option value="USD">US Dollar</option>
              <option value="EUR">Euro</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
