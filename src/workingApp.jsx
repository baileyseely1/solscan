import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { reverseArray } from "./utils";

function App() {
  const [tokenData, setTokenData] = useState([]);
  const [loading, setLoading] = useState(null);

  console.log(tokenData);

  useEffect(() => {
    setLoading(true);
    async function getTokenData() {
      try {
        const res = await fetch("http://localhost:5000/get-data");
        const data = await res.json();
        // setTokenData state to the now reversed arr from api so the arr is formatted properly
        setTokenData(reverseArray(data));
      } catch (err) {
        err ? console.log(err) : null;
      }
    }
    setInterval(() => {
      getTokenData();
      setLoading(false);
    }, 5000);
  }, []);

  const tokenCards = tokenData.map((token) => {
    return <Card key={token.contract_address} token={token} />;
  });

  return loading ? (
    <div className="loading-div">
      <img src="pepesniper1.png" alt="" width="125px" />
      <h1 className="sol-gradient-fast loading">loading shitcoins</h1>
    </div>
  ) : (
    <>
      <Header />
      <div className="card-container">{tokenCards}</div>
    </>
  );
}

export default App;
