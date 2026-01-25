const Transaction = () => {
  return (
    <>
      <h1 className="h1">All transacrtions</h1>
      <div className="all-transacrtions-list"></div>
      <div className="transaction-box">
        <div>
          <p>Total Income</p>
          <p className="total-income">0$</p>
        </div>
        <div>
          <p>Total Expense</p>
          <p className="total-expense">0$</p>
        </div>
        <div>
          <p>Total Balance</p>
          <p className="total-balance">0$</p>
        </div>
      </div>
    </>
  );
};
export default Transaction;
