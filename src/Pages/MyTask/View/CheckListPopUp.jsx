import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineFileAdd } from "react-icons/ai";
/* eslint-disable react/prop-types */

const CheckListPopUp = ({
  onClose,
  onAddChecklistItem,
  subtask,
  checklistItem,
  setChecklistItem,
  onCheckItem,
  onRemoveItem,
}) => {
  const [showInput, setShowInput] = useState(false);

  const handleAddChecklistItem = () => {
    if (checklistItem.trim() !== "") {
      onAddChecklistItem(checklistItem);
      setChecklistItem("");
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  };

  const handleCheckItem = (index) => {
    const updatedChecklist = subtask.checklist.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    onCheckItem(updatedChecklist);
  };

  const handleRemoveItem = (index) => {
    const updatedChecklist = subtask.checklist.filter((item, i) => i !== index);
    onRemoveItem(updatedChecklist);
  };

  return (
    <div className="checklist-popup">
      <div className="checklist-heading-content">
        <h3>Checklist</h3>
        <button className="close-checklist" onClick={onClose}>
          <AiOutlineCloseCircle />
        </button>
      </div>
      <ul className="checklist-container">
        {subtask.checklist.map((item, index) => (
          <li key={index}>
            <div className="checklist-data-input-text">
              <input
                type="checkbox"
                checked={item.checked}
                className="checkbox-round"
                onChange={() => handleCheckItem(index)}
              />
              <span>{item.text}</span>
            </div>
            <button onClick={() => handleRemoveItem(index)}>
              <AiOutlineCloseCircle />
            </button>
          </li>
        ))}
      </ul>
      {showInput && ( // Render the input field conditionally based on the state variable
        <div className="checklist-data-input-container">
          <input
            type="text"
            value={checklistItem}
            placeholder="Enter Checklist"
            onChange={(e) => setChecklistItem(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleAddChecklistItem();
            }}
          />
          <button className="add-checklist" onClick={handleAddChecklistItem}>
            <AiOutlineFileAdd />
            Add Checklist Item
          </button>
        </div>
      )}
      {!showInput && ( // Show the "Add Checklist Item" button when the input field is not visible
        <div className="checklist-data-input-container-input-hidden">
          <button className="add-checklist" onClick={() => setShowInput(true)}>
            Add Checklist Item <AiOutlineFileAdd />
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckListPopUp;
