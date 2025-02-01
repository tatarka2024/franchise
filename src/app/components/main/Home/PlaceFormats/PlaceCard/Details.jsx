export default function Details({ details }) {
  return (
    <ul className="flex flex-col gap-4 md:gap-[21px] w-full max-w-[300px] mx-auto">
      {details.map(({ name, value }, index) => (
        <li key={index} className="flex justify-between w-full items-center">
          <p
            className={`text-base-m font-bold ${
              index === details.length - 1 ? "font-bold dark-txt-gradient" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: name }}
          />
          <p
            className={`font-michelin  text-s ${
              index === details.length - 1
                ? "font-bold dark-txt-gradient"
                : "font-normal"
            }`}
          >
            {value}
          </p>
        </li>
      ))}
    </ul>
  );
}
