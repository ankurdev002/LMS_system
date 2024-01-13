import Layout from "../../../Components/Layout/Layout";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import leftarrowimg from "../../../Assets/Images/leftarrow.png";
import rightarrowimg from "../../../Assets/Images/rightarrow.png";
import { DataContext } from "../../../Context/Context";

const ApplyLeavePage = () => {
  const { setApplyLeavePopUp, setSelectedDate } = useContext(DataContext);
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [calendarDates, setCalendarDates] = useState([]);

  useEffect(() => {
    setCalendarDates(generateCalendarDates());
    //eslint-disable-next-line
  }, [currentMonth]);

  const handleDateClick = (date) => {
    // Check if the day is not Sunday (day 0) and not Saturday (day 6)
    setSelectedDate(date);
    setApplyLeavePopUp(true);
  };

  const goToNextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, "month"));
  };

  const goToPrevMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, "month"));
  };

  // Function to determine the status of a date (green, red, blue, orange)
  const getStatusColor = () => {
    // Add other conditions for different status (e.g., unpaid leave, paid leave, etc.) if needed
    // ...

    return "white"; // Default status color (no special status for this date)
  };

  const generateCalendarDates = () => {
    const startDate = currentMonth.clone().startOf("month").startOf("week");
    const endDate = currentMonth.clone().endOf("month").endOf("week");
    const calendar = [];

    let currentDate = startDate.clone();
    while (currentDate.isSameOrBefore(endDate)) {
      const isSunday = currentDate.day() === 0;
      const isSaturaday = currentDate.day() === 6;
      const statusColor = getStatusColor(currentDate);
      const nextMonthColor = currentDate.month() !== currentMonth.month(); // Get the status color for the current date

      calendar.push({
        date: currentDate.format("D-M-Y"),
        isSunday,
        isSaturaday,
        statusColor,
        nextMonthColor,
      });
      currentDate.add(1, "day");
    }

    return calendar;
  };

  const renderWeekdays = () => {
    const weekdays = moment.weekdaysShort();

    return weekdays.map((weekday) => (
      <div key={weekday} className="weekday">
        {weekday}
      </div>
    ));
  };
  return (
    <Layout>
      <div className="date-journal-container">
        <div className="date-journal-content">
          <div className="main-calender-container-datejournal">
            <div className="calendar-journal-container-2">
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
                        : handleDateClick(dateObj.date)
                    }
                    key={dateObj.date}
                    className={`day ${
                      dateObj.nextMonthColor ? "other-month" : ""
                    } ${dateObj.isSunday ? "sunday" : ""} ${
                      dateObj.isSaturaday ? "sunday" : ""
                    } ${dateObj.statusColor}`}
                  >
                    {dateObj.date.split("-")[0]}
                  </div>
                ))}
                <div className="cal-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApplyLeavePage;
