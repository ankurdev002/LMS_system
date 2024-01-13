import { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* eslint-disable react/prop-types */

export const TableDataContext = createContext();

const TableContext = (props) => {
  const data = [
    {
      id: 1,
      task: "Login Page",
      "time estimated": "",
      timer: "",
      startDate: "",
      dueDate: "",
      endDate: "",
      completedIn: "",
      status: "",
      isRunning: false,
      subtasks: [],
      subtaskCount: 0,
    },

    // Add more main tasks with subtasks as needed
  ];

  const columnHeaders = [
    "task",
    "subtask",
    "time estimated",
    "timer",
    "startDate",
    "dueDate",
    "endDate",
    "completedIn",
    "status",
  ];

  const [state, setState] = useState(data); // this is main state in which data array which inlcudes all objects inside data array
  const [selectedItem, setSelectedItem] = useState({
    mainTaskId: null,
    subtaskId: null,
  }); //selected main task object
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); //handle drop down open and close for main task status
  const [timer, setTimer] = useState(0); //state provide initial value to timer of main task
  const [timerSubtask, setTimerSubtask] = useState(0); //state provide initial value to timer of subtask
  const [startDate, setStartDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("To Do"); //selected option state for main task
  const [expandedTaskId, setExpandedTaskId] = useState(null);
  console.log("state", state);

  // subtask
  const [selectedItemSubtask, setSelectedItemSubtask] = useState({
    mainTaskId: null,
    subtaskId: null,
  }); //state for selected subtask object

  const [isToastShown, setIsToastShown] = useState(false);

  const [selectedOptionSubtask, setSelectedOptionSubtask] = useState("To Do"); //selected option state for subtask
  const [isDropdownOpenSubtask, setIsDropdownOpenSubtask] = useState(false); //handle drop down open and close for subtask status

  const toggleExpandedTask = (taskId) => {
    setExpandedTaskId((prevExpandedTaskId) =>
      prevExpandedTaskId === taskId ? null : taskId
    );
  };

  // add checklist to an each subtask checklist array seperatly
  const addChecklistItemToSubtask = (taskId, subtaskIndex, checklistItem) => {
    setState((prevState) => {
      return prevState.map((item) =>
        item.id === taskId
          ? {
              ...item,
              subtasks: item.subtasks.map((subtask, index) =>
                index === subtaskIndex
                  ? {
                      ...subtask,
                      checklist: [
                        ...subtask.checklist,
                        { text: checklistItem, checked: false },
                      ],
                    }
                  : subtask
              ),
            }
          : item
      );
    });
  };

  //add subtask to main task  {subtasks:[]}
  const addSubtask = (taskId, subtask) => {
    setState((prevState) => {
      return prevState.map((item) =>
        item.id === taskId
          ? {
              ...item,
              subtasks: [...item.subtasks, subtask],
              subtaskCount: item.subtaskCount + 1,
            }
          : item
      );
    });
  };

  //this is the useeffect for displaying main task timer in UI
  useEffect(() => {
    let interval;
    if (selectedItem && selectedItem.isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [selectedItem]);

  //this is the useeffect for dispalying subtask timer in UI
  useEffect(() => {
    let intervalSubtask;
    if (selectedItemSubtask && selectedItemSubtask.isRunning) {
      intervalSubtask = setInterval(() => {
        setTimerSubtask((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(intervalSubtask);
    }
    return () => {
      clearInterval(intervalSubtask);
    };
  }, [selectedItemSubtask]);

  //handles the main task drop down toggle
  const handleDropdownToggle = (itemId) => {
    const selectedItemData = state.find((item) => item.id === itemId);
    setSelectedItem(selectedItemData);
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
    setSelectedOption(selectedItem ? selectedItem.status : "To Do");
  };

  //handles the subtask drop down toggle
  const handleDropdownToggleSubtask = (taskId, subtaskId) => {
    const selectedItemSubtaskData = state
      .find((item) => item.id === taskId)
      ?.subtasks.find((subtask) => subtask.id === subtaskId);

    setSelectedItemSubtask(selectedItemSubtaskData); // Create a new object with the existing data
    setIsDropdownOpenSubtask((prevIsDropdownOpen) => !prevIsDropdownOpen);
    setSelectedOptionSubtask(
      selectedItemSubtask ? selectedItemSubtask.status : "To Do"
    );
  };

  //format time function format the time in HH:MM:SS format for main task timer
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  //format time function format the time in HH:MM:SS format for subtask timer
  const formatTimeSubtask = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  //format the start date for main task and subtask in format of DD/MM/YY @ HH:MM PM/AM
  const formatStartDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return `${date.toLocaleDateString("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    })} @ ${date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  //format the end date for main task and subtask in format of DD/MM/YY @ HH:MM PM/AM
  const formatEndDate = (dateEndString) => {
    if (!dateEndString) return "";
    const date = new Date(dateEndString);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} @ ${formattedTime}`;
  };

  //this function save the updated value of main task in state
  const saveTimerValue = (updatedItem) => {
    const newTimeValue = formatTime(timer);
    const updatedTasksTimer = state.map((task) => {
      if (task.id === updatedItem.id) {
        return {
          ...task,
          status: updatedItem.status,
          timer: newTimeValue,
          startDate: updatedItem.startDate,
          endDate: updatedItem.endDate,
          completedIn: newTimeValue,
        };
      }
      return task;
    });

    setState(updatedTasksTimer);
  };
  //set data in progress of main task
  const saveTimerValueInProgress = (updatedItem) => {
    const updatedTasksTimer = state.map((task) => {
      if (task.id === updatedItem.id) {
        return {
          ...task,
          status: updatedItem.status,
          startDate: updatedItem.startDate,
        };
      }
      return task;
    });

    setState(updatedTasksTimer);
  };

  //this is the handleChange funtion responsible for changing the status options(To Do,In Progress,Changes,Completed) of main task
  const handleChange = (option) => {
    setSelectedItem((prevSelectedItem) => {
      let updatedItem = {
        ...prevSelectedItem,
        status: option,
        isRunning: option === "In Progress",
      };

      if (option === "In Progress") {
        const currentDate = new Date();

        updatedItem = {
          ...updatedItem,
          status: option,
          startDate: formatStartDate(currentDate.toISOString()),
          endDate: "", // Clear the end date when moving to "In Progress"
        };

        if (startDate === "") {
          setStartDate(formatStartDate(currentDate.toISOString()));
        }
        saveTimerValueInProgress(updatedItem);
      } else if (option === "Completed") {
        const currentDate = new Date();
        updatedItem = {
          ...updatedItem,
          startDate: startDate,
          status: option,

          endDate: formatEndDate(currentDate.toISOString()), // Use the formatted current date directly
        };
        saveTimerValue(updatedItem); // Pass the updatedItem to saveTimerValue
      }

      return updatedItem;
    });

    setIsDropdownOpen(false);
    setSelectedOption(option);
  };

  // Initialize a map to store the start dates for each subtask ID
  // Initialize maps to store the start and end dates for each subtask ID
  const startDateMap = new Map();
  const endDateMap = new Map();

  //this is the handleChangeSubtask funtion responsible for changing the status options(To Do,In Progress,Changes,Completed) of subtask
  const handleChangeSubtask = (option) => {
    const inProgressSubtask = state.find((item) =>
      item.subtasks.some((subtask) => subtask.status === "In Progress")
    );

    if (option === "In Progress" && inProgressSubtask) {
      alert("Only one subtask can be 'In Progress' at a time.");
      setIsDropdownOpenSubtask(false);
      return;
    }

    setState((prevState) =>
      prevState.map((mainTaskData) => ({
        ...mainTaskData,
        subtasks: mainTaskData.subtasks.map((subtask) => {
          if (subtask.id === selectedItemSubtask.id) {
            if (option === "In Progress") {
              setSelectedItemSubtask((prevSelectedItemSubtask) => ({
                ...prevSelectedItemSubtask,
                isRunning: true,
              }));

              //display toast notify for task status
              if (!isToastShown) {
                setIsToastShown(true); // Set isToastShown to true
                // Display toast notify for task status
                toast.info("Task Status Changed To In Progress", {
                  position: toast.POSITION.BOTTOM_LEFT,
                  className: "toast-message-info",
                });
              }
              if (
                subtask.timer === "" &&
                selectedItemSubtask.timer === "" &&
                subtask.id === selectedItemSubtask.id
              ) {
                setTimerSubtask(0);
                formatTimeSubtask(timerSubtask);
              } else {
                if (
                  subtask.timer !== "" &&
                  selectedItemSubtask.timer !== "" &&
                  subtask.id === selectedItemSubtask.id
                ) {
                  setTimerSubtask(parseInt(subtask.timer.split(":")[2]));
                  formatTimeSubtask(timerSubtask);
                } else {
                  setTimerSubtask(subtask.timer);
                }
              }

              if (subtask.startDate === "") {
                // Transition from non-"In Progress" to "In Progress" status, update startDate for the first time only
                startDateMap.set(subtask.id, formatStartDate(new Date()));
                return {
                  ...subtask,
                  status: option,
                  startDate: startDateMap.get(subtask.id),
                };
              }

              return {
                ...subtask,
                status: option,
                isRunning: true,
              };
            } else if (option === "Completed") {
              if (!isToastShown) {
                setIsToastShown(true); // Set isToastShown to true
                // Display toast notify for task status
                toast.success("Task Status Changed To Completed", {
                  position: toast.POSITION.BOTTOM_LEFT,
                  className: "toast-message-success",
                });
              }

              setSelectedItemSubtask((prevSelectedItemSubtask) => ({
                ...prevSelectedItemSubtask,
                isRunning: false,
              }));
              const newTimeValueSubtask = formatTimeSubtask(timerSubtask);

              // Transition to "Completed" status, update endDate every time
              endDateMap.set(subtask.id, formatEndDate(new Date()));

              setTimerSubtask(0);
              return {
                ...subtask,
                timer: newTimeValueSubtask,
                completedIn: newTimeValueSubtask,
                isRunning: false,
                status: option,
                endDate: endDateMap.get(subtask.id),
              };
            } else {
              setSelectedItemSubtask((prevSelectedItemSubtask) => ({
                ...prevSelectedItemSubtask,
                isRunning: false,
              }));
              // Other status changes or remaining in "In Progress" status, keep the existing startDate and endDate
              return {
                ...subtask,
                status: option,
                startDate: subtask.startDate,
                endDate: subtask.endDate,
                isRunning: false,
              };
            }
          } else {
            return subtask;
          }
        }),
      }))
    );

    setIsDropdownOpenSubtask(false);
    setSelectedOptionSubtask(option);
  };

  useEffect(() => {
    setIsToastShown(false);
  }, [selectedItemSubtask]);

  const options = [
    { label: "To Do", color: "var(--bgthemecolor)" },
    { label: "In Progress", color: "var(--bgprogress)" },
    { label: "Changes", color: "var(--bgchanges)" },
    { label: "Completed", color: "var(--bgcompleted)" },
  ];

  const optionsSubTask = [
    { id: 1, label: "To Do", color: "var(--bgthemecolor)" },
    { id: 2, label: "In Progress", color: "var(--bgprogress)" },
    { id: 3, label: "Changes", color: "var(--bgchanges)" },
    { id: 4, label: "Completed", color: "var(--bgcompleted)" },
  ];

  const getOptionColor = (option) => {
    switch (option) {
      case "To Do":
        return "var(--bgtodo)";
      case "In Progress":
        return "var(--bgprogress)";
      case "Changes":
        return "var(--bgchanges)";
      case "Completed":
        return "var(--bgcompleted)";
      default:
        return "black"; // Default color if the option doesn't match any case
    }
  };

  return (
    <>
      <ToastContainer />

      <TableDataContext.Provider
        value={{
          data,
          state,
          setState,
          columnHeaders,
          selectedItem,
          selectedItemSubtask,
          selectedOptionSubtask,
          isDropdownOpen,
          isDropdownOpenSubtask,
          timer,
          timerSubtask,
          selectedOption,
          handleDropdownToggle,
          handleDropdownToggleSubtask,
          handleChange,
          handleChangeSubtask,
          formatTime,
          formatTimeSubtask,
          formatStartDate,
          options,
          optionsSubTask,
          expandedTaskId,
          toggleExpandedTask,
          getOptionColor,
          addSubtask,
          addChecklistItemToSubtask,
        }}
      >
        {props.children}
      </TableDataContext.Provider>
    </>
  );
};

export default TableContext;
