import { Link } from "react-router-dom";
import { navbarLinks } from "../utils";
import { buttonVariants } from "./ui/Button";

export default function Header() {
  return (
    <header className="my-[38px] px-[64px] w-full absolute z-[10] top-0">
      <div className="flex justify-between items-center">
        <a href="/">
          <img src="/images/logo.png" className="w-[150px] h-[25px]" />
        </a>
        <nav>
          <ul className="flex gap-[24px]">
            {navbarLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-[16px]">
          <Link className={buttonVariants({ variant: "outline", size: "sm" })}>
            Увійти
          </Link>
          <Link className={buttonVariants({ size: "sm" })}>
            Створити акаунт
          </Link>
        </div>
      </div>
    </header>
  );
}
