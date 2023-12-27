import { useState } from "react";
import { shortenCA } from "../utils";
import { FaCopy } from "react-icons/fa6";
import TimeAgo from "./TimeAgo";

export default ({ token }) => {
  const [copiedCA, setCopiedCA] = useState(false);
  const [copiedDeployer, setCopiedDeployer] = useState(false);

  const maxCALength = 25;
  const name = token.token_name;
  const ticker = token.token_symbol;
  const timestamp = token.timestamp;
  const ca = token.contract_address;
  const deployerAddress = token.owner_address;
  const creatorBalance = token.balance_sol;
  const totalSupply = token.total_supply;
  const transactions = token.transactions;
  const telegram = token.socials.telegram.replace(/_/g, "");
  const twitter = token.socials.twitter.replace(/_/g, "");
  const website = token.socials.website.replace(/_/g, "");
  const filteredWebsite = website.includes("birdeye") ? "Unknown" : website;
  const shortCA = shortenCA(ca, maxCALength);
  const shortDeployerAddress =
    deployerAddress !== undefined
      ? shortenCA(deployerAddress, maxCALength)
      : "Unknown";

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "CA") {
        setCopiedCA(true);
        setTimeout(() => setCopiedCA(false), 2000);
      } else if (type === "Deployer") {
        setCopiedDeployer(true);
        setTimeout(() => setCopiedDeployer(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="card" key={ca}>
      <div className="token-name-container">
        <h1 className="token-name">{name}</h1>
        <h1 className="token-symbol">{ticker}</h1>
      </div>
      <TimeAgo timestamp={`${timestamp}`} />
      <div className="flex">
        <h3 className="ca-name">
          CA / DS:{" "}
          <a
            className="ca"
            target="_blank"
            href={`https://dexscreener.com/solana/${ca}`}
          >
            {shortCA}
          </a>
          <FaCopy className="copy" onClick={() => copyToClipboard(ca, "CA")} />
          {copiedCA && <h5 className="ca-name">Copied!</h5>}
        </h3>
      </div>

      <div className="flex">
        <h3 className="ca-name">
          Deployer:{" "}
          <a
            className="ca"
            target="_blank"
            href={`https://solscan.io/account/${deployerAddress}`}
          >
            {shortDeployerAddress}
          </a>
          <FaCopy
            className="copy"
            onClick={() => copyToClipboard(deployerAddress, "Deployer")}
          />
          {copiedDeployer && <h5 className="ca-name">Copied!</h5>}
        </h3>
      </div>

      <h3>Creator Sol Balance: {creatorBalance}</h3>
      <h3>Total Supply: {totalSupply}</h3>
      <h3>Transactions: {transactions}</h3>
      <h3>
        Telegram:{" "}
        {telegram !== "Unknown" ? (
          <a target="_blank" href={telegram}>
            {telegram}
          </a>
        ) : (
          "not found"
        )}
      </h3>
      <h3>
        Twiter:{" "}
        {twitter !== "Unknown" ? (
          <a target="_blank" href={twitter}>
            {twitter}
          </a>
        ) : (
          "not found"
        )}
      </h3>
      <h3>
        Website:{" "}
        {filteredWebsite !== "Unknown" ? (
          <a target="_blank" href={filteredWebsite}>
            {filteredWebsite}
          </a>
        ) : (
          "not found"
        )}
      </h3>
    </div>
  );
};
