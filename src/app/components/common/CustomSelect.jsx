import { Select, SelectItem } from "@heroui/react";

export default function CustomSelect({
  selectedOption,
  setSelectedOption,
  variant,
  options,
}) {
  return (
    <Select
      className={`w-full border-white rounded-[4px] customSelect text-white font-michelin  ${
        variant === "default" && "font-raleway"
      } ${variant !== "default" && "md:h-[68px] justify-center items-center"}`}
      selectedKey={selectedOption}
      popoverProps={{
        classNames: {
          content: "p-0 border-small border-white rounded-[2px] text-white",
        },
      }}
      variant="bordered"
      defaultSelectedKeys={
        variant === "upcoming"
          ? ["foodcourt"]
          : variant === "open"
          ? ["bistro"]
          : ["restaurant"]
      }
      classNames={{
        listboxWrapper: "bg-zinc",
        popoverContent: "text-white  border-white",
        value: "selectValue",
      }}
      radius="sm"
      id="businessType"
      value={selectedOption}
      onSelectionChange={(key) => setSelectedOption(key)}
      onChange={(e) => setSelectedOption(e.target.value)}
      aria-label="establishments"
    >
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
