import { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./AccountReducer";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const dispatch = useDispatch();

  /**
   * Handles a user's deposit to their account.
   *
   * This function is called when the user clicks the "Deposit" button in the
   * account operations UI. It checks that the deposit amount is valid, then
   * dispatches a `deposit` action to the Redux store to update the user's
   * account balance.
   *
   * @param {number} depositAmount - The amount the user wants to deposit.
   * @param {string} currency - The currency of the deposit.
   */
  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
  }

  /**
   * Handles a user's withdrawal from their account.
   *
   * This function is called when the user clicks the "Withdraw" button in the
   * account operations UI. It checks that the withdrawal amount is valid, then
   * dispatches a `withdraw` action to the Redux store to update the user's
   * account balance.
   *
   * @param {number} withdrawalAmount - The amount the user wants to withdraw.
   */
  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  /**
   * Handles a user's loan request.
   *
   * This function is called when the user clicks the "Request loan" button in
   * the account operations UI. It checks that the loan amount and purpose are
   * valid, then dispatches a `requestLoan` action to the Redux store to update
   * the user's account balance and loan info.
   *
   * @param {number} loanAmount - The amount the user wants to borrow.
   * @param {string} loanPurpose - The purpose of the loan.
   */
  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input type="number" value={depositAmount} onChange={(e) => setDepositAmount(+e.target.value)} />
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>Deposit {depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input type="number" value={withdrawalAmount} onChange={(e) => setWithdrawalAmount(+e.target.value)} />
          <button onClick={handleWithdrawal}>Withdraw {withdrawalAmount}</button>
        </div>

        <div>
          <label>Request loan</label>
          <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(+e.target.value)} placeholder="Loan amount" />
          <input value={loanPurpose} onChange={(e) => setLoanPurpose(e.target.value)} placeholder="Loan purpose" />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        <div>
          <span>Pay back $X</span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
