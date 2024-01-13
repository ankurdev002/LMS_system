import { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import Achievement from "../../../Components/Slider/Achievement";

const MyProjects = () => {
  const { setDisplayMyProjects } = useContext(DataContext);
  return (
    <div className="myprofile-mytask">
      <div className="btn-back-container">
        <button onClick={() => setDisplayMyProjects(false)}>
          My Profile &lt; Project Reviews
        </button>
      </div>
      <div className="main-myreviews-container">
        <h1>Project Reviews</h1>
        <div className="slider-container-achievement">
          <Achievement />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
