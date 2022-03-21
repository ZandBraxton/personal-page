import Image from "next/image";
import weather from "../public/images/weather.png";
import shopping from "../public/images/shopping.png";
import battleship from "../public/images/battleship.jpg";
import todo from "../public/images/todo.png";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "../styles/Portfolio.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowDimensions from "../Hooks/useWindowDimensions";

export default function Portfolio() {
  const { height, width } = useWindowDimensions();
  return (
    <main id="portfolio" className={styles.portfolio_wrapper}>
      {width <= 768 ? (
        <div className={styles.flex_wrapper}>
          <div className={styles.project_container}>
            <h1>E-Commerce App</h1>
            <Image
              src={shopping}
              alt={"project"}
              width={426}
              height={240}
              layout={"responsive"}
            ></Image>
            <div className={styles.link_container}>
              <a href="https://github.com/ZandBraxton/shopping-cart">
                <span>Github</span>
              </a>
              <a href="https://zandbraxton.github.io/shopping-cart/">
                <span>Live</span>
              </a>
            </div>
          </div>
          <hr></hr>
          <div className={styles.project_container}>
            <h1>Weather App</h1>
            <Image
              src={weather}
              alt={"project"}
              width={426}
              height={240}
              layout={"responsive"}
            ></Image>
            <div className={styles.link_container}>
              <a href="https://github.com/ZandBraxton/shopping-cart">
                <span>Github</span>
              </a>
              <a href="https://zandbraxton.github.io/shopping-cart/">
                <span>Live</span>
              </a>
            </div>
          </div>
          <hr></hr>
          <div className={styles.project_container}>
            <h1>Todo List</h1>
            <Image
              src={todo}
              alt={"project"}
              width={426}
              height={240}
              layout={"responsive"}
            ></Image>
            <div className={styles.link_container}>
              <a href="https://github.com/ZandBraxton/shopping-cart">
                <span>Github</span>
              </a>
              <a href="https://zandbraxton.github.io/shopping-cart/">
                <span>Live</span>
              </a>
            </div>
          </div>
          <hr></hr>
          <div className={styles.project_container}>
            <h1>Battleship</h1>
            <Image
              src={battleship}
              alt={"project"}
              width={426}
              height={240}
              layout={"responsive"}
            ></Image>
            <div className={styles.link_container}>
              <a href="https://github.com/ZandBraxton/shopping-cart">
                <span>Github</span>
              </a>
              <a href="https://zandbraxton.github.io/shopping-cart/">
                <span>Live</span>
              </a>
            </div>
          </div>
          <div className={styles.view_more_portable}>
            <a href="https://github.com/ZandBraxton/shopping-cart">
              <span>View more at Github</span>
            </a>
          </div>
        </div>
      ) : (
        <div className={styles.port_container}>
          <div className={styles.swiper_contain}></div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            loop={true}
            spaceBetween={20}
            autoHeight={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className={styles.mySwiper}
          >
            <SwiperSlide className={styles.swiper_slide}>
              <h1>E-Commerce App</h1>
              <div className={styles.layer}></div>
              <div className={styles.content}>
                <div className={styles.link_container}>
                  <a
                    className={styles.img_link}
                    href="https://github.com/ZandBraxton/shopping-cart"
                  >
                    <span className={styles.img_button}>Github</span>
                  </a>
                  <a
                    className={styles.img_link}
                    href="https://zandbraxton.github.io/shopping-cart/"
                  >
                    <span className={styles.img_button}>Live</span>
                  </a>
                </div>
                <Image
                  src={shopping}
                  alt={"project"}
                  width={640}
                  height={360}
                  layout={"responsive"}
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <h1>Weather App</h1>
              <div className={styles.layer}></div>
              <div className={styles.content}>
                <div className={styles.link_container}>
                  <a
                    className={styles.img_link}
                    href="https://github.com/ZandBraxton/Weather-App"
                  >
                    <span className={styles.img_button}>Github</span>
                  </a>
                  <a
                    className={styles.img_link}
                    href="https://zandbraxton.github.io/Weather-App/"
                  >
                    <span className={styles.img_button}>Live</span>
                  </a>
                </div>
                <Image
                  src={weather}
                  alt={"project"}
                  width={640}
                  height={360}
                  layout={"responsive"}
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <h1>Todo List</h1>
              <div className={styles.layer}></div>
              <div className={styles.content}>
                <div className={styles.link_container}>
                  <a
                    className={styles.img_link}
                    href="https://github.com/ZandBraxton/todo-list"
                  >
                    <span className={styles.img_button}>Github</span>
                  </a>
                  <a
                    className={styles.img_link}
                    href="https://zandbraxton.github.io/todo-list/"
                  >
                    <span className={styles.img_button}>Live</span>
                  </a>
                </div>
                <Image
                  src={todo}
                  alt={"project"}
                  width={640}
                  height={360}
                  layout={"responsive"}
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <h1>Battleship</h1>
              <div className={styles.layer}></div>
              <div className={styles.content}>
                <div className={styles.link_container}>
                  <a
                    className={styles.img_link}
                    href="https://github.com/ZandBraxton/BattleShip"
                  >
                    <span className={styles.img_button}>Github</span>
                  </a>
                  <a
                    className={styles.img_link}
                    href="https://zandbraxton.github.io/BattleShip/"
                  >
                    <span className={styles.img_button}>Live</span>
                  </a>
                </div>
                <Image
                  src={battleship}
                  alt={"project"}
                  width={640}
                  height={360}
                  layout={"responsive"}
                ></Image>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className={styles.view_more}>
            <a href="https://github.com/ZandBraxton">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              View more at Github
            </a>
          </div> */}
        </div>
      )}
    </main>
  );
}
