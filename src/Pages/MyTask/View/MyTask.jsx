import { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import { IoIosArrowBack } from "react-icons/io";
import Table from "./Table";
import MainTaskAddSubTask from "./MainTaskAddSubTask";
import TableContext from "./TableContext";

const MyTask = () => {
  const { disaplyMainTaskPage, setDisplayMyTask } = useContext(DataContext);
  return (
    <TableContext>
      <div className="my-task-container">
        {disaplyMainTaskPage ? (
          <MainTaskAddSubTask />
        ) : (
          <div className="my-task-content">
            <div className="navigations-back">
              <button onClick={() => setDisplayMyTask(false)}>
                Home <IoIosArrowBack /> MyTask
              </button>
            </div>
            <div className="my-task-details-container">
              <div className="upper-task-details">
                <h3>
                  <span>Project Name: </span>
                  <span>LMS Development</span>
                </h3>
                <h3>
                  <span>Due Date: </span>
                  <span>3rd July ,2023</span>
                </h3>
              </div>
              <div className="lower-task-details">
                <h3>
                  <span>Project Type: </span>
                  <span>Web Development</span>
                </h3>
              </div>
            </div>
            <div className="table-container">
              <Table />
            </div>
          </div>
        )}
      </div>
    </TableContext>
  );
};

export default MyTask;
