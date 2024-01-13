import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import { AiOutlinePlus } from "react-icons/ai";
import { TableDataContext } from "./TableContext";
import CheckListPopUp from "./CheckListPopUp";
import TimeEstimationModalSubtask from "./TimeEstimationModalSubtask";

const MainTaskAddSubTask = () => {
  const {
    setSelectedItemSubtaskTimeEstimation, // Set the selected item in the context
    setModalValueSubtask, // Set the modal value to the current "time estimated" value
    openModalSubtask,
    setDisplayMainTaskPage,
    showModalSubtask,
  } = useContext(DataContext);
  const {
    state,
    setState,
    getOptionColor,
    selectedOptionSubtask,
    formatTimeSubtask,
    timerSubtask,
    optionsSubTask,
    handleDropdownToggleSubtask,
    isDropdownOpenSubtask,
    selectedItemSubtask,
    handleChangeSubtask,
  } = useContext(TableDataContext);

  const [showCheckListPopup, setShowCheckListPopup] = useState(false);
  const [showInputForSubtask, setShowInputForSubtask] = useState(false);
  const [subtaskName, setSubtaskName] = useState("");
  const [addingSubtaskForTaskId, setAddingSubtaskForTaskId] = useState(null);
  const [currentSubtaskIndex, setCurrentSubtaskIndex] = useState(null);
  const [checklistItem, setChecklistItem] = useState("");

  const handleChecklistClick = (taskId, subtaskIndex) => {
    setShowInputForSubtask(false);
    setAddingSubtaskForTaskId(taskId);
    setCurrentSubtaskIndex(subtaskIndex);
    setShowCheckListPopup(true);
  };

  const handleAddChecklistItem = (checklistItem) => {
    if (checklistItem.trim() !== "") {
      const updatedSubtasks = state.map((item) => {
        if (item.id === addingSubtaskForTaskId) {
          const updatedSubtask = { ...item };
          updatedSubtask.subtasks[currentSubtaskIndex].checklist.push({
            text: checklistItem,
            checked: false,
          });
          return updatedSubtask;
        }
        return item;
      });

      setState(updatedSubtasks);

      setChecklistItem("");
    }
  };

  const handleCheckItem = (updatedChecklist) => {
    const updatedSubtasks = state.map((item) => {
      if (item.id === addingSubtaskForTaskId) {
        const updatedSubtask = { ...item };
        updatedSubtask.subtasks[currentSubtaskIndex].checklist =
          updatedChecklist;
        return updatedSubtask;
      }
      return item;
    });

    setState(updatedSubtasks);
  };

  const handleRemoveItem = (updatedChecklist) => {
    const updatedSubtasks = state.map((item) => {
      if (item.id === addingSubtaskForTaskId) {
        const updatedSubtask = { ...item };
        updatedSubtask.subtasks[currentSubtaskIndex].checklist =
          updatedChecklist;
        return updatedSubtask;
      }
      return item;
    });

    setState(updatedSubtasks);
  };

  const handleAddSubtask = (taskId) => {
    setShowInputForSubtask(true);
    setAddingSubtaskForTaskId(taskId);
    setSubtaskName("");
    setCurrentSubtaskIndex(null);
  };
  function generateUniqueId() {
    // Get the current timestamp (up to milliseconds)
    const timestamp = Date.now();

    // Generate a random number (you can adjust the range as needed)
    const randomNum = Math.floor(Math.random() * 100000);

    // Combine timestamp and random number to create a unique ID
    const uniqueId = `${timestamp}${randomNum}`;

    return parseInt(uniqueId, 10); // Convert to an integer for better representation
  }
  const handleSubtaskAdd = () => {
    if (subtaskName.trim() !== "") {
      const updatedSubtasks = state.map((item) => {
        if (item.id === addingSubtaskForTaskId) {
          const updatedSubtask = { ...item };
          updatedSubtask.subtasks.push({
            id: generateUniqueId(),
            name: subtaskName,
            checklist: [],
            timeestimated: "",
            timer: "",
            startDate: "",
            endDate: "",
            completedIn: "",
            status: "To Do",
            isRunning: false,
          });
          return updatedSubtask;
        }
        return item;
      });

      setState(updatedSubtasks);

      setSubtaskName("");
      setAddingSubtaskForTaskId(null);
    }
  };
  const isCompleted = selectedOptionSubtask === "Completed";

  const openTimeEstimationModalSubtask = (item) => {
    setSelectedItemSubtaskTimeEstimation(item); // Set the selected item in the context
    setModalValueSubtask(item.timeestimated); // Set the modal value to the current "time estimated" value
    openModalSubtask();
  };

  return (
    <div className="main-data-sub-task">
      <div className="main-data-sub-content-form">
        <div className="form-area-sub-task">
          <button onClick={() => setDisplayMainTaskPage(false)}>
            Login Page
          </button>
          <h3>Total No. of Task {state[0].subtasks.length}.</h3>
          <label className="input-file-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>

            <div className="upload-text">Upload Files</div>
            <input type="file" className="hidden" />
          </label>
        </div>
        <div className="text-area-sub-task">
          <textarea placeholder="Description"></textarea>
        </div>
      </div>
      <div className="main-data-sub-content-add-task">
        <div className="subtask-header">
          <div className="headers-subtask-config">
            <div>Subtask Name</div>
            <div>Checklist</div>
            <div>Estimation</div>
            <div>Timer</div>
            <div>Start Date</div>
            <div>End Date</div>
            <div>Completed In</div>
            <div>Status</div>
          </div>
        </div>
        {state.map((item) => (
          <React.Fragment key={item.id}>
            <div className="body-table-subtask-data-content">
              <ul>
                {item.subtasks.map((subtask, index) => (
                  <li key={subtask.id}>
                    <div>{subtask.name}</div>
                    <div onClick={() => handleChecklistClick(item.id, index)}>
                      <span>{subtask.checklist.length}</span>
                    </div>
                    <div>
                      {subtask.timeestimated}
                      {subtask.timeestimated === "" && (
                        <svg
                          onClick={() =>
                            openTimeEstimationModalSubtask(subtask)
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="url(#myGradient)"
                            d="M0 24C0 10.7 10.7 0 24 0H360c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V67c0 40.3-16 79-44.5 107.5L225.9 256l81.5 81.5C336 366 352 404.7 352 445v19h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V445c0-40.3 16-79 44.5-107.5L158.1 256 76.5 174.5C48 146 32 107.3 32 67V48H24C10.7 48 0 37.3 0 24zM110.5 371.5c-3.9 3.9-7.5 8.1-10.7 12.5H284.2c-3.2-4.4-6.8-8.6-10.7-12.5L192 289.9l-81.5 81.5zM284.2 128C297 110.4 304 89 304 67V48H80V67c0 22.1 7 43.4 19.8 61H284.2z"
                          />
                        </svg>
                      )}
                      {showModalSubtask && <TimeEstimationModalSubtask />}
                    </div>
                    <div>
                      {selectedItemSubtask &&
                      selectedItemSubtask.id === subtask.id &&
                      selectedItemSubtask.isRunning ? (
                        <>{formatTimeSubtask(timerSubtask)}</>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="url(#myGradient)"
                              d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H176zM288 204c28.7 0 52 23.3 52 52v96c0 28.7-23.3 52-52 52s-52-23.3-52-52V256c0-28.7 23.3-52 52-52zm-12 52v96c0 6.6 5.4 12 12 12s12-5.4 12-12V256c0-6.6-5.4-12-12-12s-12 5.4-12 12zM159.5 244c-5.4 0-10.2 3.5-11.9 8.6l-.6 1.7c-3.5 10.5-14.8 16.1-25.3 12.6s-16.1-14.8-12.6-25.3l.6-1.7c7.2-21.5 27.2-35.9 49.8-35.9c29 0 52.5 23.5 52.5 52.5v2.2c0 13.4-4.9 26.4-13.8 36.4l-39 43.9c-6.2 7-10 15.7-10.9 24.9H192c11 0 20 9 20 20s-9 20-20 20H128c-11 0-20-9-20-20V368.3c0-20.6 7.5-40.4 21.2-55.8l39-43.9c2.4-2.7 3.7-6.2 3.7-9.8v-2.2c0-6.9-5.6-12.5-12.5-12.5z"
                            />
                          </svg>

                          {subtask.timer}
                        </>
                      )}
                    </div>
                    <div>
                      {subtask.startDate === "" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="url(#myGradient)"
                            d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                          />
                        </svg>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="url(#myGradient)"
                              d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                            />
                          </svg>
                          {subtask.startDate}
                        </>
                      )}
                    </div>
                    <div>
                      {subtask.endDate === "" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="url(#myGradient)"
                            d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                          />
                        </svg>
                      ) : (
                        subtask.status === "Completed" && (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="url(#myGradient)"
                                d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                              />
                            </svg>
                            {subtask.endDate}
                          </>
                        )
                      )}
                    </div>
                    <div>
                      {isCompleted ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="url(#myGradient)"
                              d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                            />
                          </svg>
                          {subtask.completedIn}
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="url(#myGradient)"
                              d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                            />
                          </svg>
                        </>
                      )}
                    </div>
                    <>
                      <div-custom className="custom-dropdown-2">
                        <div-custom-drop
                          className="selected-option-drop-2"
                          style={{ color: getOptionColor(subtask.status) }}
                          onClick={() =>
                            handleDropdownToggleSubtask(item.id, subtask.id)
                          }
                        >
                          {subtask.status}
                        </div-custom-drop>
                        {isDropdownOpenSubtask &&
                          selectedItemSubtask &&
                          selectedItemSubtask.id === subtask.id && (
                            <div-custom-options className="options-list-data-2">
                              {optionsSubTask.map((option, index) => (
                                <div-custom-option-list
                                  key={index}
                                  className="options-data-list"
                                  style={{
                                    color: option.color,
                                    padding: "6px 10px",
                                  }}
                                  onClick={() =>
                                    handleChangeSubtask(option.label)
                                  }
                                >
                                  {option.label}
                                </div-custom-option-list>
                              ))}
                            </div-custom-options>
                          )}
                      </div-custom>
                    </>
                  </li>
                ))}
                {addingSubtaskForTaskId === item.id && showInputForSubtask && (
                  <li>
                    <input
                      type="text"
                      value={subtaskName}
                      onChange={(e) => setSubtaskName(e.target.value)}
                      onBlur={handleSubtaskAdd}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") handleSubtaskAdd();
                      }}
                    />
                  </li>
                )}
              </ul>
            </div>
            <div className="btn-add-subtask-container">
              <button onClick={() => handleAddSubtask(item.id)}>
                <span>Subtask</span>
                <span>
                  <AiOutlinePlus />
                </span>
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
      {showCheckListPopup && (
        <CheckListPopUp
          onClose={() => setShowCheckListPopup(false)}
          onAddChecklistItem={handleAddChecklistItem}
          checklistItem={checklistItem}
          setChecklistItem={setChecklistItem}
          subtask={
            state.find((item) => item.id === addingSubtaskForTaskId)?.subtasks[
              currentSubtaskIndex
            ]
          }
          onCheckItem={handleCheckItem}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </div>
  );
};

export default MainTaskAddSubTask;
