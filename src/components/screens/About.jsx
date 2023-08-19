import Button from "../ui/Button";

export default function About() {
  return (
    <section id="about" className="h-screen center relative z-[10]">
      <div className="container">
        <div className="flex gap-[25px] flex-col laptop:flex-row laptop:items-end laptop:justify-between">
          <p className="subtitle w-full laptop:w-[848px]">
            Наша платформа допомагає компаніям{" "}
            <span className="text-accent">швидко та ефективно</span> знаходити
            потрібних спеціалістів
          </p>
          <p className="text-[#A7A7A7] w-4/5 tablet:w-[408px] mb-[6px]">
            У Searchera ми розуміємо, з якими проблемами стикаються спеціалісти
            з управління персоналом під час пошуку відповідних кадрів для своїх
            організацій.
          </p>
        </div>
        <div
          className="h-[1px] w-full my-[40px]"
          style={{
            background: "linear-gradient(90deg, #fff, transparent)",
          }}
        ></div>
        <div className="flex gap-[25px] flex-col laptop:flex-row laptop:items-end laptop:justify-between">
          <p className="subtitle w-full laptop:w-[848px]">
            Ми <span className="text-accent">спрощуємо процес</span> підбору
            персоналу та даємо можливість приймати обґрунтовані рішення
          </p>
          <p className="text-[#A7A7A7] w-4/5 tablet:w-[408px] mb-[6px]">
            Ось чому ми розробили платформу пошуку талантів на базі штучного
            інтелекту, яка надає доступ до розширеної аналітики у вас під рукою.
          </p>
        </div>
        <div className="mt-[102px] w-fit mx-auto">
          <Button variant="primary">Спробувати демо версію</Button>
        </div>
      </div>
    </section>
  );
}
