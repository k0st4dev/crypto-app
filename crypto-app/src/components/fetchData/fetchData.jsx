import axios from "axios";

export function fetchData(fromCurrency, toCurrency) {
  const options = {
    method: "GET",
    url: "https://alpha-vantage.p.rapidapi.com/query",
    params: {
      from_currency: fromCurrency,
      function: "CURRENCY_EXCHANGE_RATE",
      to_currency: toCurrency,
    },
    headers: {
      "X-RapidAPI-Key": "5d60306e1dmsh28192dad598fcc6p1888d4jsn799fdd090095",
      "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
    },
  };

  return axios.request(options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
