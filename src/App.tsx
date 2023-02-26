import React from "react";
import { ILocation, fetchLocation } from "./Location/Location";
import { styles } from "./App.css";
import { Map } from "./Map/Map";
import { Icon } from "@fluentui/react";
import { Card } from "./Card/Card";

function App() {
  const [locationData, setLocationData] = React.useState<ILocation>();
  const [shouldSearch, setShouldSearch] = React.useState<boolean>(false);
  const searchRef = React.useRef<HTMLInputElement>(null);
  const [userInput, setUserInput] = React.useState<string>("");
  const [timer, setTimer] = React.useState<NodeJS.Timeout>();

  React.useEffect(() => {
    if (!shouldSearch) return;
    fetchLocation(userInput).then((data) => setLocationData(data));
    setShouldSearch(!shouldSearch);
  }, [shouldSearch, userInput]);

  const fetchLocationHandler = () => {
    setShouldSearch(!shouldSearch);
  };

  const onChangeHandler = (_event: any) => {
    setUserInput(_event.target.value);
    clearTimeout(timer);

    const newTimer = setTimeout(() => {}, 500);
    setTimer(newTimer);
  };

  const generatedAddress = React.useMemo(() => {
    if (!locationData) return "";
    const address = `${locationData?.city},${locationData?.state} ${locationData?.zipcode}`;
    return address;
  }, [locationData]);

  return (
    <main className={styles.appContainer}>
      <div className={styles.header}>
        <h1>IP Address Tracker</h1>
        <div className={styles.searchContainer}>
          <label htmlFor="search"></label>
          <input
            ref={searchRef}
            onChange={onChangeHandler}
            className={styles.searchInput}
            type="text"
            id={"search"}
            placeholder={"Search for any IP address or domain"}
          />
          <button
            className={styles.searchButton}
            onClick={fetchLocationHandler}
          >
            <Icon iconName={"arrow-right"} />
          </button>
        </div>
        <div className={styles.locationDetails}>
          <Card title={"IP ADDRESS"} details={locationData?.ip} hasBorder={true} />
          <Card title={"LOCATION"} details={generatedAddress} hasBorder={true}/>
          <Card title={"TIMEZONE"} details={locationData?.timezone} hasBorder={true} />
          <Card title={"ISP"} details={locationData?.isp} hasBorder={false}/>
        </div>
      </div>
      <div className={styles.map} id={"map"}>
        {locationData && <Map {...locationData} />}
      </div>
    </main>
  );
}

export default App;
