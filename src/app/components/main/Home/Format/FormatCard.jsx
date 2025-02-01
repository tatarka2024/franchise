export default function FormatCard({ info, descr, title }) {
  return (
    <li className="bg-white rounded-[8px] px-4 py-8 md:p-9 flex flex-col justify-between">
      <div>
        <h3 className="font-michelin text-xl text-center mb-2 md:mb-6">
          {title}
        </h3>
        <p className="text-m-resp leading-[1.22] text-center mb-[59px]">
          {descr}
        </p>
      </div>

      <ul className="flex flex-col gap-2">
        {info.map(({ name, txt }, index) => (
          <li
            key={index}
            className="flex w-full justify-between gap-8 bg-yellow rounded-sm px-3 py-2 items-center"
          >
            <p className="text-mlg leading-[2.35] font-bold">{name}</p>
            <p className="text-sm" dangerouslySetInnerHTML={{ __html: txt }} />
          </li>
        ))}
      </ul>
    </li>
  );
}
