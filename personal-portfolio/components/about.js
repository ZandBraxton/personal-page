import styles from "../styles/About.module.scss";
import Image from "next/image";
import headshot from "../public/images/headshot-smaller.png";
import VanillaTilt from "vanilla-tilt";
import React, { useEffect, useRef } from "react";
import useWindowDimensions from "../Hooks/useWindowDimensions";

export default function About() {
  const { height, width } = useWindowDimensions();
  function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
  }

  const options = {
    speed: 200,
    max: 10,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <main id="about" className={styles.about}>
      {width <= 768 ? (
        <div className={styles.flex_wrapper}>
          <section className={styles.about_container}>
            <div className={styles.about_card}>
              <h2 className={styles.about_title}>GET TO KNOW ME</h2>
              <div className={styles.bio}>
                <p>
                  My name is Braxton Zand, a self taught full stack web
                  developer
                </p>
                <p>
                  Growing up I've always been invested with technology and
                  software, but never found the opportunity to learn it. In 2021
                  I took it upon myself to change that, going through Harvard's
                  CS50, Introduction to Computer Science. Onto freecodecamp, and
                  then The Odin Project.
                </p>
                <p>
                  I've fallen in love with the field and subject since then,
                  taking each day to grow and polish my skills to become an
                  adept full stack developer
                </p>
                <Image
                  className={styles.img}
                  src={headshot}
                  layout={"responsive"}
                  objectFit={"contain"}
                  objectPosition={"bottom"}
                ></Image>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className={styles.flex_wrapper}>
          <section className={styles.about_container}>
            {/* <Tilt options={options}> */}
            <div className={styles.about_card}>
              <section className={styles.bio}>
                <h2 className={styles.about_title}>GET TO KNOW ME</h2>
                <p>
                  My name is Braxton Zand, a self taught full stack web
                  developer
                </p>
                <p>
                  Growing up I've always been invested with technology and
                  software, but never found the opportunity to learn it like
                  this. In 2021 I took it upon myself to change that, going
                  through Harvard's CS50, Introduction to Computer Science. Onto
                  freecodecamp, and then The Odin Project.
                </p>
                <p>
                  I've fallen in love with the field and subject since then,
                  taking each day to grow and polish my skills to become an
                  adept full stack developer
                </p>
                <Image
                  className={styles.img}
                  src={headshot}
                  objectFit={"contain"}
                  objectPosition={"bottom right"}
                  layout={"fill"}
                ></Image>
              </section>
            </div>
            {/* </Tilt> */}
          </section>
        </div>
      )}
    </main>
  );
}
