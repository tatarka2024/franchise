export default function Details({ details }) {
  return (
    <ul className="flex flex-col gap-4 md:gap-[21px] w-full max-w-[300px] mx-auto">
      {details.map(({ name, value }, index) => (
        <li
          key={index}
          className="flex justify-between w-full items-center first:flex-col first:items-start"
        >
          <p
            className={`text-base-m font-bold ${
              index === details.length - 1 ? "font-bold dark-txt-gradient" : ""
            } ${index === 0 ? "text-left w-full" : ""}`}
            dangerouslySetInnerHTML={{ __html: name }}
          />
          <p
            className={`font-michelin  text-s ${
              index === details.length - 1 || index === details.length - 2
                ? "font-bold dark-txt-gradient"
                : "font-normal"
            } ${index === 0 ? "text-right w-full" : ""}`}
          >
            {value}
          </p>
        </li>
      ))}
    </ul>
  );
}
