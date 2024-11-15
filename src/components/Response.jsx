import { useEffect } from "react";
import { useState } from "react";
import "./styles/style.css";
import dataaa from "../data/data.json";

const Response = () => {
  // const [data, setData] = useState(null);
  // const [city, setCity] = useState("");
  // const [response, setResponse] = useState({ longitude: null, latitude: null });
  // const [temp, settemp] = useState();
  // const [code, setcode] = useState(null);
  // const [logo, setlogo] = useState();
  // const [isDay, setisDay] = useState("");
  // const [timee, settimee] = useState("");
  // const [wintSpeed, setwintSpeed] = useState("");
  // const [week, setweek] = useState([]);
  // const [wcode, setwcode] = useState([]);
  // const [weekDayName, setweekDayName] = useState([]);
  // const [weektemp, setweektemp] = useState([]);
  // const [wcodeLogoRespo, setwcodeLogoRespo] = useState([]);
  // const [isnight, setisnight] = useState("");
  const [cities, setcities] = useState([]);

  const [togglee, settogglee] = useState(true);

  const handleSelect = (e) => {
    const tar = e.target.closest("button");
    console.log(tar.children);
    settogglee((p) => !p);
  };

  const handleSpan = (c) => {
    console.log(c);
    
  }

  // var classNameCities = "";
  // var classNameIn = "";

  // const currentDate = new Date();
  // const today = currentDate.getDate();
  // const dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
  //   currentDate
  // );

  // const handleSelect = (e) => {
  //   setCity(e.target.value);
  // };

  useEffect(() => {
    setcities(dataaa);
  }, []);

  //cities ? console.log(cities) : console.log("err");

  // switch (city) {
  //   case "Agadir":
  //     classNameCities = "containerAgadir";
  //     classNameIn = "agadirC";
  //     break;

  //   case "Rabat":
  //     classNameCities = "containerRabat";
  //     classNameIn = "rabatC";
  //     break;

  //   case "Tanger":
  //     classNameCities = "containerTanger";
  //     classNameIn = "tangerC";
  //     break;

  //   case "New York":
  //     classNameCities = "containerNewYork";
  //     classNameIn = "newYorkC";
  //     break;

  //   case "Paris":
  //     classNameCities = "containerParis";
  //     classNameIn = "parisC";
  //     break;

  //   case "Berlin":
  //     classNameCities = "containerBerlin";
  //     classNameIn = "berlinC";
  //     break;

  //   case "Moscow":
  //     classNameCities = "containerMoscow";
  //     classNameIn = "moscowC";
  //     break;

  //   case "Madrid":
  //     classNameCities = "containerMadrid";
  //     classNameIn = "madridC";
  //     break;

  //   case "Tokyo":
  //     classNameCities = "containerTokyo";
  //     classNameIn = "TokyoC";
  //     break;

  //   case "Magdan":
  //     classNameCities = "containerMagdan";
  //     classNameIn = "MagdanC";
  //     break;

  //   default:
  //     break;
  // }

  // useEffect(() => {
  //   const selectedVille = cities.find((ville) => ville.name === city);

  //   if (selectedVille) {
  //     setResponse({
  //       longitude: selectedVille.longitude,

  //       latitude: selectedVille.latitude,
  //     });
  //   }
  // }, [city]);

  // useEffect(() => {
  //   if (response.longitude && response.latitude) {
  //     const myApi = `https://api.open-meteo.com/v1/forecast?latitude=${response.latitude}&longitude=${response.longitude}&current=temperature_2m,relative_humidity_2m,is_day,rain,weather_code,surface_pressure,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,rain,weather_code,pressure_msl,surface_pressure,visibility,et0_fao_evapotranspiration,wind_speed_10m,wind_direction_10m,temperature_80m,temperature_120m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,et0_fao_evapotranspiration&timezone=auto&forecast_hours=24`;

  //     const getData = async () => {
  //       const res = await fetch(myApi);

  //       if (res.ok) {
  //         const myres = await res.json();

  //         setData(myres);

  //         console.log(myres);

  //         settemp(myres.current.temperature_2m);

  //         var codee = myres.current.weather_code;

  //         setcode(codee);

  //         var isd = myres.current.is_day;

  //         setisDay(isd);

  //         var wint = myres.current.wind_speed_10m;

  //         setwintSpeed(wint);

  //         var t = myres.current.time;

  //         settimee(t);

  //         var weekd = myres.daily.time;

  //         setweek(weekd);

  //         var weekCode = myres.daily.weather_code;

  //         setwcode(weekCode);

  //         var weekT = myres.daily.temperature_2m_min;

  //         setweektemp(weekT.slice(1));
  //       }
  //     };

  //     getData();
  //   }
  // }, [response]);

  // useEffect(() => {
  //   var classNameIsNight = isDay === 0 ? "night" : "day";

  //   setisnight(classNameIsNight);
  // }, [isDay]);

  // useEffect(() => {
  //   const weekk = week.map((w) => {
  //     const date = new Date(w);

  //     return date.toLocaleDateString("en-US", { weekday: "long" });
  //   });

  //   setweekDayName(weekk.slice(1));
  // }, [week]);

  // const sunny = () => {
  //   return (
  //     <div className="wContainer">
  //       <div className="sunny"></div>
  //       <div className="wint">{wintSpeed} km/h</div>
  //     </div>
  //   );
  // };

  // const sunny2 = () => {
  //   return <div className="sunny2"></div>;
  // };

  // const overcast = () => {
  //   return (
  //     <div className="wContainer">
  //       <div className="overcast"></div>
  //       <div className="wint">{wintSpeed} km/h</div>
  //     </div>
  //   );
  // };

  // const overcast2 = () => {
  //   return <div className="overcast2"></div>;
  // };

  // const fog = () => {
  //   return (
  //     <div className="wContainer">
  //       <div className="fog"></div>
  //       <div className="wint">{wintSpeed} km/h</div>
  //     </div>
  //   );
  // };

  // const fog2 = () => {
  //   return <div className="fog2"></div>;
  // };

  // const drizzle = () => {
  //   return (
  //     <div className="wContainer">
  //       <div className="drizzle"></div>
  //       <div className="wint">{wintSpeed} km/h</div>
  //     </div>
  //   );
  // };

  // const drizzle2 = () => {
  //   return <div className="drizzle2"></div>;
  // };

  // const freezdrizzle = () => {
  //   return (
  //     <div className="wContainer">
  //       <div className="freezdrizzle"></div>
  //       <div className="wint">{wintSpeed} km/h</div>
  //     </div>
  //   );
  // };

  // const freezdrizzle2 = () => {
  //   return <div className="freezdrizzle2"></div>;
  // };

  // const rainOne = () => {
  //   return (
  //     <div className="wContainer">
  //       <div className="rainOne"></div>
  //       <div className="wint">{wintSpeed} km/h</div>
  //     </div>
  //   );
  // };

  // const rainOne2 = () => {
  //   return <div className="rainOne2"></div>;
  // };

  // const snowzyRain = () => {
  //   return (
  //     <div className="wContainer">
  //       <div className="snowzyRain"></div>
  //       <div className="wint">{wintSpeed} km/h</div>
  //     </div>
  //   );
  // };

  // const snowzyRain2 = () => {
  //   return <div className="snowzyRain2"></div>;
  // };

  // const thunder = () => {
  //   return (
  //     <div className="wContainer">
  //       <div className="thunder"></div>
  //       <div className="wint">{wintSpeed} km/h</div>
  //     </div>
  //   );
  // };

  // const thunder2 = () => {
  //   return <div className="thunder2"></div>;
  // };

  // const snowOne = () => {
  //   return (
  //     <div className="wContainer">
  //       <div className="snowOne"></div>
  //       <div className="wint">{wintSpeed} km/h</div>
  //     </div>
  //   );
  // };

  // const snowOne2 = () => {
  //   return <div className="snowOne2"></div>;
  // };

  // const snowTwo = () => {
  //   return (
  //     <div className="wContainer">
  //       <div className="snowTwo"></div>
  //       <div className="wint">{wintSpeed} km/h</div>
  //     </div>
  //   );
  // };

  // const snowTwo2 = () => {
  //   return <div className="snowTwo2"></div>;
  // };

  // const rainTwo = () => {
  //   return (
  //     <div className="wContainer">
  //       <div className="rainTwo"></div>
  //       <div className="wint">{wintSpeed} km/h</div>
  //     </div>
  //   );
  // };

  // useEffect(() => {
  //   const weekkk = wcode.map((c) => {
  //     switch (c) {
  //       case 0:
  //         return sunny2();
  //       case 1:
  //       case 2:
  //       case 3:
  //         return overcast2();
  //       case 45:
  //       case 48:
  //         return fog2();
  //       case 51:
  //       case 53:
  //       case 55:
  //         return drizzle2();
  //       case 56:
  //       case 57:
  //         return freezdrizzle2();
  //       case 61:
  //       case 63:
  //       case 65:
  //         return rainOne2();
  //       case 66:
  //       case 67:
  //         return snowzyRain2();
  //       case 71:
  //       case 73:
  //       case 75:
  //         return snowOne2();
  //       case 77:
  //       case 85:
  //       case 86:
  //         return snowTwo2();
  //       case 95:
  //       case 96:
  //       case 99:
  //         return thunder2();
  //       default:
  //         return overcast2();
  //     }
  //   });

  //   setwcodeLogoRespo(weekkk.slice(0, 6));
  // }, [wcode]);

  // useEffect(() => {
  //   switch (code) {
  //     case 0:
  //       setlogo(sunny);
  //       break;

  //     case 1:
  //     case 2:
  //     case 3:
  //       setlogo(overcast);
  //       break;

  //     case 48:
  //     case 45:
  //       setlogo(fog);
  //       break;

  //     case 51:
  //     case 53:
  //     case 55:
  //       setlogo(drizzle);
  //       break;

  //     case 56:
  //     case 57:
  //       setlogo(freezdrizzle);
  //       break;

  //     case 61:
  //     case 65:
  //     case 63:
  //       setlogo(rainOne);
  //       break;

  //     case 66:
  //     case 67:
  //       setlogo(snowzyRain);
  //       break;

  //     case 71:
  //     case 73:
  //     case 75:
  //       setlogo(snowOne);
  //       break;

  //     case 77:
  //       setlogo(snowTwo);
  //       break;

  //     case 85:
  //     case 86:
  //       setlogo(rainTwo);
  //       break;

  //     case 95:
  //     case 96:
  //     case 99:
  //       setlogo(thunder);
  //       break;

  //     default:
  //       setlogo(overcast);
  //       break;
  //   }
  // }, [code]);

  return (
    // <div className={`${classNameCities} ${isnight}`}>
    //   <div className={city ? "formRespo" : "noResponse"}>
    //     <div
    //       className={
    //         isnight && classNameIn ? `${classNameIn} ${isnight}` : "tuzz"
    //       }
    //     >
    //       <form className={data ? "form" : "noRes"}>
    //         <select
    //           onChange={handleSelect}
    //           value={city}
    //           className={city ? "sele" : "select"}
    //         >
    //           {cities.map((ville) => (
    //             <>
    //               <option className="option" key={ville.id} value={ville.name}>
    //                 {ville.name}
    //               </option>
    //             </>
    //           ))}
    //         </select>
    //       </form>
    //       {city ? (
    //         <div className="location">
    //           <div className="svg">
    //             <svg
    //               className="locationSvg"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 384 512"
    //             >
    //               <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    //             </svg>
    //           </div>
    //           <div className="locationInfos">
    //             <span>{city}</span>
    //             <span>{timee.slice(11)}</span>
    //           </div>
    //         </div>
    //       ) : (
    //         <></>
    //       )}
    //     </div>
    //     <div className={data ? "Response" : "Response"}>
    //       {data ? (
    //         <>
    //           <div className="myres1">
    //             <div className="temp-date">
    //               <span className="temp">{temp} °C</span>
    //               <span className="date">
    //                 <span>
    //                   {dayName + " " + today}
    //                   <sup>th</sup>
    //                 </span>
    //               </span>
    //             </div>
    //             {code ? logo : logo}
    //           </div>
    //           <div className="my-res2">
    //             {
    //               <div className="weekCards">
    //                 <div className="week-container">
    //                   {weekDayName ? (
    //                     weekDayName.map((w, index) => (
    //                       <span key={index}>{w}</span>
    //                     ))
    //                   ) : (
    //                     <></>
    //                   )}
    //                 </div>
    //                 <div className="weekCode-container">
    //                   {wcodeLogoRespo ? (
    //                     wcodeLogoRespo.map((IconComponent, index) => (
    //                       <div key={index}>{IconComponent}</div>
    //                     ))
    //                   ) : (
    //                     <></>
    //                   )}
    //                 </div>
    //                 <div className="weekTemp-container">
    //                   {weektemp ? (
    //                     weektemp.map((te, index) => (
    //                       <div key={index}>{te} °C</div>
    //                     ))
    //                   ) : (
    //                     <></>
    //                   )}
    //                 </div>
    //               </div>
    //             }
    //           </div>
    //         </>
    //       ) : (
    //         <>
    //           <>
    //             <div className="animation2">
    //               <div className="first2"></div>
    //               <div className="second2"></div>
    //               <div className="third2"></div>
    //               <div className="last2"></div>
    //             </div>
    //             <br />
    //           </>
    //           <>Select A City</>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <>
      <div className={togglee ? "dropDown" : "noDrop"}>
    Select City
        <button onClick={handleSelect}> &gt; </button>
        <br />
        {cities.map((ville) => (
          <>
            <span className="span" key={ville.id} value={ville.name} onClick={() => handleSpan(ville)}>
              <img className="fllag" src={ville.src} alt="" />
              <p>{ville.name}</p>
            </span>
            
          </>
        ))}
      </div>
    </>
  );
};

export default Response;
