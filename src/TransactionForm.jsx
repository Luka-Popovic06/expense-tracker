import Input from "./Input";
import Option from "./Option.jsx";
import Button from "./Button.jsx";

const TransactionForm = ({ variation, fields, categories }) => {
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
        <form>
          <div className="input-container">
            {fields.map((input, index) => (
              <Input
                key={index}
                inpType={input.type}
                variation={input.variation}
                text={input.text}
              />
            ))}
          </div>
          <select>
            {categories.map((category, index) => (
              <Option key={index} optValue={category.value}>
                {category.text}
              </Option>
            ))}
          </select>
          <Button btnType={"submit"} variation={"standard"}>
            Add {text}
          </Button>
        </form>
        <div className="list-box"></div>
      </div>
    </>
  );
};
export default TransactionForm;
