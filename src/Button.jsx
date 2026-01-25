const Button = ({ btnType, clickAction, children, variation }) => {
  const baseClass = "btn";
  let btnClass;
  if (variation === "standard") btnClass = "btn-standard";

  return (
    <button type={btnType} className={`${baseClass} ${btnClass}`}>
      {children}
    </button>
  );
};
export default Button;
