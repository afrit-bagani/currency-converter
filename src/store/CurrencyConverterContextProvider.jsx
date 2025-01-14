import { createContext, useRef, useState } from "react";
import countryCode from "./countryCode";

export const CurrencyConverterContext = createContext({
  handleFromCurrency: () => {},
  handleToCurrency: () => {},
  handleButtonClick: () => {},
});
const CurrencyConverterContextProvider = ({ children }) => {
  const [countryCodeList, setCountryCodeList] = useState(
    Object.entries(countryCode)
  );
  const [fromCurrency, setFromCurrency] = useState("US");
  const [toCurrency, setToCurrency] = useState("IN");
  const [result, setResult] = useState("");
  const inputElement = useRef();
  const [fromCurrencyCode, setFromCurrencyCode] = useState();
  const [toCurrencyCode, setToCurrencyCode] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const findKeyByValue = (object, value) => {
    return Object.entries(object).find(([key, val]) => val === value)?.[0];
  };
  const handleFromCurrency = (event) => {
    setFromCurrency(event.target.value);
  };
  const handleToCurrency = (event) => {
    setToCurrency(event.target.value);
  };

  const handleButtonClick = () => {
    const fromCurrencyCode = findKeyByValue(
      countryCode,
      fromCurrency
    ).toLowerCase();
    setFromCurrencyCode(fromCurrencyCode);
    // to currency code
    const toCurrencyCode = findKeyByValue(
      countryCode,
      toCurrency
    ).toLowerCase();
    setToCurrencyCode(toCurrencyCode);

    let amount;
    if (inputElement.current) {
      amount = inputElement.current.value;
    } else {
      amount = "";
    }
    try {
      (async () => {
        setIsLoading(true);
        const response = await fetch(
          `https://2024-03-06.currency-api.pages.dev/v1/currencies/${fromCurrencyCode}.json`
        );
        setIsLoading(false);
        const data = await response.json();

        const tempResult =
          amount * data[fromCurrencyCode][toCurrencyCode].toFixed(2);
        setResult(tempResult);
      })();
    } catch (error) {
      console.log("An Error has been caught:", error);
    }
  };

  return (
    <CurrencyConverterContext.Provider
      value={{
        countryCodeList,
        fromCurrency,
        toCurrency,
        inputElement,
        handleFromCurrency,
        handleToCurrency,
        handleButtonClick,
        fromCurrencyCode,
        toCurrencyCode,
        result,
        isLoading,
      }}
    >
      {children}
    </CurrencyConverterContext.Provider>
  );
};

export default CurrencyConverterContextProvider;
