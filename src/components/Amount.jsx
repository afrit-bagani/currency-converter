import { useContext } from "react";
import { CurrencyConverterContext } from "../store/CurrencyConverterContextProvider";

const Amount = () => {
  const { inputElement } = useContext(CurrencyConverterContext);

  return (
    <div className="amount-container">
      <p>Enter Amount:</p>
      <input type="number" ref={inputElement} />
    </div>
  );
};

export default Amount;
