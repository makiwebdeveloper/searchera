import { faqData } from "../../utils";

export default function FAQ() {
  return (
    <section id="faq" className="min-h-screen center">
      <div className="container">
        <h2 className="subtitle w-full tablet:w-[472px] mx-auto text-center">
          У нас є відповідь на всі запитання
        </h2>
        <div className="mt-[100px] space-y-[32px]">
          {faqData.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
