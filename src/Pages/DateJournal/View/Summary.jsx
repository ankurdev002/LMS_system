const Summary = () => {
  return (
    <div className="calendar-summary">
      <div className="summary-content">
        <div className="heading-summary">
          <h1>Summary</h1>
        </div>
        <div className="summary-table">
          <table>
            <thead>
              <tr>
                <th>Sno</th>
                <th>Color Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td></td>
                <td>present</td>
              </tr>
              <tr>
                <td>2</td>
                <td></td>
                <td>unpaid leave</td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td>paid leave</td>
              </tr>
              <tr>
                <td>4</td>
                <td></td>
                <td>late to work</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Summary;
