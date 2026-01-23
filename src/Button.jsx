const Button = ({ btnType, clickAction, children, variation }) => {
  const baseClass = "btn";
  let btnClass;
  if (variation === "standard-green") btnClass = "btn-standard-green";
  if (variation === "standard-red") btnClass = "btn-standard-red";
  return (
    <button type={btnType} className={`${baseClass} ${btnClass}`}>
      {children}
    </button>
  );
};
export default Button;
