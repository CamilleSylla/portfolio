import style from './illustration.module.scss'

export default function Illustration () {

    const icons = [
        {
            name: "React",
            img: "react.svg"
        },
        {
            name: "Javascript",
            img: "javascript.svg"
        },
    ]

    return (
        <div className={style.wrapper}>
            <div className={style.img_wrapper}>

            <img onClick={() => window.open("https://fr.linkedin.com/in/camille-sylla-dev")} className={style.me} src="/assets/img/CamilleSylla.png"/>
            </div>
        </div>
    )
}