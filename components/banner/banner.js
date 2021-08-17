import style from './banner.module.scss'
import Social from './social/social'
import Title from './title/title.js'

export default function Banner () {

    return (
        <section className={style.wrapper}>
            <div className={style.layer}></div>
            <Social/>
            <Title/>
        </section>
    )
}