import React from "react";

export default function Effect() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(setTime(new Date(), 1000));
    return () => clearTimeout(timer);
  }, []);
  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
}
