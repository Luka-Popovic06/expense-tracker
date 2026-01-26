const Input = ({ inpType, text, variation, action }) => {
  let inpClass;
  if (variation === "standard") inpClass = "input-standard";
  if (variation === "standard-mini") inpClass = "input-standard-mini";
  if (variation === "standard-max") inpClass = "input-standard-max";

  return (
    <input
      type={inpType}
      placeholder={text}
      className={inpClass}
      onChange={(e) => action(e.target.value)}
    />
  );
};
export default Input;
