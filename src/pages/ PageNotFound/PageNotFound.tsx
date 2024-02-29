import "./PageNotFound.css";
import { Signup } from "../../components/enum/enums";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>{Signup.PAGE_NOT_FOUND}</h1>
    </div>
  );
};

export default PageNotFound;
