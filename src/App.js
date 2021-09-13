import "./styles.css";
import { Header } from "./components/Header.js";
import { Balance } from "./components/Balance.js";
import { IncomeExpenses } from "./components/IncomeExpenses.js";
import { TransactionList } from "./components/TransactionList.js";

import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}
export default App;
