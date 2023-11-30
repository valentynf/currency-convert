import { CURRENCY_API_KEY, CURRENCY_API_URL } from '../config';
import { Currency } from '../types/appTypes';

export const fetchExchangeRate = async (
  curencyFrom: Currency,
  curencyTo: Currency
): Promise<string | undefined> => {
  if (curencyFrom === curencyTo) return '1';
  try {
    const response = await fetch(
      `${CURRENCY_API_URL}?api_key=${CURRENCY_API_KEY}&from=${curencyFrom}&to=${curencyTo}&format=json`
    );
    const data = await response.json();
    const rate = data.rates[curencyTo].rate;
    return rate;
  } catch (err) {
    console.error(`Couldn't fetch exchange rates`, err);
    throw err;
  }
};
