import { Slider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const EmiCal = () => {
  const [amount, setAmount] = useState(0);
  const [duration, setDuration] = useState(6);
  const [interest, setInterest] = useState(0);
  const [permonth, setPermonth] = useState(0);
  const handleInterestChange = (event, interest) => {
    setInterest(interest);
  };
  const handleDurationChange = (event, duration) => {
    setDuration(duration);
  };

  useEffect(() => {
    const tempinterest = (amount * (interest * 0.01)) / duration;


    // Calculating total payment
    const temppermonth = (amount / duration + tempinterest).toFixed(2);
    setPermonth(temppermonth);



  },[amount,interest,duration])
  return (
    <>
      <div className="m-8 flex justify-center">
        <div className="bg-indigo-200 rounded p-5 md:w-1/2 sm:w-full">
          <h3 className="bold text-sky-600 font-bold">Emi-Calculator</h3>
          <div className="m-10  flex
          items-start">
            <TextField
              className=""
              id="standard-basic"
              label="Principle Amount"
              variant="standard"
              onChange={((e)=> {setAmount(e.target.value)})}
            />
          </div>
          <div
            className="m-10 flex-col flex
          items-start"
          >
            <Slider
              aria-label="Volume"
              valueLabelDisplay="on"
              value={interest}
              onChange={handleInterestChange}
            />
            <label className="">Percentage (%)</label>
          </div>
          <div className="m-10 flex-col flex
          items-start">
            <Slider
              aria-label="Volume"
              min={1}
              defaultValue={6}
              max={48}
              valueLabelDisplay="on"
              value={duration}
              onChange={handleDurationChange}
            />
          <label className="">Duration (In. mon)</label>
          </div>
          <div className="final-amount-permonth font-bold">
                {permonth} / permonth
          </div>
        </div>
      </div>
    </>
  );
};

export default EmiCal;
