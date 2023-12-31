import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-hero bg-cover pt-[calc(38px*2)] tablet:pt-[calc(38px*2+42px)]">
      <div className="relative z-[5]">
        <h1 className="w-[350px] tablet:w-[600px] laptop:w-[940px] mx-auto mt-[66px] text-center title">
          Революція в підборі кадрів за допомогою{" "}
          <span className="text-accent">штучного інтелекту</span>
        </h1>
        <p className="w-[300px] laptop:w-[531px] mx-auto mt-[24px] text-center text-[16px] tablet:text-[25px]">
          Ми використовуємо штучний інтелект, щоб спростити пошук талантів.
        </p>
        <div className="mx-auto w-fit flex flex-col items-center gap-[40px] mt-[64px] tablet:flex-row">
          <Button variant="primary">Спробувати демо версію</Button>
          <Button variant="link">Дізнатись більше</Button>
        </div>
      </div>
      <div className="relative z-[5] mt-[56px]">
        <img
          src="/images/hero/example-left.png"
          alt="example of application"
          className="absolute left-0 top-[78px] w-[12%]"
        />
        <img
          src="/images/hero/example-center.png"
          alt="example of application"
          className="mx-auto w-[68%]"
        />
        <img
          src="/images/hero/example-right.png"
          alt="example of application"
          className="absolute right-0 top-[78px] w-[12%]"
        />
      </div>
      <img
        src="/images/hero/points.png"
        className="absolute top-0 left-0 w-full pointer-events-none z-[0]"
      />
      <img
        src="/images/hero/circles.png"
        className="absolute top-[10%] pointer-events-none z-[0]"
      />
    </section>
  );
}
