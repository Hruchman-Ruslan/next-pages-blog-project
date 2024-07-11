import classes from "./logo.module.css";

export interface LogoProps {}

export default function Logo({}: LogoProps) {
  return <div className={classes.logo}>Ruslan Next Blog</div>;
}
