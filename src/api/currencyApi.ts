import { CURRENCY_API_KEY, CURRENCY_API_URL } from '../config';
import { Currency } from '../types/appTypes';

export const fetchExchangeRate = async (
  curencyFrom: Currency,
  curencyTo: Currency
): Promise<string | undefined> => {
  try {
    const response = await fetch(
      `${CURRENCY_API_URL}?api_key=${CURRENCY_API_KEY}&from=${curencyFrom}&to=${curencyTo}&format=json`
    );
    const data = await response.json();
    return data.rates[curencyTo].rate;
  } catch (err) {
    console.error(`Couldn't fetch exchange rates`, err);
    throw err;
  }
};

// export const fetchExchangeAmount = async (
//   curencyFrom: Currency,
//   curencyTo: Currency,
//   amount: string,
//   ac: AbortController
// ) => {
//   try {
//     const signal = ac.signal;
//     const response = await fetch(
//       `${CURRENCY_API_URL}?api_key=${CURRENCY_API_KEY}&from=${curencyFrom}&to=${curencyTo}&amount=${amount}&format=json`,
//       { signal }
//     );
//     const data = await response.json();
//     const res = data.rates[curencyTo].rate_for_amount;
//     return res;
//   } catch (err) {
//     console.log(`Couldn't convert to ${curencyTo}`, err);
//     throw err;
//   }
// };
