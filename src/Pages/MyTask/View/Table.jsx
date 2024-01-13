import TableBody from "./TableBody";
import TableHeader from "./TableHead";
import { useContext } from "react";
import { TableDataContext } from "./TableContext";

const Table = () => {
  const TableData = useContext(TableDataContext);

  return (
    <div className="main-table-task-list">
      <TableHeader columnHeaders={TableData.columnHeaders} />
      <TableBody
        data={TableData.data}
        columnHeaders={TableData.columnHeaders}
      />
    </div>
  );
};

export default Table;
