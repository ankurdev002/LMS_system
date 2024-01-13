import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DataContext } from "../../../Context/Context";
import NoticePopUp from "../../Notice/View/NoticePopUp";
import Sidebar from "../../../Components/Sidebar/SideBarPanel/Sidebar";
import EditBankDetails from "../../MyProfile/View/EditBankDetails";
import EditEmployeePopUp from "../../MyProfile/View/EditEmployeePopUp";
import AppleLeavePopUp from "../../ApplyLeave/View/AppleLeavePopUp";
import Attendence from "../../Attendence/View/Attendence";

const Dashboard = () => {
  const {
    displayNoticePopup,
    displayEditBankDetails,
    displayEditEmployee,
    ApplyLeavePopUp,
    displayAttendence,
  } = useContext(DataContext);
  return (
    <div className="dashboard">
      <Sidebar />
      <Outlet />
      {displayNoticePopup && <NoticePopUp />}
      {displayEditEmployee && <EditEmployeePopUp />}
      {displayEditBankDetails && <EditBankDetails />}
      {ApplyLeavePopUp && <AppleLeavePopUp />}
      {displayAttendence && <Attendence />}
    </div>
  );
};

export default Dashboard;
