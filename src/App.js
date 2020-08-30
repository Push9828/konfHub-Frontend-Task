import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import ConferenceTile from "./components/ConferenceTile";
import "./App.css";

const App = () => {
  const [confPaidData, setConfPaidData] = useState([]);
  const [confFreeData, setConfFreeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences#`
      );

      setConfPaidData(result.data.paid);
      setConfFreeData(result.data.free);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      <section className="bg">
        <ConferenceTile
          isLoading={isLoading}
          confData={confPaidData.concat(confFreeData)}
          paidSize={confPaidData.length}
        />
      </section>
    </div>
  );
};

export default App;
