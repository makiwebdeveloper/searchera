import { Input, Button } from "../ui";
import { useState } from "react";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(JSON.stringify({ name, email }, null, 2));
    console.table({ name, email });
  };

  return (
    <section id="contacts" className="container relative h-screen center">
      <div className="relative z-[5] w-full space-y-[50px] tablet:space-y-[80px]">
        <h2 className="subtitle w-full laptop:w-[722px] mx-auto text-center">
          Все ще залишились питання? заповніть форму і ми з вами зв’яжемось
        </h2>
        <form
          onSubmit={submitHandler}
          className="flex gap-[16px] flex-col laptop:flex-row items-center bg-[#ac91f91a] backdrop-blur-[15px] rounded-[20px] p-[24px]"
        >
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше ім’я"
            className="w-full"
          />
          <Input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full"
          />
          <Button
            type="submit"
            variant="primary"
            className="ml-[16px] py-[16px] w-full"
          >
            Відправити
          </Button>
        </form>
      </div>
      <div className="bg-[#5F67B08A] w-[500px] h-[500px] absolute rounded-full blur-[200px] z-[0] pointer-events-none"></div>
      <img
        src="/images/contacts/circles.png"
        className="absolute pointer-events-none"
      />
    </section>
  );
}
