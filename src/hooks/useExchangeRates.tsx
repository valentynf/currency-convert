import { useEffect, useState } from 'react';
import { fetchExchangeRates } from '../api/currencyApi';
import { RatesData } from '../types/appTypes';

const initialState: RatesData = {
  dollarRate: '0',
  euroRate: '0',
};

function useExchangeRates() {
  const [ratesData, setRatesData] = useState<RatesData>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRatesData = async () => {
      try {
        setIsLoading(true);
        const ratesData = await fetchExchangeRates('EUR', 'USD');
        if (ratesData) {
          setRatesData(ratesData);
        }
      } catch (err) {
        console.error(`Couldn't fetch exchange rates`, err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRatesData();
  }, []);

  return { ratesData, isLoading };
}

export default useExchangeRates;
