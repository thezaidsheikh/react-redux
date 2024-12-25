import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

/**
 * The main application component.
 *
 * This component renders the app's UI.
 *
 * When no customer is logged in, it renders the <CreateCustomer /> component.
 * When a customer is logged in, it renders the <Customer /> component, the
 * <AccountOperations /> component, and the <BalanceDisplay /> component.
 *
 * @returns {React.ReactElement} The app's UI.
 */
function App() {
  const customer = useSelector((store) => store.customer);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customer.fullName === "" && (
        <>
          <CreateCustomer />
        </>
      )}
      {customer.fullName !== "" && (
        <>
          <Customer />
          <AccountOperations /> <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
