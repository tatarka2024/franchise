import Container from "@/utils/Container";
import Image from "next/image";

export default function About() {
  return (
    <div className="overflow-hidden">
      <Container>
        <div id="about" className="py-[120px] lg:py-[180px]">
          <p className="text-base-l text-white font-semibold mb-2 sm:mb-[13px]">
            Про нас
          </p>
          <h2 className="yellow-txt-gradient font-michelin text-3xl font-bold mb-8 sm:mb-[55px]">
            Татарка - це...
          </h2>
          <div className="flex flex-col gap-5 sm:flex-row">
            <div className="w-full h-[287px] xs:h-[400px] sm:h-[450px] l:h-[545px] sm:w-[32.1%] rounded-md overflow-hidden">
              <Image
                src="/images/about/img1.webp"
                alt="чоловік демонструє продукцію закладу Татарка"
                width={360}
                height={545}
                className="w-full h-full object-cover object-[center_70%] xs:object-bottom"
              />
            </div>
            <div className=" text-white text-ml relative sm:w-[66%]">
              <Image
                src="/icons/about/arrow.svg"
                alt="іконка стрілки"
                width={167}
                height={165}
                className="absolute w-[140px] sm:w-[27.6%] top-[14%] xs:top-[7%] right-[-28px] rotate-[28deg] lg:rotate-0 lg:top-0 lg:right-[8.5%]"
              />
              <p className="mb-[92px] l:mb-[135px] max-w-[530px]">
                "Татарка: Чебуреки по-кримськи" — це мережа закладів харчування,
                що відроджує традиції кримськотатарської кухні у самому серці
                Києва. Наші заклади пропонують автентичні чебуреки за класичними
                рецептами, поєднуючи смак традицій із сучасним підходом до
                якості та сервісу.
              </p>
              <p className="mb-5 sm:mb-[44px] max-w-[441px] l:ml-[25.7%]">
                <span className="yellow-txt-gradient ">Ми - команда</span>, яка
                обʼєднала любов до якісної їжі, комфорту та гостинності. Наша
                місія - створювати унікальний гастрономічний досвід, який
                залишить теплі спогади та бажання повернутися знову.
              </p>
              <div className="w-full h-[177px] rounded-md overflow-hidden">
                <Image
                  src="/images/about/img2.webp"
                  alt="відвідувачі закладу Татарка куштують страви"
                  width={304}
                  height={177}
                  className="w-full h-full object-cover object-[center_36%] sm:object-[center_70.4%]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
