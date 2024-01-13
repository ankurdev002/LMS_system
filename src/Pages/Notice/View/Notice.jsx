import { useContext, useEffect } from "react";
import { DataContext } from "../../../Context/Context";
import { IoIosArrowBack } from "react-icons/io";

const Notice = () => {
  const noticeAll = [
    {
      id: 1,
      date: "2023-11-07",
      notice: "Notice 1",
      desc: "This is a sample description 1.",
      isRead: false,
    },
    {
      id: 2,
      date: "2023-11-06",
      notice: "Notice 2",
      desc: "This is a sample description 2.",
      isRead: false,
    },
    {
      id: 3,
      date: "2023-11-05",
      notice: "Notice 3",
      desc: "This is a sample description 3.",
      isRead: false,
    },
    {
      id: 4,
      date: "2023-11-04",
      notice: "Notice 4",
      desc: "This is a sample description 4.",
      isRead: false,
    },
    {
      id: 5,
      date: "2023-11-03",
      notice: "Notice 5",
      desc: "This is a sample description 5.",
      isRead: false,
    },
    {
      id: 6,
      date: "2023-11-02",
      notice: "Notice 6",
      desc: "This is a sample description 6.",
      isRead: false,
    },
  ];
  const {
    setDisplayNotice,
    setDisplayNoticePopup,
    setNoticeToDisplay,
    notices,
    setNotice,
    markNoticeAsRead,
  } = useContext(DataContext);

  useEffect(() => {
    setNotice(noticeAll);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="notice-container">
      <div className="notice-content">
        <div className="navigations-back">
          <button onClick={() => setDisplayNotice(false)}>
            Home <IoIosArrowBack /> Notice
          </button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Notice</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {notices.length > 0 &&
                notices.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <span>{item.date}</span>
                      <span>{item.notice}</span>
                      <button
                        onClick={() => {
                          setDisplayNoticePopup(true);
                          setNoticeToDisplay(item);
                          markNoticeAsRead(item.id);
                        }}
                      >
                        !
                      </button>
                    </td>
                    <td className={`svg-icon ${item.isRead ? "is-read" : ""}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
                      </svg>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Notice;
