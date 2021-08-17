import style from './title.module.scss'

export default function Title () {

    return (
        <article className={style.wrapper}>
            <h1>Camille Sylla</h1>
            <h2>Dévéloppeur Web</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem dui, sagittis at ornare non, consequat vel sapien. Donec ac pulvinar mi.</p>
            <button>
                Contact
            </button>
        </article>
    )
}