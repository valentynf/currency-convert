import { useEffect, useState } from 'react';
import { fetchExchangeRate } from '../api/currencyApi';
import { Currency } from '../types/appTypes';

function useExchangeRates(curencyFrom: Currency, currencyTo: Currency) {
  const [ratesData, setRatesData] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRatesData = async () => {
      try {
        setIsLoading(true);
        const rateData = await fetchExchangeRate(curencyFrom, currencyTo);
        if (rateData) {
          setRatesData(rateData);
        }
      } catch (err) {
        console.error(`Couldn't fetch exchange rates`, err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRatesData();
  }, [curencyFrom, currencyTo]);

  return { ratesData, isLoading };
}

export default useExchangeRates;
