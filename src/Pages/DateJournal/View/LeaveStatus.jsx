const LeaveStatus = () => {
  return (
    <div className="leave-status-summary">
      <div className="leaves-taken">
        <h3>Leaves Taken</h3>
      </div>
      <div className="emp-leave">
        <div className="paid-leave">
          <h3 className="leave-type">Paid Leave</h3>
          <div className="leave-numeric">
            <h3>05</h3>
          </div>
        </div>
        <hr />
        <div className="unpaid-leave">
          <h3 className="leave-type">Unpaid Leave</h3>
          <div className="leave-numeric">
            <h3>05</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveStatus;
