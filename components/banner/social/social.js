import style from './social.module.scss'

export default function Social () {
    const icons =[
        {
            name: "Facebook",
            file: "facebook.svg"
        },
        {
            name: "Github",
            file: "github.svg"
        },
        {
            name: "Instagram",
            file: "instagram.svg"
        },
    ]

    return (
        <div className={style.wrapper}>
            <span></span>
            <div className={style. icons}>
                {icons.map((el, i) => {

                    return (
                        <img style={{cursor: "pointer"}}src={`/assets/icon/${el.file}`}/>
                    )
                })}
            </div>
            <span></span>

        </div>
    )
}