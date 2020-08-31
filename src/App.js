import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import ConferenceTile from "./components/ConferenceTile";
import "./App.css";

const App = () => {
  const [confData, setConfData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences#`
      );

      setConfData(result.data.paid.concat(result.data.free));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      <section className="bg">
        <ConferenceTile isLoading={isLoading} confData={confData} />
      </section>
    </div>
  );
};

export default App;
