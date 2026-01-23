const Input = ({ inpType, text, variation }) => {
  let inpClass;
  if (variation === "standard") inpClass = "input-standard";
  if (variation === "standard-mini") inpClass = "input-standard-mini";
  if (variation === "standard-max") inpClass = "input-standard-max";

  return <input type={inpType} placeholder={text} className={inpClass} />;
};
export default Input;
