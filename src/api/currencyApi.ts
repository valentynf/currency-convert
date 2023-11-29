import { CURRENCY_API_KEY } from '../config';
import { Currency, RatesData } from '../types/appTypes';

export const fetchExchangeRates = async (
  curency1: Currency,
  curency2: Currency
): Promise<RatesData | undefined> => {
  try {
    const eurRes = await fetch(
      `https://api.getgeoapi.com/v2/currency/convert?api_key=${CURRENCY_API_KEY}&from=${curency1}&to=UAH&format=json`
    );
    const euroData = await eurRes.json();
    const dollarRes = await fetch(
      `https://api.getgeoapi.com/v2/currency/convert?api_key=${CURRENCY_API_KEY}&from=${curency2}&to=UAH&format=json`
    );
    const dollarData = await dollarRes.json();
    console.log({
      dollarRate: dollarData.rates.UAH.rate,
      euroRate: euroData.rates.UAH.rate,
    });
    return {
      dollarRate: dollarData.rates.UAH.rate,
      euroRate: euroData.rates.UAH.rate,
    };
  } catch (err) {
    console.error(`Couldn't fetch exchange rates`, err);
  }
};
