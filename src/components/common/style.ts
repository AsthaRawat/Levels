export const selectStyles = {
  placeholder: (base: any, state: any) => ({
    ...base,
    position: "absolute",
    top: "50%", // Center vertically
    transform: "translateY(-50%)", // Translate up by half of the height
    transition: "top 0.2s, font-size 0.2s",
    fontSize: "14px",
  }),
  indicatorSeparator: () => ({display:'none'}),
  control: (provided: any, state: any) => ({
    ...provided,
    color: "#fff",
    borderRadius: "6px",
    border: "none",
    height: "50px",
    backgroundColor: "#1e1f2a",
    padding: "0px 17px 0px 17px",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#3a3b47" : "#1e1f2a",
    color: state.isSelected ? "#fff" : "#ccc",
    fontSize: "14px",
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: "#fff",
    fontSize: "14px",
  }),
  input: (provided: any, state: any) => ({
    ...provided,
    color: "#fff",
  }),
};
