import ReactModal from "react-modal";

export const customStyles: ReactModal.Styles = {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0, 0, 0, 0.5)",
      zIndex: 99999,
      backdropFilter: "blur(5px)",
    },
    content: {
      position: "relative",
      width: "420px",
      inset: "50% auto auto 50%",
      transform: "translate(-50%, -50%)",
      zIndex: 100,
      borderRadius: "12px",
      transition: "height 0.25s ease 0s",
      overflow: "visible",
      boxSizing: "border-box",
      border: "none",
      background: "rgb(0, 0, 0)",
      boxShadow: "rgba(102, 98, 96, 0.25) 0px 48px 100px 0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      flexDirection: "column",
      outline: "0px",
    },
  };
  