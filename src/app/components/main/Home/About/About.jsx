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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-[minmax(0,32.1%)_minmax(0,1fr)] sm:items-stretch">
            <div className="w-full h-[287px] xs:h-[400px] sm:h-full sm:min-h-0 rounded-md overflow-hidden">
              <Image
                src="/images/about/img1.webp"
                alt="чоловік демонструє продукцію закладу Татарка"
                width={360}
                height={640}
                className="w-full h-full min-h-0 object-cover object-[center_70%] xs:object-bottom"
              />
            </div>
            <div className="text-white text-mlg relative flex min-h-0 flex-col sm:min-h-0 justify-between">
              <p className="mb-5 sm:mb-[44px]">
                Концепція ресторанів кримської кухні базується на ідеї щирої
                гостинності та поваги до традицій, переосмислених у сучасному
                форматі.
              </p>
              <p className="mb-5 sm:mb-[44px]">
                Це простір, де автентичні смаки поєднуються з комфортною
                атмосферою міського ресторану. Інтер’єр і подача створюють
                відчуття дому, без показної етніки, але з глибокою культурною
                ідентичністю.
              </p>
              <p className="mb-5 sm:mb-[44px]">
                Кухня є серцем закладу — проста, зрозуміла, приготована з увагою
                до деталей і смаку. Сервіс побудований на теплій, ненав’язливій
                взаємодії з гостем. Ресторан стає місцем зустрічей, спогадів і
                живого знайомства з культурою через їжу та атмосферу.
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
