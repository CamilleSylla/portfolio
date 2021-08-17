import Image from "next/image";
import style from "./nav.module.scss";
import Link from 'next/link'

export default function Nav() {

    const Nav = [
        {
            name: "Accueil",
            link: "/"
        },
        {
            name: "Accueil",
            link: "/"
        },
        {
            name: "Accueil",
            link: "/"
        },
        {
            name: "Accueil",
            link: "/"
        },
    ]
  return (
    <nav className={style.wrapper}>
      
      <ul>
          {Nav.map((el, i) => {

              return (
                  <Link href={el.link}>
                      <li>{el.name}</li>
                  </Link>
              )
          } )}
      </ul>
      <div className={style.logo}>
        <Image src="/assets/logo/Logo.svg" objectFit="contain" layout="fill" />
      </div>
    </nav>
  );
}
