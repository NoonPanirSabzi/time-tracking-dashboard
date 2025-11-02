interface TimeBoxProps {
  activity: string;
  timeFrame: "daily" | "weekly" | "monthly";
  current: number;
  previous: number;
}

export function TimeBox({ activity, timeFrame, current, previous }: TimeBoxProps) {
  const activityColor: Record<string, string> = {
    Work: "#FF8B64",
    Play: "#55C2E6",
    Study: "#FF5E7D",
    Exercise: "#4BCF82",
    Social: "#7335D2",
    "Self Care": "#F1C75B",
  };
  
  const tfText = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month"
  }

  return (
    <article
      style={{ backgroundColor: activityColor[activity] }}
      className="relative w-81.75 rounded-2xl pt-9.5"
    >
      <img src={`/images/icon-${activity}.svg`} className="absolute -top-1 right-3" />
      <div className="translate-y-px rounded-2xl bg-[#1C204B] px-6 py-7">
        <div className="mb-1.5 flex items-center justify-between">
          <p className="text-lg leading-5.25 font-medium text-white">{activity}</p>
          <div className="flex gap-x-0.75">
            <div className="h-1.25 w-1.25 rounded-full bg-[#BBC0FF]"></div>
            <div className="h-1.25 w-1.25 rounded-full bg-[#BBC0FF]"></div>
            <div className="h-1.25 w-1.25 rounded-full bg-[#BBC0FF]"></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[2rem] leading-9.5 font-light text-white">{current}hrs</p>
          <p className="text-[0.9375rem] text-[#BBC0FF]">{tfText[timeFrame]} - {previous}hrs</p>
        </div>
      </div>
    </article>
  );
}
