import { useState } from "react";
import startDateImg from "../../Assets/Images/startdate.png";

const Calendar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleImageClick = () => {
    setShowCalendar(true);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  //   const handleMonthChange = (event) => {
  //     setCurrentMonth(parseInt(event.target.value));
  //   };
  const handleMonthChange = (event) => {
    const newMonth = parseInt(event.target.value);
    let newYear = currentYear;

    if (currentMonth === 11 && newMonth === 0) {
      newYear++;
    } else if (currentMonth === 0 && newMonth === 11) {
      newYear--;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleYearChange = (event) => {
    setCurrentYear(parseInt(event.target.value));
  };
  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const totalDaysInMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const weeks = [];
    let days = [];

    // Render weekdays
    const weekdayLabels = weekdays.map((weekday) => (
      <div key={weekday} className="weekday">
        {weekday}
      </div>
    ));

    weeks.push(
      <div key="weekdays" className="weekdays">
        {weekdayLabels}
      </div>
    );

    // Fill the days of the current month
    for (let i = 1; i <= totalDaysInMonth; i++) {
      const currentDate = new Date(currentYear, currentMonth, i);
      const isCurrentMonth = currentDate.getMonth() === currentMonth;
      const isSelected =
        selectedDate &&
        currentDate.toDateString() === selectedDate.toDateString();

      days.push(
        <div
          key={`current-${i}`}
          className={`day ${isCurrentMonth ? "current-month" : "other-month"} ${
            isSelected ? "selected" : ""
          }`}
          onClick={() => handleDateSelect(currentDate)}
        >
          {i}
        </div>
      );
    }

    // Add empty placeholder divs for days of the previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.unshift(<div key={`prev-${i}`} className="day other-month" />);
    }

    // Add empty placeholder divs for days of the next month
    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      for (let i = 0; i < remainingDays; i++) {
        days.push(<div key={`next-${i}`} className="day other-month" />);
      }
    }

    // Create week rows
    while (days.length > 0) {
      const weekDays = days.splice(0, 7);
      weeks.push(
        <div key={`week-${weeks.length}`} className="week">
          {weekDays}
        </div>
      );
    }

    return (
      <div className="calendar">
        <div className="header">
          <button
            className="prev-btn"
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
              } else {
                setCurrentMonth(currentMonth - 1);
              }
            }}
          >
            &lt;
          </button>
          <select
            className="month-select"
            value={currentMonth}
            onChange={handleMonthChange}
          >
            <option value={0}>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </select>
          <select
            className="year-select"
            value={currentYear}
            onChange={handleYearChange}
          >
            {renderYearOptions()}
          </select>
          <button
            className="next-btn"
            onClick={() => {
              if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
              } else {
                setCurrentMonth(currentMonth + 1);
              }
            }}
          >
            &gt;
          </button>
          <button className="close-btn" onClick={() => setShowCalendar(false)}>
            Close
          </button>
        </div>
        <div className="calendar-content">{weeks}</div>
      </div>
    );
  };

  const renderYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1970; // Specify the starting year
    const endYear = currentYear + 10; // Specify the ending year

    const options = [];

    for (let year = startYear; year <= endYear; year++) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return options;
  };

  const formatSelectedDate = () => {
    if (selectedDate) {
      const day = selectedDate.getDate();
      const month = selectedDate.getMonth() + 1;
      const year = selectedDate.getFullYear();
      return `${day}/${month}/${year}`;
    }
    return "";
  };

  return (
    <div className="start-date-main-div">
      <img src={startDateImg} alt="Calendar" onClick={handleImageClick} />
      {showCalendar && renderCalendar()}
      {selectedDate && <p>{formatSelectedDate()}</p>}
    </div>
  );
};

export default Calendar;
