import { useContext } from "react";
import { IoMdSwap } from "react-icons/io";
import { CurrencyConverterContext } from "../store/CurrencyConverterContextProvider";

const CurrencyExchange = () => {
  const {
    countryCodeList,
    fromCurrency,
    toCurrency,
    handleFromCurrency,
    handleToCurrency,
  } = useContext(CurrencyConverterContext);

  return (
    <div className="currency-exchange-container">
      <div className="from-currency-container">
        <p>From</p>
        <div className="currency-selector">
          <img src={`https://flagsapi.com/${fromCurrency}/flat/64.png`} />
          <select
            name="from"
            id="from-currency"
            className="currency-dropdown"
            defaultValue="US"
            onChange={handleFromCurrency}
          >
            {countryCodeList.map(([code, country]) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className="swap">
        <IoMdSwap />
      </button>
      <div className="to-currency-container">
        <p>To</p>
        <div className="currency-selector">
          <img src={`https://flagsapi.com/${toCurrency}/flat/64.png`} />
          <select
            name="to"
            id="to-currency"
            className="currency-dropdown"
            defaultValue="IN"
            onChange={handleToCurrency}
          >
            {countryCodeList.map(([code, country]) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchange;
