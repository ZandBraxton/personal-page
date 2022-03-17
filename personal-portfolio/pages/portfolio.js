import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import weather from "../public/images/weather.png";
import shopping from "../public/images/shopping.png";
import battleship from "../public/images/battleship.jpg";
import todo from "../public/images/todo.png";

import { Navigation, Pagination, EffectCoverflow } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "../styles/Portfolio.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// init Swiper:

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main_wrapper}>
        <div className={styles.port_container}>
          <div className={styles.swiper_contain}></div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination]}
            className={styles.mySwiper}
          >
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.content}>
                <h1>E-Commerce App</h1>
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
              <div className={styles.content}>
                <h1>Weather App</h1>
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
              <div className={styles.content}>
                <h1>Todo List</h1>
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
              <div className={styles.content}>
                <h1>Battleship</h1>
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
        </div>
      </main>
    </Layout>
  );
}
