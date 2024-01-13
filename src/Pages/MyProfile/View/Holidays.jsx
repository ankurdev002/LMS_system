import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../Context/Context";

const Holidays = () => {
  const holidays = [
    {
      Date: "2023-01-01",
      Day: "Sunday",
      Name: "New Year's Day",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-01-14",
      Day: "Saturday",
      Name: "Makar Sankranti",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-01-14",
      Day: "Saturday",
      Name: "Lohri",
      Type: "Observance",
    },
    {
      Date: "2023-01-15",
      Day: "Sunday",
      Name: "Pongal",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-01-22",
      Day: "Sunday",
      Name: "Lunar New Year",
      Type: "Observance",
    },
    {
      Date: "2023-01-26",
      Day: "Thursday",
      Name: "Republic Day",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-01-26",
      Day: "Thursday",
      Name: "Vasant Panchami",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-02-05",
      Day: "Sunday",
      Name: "Guru Ravidas Jayanti",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-02-05",
      Day: "Sunday",
      Name: "Hazarat Ali's Birthday",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-02-14",
      Day: "Tuesday",
      Name: "Valentine's Day",
      Type: "Observance",
    },
    {
      Date: "2023-02-15",
      Day: "Wednesday",
      Name: "Maharishi Dayanand Saraswati Jayanti",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-02-18",
      Day: "Saturday",
      Name: "Maha Shivaratri/Shivaratri",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-02-19",
      Day: "Sunday",
      Name: "Shivaji Jayanti",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-03-07",
      Day: "Tuesday",
      Name: "Dolyatra",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-03-07",
      Day: "Tuesday",
      Name: "Holika Dahana",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-03-08",
      Day: "Wednesday",
      Name: "Holi",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-03-21",
      Day: "Tuesday",
      Name: "March Equinox",
      Type: "Season",
    },
    {
      Date: "2023-03-22",
      Day: "Wednesday",
      Name: "Chaitra Sukhladi",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-03-22",
      Day: "Wednesday",
      Name: "Ugadi",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-03-22",
      Day: "Wednesday",
      Name: "Gudi Padwa",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-03-24",
      Day: "Friday",
      Name: "Ramadan Start",
      Type: "Observance",
    },
    {
      Date: "2023-03-30",
      Day: "Thursday",
      Name: "Rama Navami",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-04-04",
      Day: "Tuesday",
      Name: "Mahavir Jayanti",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-04-06",
      Day: "Thursday",
      Name: "First day of Passover",
      Type: "Observance",
    },
    {
      Date: "2023-04-06",
      Day: "Thursday",
      Name: "Maundy Thursday",
      Type: "Observance, Christian",
    },
    {
      Date: "2023-04-07",
      Day: "Friday",
      Name: "Good Friday",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-04-09",
      Day: "Sunday",
      Name: "Easter Day",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-04-14",
      Day: "Friday",
      Name: "Vaisakhi",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-04-14",
      Day: "Friday",
      Name: "Ambedkar Jayanti",
      Type: "Observance",
    },
    {
      Date: "2023-04-14",
      Day: "Friday",
      Name: "Ambedkar Jayanti",
      Type: "Central Government Holiday",
    },
    {
      Date: "2023-04-15",
      Day: "Saturday",
      Name: "Mesadi / Vaisakhadi",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-04-21",
      Day: "Friday",
      Name: "Jamat Ul-Vida (Tentative)",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-04-22",
      Day: "Saturday",
      Name: "Ramzan Id/Eid-ul-Fitar",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-04-22",
      Day: "Saturday",
      Name: "Ramzan Id/Eid-ul-Fitar",
      Type: "Muslim, Common holiday",
    },
    {
      Date: "2023-05-01",
      Day: "Monday",
      Name: "International Worker's Day",
      Type: "Observance",
    },
    {
      Date: "2023-05-05",
      Day: "Friday",
      Name: "Buddha Purnima/Vesak",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-05-09",
      Day: "Tuesday",
      Name: "Birthday of Rabindranath",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-05-14",
      Day: "Sunday",
      Name: "Mothers' Day",
      Type: "Observance",
    },
    {
      Date: "2023-06-18",
      Day: "Sunday",
      Name: "Fathers' Day",
      Type: "Observance",
    },
    {
      Date: "2023-06-20",
      Day: "Tuesday",
      Name: "Rath Yatra",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-06-21",
      Day: "Wednesday",
      Name: "June Solstice",
      Type: "Season",
    },
    {
      Date: "2023-06-29",
      Day: "Thursday",
      Name: "Bakrid/Eid ul-Adha",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-07-03",
      Day: "Monday",
      Name: "Guru Purnima",
      Type: "Observance",
    },
    {
      Date: "2023-07-29",
      Day: "Saturday",
      Name: "Muharram/Ashura",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-08-06",
      Day: "Sunday",
      Name: "Friendship Day",
      Type: "Observance",
    },
    {
      Date: "2023-08-15",
      Day: "Tuesday",
      Name: "Independence Day",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-08-16",
      Day: "Wednesday",
      Name: "Parsi New Year",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-08-20",
      Day: "Sunday",
      Name: "Vinayaka Chathurthi",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-08-29",
      Day: "Tuesday",
      Name: "Onam",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-08-30",
      Day: "Wednesday",
      Name: "Raksha Bandhan (Rakhi)",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-09-06",
      Day: "Wednesday",
      Name: "Janmashtami (Smarta)",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-09-07",
      Day: "Thursday",
      Name: "Janmashtami",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-09-19",
      Day: "Tuesday",
      Name: "Ganesha Chaturthi",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-09-23",
      Day: "Saturday",
      Name: "September Equinox",
      Type: "Season",
    },
    {
      Date: "2023-09-28",
      Day: "Thursday",
      Name: "Milad un-Nabi/Id-e-Milad",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-10-02",
      Day: "Monday",
      Name: "Mahatma Gandhi Jayanti",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-10-15",
      Day: "Sunday",
      Name: "First Day of Sharad Navratri",
      Type: "Observance, Hinduism",
    },
    {
      Date: "2023-10-20",
      Day: "Friday",
      Name: "First Day of Durga Puja",
      Type: "Observance, Hinduism",
    },
    {
      Date: "2023-10-21",
      Day: "Saturday",
      Name: "Maha Saptami",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-10-22",
      Day: "Sunday",
      Name: "Maha Ashtami",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-10-23",
      Day: "Monday",
      Name: "Maha Navami",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-10-24",
      Day: "Tuesday",
      Name: "Dussehra",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-10-28",
      Day: "Saturday",
      Name: "Maharishi Valmiki Jayanti",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-10-31",
      Day: "Tuesday",
      Name: "Halloween",
      Type: "Observance",
    },
    {
      Date: "2023-11-01",
      Day: "Wednesday",
      Name: "Karaka Chaturthi ",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-11-12",
      Day: "Sunday",
      Name: "Naraka Chaturdasi",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-11-12",
      Day: "Sunday",
      Name: "Diwali/Deepavali",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-11-13",
      Day: "Monday",
      Name: "Govardhan Puja",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-11-15",
      Day: "Wednesday",
      Name: "Bhai Duj",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-11-19",
      Day: "Sunday",
      Name: "Chhat Puja",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-11-24",
      Day: "Friday",
      Name: "Guru Tegh Bahadur's Day",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-11-27",
      Day: "Monday",
      Name: "Guru Nanak Jayanti",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-12-08",
      Day: "Friday",
      Name: "First Day of Hanukkah",
      Type: "Observance",
    },
    {
      Date: "2023-12-15",
      Day: "Friday",
      Name: "Last day of Hanukkah",
      Type: "Observance",
    },
    {
      Date: "2023-12-22",
      Day: "Friday",
      Name: "December Solstice",
      Type: "Season",
    },
    {
      Date: "2023-12-24",
      Day: "Sunday",
      Name: "Christmas Eve",
      Type: "Restricted Holiday",
    },
    {
      Date: "2023-12-25",
      Day: "Monday",
      Name: "Christmas",
      Type: "Gazetted Holiday",
    },
    {
      Date: "2023-12-31",
      Day: "Sunday",
      Name: "New Year's Eve",
      Type: "Observance",
    },
  ];

  const [holidaylist, setHolidayList] = useState(holidays);
  const { setHolidays } = useContext(DataContext);

  useEffect(() => {
    fetchHolidays();
    //eslint-disable-next-line
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function fetchHolidays() {
    setHolidayList(holidays);
  }
  return (
    <div className="myprofile-mytask">
      <div className="btn-back-container">
        <button onClick={() => setHolidays(false)}>
          My Profile &lt; Yearly Holidays
        </button>
      </div>
      <div className="main-myreviews-container">
        <h1>Holidays</h1>
        <div className="holiday-container">
          <ul className="headers-holidays">
            {holidaylist.length > 0 &&
              Object.keys(holidaylist[0]).map((header) => (
                <li className="content-holidays-cell-header" key={header}>
                  {header}
                </li>
              ))}
          </ul>
          {holidaylist.map((item, index) => (
            <ul key={index} className="header-content-holidays-details">
              <li className="content-holidays-cell">{item.Date}</li>
              <li className="content-holidays-cell">{item.Day}</li>
              <li className="content-holidays-cell">{item.Name}</li>
              <li className="content-holidays-cell">{item.Type}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Holidays;
