import { useContext } from "react";
import { DataContext } from "../../../Context/Context";

const NoticePopUp = () => {
  const { setDisplayNoticePopup, noitceToDisaply } = useContext(DataContext);
  return (
    <div className="popup-notice">
      <div className="popup-content">
        <div className="notice-display-border">
          <h1>Notice</h1>
          <div>
            <h4>{noitceToDisaply.date}</h4>
          </div>
          <div>
            <h4>Subject: - {noitceToDisaply.notice}</h4>
            <p>{noitceToDisaply.desc}</p>
          </div>
          <button onClick={() => setDisplayNoticePopup(false)}>x</button>
        </div>
      </div>
    </div>
  );
};

export default NoticePopUp;
