import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { reverseArray } from "./utils";

function App() {
  const [tokenData, setTokenData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [intro, setIntro] = useState(true);
  const [displayedCount, setDisplayedCount] = useState(20); // Starting with 20 items

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
    }, 3000);
  });

  useEffect(() => {
    async function getTokenData() {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/get-data");
        const data = await res.json();
        // setTokenData state to the now reversed arr from api so the arr is formatted properly
        setTokenData(reverseArray(data));
      } catch (err) {
        err ? console.log(err) : null;
      } finally {
        setLoading(false);
      }
    }
    getTokenData();
  }, []);

  // scuffed infinite scroll

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (nearBottom && !loading) {
        setDisplayedCount((prevCount) => prevCount + 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const tokenCards = tokenData.slice(0, displayedCount).map((token) => {
    return <Card key={token.contract_address} token={token} />;
  });

  return loading || intro ? (
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
