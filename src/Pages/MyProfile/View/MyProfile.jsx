import { useContext } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import profileImg from "../../../Assets/Images/profile_pic.jpg";
import { DataContext } from "../../../Context/Context";
import MyProjects from "./MyProjects";
import Layout from "../../../Components/Layout/Layout";
import Holidays from "./Holidays";
import Finance from "./Finance";

const MyProfile = () => {
  const {
    displayMyProjects,
    setDisplayEditEmployee,
    setDisplayEditBankDetails,
    setDisplayMyProjects,
    holidays,
    setHolidays,
    finance,
    setFinance,
  } = useContext(DataContext);
  return (
    <Layout>
      {displayMyProjects ? (
        <MyProjects />
      ) : holidays ? (
        <Holidays />
      ) : finance ? (
        <Finance />
      ) : (
        <div className="employee-container">
          <div className="emp-cont-1">
            <div className="employee-details">
              <div className="heading-emp">
                <h3>Employee Details</h3>

                <button onClick={() => setDisplayEditEmployee(true)}>
                  Edit <AiFillCaretDown />
                </button>
              </div>
              <div className="emp-data">
                <h3>Employee ID</h3>
                <h3>231-231-2312</h3>
              </div>
              <div className="emp-data">
                <h3>Mobile No</h3>
                <h3>+91 9876543210</h3>
              </div>
              <div className="emp-data">
                <h3>Personal Email ID</h3>
                <h3>abc@gmail.com</h3>
              </div>
            </div>
            <div className="employee-bank-details">
              <div className="heading-bank">
                <h3>Bank Details</h3>
                <button onClick={() => setDisplayEditBankDetails(true)}>
                  Edit <AiFillCaretDown />
                </button>
              </div>
              <div className="emp-data">
                <h3>Full Name</h3>
                <h3>231-231-2312</h3>
              </div>
              <div className="emp-data">
                <h3>Account No</h3>
                <h3>231-231-2312</h3>
              </div>
              <div className="emp-data">
                <h3>IFSC Code</h3>
                <h3>231-231-2312</h3>
              </div>
              <div className="emp-data">
                <h3>Bank Name</h3>
                <h3>231-231-2312</h3>
              </div>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-card-cont">
              <div className="upper-profile-card">
                <div className="profile-theme-back"></div>
                <div className="profile-photo">
                  <div
                    className="profile-circular-photo"
                    style={{
                      background: `url(${profileImg})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
                <div className="profile-name">
                  <h3>Ankur Saini</h3>
                </div>
              </div>
              <div className="lower-profile-card">
                <div className="profile-details-bg"></div>
                <div className="profile-card-details">
                  <div className="profile-data">
                    <h3>D.O.B</h3>
                    <h3>01/01/1990</h3>
                  </div>
                  <div className="profile-data">
                    <h3>Department</h3>
                    <h3>Development</h3>
                  </div>
                  <div className="profile-data">
                    <h3>Work Email ID</h3>
                    <h3>email@firm.com</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="emp-navigation">
            <div className="emp-projects">
              <button onClick={() => setDisplayMyProjects(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="url(#myGradient)"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  />
                </svg>
                <h3>Project Reviews</h3>
              </button>
            </div>
            <div className="emp-achievement">
              <button onClick={() => setHolidays(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="url(#myGradient)"
                    d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"
                  />
                </svg>

                <h3>Yearly Holidays</h3>
              </button>
            </div>
            <div className="emp-finance">
              <button onClick={() => setFinance(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="url(#myGradient)"
                    d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"
                  />
                </svg>
                <h3>My Finance</h3>
              </button>
            </div>
            <div className="emp-leave">
              <div className="paid-leave">
                <h3 className="leave-type">Paid Leave</h3>
                <div className="leave-numeric">
                  <h3>05</h3>
                </div>
              </div>
              <hr />
              <div className="unpaid-leave">
                <h3 className="leave-type">Unpaid Leave</h3>
                <div className="leave-numeric">
                  <h3>05</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MyProfile;
