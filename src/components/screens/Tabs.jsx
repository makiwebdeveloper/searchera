import { useMemo, useState } from "react";
import { tabsData } from "../../utils";
import { cn } from "../../lib/cn";
import Button from "../ui/Button";

export default function Tabs() {
  const [selectedTabId, setSelectedTabId] = useState(tabsData[0].id);
  const selectedTab = useMemo(() => {
    return tabsData.find((tab) => tab.id === selectedTabId);
  }, [selectedTabId]);

  const firstTabId = tabsData[0].id;
  const lastTabId = tabsData[tabsData.length - 1].id;

  return (
    <section className="relative container mt-[64px] pt-[127px]">
      <h2 className="relative subtitle w-full tablet:w-[500px] text-center mx-auto">
        Основні можливості платформи
      </h2>
      <div className="relative z-[1] mt-[102px]">
        <div className="flex gap-10">
          {tabsData.map((tab) => (
            <button
              className={cn(
                "relative flex-1 px-[24px] py-[30px] text-[20px] font-[400]",
                tab.id === selectedTabId &&
                  `bg-[#ac91f91a] backdrop-blur-[15px] rounded-t-[40px] font-[700]`
              )}
              onClick={() => setSelectedTabId(tab.id)}
              key={tab.id}
            >
              <span
                className={cn(
                  tab.id !== lastTabId && tab.id === selectedTabId
                    ? "hidden laptop:block pointer-events-none w-10 h-10 bg-[#ac91f91a] absolute -right-10 bottom-0 after:content-[''] after:absolute after:w-20 after:h-20 after:bg-black after:rounded-full after:bottom-0 after:-right-10"
                    : ""
                )}
              ></span>
              <span className="hidden laptop:block">{tab.title}</span>
              <span className="laptop:hidden">{tab.id}</span>
              <span
                className={cn(
                  tab.id !== firstTabId && tab.id === selectedTabId
                    ? "hidden laptop:block pointer-events-none w-10 h-10 bg-[#ac91f91a] absolute -left-10 bottom-0 after:content-[''] after:absolute after:w-20 after:h-20 after:bg-black after:rounded-full after:bottom-0 after:-left-10"
                    : ""
                )}
              ></span>
            </button>
          ))}
        </div>
        <div
          className={cn(
            "px-[30px] tablet:px-[80px] laptop:px-[116px] pt-[70px] bg-[#ac91f91a] backdrop-blur-[15px] rounded-b-[40px]",
            selectedTabId === firstTabId
              ? "rounded-tr-[40px]"
              : selectedTabId === lastTabId
              ? "rounded-tl-[40px]"
              : "rounded-t-[40px]"
          )}
        >
          <h5 className="text-[24px] font-[700] mb-[15px] text-center laptop:hidden">
            {selectedTab.title}
          </h5>
          <div className="flex flex-col gap-[25px] laptop:flex-row laptop:justify-between laptop:items-end">
            <p className="laptop:w-[576px] text-center laptop:text-left">
              {selectedTab.text}
            </p>
            <Button variant="secondary" className="px-[45px]">
              Дізнатись більше
            </Button>
          </div>
          <img
            src="/images/tabs/example.png"
            alt="example"
            className="mt-[56px]"
          />
        </div>
      </div>
      <div
        className="absolute w-[500px] rotate-[15deg] h-[900px] top-[50px] left-[-400px] rounded-full blur-[150px]"
        style={{
          background: "linear-gradient(#306d64, #274175)",
        }}
      ></div>
      <div
        className="absolute w-[500px] rotate-[30deg] h-[900px] bottom-[-200px] right-[-400px] rounded-full blur-[200px]"
        style={{
          background: "linear-gradient(#FFD361, #D795FF)",
        }}
      ></div>
    </section>
  );
}
