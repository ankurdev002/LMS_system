import { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import axios from "axios";
import { saveAs } from "file-saver";

const Finance = () => {
  const { setFinance } = useContext(DataContext);

  const salaryList = [
    {
      id: 1,
      empid: "EMP001",
      date: "September 2023",
      // eslint-disable-next-line no-undef
      slip: process.env.ASSET_URL,
    },
    {
      id: 2,
      empid: "EMP001",
      date: "October 2023",
      // eslint-disable-next-line no-undef
      slip: process.env.ASSET_URL,
    },
    {
      id: 3,
      empid: "EMP001",
      date: "November 2023",
      // eslint-disable-next-line no-undef
      slip: process.env.ASSET_URL,
    },
  ];

  const handleDownload = async (fileUrl) => {
    try {
      const response = await axios.get(fileUrl, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      saveAs(blob, "slip.pdf");
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div className="myprofile-mytask">
      <div className="btn-back-container">
        <button onClick={() => setFinance(false)}>
          My Profile &lt; Finance
        </button>
      </div>
      <div className="main-myreviews-container">
        <h1>Finance</h1>
        <div className="salary-list">
          <ul className="headers-holidays">
            {salaryList.length > 0 &&
              Object.keys(salaryList[0]).map((header) => (
                <li className="content-holidays-cell-header" key={header}>
                  {header}
                </li>
              ))}
          </ul>
          {salaryList.map((item) => (
            <ul key={item.id} className="header-content-holidays-details">
              <li className="content-holidays-cell">{item.id}</li>
              <li className="content-holidays-cell">{item.empid}</li>
              <li className="content-holidays-cell">{item.date}</li>
              <li className="content-holidays-cell">
                <button onClick={() => handleDownload(item.slip)}>
                  Download Slip
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="url(#myGradient)"
                      d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Finance;
