import { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import leftarrowimg from "../../../Assets/Images/leftarrow.png";
import rightarrowimg from "../../../Assets/Images/rightarrow.png";

const DateStatus = () => {
  const {
    calendarDates,
    currentMonth,
    goToNextMonth,
    goToPrevMonth,
    handleDateClick,
    renderWeekdays,
  } = useContext(DataContext);

  return (
    <div className="calendar-journal-container">
      <div className="month-nav">
        <button onClick={goToPrevMonth}>
          <img src={leftarrowimg} alt="leftarrow" />
        </button>
        <h1>{currentMonth.format("MMMM YYYY")}</h1>
        <button onClick={goToNextMonth}>
          <img src={rightarrowimg} alt="rightarrow" />
        </button>
      </div>
      <div className="weekdays">{renderWeekdays()}</div>
      <div className="calendar-journal">
        {calendarDates.map((dateObj) => (
          <div
            onClick={() =>
              dateObj.isSunday || dateObj.isSaturaday
                ? alert("Weekend OFF")
                : handleDateClick(dateObj)
            }
            key={dateObj.date}
            className={`day ${dateObj.nextMonthColor ? "other-month" : ""} ${
              dateObj.isSunday ? "sunday" : ""
            } ${dateObj.isSaturaday ? "sunday" : ""} ${
              dateObj.punchIn
                ? "green"
                : dateObj.statusColor == "green" && dateObj.punchIn == ""
                ? ""
                : dateObj.statusColor
            }`}
          >
            {dateObj.date.split("-")[0]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateStatus;
