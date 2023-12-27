import React, { useState, useEffect } from "react";

export default ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    if (!timestamp) {
      // No timestamp provided, set to "Unknown" or any other default message
      setTimeAgo("deployed: unknown");
      return;
    }

    // Check if the timestamp matches the expected format
    if (!/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(timestamp)) {
      setTimeAgo("deployed: unknown");
      return;
    }

    const updateAgoTime = () => {
      const currentTime = new Date();
      const timestampDate = new Date(timestamp.replace(" ", "T")); // Convert to ISO format
      const timeDifference = currentTime - timestampDate;

      if (timeDifference < 60000) {
        // Less than a minute
        setTimeAgo("Deployed: a few seconds ago");
      } else if (timeDifference < 3600000) {
        // Less than an hour
        const minutesAgo = Math.floor(timeDifference / 60000);
        setTimeAgo(
          `Deployed: ${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`
        );
      } else if (timeDifference < 86400000) {
        // Less than a day
        const hoursAgo = Math.floor(timeDifference / 3600000);
        setTimeAgo(
          `Deployed: ${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`
        );
      } else if (timeDifference < 604800000) {
        // Less than a week
        const daysAgo = Math.floor(timeDifference / 86400000);
        setTimeAgo(`Deployed: ${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`);
      } else {
        // More than a week
        const weeksAgo = Math.floor(timeDifference / 604800000);
        setTimeAgo(
          `Deployed: ${weeksAgo} week${weeksAgo !== 1 ? "s" : ""} ago`
        );
      }
    };

    // Update every minute
    const interval = setInterval(updateAgoTime, 60000);

    // Initial calculation
    updateAgoTime();

    return () => clearInterval(interval);
  }, [timestamp]);

  return <h3 className="ca-name">{timeAgo}</h3>;
};
