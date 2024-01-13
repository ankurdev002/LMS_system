const Date = () => {
  const formatDate = () => {
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      hour: "2-digit",

      minute: "2-digit",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format();
    return formattedDate;
  };

  return (
    <div>
      <h3>{formatDate()}</h3>
    </div>
  );
};

export default Date;
