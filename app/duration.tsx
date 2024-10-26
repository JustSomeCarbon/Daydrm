"use client"; // client side component

import { useState } from "react";

interface DurationInputProps {
  onDurationChange: (duration: number) => void; // pass duration back to parent
};

const Duration = (props: DurationInputProps) => {
 const [duration, setDuration] = useState<number>(5); // 5 sec default
 const { onDurationChange } = props; // destructure props

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const value = Number(e.target.value);
   setDuration(value);
   onDurationChange(value * 1000);
 }

  return (
    <div>
      <label htmlFor="duration">duration</label>
      <input 
      type="number"
      id="duration"
      name="duration"
      value={duration}
      onChange={handleChange}
      min="5"
      max="30"
      />
    </div>
  );
}

export default Duration;
