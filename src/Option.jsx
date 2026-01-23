const Option = ({ optValue, children }) => {
  return (
    <option
      value={optValue}
      hidden={children === "Select Option" ? true : false}
    >
      {children}
    </option>
  );
};
export default Option;
