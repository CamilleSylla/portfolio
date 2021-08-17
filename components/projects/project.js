import style from './project.module.scss'

export default function Projects () {

    const projects = [
        {
            name: "Nom du projet",
            img: "/arcade.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper sem magna, at tempor magna eleifend nec.",
            project_url: "/"
        },
        {
            name: "Nom du projet",
            img: "/arcade.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper sem magna, at tempor magna eleifend nec.",
            project_url: "/"
            
        },
    ]

    return (
        <section className={style.wrapper}>
            {projects.map((el, i) => {
                return(
            <article className={style.card}>
                <div className={style.content}>
                    <span>
                    <h1> {el.name} </h1>
                    <p> {el.desc} </p>
                    <button>Visionner</button>
                    </span>
                </div>
                <div className={style.preview}>
                    <div className={style.img_wrapper}>
                        <img src={`/assets/img/${el.img}`}/>
                    </div>
                </div>
            </article>
                )
            })}
            
        </section>
    )
}