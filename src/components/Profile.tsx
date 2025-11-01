export function Profile() {
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
      <div className="flex justify-between px-8 py-6 text-lg font-normal">
        <button type="button" className="cursor-pointer text-[#7078C9]">
          Daily
        </button>
        <button type="button" className="cursor-pointer text-white">
          Weekly
        </button>
        <button type="button" className="cursor-pointer text-[#7078C9]">
          Monthly
        </button>
      </div>
    </article>
  );
}
