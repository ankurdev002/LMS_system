/* eslint-disable react/prop-types */
const TableHead = ({ columnHeaders }) => {
  return (
    <div className="headers-task-list">
      <ul>
        {columnHeaders.map((header, index) => (
          <li key={index}>
            {header == "time estimated" ? "Estimation" : header}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableHead;
