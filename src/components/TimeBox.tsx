import { type TimeFrame } from "./Profile";

interface TimeBoxProps {
  activity: string;
  timeFrame: TimeFrame;
  current: number;
  previous: number;
}

export function TimeBox({
  activity,
  timeFrame,
  current,
  previous,
}: TimeBoxProps) {
  const activityColor: Record<string, string> = {
    Work: "#FF8B64",
    Play: "#55C2E6",
    Study: "#FF5E7D",
    Exercise: "#4BCF82",
    Social: "#7335D2",
    "Self Care": "#F1C75B",
  };

  const displayTimeFrame = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
  };

  return (
    <article
      style={{ backgroundColor: activityColor[activity] }}
      className="relative max-w-81.75 overflow-hidden rounded-2xl pt-9.5 xl:max-w-3xs xl:pt-11.25"
    >
      <img
        src={`/images/icon-${activity}.svg`}
        className="absolute -top-1 right-3"
      />
      <div className="translate-y-px rounded-2xl bg-[#1C204B] px-6 py-7 xl:h-full xl:pt-7.25 xl:pr-8.75 xl:pb-8 xl:pl-7.5">
        <div className="mb-1.5 flex items-center justify-between xl:mb-6">
          <p className="text-lg leading-5.25 font-medium text-white">
            {activity}
          </p>
          <div className="flex gap-x-0.75">
            <div className="h-1.25 w-1.25 rounded-full bg-[#BBC0FF]"></div>
            <div className="h-1.25 w-1.25 rounded-full bg-[#BBC0FF]"></div>
            <div className="h-1.25 w-1.25 rounded-full bg-[#BBC0FF]"></div>
          </div>
        </div>
        <div className="flex items-center justify-between xl:flex-col xl:items-start xl:gap-y-2">
          <p className="text-[2rem] leading-9.5 font-light text-white xl:text-[3.5rem] xl:leading-16.5">
            {current}hrs
          </p>
          <p className="text-[0.9375rem] text-[#BBC0FF] xl:leading-4.5">
            {displayTimeFrame[timeFrame]} - {previous}hrs
          </p>
        </div>
      </div>
    </article>
  );
}
