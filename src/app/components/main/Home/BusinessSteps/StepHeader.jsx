export default function StepHeader({ num, title }) {
  return (
    <div className="flex rounded-[4px] rounded-tl-lg rounded-bl-lg  bg-yellow-gradient w-full justify-between items-center">
      <div className="bg-white rounded-lg py-3  l:py-[18px] w-[88px] md:w-[170px] flex justify-center items-center">
        <p className="italic font-bold text-base-l">{num} крок</p>
      </div>

      <h2 className="pr-3 pl-0   md:pr-7 font-michelin text-xxs text-right">
        {title}
      </h2>
    </div>
  );
}
