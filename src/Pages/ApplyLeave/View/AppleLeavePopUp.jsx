import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { DataContext } from "../../../Context/Context";

const AppleLeavePopUp = () => {
  const { setApplyLeavePopUp, selectedDate, reason, setReason } =
    useContext(DataContext);

  const handleApplyLeave = () => {
    // Handle the leave application logic here
    // You can use the selectedDate and reason state values
    // For example, make an API request to submit the leave application
    // and then close the pop-up
    setApplyLeavePopUp(false);
  };
  return (
    <div className="popup-emp-edit">
      <div className="popup-content">
        <div className="form-leave">
          <button
            className="leave-close-btn"
            onClick={() => setApplyLeavePopUp(false)}
          >
            <AiOutlineClose />
          </button>
          <h2 className="leave-head">Apply Leave</h2>
          <p className="leave-head">For Date: {selectedDate}</p>
          <textarea
            className="text-leave"
            placeholder="Reason for leave"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          <button className="btn-leave-apply" onClick={handleApplyLeave}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppleLeavePopUp;
