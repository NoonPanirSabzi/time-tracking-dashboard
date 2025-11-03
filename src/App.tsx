import { useState } from "react";
import "./App.css";
import { Profile, type TimeFrame } from "./components/Profile";
import { TimeBox } from "./components/TimeBox";
import data from "./data.json";

function App() {
  const items: React.ReactElement[] = [];
  const [filter, setFilter] = useState<TimeFrame>("weekly")
  
  data.forEach((node, index) => {
    items.push(
      <TimeBox
        key={index}
        activity={node.title}
        timeFrame={filter}
        current={node.timeframes[filter].current}
        previous={node.timeframes[filter].previous}
      />,
    );
  });

  return (
    <main className="grid mx-auto w-fit gap-x-7.5 gap-y-6 py-20">
      <Profile timeFrame={filter}/>
      {items}
    </main>
  );
}

export default App;
