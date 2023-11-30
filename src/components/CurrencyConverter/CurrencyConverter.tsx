import { useEffect, useState } from 'react';
import { Currency } from '../../types/appTypes';
import styles from './CurrencyConverter.module.css';
import useExchangeRates from '../../hooks/useExchangeRates';
import { currencyOptions } from '../../config';

function CurrencyConverter() {
  const [firstCurrency, setFirstCurrency] = useState<Currency>('UAH');
  const [secondCurrency, setSecondCurrency] = useState<Currency>('EUR');
  const [firstAmount, setFirstAmount] = useState<string>('1');
  const [secondAmount, setSecondAmount] = useState<string>('0');
  const [lastChangedInput, setLastChangedInput] = useState<'first' | 'second'>(
    'first'
  );

  const { ratesData } = useExchangeRates(firstCurrency, secondCurrency);

  const options = Object.entries(currencyOptions).map(([value, label]) => (
    <option key={value} value={value}>
      {label}
    </option>
  ));

  useEffect(() => {
    if (lastChangedInput === 'first') {
      setSecondAmount((Number(firstAmount) * Number(ratesData)).toFixed(3));
    }
    if (lastChangedInput === 'second') {
      setFirstAmount((Number(secondAmount) / Number(ratesData)).toFixed(3));
    }
  }, [
    ratesData,
    firstAmount,
    secondAmount,
    firstCurrency,
    secondCurrency,
    lastChangedInput,
  ]);

  const handleChangeFirstCurrency = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFirstCurrency(e.target.value as Currency);
  };

  const handleChangeSecondCurrency = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSecondCurrency(e.target.value as Currency);
  };

  const handleChangeFirstAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFirstAmount(newValue);
    setLastChangedInput('first');
  };

  const handleChangeSecondAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSecondAmount(newValue);
    setLastChangedInput('second');
  };

  return (
    <div className={styles['converter-background']}>
      <div className={styles['converter-container']}>
        <span className={styles['currency-from']}>
          1 {currencyOptions[firstCurrency]} equals
        </span>
        <span className={styles['result']}>
          {ratesData} {currencyOptions[secondCurrency]}
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
              {options}
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
              onChange={handleChangeSecondCurrency}
            >
              {options}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
