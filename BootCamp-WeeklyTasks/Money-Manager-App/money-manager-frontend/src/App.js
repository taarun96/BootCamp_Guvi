import '../src/styles/App.css';
import { NavBar } from './components/NavBar.js';
import { Header } from './components/Header.js';
import { Balance } from './components/Balance.js';
import { HistoryList } from './components/HistoryList.js';
import { ToggleAddExpenditure } from './components/ToggleAddExpenditure.js';
import { ToggleIncomeExpenses } from './components/ToggleIncomeExpenses.js';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
      <GlobalProvider>
        <NavBar />
        <div className="container">
          <div className="jumbotron text-center bg-white">
            <Header />
            <Balance />
            <ToggleIncomeExpenses />

            <HistoryList />
            <ToggleAddExpenditure />
          </div>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
