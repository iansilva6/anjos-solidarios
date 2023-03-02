import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../assets/img/logo.svg";

const myLoader = ({ src, width, quality }) => {
  return `https://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={logo}
        alt="Picture of the author"
        width={300}
        height={120}
      />
    </header>
  );
}
