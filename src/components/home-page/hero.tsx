import Image from "next/image";

import classes from "./hero.module.css";

export interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ruslan.jpg"
          alt="An image showing Ruslan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Ruslan</h1>
      <p>
        I blog about web development - especially fullstack frameworks like Next
        and Nest.
      </p>
    </section>
  );
}
