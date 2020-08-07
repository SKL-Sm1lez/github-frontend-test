import React from 'react'
import classes from './generesCards.module.scss'

// image
import comedy from '../../../img/contain/generesCards/comedy.svg'
import dramas from '../../../img/contain/generesCards/dramas.svg'
import fantasctic from '../../../img/contain/generesCards/fantasctic.svg'
import horror from '../../../img/contain/generesCards/horror.svg'


export const GeneresCard = props => {

    return (
        <div className={classes.GeneresCard}>
            <section className={classes.ComedyCard}>
                <img src={comedy} alt={'Generes preview'}/>
                <p>Комедии</p>
                <div className={classes.ComedyGradient} />
                <div className={classes.ComedyBackground} />
            </section>

            <section className={classes.DramasCard}>
                <img src={dramas} alt={'Generes preview'}/>
                <p>Драмы</p>
                <div className={classes.DramasGradient} />
                <div className={classes.DramasBackground} />
            </section>

            <section className={classes.FantasticCard}>
                <img src={fantasctic} alt={'Generes preview'}/>
                <p>Фантастика</p>
                <div className={classes.FantasticGradient} />
                <div className={classes.FantasticBackground} />
            </section>

            <section className={classes.HorrorCard}>
                <img src={horror} alt={'Generes preview'}/>
                <p>Ужасы</p>
                <div className={classes.HorrorGradient} />
                <div className={classes.HorrorBackground} />
            </section>
        </div>
    )
}