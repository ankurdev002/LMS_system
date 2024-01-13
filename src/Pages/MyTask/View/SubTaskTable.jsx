// SubTaskTable.js
/* eslint-disable react/prop-types */

import { IoMdReturnRight } from "react-icons/io";

const SubTaskTable = ({ subtasks }) => {
  return (
    <div className="subtask-container">
      <div className="subtask-header">
        <div>Subtask Name</div>
        <div>Checklist</div>
        <div>Time Estimated</div>
        <div>Timer</div>
        <div>Start Date</div>
        <div>End Date</div>
        <div>Completed In</div>
        <div>Status</div>
      </div>
      {subtasks.map((subtask, index) => (
        <div className="subtask-item" key={index}>
          <div className="drop-down-arrow">
            <IoMdReturnRight />
          </div>
          <ul>
            <li>{subtask.name}</li>
            <li> {subtask.checklist.length}</li>
            <li> {subtask.timeestimated}</li>
            <li> {subtask.timer}</li>
            <li>{subtask.startDate}</li>
            <li>{subtask.endDate}</li>
            <li> {subtask.completedIn}</li>
            <li>{subtask.status}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SubTaskTable;
