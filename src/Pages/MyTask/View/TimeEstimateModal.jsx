import { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import { TableDataContext } from "./TableContext";

const TimeEstimationModal = () => {
  const { setModalValue, closeModal, modalValue, selectedItem } =
    useContext(DataContext);
  const { state, setState } = useContext(TableDataContext);

  const handleInputChange = (e) => {
    setModalValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      saveModalValue();
    } else if (e.key === "Escape") {
      closeModal();
    }
  };

  const saveModalValue = () => {
    // Handle saving the modal value and updating the main task state
    const newValue = modalValue; // The value entered by the user

    const updatedTasks = state.map((task) => {
      if (task.id === selectedItem.id) {
        return {
          ...task,
          "time estimated": newValue,
        };
      }
      return task;
    });

    setState(updatedTasks);
    closeModal();
  };

  return (
    <div className="modal-estimate-time">
      <div className="modal-content">
        <div className="left-part-modal">
          <h2>Time Estimation</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path
              fill="url(#myGradient)"
              d="M0 24C0 10.7 10.7 0 24 0H360c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V67c0 40.3-16 79-44.5 107.5L225.9 256l81.5 81.5C336 366 352 404.7 352 445v19h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V445c0-40.3 16-79 44.5-107.5L158.1 256 76.5 174.5C48 146 32 107.3 32 67V48H24C10.7 48 0 37.3 0 24zM110.5 371.5c-3.9 3.9-7.5 8.1-10.7 12.5H284.2c-3.2-4.4-6.8-8.6-10.7-12.5L192 289.9l-81.5 81.5zM284.2 128C297 110.4 304 89 304 67V48H80V67c0 22.1 7 43.4 19.8 61H284.2z"
            />
          </svg>
        </div>
        <div className="right-part-modal">
          <input
            type="text"
            value={modalValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Type in time"
          />
          <h5>changes are automatically saved</h5>
          <div className="btns-modal-estimate">
            <button onClick={saveModalValue}>Save</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeEstimationModal;
