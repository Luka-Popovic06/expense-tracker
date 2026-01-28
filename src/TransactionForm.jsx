import Input from "./Input";
import Option from "./Option.jsx";
import Button from "./Button.jsx";

const TransactionForm = ({
  variation,
  fields,
  categories,
  setValue,
  setCategory,
  addTransaction,
  reset,
  transactionList,
  selectedCategory,
}) => {
  let text;
  if (variation === "incomes") text = "Incomes";
  if (variation === "expenses") text = "Expenses";

  return (
    <>
      <h1 className="h1">{text}</h1>
      <h2>
        Total {text}: <span className="total">0 $</span>
      </h2>
      <div className="main-mini-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTransaction();
            reset();
          }}
        >
          <div className="input-container">
            {fields.map((input, index) => (
              <Input
                key={index}
                inpType={input.type}
                value={input.value}
                variation={input.variation}
                text={input.text}
                action={(value) => setValue(value, input.id)}
              />
            ))}
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories?.map((category, index) => (
              <Option key={index} optValue={category.value}>
                {category.text}
              </Option>
            ))}
          </select>
          <Button btnType={"submit"} variation={"standard"}>
            Add {text}
          </Button>
        </form>
        <div className="list-box">
          <div className="info-box">
            <p>Title</p>
            <p>Amount</p>
            <p>Enter A Date</p>
            <p>Reference</p>
            <p>Category</p>
          </div>
          <ul>
            {transactionList.map((transaction, index) => (
              <li key={index}>
                {transaction.map((obj, index) => (
                  <p
                    key={index}
                    className={
                      obj.name === "Amount" && variation === "incomes"
                        ? "p-green"
                        : obj.name === "Amount" && variation === "expenses"
                          ? "p-red"
                          : ""
                    }
                  >
                    {obj.name === "Amount" ? `${obj.value}$` : obj.value}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default TransactionForm;
