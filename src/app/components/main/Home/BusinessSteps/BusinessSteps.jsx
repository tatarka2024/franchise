import Container from "@/utils/Container";
import StepHeader from "./StepHeader";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import SixthStep from "./SixthStep";

export default function BusinessSteps() {
  return (
    <Container>
      <div id="opening-steps" className="pb-[120px] lg:pb-[180px]">
        <h2 className="font-michelin text-white text-4xl font-bold text-center mb-10 sm:mb-[43px]">
          Етапи відкриття бізнесу
        </h2>
        <ul className="flex flex-col gap-24 md:gap-[140px]">
          <li className="flex flex-col gap-6 md:gap-10">
            <StepHeader num={"1"} title={"Узгодження локації"} />
            <FirstStep />
          </li>
          <li className="flex flex-col gap-6 md:gap-10">
            <StepHeader num={"2"} title={"Підписання договору"} />
            <SecondStep />
          </li>
          <li className="flex flex-col gap-6 md:gap-10">
            <StepHeader num={"3"} title={"Розробка Проекту"} />
            <ThirdStep />
          </li>
          <li className="flex flex-col gap-6 md:gap-10">
            <StepHeader num={"4"} title={"Ремонт + Закупівля Обладнання"} />
            <FourthStep />
          </li>
          <li className="flex flex-col gap-6 md:gap-10">
            <StepHeader num={"5"} title={"Навчання персоналу"} />
            <FifthStep />
          </li>
          <li className="flex flex-col gap-6 md:gap-10">
            <StepHeader num={"6"} title={"Відкриття"} />
            <SixthStep />
          </li>
        </ul>
      </div>
    </Container>
  );
}
