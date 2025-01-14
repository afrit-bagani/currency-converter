import { useContext } from "react";
import { CurrencyConverterContext } from "../store/CurrencyConverterContextProvider";
import Loader from "./Loader";

const Result = () => {
  const { isLoading, inputElement, result, fromCurrencyCode, toCurrencyCode } =
    useContext(CurrencyConverterContext);

  return (
    <p className="show-converter-amount">
      {isLoading ? (
        <Loader />
      ) : (
        result &&
        `${
          inputElement.current.value
        } ${fromCurrencyCode.toUpperCase()} = ${result} ${toCurrencyCode.toUpperCase()}`
      )}
    </p>
  );
};

export default Result;
