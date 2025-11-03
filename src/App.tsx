import { useState } from "react";
import "./App.css";
import { Profile, type TimeFrame } from "./components/Profile";
import { TimeBox } from "./components/TimeBox";
import data from "./data.json";

function App() {
  const items: React.ReactElement[] = [];
  const [filter, setFilter] = useState<TimeFrame>("weekly");

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
    <main className="mx-auto grid w-fit gap-y-6 py-20 xl:grid-cols-4 xl:gap-7.5 xl:px-8 xl:pt-32">
      <Profile timeFrame={filter} className="xl:row-start-1 xl:row-end-3" filterHandler={setFilter}/>
      {items}
    </main>
  );
}

export default App;
