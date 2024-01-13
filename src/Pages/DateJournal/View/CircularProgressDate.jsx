import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressDate = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const targetPercentage = 70; // Set your target percentage here
    let currentPercentage = 0;

    const animationInterval = setInterval(() => {
      if (currentPercentage < targetPercentage) {
        currentPercentage += 1;
        setPercentage(currentPercentage);
      } else {
        clearInterval(animationInterval);
      }
    }, 20); // Adjust the interval to control the animation speed

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="calendar-progress-bar">
      <div style={{ height: "120px", width: "120px" }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={20}
          styles={buildStyles({
            textColor: "var(--bgthemecolor)",
            pathColor: "var(--bgthemecolor2)",
            trailColor: "var(--bgColor4)",
            rotation: 0.5,
          })}
        />
      </div>
    </div>
  );
};

export default CircularProgressDate;
