import { useEffect } from "react";
import { useState } from "react";
import agadir from "./images/agadir.jpg";
import rabat from "./images/rabat.jpg";
import tanger from "./images/tanger.jpg";
import newYork from "./images/newYork.jpg";
import "./styles/style.css";

const Response = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const [response, setResponse] = useState({ longitude: null, latitude: null });
  const [temp, settemp] = useState();
  const [code, setcode] = useState(null);
  const [logo, setlogo] = useState();
  const [isDay, setisDay] = useState("");
  const [timee, settimee] = useState("");
  const [wintSpeed, setwintSpeed] = useState("");
  const [week, setweek] = useState([]);
  const [wcode, setwcode] = useState([]);
  const [weekDayName, setweekDayName] = useState([]);
  const [logoo, setlogoo] = useState();
  const [wcodeLogoRespo, setwcodeLogoRespo] = useState([]);

  var mysrc = "";
  var classNameCities = "";
  var classNameIn = "";
  var classNameIsNight = "";
  const currentDate = new Date();
  const today = currentDate.getDate();
  const dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    currentDate
  );

  const Villes = [
    {
      id: 1,
      name: "Agadir",
      src: "./images/agadir.jpg",
      longitude: 9.5925,
      latitude: 30.428,
    },
    {
      id: 2,
      name: "Rabat",
      src: "./images/rabat.jpg",
      longitude: 6.8539,
      latitude: 34.0084,
    },
    {
      id: 3,
      name: "Tanger",
      src: "./images/tanger.jpg",
      longitude: 5.834,
      latitude: 35.7595,
    },
    {
      id: 4,
      name: "New York",
      src: "./images/newYork.jpg",
      longitude: 40.7128,
      latitude: 74.006,
    },
  ];

  const handleSelect = (e) => {
    setCity(e.target.value);
  };

  switch (city) {
    case "Agadir":
      mysrc = agadir;
      classNameCities = "containerAgadir";
      classNameIn = "agadirC";
      break;

    case "Rabat":
      mysrc = rabat;
      classNameCities = "containerRabat";
      classNameIn = "rabatC";
      break;

    case "Tanger":
      mysrc = tanger;
      classNameCities = "containerTanger";
      classNameIn = "tangerC";
      break;

    case "New York":
      mysrc = newYork;
      classNameCities = "containerNewYork";
      classNameIn = "newYorkC";
      break;

    default:
      break;
  }

  //console.log(data);

  useEffect(() => {
    const selectedVille = Villes.find((ville) => ville.name === city);
    if (selectedVille) {
      setResponse({
        longitude: selectedVille.longitude,
        latitude: selectedVille.latitude,
      });
    }
  }, [city]);

  useEffect(() => {
    if (response.longitude && response.latitude) {
      const myApi = `https://api.open-meteo.com/v1/forecast?latitude=${response.latitude}&longitude=${response.longitude}&current=temperature_2m,relative_humidity_2m,is_day,rain,weather_code,surface_pressure,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,rain,weather_code,pressure_msl,surface_pressure,visibility,et0_fao_evapotranspiration,wind_speed_10m,wind_direction_10m,temperature_80m,temperature_120m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,et0_fao_evapotranspiration&timezone=auto&forecast_hours=24`;
      //https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,is_day,rain,weather_code,surface_pressure,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,rain,weather_code,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,temperature_80m,temperature_120m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max&timezone=auto&forecast_hours=24
      const getData = async () => {
        const res = await fetch(myApi);
        if (res.ok) {
          const myres = await res.json();
          setData(myres);

          console.log(myres);

          var isRaining = myres.current.rain;

          settemp(myres.current.temperature_2m);

          var codee = myres.current.weather_code;

          setcode(codee);

          var isd = myres.current.is_day;

          setisDay(isd);

          var wint = myres.current.wind_speed_10m;

          setwintSpeed(wint);

          var t = myres.current.time;

          settimee(t);

          var weekd = myres.daily.time;

          setweek(weekd);

          var weekCode = myres.daily.weather_code;

          var daytwo = myres.daily.weather_code;

          setwcode(weekCode);

          // if (isRaining === 1) {
          //   setimg(rain);
          // } else {
          //   setimg(isDay);
          // }

          switch (isDay) {
            case 0:
              classNameIsNight = "night";
              break;

            case 1:
              classNameIsNight = "day";
              break;

            default:
              classNameIsNight = "night";
              break;
          }
        }
      };
      getData();
    }
  }, [response]);

  console.log(code);
  useEffect(() => {
    const weekk = week.map((w) => {
      const date = new Date(w);
      return date.toLocaleDateString("en-US", { weekday: "long" });
    });
    setweekDayName(weekk.slice(1));
  }, [week]);

  //console.log(wcode);

  console.log(wcodeLogoRespo);

  // const rain = () => {
  //   return (
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  //       <path d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96L96 320zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3z" />
  //     </svg>
  //   );
  // };

  // const isDay = () => {
  //   return (
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  //       <path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
  //     </svg>
  //   );
  // };

  const sunny = () => {
    return (
      <div className="sunnyContainer">
        <div className="sunny"></div>
        <div className="wint">{wintSpeed}</div>
      </div>
    );
  };

  const sunny2 = () => {
    return <div className="sunny2"></div>;
  };

  const overcast = () => {
    return (
      <div className="overcastContainer">
        <div className="overcast"></div>
        <div className="wint">{wintSpeed} km/h</div>
      </div>
    );
  };

  const overcast2 = () => {
    return <div className="overcast2"></div>;
  };

  const fog = () => {
    return <div className="fog"></div>;
  };

  const fog2 = () => {
    return <div className="fog2"></div>;
  };

  const drizzle = () => {
    return <div className="drizzle"></div>;
  };

  const drizzle2 = () => {
    return <div className="drizzle2"></div>;
  };

  const freezdrizzle = () => {
    return <div className="freezdrizzle"></div>;
  };

  const freezdrizzle2 = () => {
    return <div className="freezdrizzle2"></div>;
  };

  const rainOne = () => {
    return <div className="rainOne"></div>;
  };

  const rainOne2 = () => {
    return <div className="rainOne2"></div>;
  };

  const snowzyRain = () => {
    return <div className="snowzyRain"></div>;
  };

  const snowzyRain2 = () => {
    return <div className="snowzyRain2"></div>;
  };

  const thunder = () => {
    return <div className="thunder"></div>;
  };

  const thunder2 = () => {
    return <div className="thunder2"></div>;
  };

  const snowOne = () => {
    return <div className="snowOne"></div>;
  };

  const snowOne2 = () => {
    return <div className="snowOne2"></div>;
  };

  const snowTwo = () => {
    return <div className="snowTwo"></div>;
  };

  const snowTwo2 = () => {
    return <div className="snowTwo2"></div>;
  };

  const rainTwo = () => {
    return <div className="rainTwo"></div>;
  };

  const rainTwo2 = () => {
    return <div className="rainTwo2"></div>;
  };
  useEffect(() => {
    const weekkk = wcode.map((c) => {
      switch (c) {
        case 0:
          return sunny2();
        case 1:
        case 2:
        case 3:
          return overcast2();
        case 45:
        case 48:
          return fog2();
        case 51:
        case 53:
        case 55:
          return drizzle2();
        case 56:
        case 57:
          return freezdrizzle2();
        case 61:
        case 63:
        case 65:
          return rainOne2();
        case 66:
        case 67:
          return snowzyRain2();
        case 71:
        case 73:
        case 75:
          return snowOne2();
        case 77:
        case 85:
        case 86:
          return snowTwo2();
        case 95:
        case 96:
        case 99:
          return thunder2();
        default:
          return overcast2();
      }
    });

    setwcodeLogoRespo(weekkk.slice(0, 6)); 
  }, [wcode]);

  //console.log(isDay);
  useEffect(() => {
    switch (code) {
      case 0:
        setlogo(sunny);
        break;

      case 1:
      case 2:
      case 3:
        setlogo(overcast);
        break;

      case 48:
      case 45:
        setlogo(fog);
        break;

      case 51:
      case 53:
      case 55:
        setlogo(drizzle);
        break;

      case 56:
      case 57:
        setlogo(freezdrizzle);
        break;

      case 61:
      case 65:
      case 63:
        setlogo(rainOne);
        break;

      case 66:
      case 67:
        setlogo(snowzyRain);
        break;

      case 71:
      case 73:
      case 75:
        setlogo(snowOne);
        break;

      case 77:
        setlogo(snowTwo);
        break;

      case 85:
      case 86:
        setlogo(rainTwo);
        break;

      case 95:
      case 96:
      case 99:
        setlogo(thunder);
        break;

      default:
        setlogo(overcast);
        break;
    }
  }, [code]);

  return (
    <div className={`${classNameCities} ${classNameIsNight}`}>
      <div className="formRespo">
        <div className={`${classNameIn} ${classNameIsNight}`}>
          <form className="form">
            <select onChange={handleSelect} value={city} className="select">
              {Villes.map((ville) => (
                <option className="option" key={ville.id} value={ville.name}>
                  {ville.name}
                </option>
              ))}
            </select>
          </form>
          <div className="location">
            <div className="svg">
              <svg
                className="locationSvg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </div>
            <div className="locationInfos">
              <span>{city}</span>
              <span>{timee.slice(11)}</span>
            </div>
          </div>
        </div>
        <div className="Response">
          {data ? (
            <>
              <div className="myres1">
                <div className="temp-date">
                  <span className="temp">{temp} °C</span>
                  <span className="date">
                    <span>
                      {dayName + " " + today}
                      <sup>th</sup>
                    </span>
                  </span>
                </div>
                {code ? logo : logo}
              </div>
              <div className="my-res2">
                {
                  <>
                    <div className="week-container">
                      {weekDayName ? (
                        weekDayName.map((w) => <span>{w + ' '}</span>)
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="weekCode-container">
                      {wcodeLogoRespo && wcodeLogoRespo.length > 0 ? (
                        wcodeLogoRespo.map((IconComponent, index) => (
                          <div key={index}>{IconComponent}</div>
                        ))
                      ) : (
                        <p>No weather data available</p>
                      )}
                    </div>
                  </>
                }
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
    // <div className="container">
    //   <div className="img"></div>
    // </div>
  );
};

export default Response;
