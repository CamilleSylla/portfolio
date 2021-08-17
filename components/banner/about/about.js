import Image from 'next/image'
import style from './about.module.scss'

export default function About () {

    const Cards= [
        {
            icon: "computer.svg",
            title: "Titre 1",
            text: "Lorem Ipsum blablba fjkrehf rejhf rehtjrhtr rehtjt rt tr teertert "
        },
        {
            icon: "sketch.svg",
            title: "Titre 2",
            text: "Lorem Ipsum blablba fjkrehf rejhf rehtjrhtr rehtjt rt tr teertert "
        },
        {
            icon: "ear.svg",
            title: "Titre 3",
            text: "Lorem Ipsum blablba fjkrehf rejhf rehtjrhtr rehtjt rt tr teertert "
        },
        {
            icon: "strategy.svg",
            title: "Titre 1",
            text: "Lorem Ipsum blablba fjkrehf rejhf rehtjrhtr rehtjt rt tr teertert "
        },
    ]

    return (
        <section className={style.wrapper}>
            <div className={style.content_wrapper}>
                <div className={style.cards}>
                    {Cards.map((el, i) => {
                        return (
                            <article className={style.card}>
                                <span>
                                    <img src={`/assets/icon/${el.icon}`}/>
                                </span>
                                <h1> {el.title} </h1>
                                <p> {el.text} </p>

                                
                            </article>
                        )
                    })}
                </div>
                <article className={style.content}>
                    <span>- Votre projet</span>
                    <h1> Pourquoi m'engager ? </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien ac nunc luctus auctor eget sit amet velit. Maecenas vestibulum maximus neque, ac finibus justo condimentum sagittis.</p>
                    <button>Contact</button>
                </article>

            </div>
        </section>
    )
}