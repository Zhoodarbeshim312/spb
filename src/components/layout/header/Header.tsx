import { FC } from "react";
import scss from "./Header.module.scss";
import headerLogo from "@/assets/images/headerLogo.svg";
import Link from "next/link";
import { RxDotFilled } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { SlSocialVkontakte } from "react-icons/sl";

const Header: FC = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={headerLogo.src} alt="img" />
            <div className={scss.line}></div>
            <p>
              Санкт-Петербург, <br /> Горелово, <br /> Волхонское шоссе, 6
            </p>
          </div>
          <div className={scss.router}>
            <Link href={"/admin"}>Admin</Link>
          </div>
          <button>Посмотреть каталог товаров</button>
          <div className={scss.social}>
            <p>
              <RxDotFilled
                style={{
                  color: "#4EDD4C",
                }}
              />
              Задайте вопрос <span>online</span>
            </p>
            <div className={scss.online}>
              <button className={scss.whatsapp}>
                <FaWhatsapp />
              </button>
              <button className={scss.telegram}>
                <RiTelegram2Fill />
              </button>
              <button className={scss.wkantact}>
                <SlSocialVkontakte />
              </button>
            </div>
          </div>
          <div className={scss.contact}>
            <h3>+7 (812) 325-50-55</h3>
            <p>Перезвоним Вам</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
