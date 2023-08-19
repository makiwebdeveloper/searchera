export default function Footer() {
  return (
    <footer className="bg-[#E8E8E8] text-black rounded-t-[80px] pt-[70px] pb-[24px]">
      <div className="container">
        <div className="flex flex-col laptop:flex-row laptop:justify-between">
          <div className="space-y-[25px]">
            <img src="/images/logo-black.svg" alt="searchera black logo" />
            <p className="w-[315px] leading-[20.8px]">
              Наша платформа використовує потужність штучного інтелекту, щоб
              спростити ваш шлях підбору персоналу.
            </p>
          </div>
          <div className="mt-[48px] w-full mx-auto tablet:w-[496px] laptop:mt-[15px] laptop:mx-0 grid grid-cols-2 gird-rows-4 tablet:grid-cols-4 tablet:grid-rows-3 gap-y-[26px] tablet:gap-y-[16px] gap-x-[16px] tablet:gap-x-0 leading-[20.8px]">
            <p className="tablet:col-span-2">Підписка та ціни</p>
            <p>Блог</p>
            <p>Документація</p>
            <p className="tablet:col-span-2">Персональний менеджер</p>
            <p>Новини</p>
            <p>Партнери</p>
            <p className="tablet:col-span-2">Політика конфіденційності</p>
            <p>Кар’єра</p>
            <p>Контакти</p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-black mt-[48px] mb-[32px]"></div>
        <p className="text-center">
          &copy; 2023 - Searchera Corp. Всі права захищені.
        </p>
      </div>
    </footer>
  );
}
