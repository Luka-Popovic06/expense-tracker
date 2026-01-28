const Input = ({ inpType, text, variation, action, value }) => {
  let inpClass;
  if (variation === "standard") inpClass = "input-standard";
  if (variation === "standard-mini") inpClass = "input-standard-mini";
  if (variation === "standard-max") inpClass = "input-standard-max";

  return (
    <input
      value={value}
      type={inpType}
      placeholder={text}
      className={inpClass}
      onChange={(e) => action(e.target.value)}
      required
    />
  );
};
export default Input;
