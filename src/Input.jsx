const Input = ({ inpType, text, variation }) => {
  let inpClass;
  return <input type={inpType} placeholder={text} className={inpClass} />;
};
export default Input;
