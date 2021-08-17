import { useEffect, useState } from 'react'
import style from './technos.module.scss'

export default function Technos () {

    const [nav, setNav] = useState(0)
    const [desc, setDesc] = useState(null)
    const [techs, setTechs] = useState(null)

    

    const Definition = [
        {
            id: 0,
            name: "Font-End",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam in velit porta malesuada id quis ante. Duis venenatis, tellus quis mollis rhoncus, elit justo condimentum quam, volutpat condimentum turpis mauris posuere erat.",
            img: "front.svg"
        },
        {
            id: 1,
            name: "Back-End",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam in velit porta malesuada id quis ante. Duis venenatis, tellus quis mollis rhoncus, elit justo condimentum quam, volutpat condimentum turpis mauris posuere erat.",
            img: "back.svg"
        },
        {
            id: 2,
            name: "Base de données",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam in velit porta malesuada id quis ante. Duis venenatis, tellus quis mollis rhoncus, elit justo condimentum quam, volutpat condimentum turpis mauris posuere erat.",
            img: "db.svg"
        },
        {
            id: 3,
            name: "CMS",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam in velit porta malesuada id quis ante. Duis venenatis, tellus quis mollis rhoncus, elit justo condimentum quam, volutpat condimentum turpis mauris posuere erat.",
            img: "cms.svg"
        },
    ]
    const Techs = [
        {
            id: 0,
            name: "React",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "react.svg",
        },
        {
            id: 0,
            name: "React",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "react.svg",
        },
    ]

    const Def = () => {
        
        return (
            
            <article className={style.description}>
                <img src={`/assets/img/${desc.img}`}/>
                <div>
                    <h1>{desc.name}</h1>
                    <p> {desc.desc} </p>
                </div>
            </article>
        )
    }
    const TechnosView = () => {
        return (
            <div className={style.cards_wrapper}>
                {techs.map((el, i) => {
                    console.log(el.name);
                    return (
                        <article  className={style.cards}>
                            <div className={style.img_wrapper}>
                            <img src={`/assets/icon/${el.icon}`}/>
                            </div>
                            <div>
                                <h1>{el.name}</h1>
                                <p>{el.desc}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        )
    }

    useEffect(() => {
        const techs = Techs.filter(el => el.id == nav)
        const desc = Definition.find(el => el.id == nav)
        setTechs(techs)
        setDesc(desc)
    }, [nav])

    return (
        <section className={style.wrapper}>
            <ul>
                <li onClick={() => setNav(0)}>Front-End</li>
                <li onClick={() => setNav(1)}>Backend</li>
                <li onClick={() => setNav(2)}>Base de données</li>
                <li onClick={() => setNav(3)}>CMS</li>
            </ul>
            <span>
                TECHNOS
            </span>
            <div className={style.content_wrapper}>
                {desc ? <Def/> : <span>Chargement...</span>}
                {techs ? <TechnosView/> : <span>Chargement...</span>}
            </div>

        </section>
    )
}