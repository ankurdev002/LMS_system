/* eslint-disable react/prop-types */
import moment from "moment";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const Context = ({ children }) => {
  const [displayAttendence, setDisplayAttendence] = useState(false);
  const [displayNoticePopup, setDisplayNoticePopup] = useState(false);
  const [displayNotice, setDisplayNotice] = useState(false);
  const [displayMyTask, setDisplayMyTask] = useState(false);
  const [displayMyResources, setDisplayMyResources] = useState(false);
  const [displayDateJournal, setDisplayDateJournal] = useState(false);
  const [displayEditEmployee, setDisplayEditEmployee] = useState(false);
  const [displayEditBankDetails, setDisplayEditBankDetails] = useState(false);
  const [displayMyProjects, setDisplayMyProjects] = useState(false);
  const [disaplyMainTaskPage, setDisplayMainTaskPage] = useState(false);
  const [ApplyLeave, setApplyLeave] = useState(false);
  const [ApplyLeavePopUp, setApplyLeavePopUp] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [reason, setReason] = useState("");
  const [holidays, setHolidays] = useState(false);
  const [finance, setFinance] = useState(false);

  // message state
  const [response, setResponse] = useState([
    {
      message: "Welcome to chat of employee management system...",
      timestamp: new Date(),
    },
  ]);

  // notice states
  const [notices, setNotice] = useState([]);
  const [noitceToDisaply, setNoticeToDisplay] = useState({});

  const [selectedItem, setSelectedItem] = useState(null);
  const [
    selectedItemSubtaskTimeEstimation,
    setSelectedItemSubtaskTimeEstimation,
  ] = useState(null);

  // attendence
  const [calendarDates, setCalendarDates] = useState([]);
  const [datePop, setDatePop] = useState({});
  const [currentMonth, setCurrentMonth] = useState(moment());

  //modal
  const [showModal, setShowModal] = useState(false);
  const [modalValue, setModalValue] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const saveModalValue = () => {
    // Handle saving the modal value
    closeModal();
  };

  const handleInputChange = (e) => {
    setModalValue(e.target.value);
  };

  // subtask modal time estimation
  const [showModalSubtask, setShowModalSubtask] = useState(false);
  const [modalValueSubtask, setModalValueSubtask] = useState("");

  const openModalSubtask = () => {
    setShowModalSubtask(true);
  };

  const closeModalSubtask = () => {
    setShowModalSubtask(false);
  };

  const saveModalValueSubtask = () => {
    // Handle saving the modal value
    closeModalSubtask();
  };

  const handleInputChangeSubtask = (e) => {
    setModalValueSubtask(e.target.value);
  };

  const unreadNotices = notices.filter((notice) => !notice.isRead);
  const unreadNoticeCount = unreadNotices.length;

  const markNoticeAsRead = (id) => {
    const updatedNotices = notices.map((notice) => {
      if (notice.id === id && !notice.isRead) {
        return { ...notice, isRead: true };
      }
      return notice;
    });

    setNotice(updatedNotices);
  };

  const goToNextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, "month"));
  };

  const goToPrevMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, "month"));
  };

  // Function to determine the status of a date (green, red, blue, orange)
  const getStatusColor = (date) => {
    const lateToWorkDates = [10, 11, 12]; // Add the day numbers for which the person was late to work
    const paidLeaves = [19, 20, 21];
    const unpaidLeaves = [22, 26];
    const present = [2, 3, 4, 5, 6, 7];
    const dayOfMonth = date.format("D") - 1;
    if (lateToWorkDates.includes(dayOfMonth + 1)) {
      return "yellow"; // The person was late to work on this date
    }

    if (paidLeaves.includes(dayOfMonth + 1)) {
      return "blue"; // The person was late to work on this date
    }

    if (unpaidLeaves.includes(dayOfMonth + 1)) {
      return "red"; // The person was late to work on this date
    }

    if (present.includes(dayOfMonth + 1)) {
      return "green"; // The person was late to work on this date
    }

    // Add other conditions for different status (e.g., unpaid leave, paid leave, etc.) if needed
    // ...

    return "green"; // Default status color (no special status for this date)
  };

  const renderCalendar = () => {
    const startDate = currentMonth.clone().startOf("month").startOf("week");
    const endDate = currentMonth.clone().endOf("month").endOf("week");
    const calendar = [];

    let currentDate = startDate.clone();
    while (currentDate.isSameOrBefore(endDate)) {
      const isSunday = currentDate.day() === 0;
      const isSaturaday = currentDate.day() === 6;
      const statusColor = getStatusColor(currentDate);
      const punchIn = "";
      const punchOut = "";
      const nextMonthColor = currentDate.month() !== currentMonth.month(); // Get the status color for the current date// Get the status color for the current date

      calendar.push({
        date: currentDate.format("D-M-Y"),
        isSunday,
        punchIn,
        punchOut,
        isSaturaday,
        statusColor,
        nextMonthColor,
      });
      currentDate.add(1, "day");
    }

    return calendar;
  };

  function handleDateClick(date) {
    setDisplayAttendence(true);
    // alert(date.punchIn, date.punchOut, date.date);
    setDatePop(date);
  }

  const renderWeekdays = () => {
    const weekdays = moment.weekdaysShort();

    return weekdays.map((weekday) => (
      <div key={weekday} className="weekday">
        {weekday}
      </div>
    ));
  };

  useEffect(() => {
    setCalendarDates(renderCalendar());
    //eslint-disable-next-line
  }, [currentMonth]);

  return (
    <DataContext.Provider
      value={{
        selectedItemSubtaskTimeEstimation,
        setSelectedItemSubtaskTimeEstimation,
        showModalSubtask,
        setShowModalSubtask,
        setModalValueSubtask,
        closeModalSubtask,
        saveModalValueSubtask,
        handleInputChangeSubtask,
        openModalSubtask,
        modalValueSubtask,
        displayAttendence,
        displayNotice,
        displayNoticePopup,
        displayMyTask,
        displayDateJournal,
        displayEditEmployee,
        displayEditBankDetails,
        displayMyProjects,
        disaplyMainTaskPage,
        showModal,
        modalValue,
        selectedItem,
        setSelectedItem,
        openModal,
        closeModal,
        saveModalValue,
        handleInputChange,
        setModalValue,
        ApplyLeave,
        setApplyLeave,
        ApplyLeavePopUp,
        setApplyLeavePopUp,
        selectedDate,
        setSelectedDate,
        reason,
        setReason,
        displayMyResources,
        holidays,
        finance,
        setFinance,
        setHolidays,
        setDisplayMyResources,
        setDisplayAttendence,
        setDisplayNotice,
        setDisplayNoticePopup,
        setDisplayMyTask,
        setDisplayDateJournal,
        setDisplayEditEmployee,
        setDisplayEditBankDetails,
        setDisplayMyProjects,
        setDisplayMainTaskPage,
        noitceToDisaply,
        setNoticeToDisplay,
        notices,
        setNotice,
        markNoticeAsRead,
        unreadNoticeCount,
        calendarDates,
        setCalendarDates,
        datePop,
        setDatePop,
        goToNextMonth,
        goToPrevMonth,
        handleDateClick,
        renderCalendar,
        renderWeekdays,
        currentMonth,
        response,
        setResponse,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default Context;
