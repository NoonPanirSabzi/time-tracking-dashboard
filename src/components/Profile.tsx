interface ProfileProps {
  timeFrame: "daily" | "weekly" | "monthly";
}
export function Profile({ timeFrame }: ProfileProps) {
  return (
    <article className="w-81.75 rounded-2xl bg-[#1C204B]">
      <div className="flex items-center gap-x-5 rounded-2xl bg-[#5747EA] py-8.5 ps-8 pe-10">
        <img
          src="/images/image-jeremy.png"
          alt="jeremy robson picture"
          className="w-16 rounded-full border-[0.1875rem] border-[#FFFFFF]"
        />
        <div>
          <p className="mb-1 text-[0.9375rem] font-normal text-[#BBC0FF]">
            Report for
          </p>
          <p className="text-2xl font-light text-white">Jeremy Robson</p>
        </div>
      </div>
      <div className="flex justify-between px-8 py-4 text-lg leading-5.25 font-normal">
        <button
          type="button"
          className={`cursor-pointer rounded-xl px-3 py-2 hover:bg-[#5747EA] ${timeFrame === "daily" ? "text-white" : "text-[#7078C9] hover:text-[#c2c4db]"}`}
        >
          Daily
        </button>
        <button
          type="button"
          className={`cursor-pointer rounded-xl px-3 py-2 hover:bg-[#5747EA] ${timeFrame === "weekly" ? "text-white" : "text-[#7078C9] hover:text-[#c2c4db]"}`}
        >
          Weekly
        </button>
        <button
          type="button"
          className={`cursor-pointer rounded-xl px-3 py-2 hover:bg-[#5747EA] ${timeFrame === "monthly" ? "text-white" : "text-[#7078C9] hover:text-[#c2c4db]"}`}
        >
          Monthly
        </button>
      </div>
    </article>
  );
}
