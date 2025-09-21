import { FC } from "react";
import scss from "./Hero.module.scss";
import heroBack from "@/assets/images/heroBack.svg";

const Hero: FC = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${heroBack.src})`,
        minHeight: "90vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={scss.Hero}
    >
      <div className="container">
        <div className={scss.content}>
          <h1>
            ПРОДАЖА кровельных <br /> материалов
            <span>
              с доставкой <br /> по Санкт-Петербургу <br /> и области
            </span>
            в день заказа
          </h1>
          <p>
            За 1 минуту пройдите тест и
            <span>
              рассчитайте <br /> стоимость кровли
            </span>
            под ваш объект <br /> с точностью 97% и получите подарки
          </p>
          <button>РАССЧИТАТЬ СТОИМОСТЬ МАТЕРИАЛОВ</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
