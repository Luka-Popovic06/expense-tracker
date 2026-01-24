import { useState } from "react";
import { formFields, categories } from "./data.js";
import Input from "./Input";
import Option from "./Option.jsx";
import Button from "./Button.jsx";
import "./App.css";
//ubacujem impute iz data.js u formu i editujem if
//Implementiram React Routing
//napravim state koji ce da cuva sve te vrednosti iz inputa
function App() {
  return (
    <>
      <nav className="nav-container">
        <div className="user-container">
          <img src="avatar.417.png" alt="avatar" />
          <div>
            <p className="p-name">Luka</p>
            <p className="p-expenses">Your expenses</p>
          </div>
        </div>
        <ul className="li-container">
          <li>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
              View Transaction
            </a>
          </li>
          <li>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
                <path d="M18 12h.01" />
                <path d="M19 22v-6" />
                <path d="m22 19-3-3-3 3" />
                <path d="M6 12h.01" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              Incomes
            </a>
          </li>
          <li>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
                <path d="m16 19 3 3 3-3" />
                <path d="M18 12h.01" />
                <path d="M19 16v6" />
                <path d="M6 12h.01" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              Expenses
            </a>
          </li>
        </ul>
      </nav>
      <main className="main-container">
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total income: <span className="total">0 $</span>
        </h2>
        <div className="main-mini-container">
          <form>
            <div className="input-container">
              {formFields.incomeFields.map((input, index) => (
                <Input
                  key={index}
                  inpType={input.type}
                  variation={input.variation}
                  text={input.text}
                />
              ))}
            </div>
            <select>
              {categories.incomeCategories.map((category, index) => (
                <Option key={index} optValue={category.value}>
                  {category.text}
                </Option>
              ))}
            </select>
            <Button btnType={"submit"} variation={"standard-green"}>
              Add Income
            </Button>
          </form>
          <div className="list-box"></div>
        </div>
      </main>
    </>
  );
}

export default App;
