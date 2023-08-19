import { Link } from "react-router-dom";
import { navbarLinks } from "../utils";
import { buttonVariants } from "./ui/Button";

export default function Header() {
  return (
    <header className="my-[38px] w-full absolute z-[10] top-0">
      <div className="flex container justify-between items-center">
        <a href="/">
          <img src="/images/logo.svg" className="w-[150px] h-[25px]" />
        </a>
        <nav className="hidden laptop:block">
          <ul className="flex gap-[24px]">
            {navbarLinks.map((item) => (
              <li key={item.path}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="gap-[16px] hidden laptop:flex">
          <Link
            to="/signin"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            Увійти
          </Link>
          <Link to="/signup" className={buttonVariants({ size: "sm" })}>
            Створити акаунт
          </Link>
        </div>
      </div>
    </header>
  );
}
