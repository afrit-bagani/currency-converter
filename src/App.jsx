import Amount from "./components/Amount";
import Button from "./components/Button";
import CurrencyExchange from "./components/CurrencyExchange";
import Heading from "./components/Heading";
import Result from "./components/Result";
import CurrencyConverterContextProvider from "./store/CurrencyConverterContextProvider";

function App() {
  return (
    <CurrencyConverterContextProvider>
      <div className="main-container">
        <Heading></Heading>
        <Amount></Amount>
        <CurrencyExchange></CurrencyExchange>
        <Result></Result>
        <Button></Button>
      </div>
    </CurrencyConverterContextProvider>
  );
}

export default App;
