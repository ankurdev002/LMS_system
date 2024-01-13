import { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import { IoIosArrowBack } from "react-icons/io";

const MyResouces = () => {
  const { setDisplayMyResources } = useContext(DataContext);
  return (
    <div className="resources-container">
      <div className="resoucres-content">
        <div className="navigations-back">
          <button onClick={() => setDisplayMyResources(false)}>
            Home <IoIosArrowBack /> My Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyResouces;
