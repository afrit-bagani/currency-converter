import { useContext } from "react";
import { CurrencyConverterContext } from "../store/CurrencyConverterContextProvider";

const Button = () => {
  const { handleButtonClick } = useContext(CurrencyConverterContext);
  return (
    <button className="btn btn-primary get-rate" onClick={handleButtonClick}>
      Get Exchange Rate
    </button>
  );
};

export default Button;
