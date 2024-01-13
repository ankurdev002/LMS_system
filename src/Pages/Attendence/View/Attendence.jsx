import { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import { AiOutlineClose } from "react-icons/ai";

const Attendence = () => {
  const { datePop, setDisplayAttendence } = useContext(DataContext);
  return (
    <div className="popup-emp-edit-attendence">
      <div className="popup-content-attendence">
        <div className="form">
          <button
            className="close-btn-edit"
            onClick={() => setDisplayAttendence(false)}
          >
            <AiOutlineClose />
          </button>

          <div className="att-cont">
            {Object.keys(datePop).map((item) => {
              if (
                item !== "isSunday" &&
                item !== "isSaturaday" &&
                item !== "statusColor" &&
                item !== "nextMonthColor"
              ) {
                return (
                  <div className="att-render" key={item}>
                    <span>{item}</span>
                    <span>:</span>
                    <span>{datePop[item]}</span>
                  </div>
                );
              }
              return null; // To exclude the items you don't want to display
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendence;
