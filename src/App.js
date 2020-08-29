import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences#`
      );

      console.log(result.data.paid);
      setData(result.paid);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default App;
