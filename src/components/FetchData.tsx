import axios from "axios";
import { useEffect } from "react";

export const FetchData: React.FC = () => {
  try {
    useEffect(() => {
      const populateWeatherData = async () => {
        var data = await axios.get("api/home-meta");
        console.log(data);
      };
      populateWeatherData();
    },[]);
  } catch (error) {}
  return (
    <>
      <h1>abo</h1>
    </>
  );
};
