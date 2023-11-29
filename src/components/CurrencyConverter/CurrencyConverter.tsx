import { useState } from 'react';
import { Currency } from '../../types/appTypes';
import styles from './CurrencyConverter.module.css';

function CurrencyConverter() {
  const [firstCurrency, setFirstCurrency] = useState<Currency>('UAH');
  const [secondCurrency, setSecondCurrency] = useState<Currency>('EUR');
  // const [amount, setAmount] = useState<number>(1);

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

  return (
    <div className={styles['converter-background']}>
      <div className={styles['converter-container']}>
        <span className={styles['currency-from']}>
          1 Ukrainian hryvnia equals
        </span>
        <span className={styles['result']}>0.025 Euro</span>
        <div className={styles['input']}>
          <div className={styles['currency-container']}>
            <input className={styles['currency-amount']} type="text" />
            <select
              className={styles['currency-dropdown']}
              value={firstCurrency}
              onChange={handleChangeFirstCurrency}
            >
              <option value="USD">Ukrainian hryvnia</option>
              <option value="UAH">US Dollar</option>
              <option value="EUR">Euro</option>
            </select>
          </div>
          <div className={styles['currency-container']}>
            <input className={styles['currency-amount']} type="text" />
            <select
              className={styles['currency-dropdown']}
              value={secondCurrency}
              onChange={handleChangeSecondFirstCurrency}
            >
              <option value="USD">Ukrainian hryvnia</option>
              <option value="UAH">US Dollar</option>
              <option value="EUR">Euro</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
