import { useState } from 'react';
import { Currency } from '../../types/appTypes';
import styles from './CurrencyConverter.module.css';

function CurrencyConverter() {
  const [firstCurrency, setFirstCurrency] = useState<Currency>('UAH');
  const [secondCurrency, setSecondCurrency] = useState<Currency>('EUR');
  const [firstAmount, setFirstAmount] = useState<string>('1');
  const [secondAmount, setSecondAmount] = useState<string>('1');

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
    setFirstAmount(e.target.value);
  };

  const handleChangeSecondAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondAmount(e.target.value);
  };

  return (
    <div className={styles['converter-background']}>
      <div className={styles['converter-container']}>
        <span className={styles['currency-from']}>
          1 Ukrainian hryvnia equals
        </span>
        <span className={styles['result']}>0.025 Euro</span>
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
