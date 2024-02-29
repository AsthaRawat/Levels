export const selectStyles = {
  placeholder: (base: any) => ({
    ...base,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    transition: "top 0.2s, font-size 0.2s",
    fontSize: "14px",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  control: (provided: any) => ({
    ...provided,
    color: "#fff",
    borderRadius: "6px",
    border: 0,
    height: "50px",
    backgroundColor: "#1e1f2a",
    padding: "0px 17px 0px 17px",
    boxShadow: "none"
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#3a3b47" : "#1e1f2a",
    color: state.isSelected ? "#fff" : "#ccc",
    fontSize: "14px",
    margin: "10px",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "#fff",
    fontSize: "14px",
  }),
  input: (provided: any) => ({
    ...provided,
    color: "#fff",
  }),
};
