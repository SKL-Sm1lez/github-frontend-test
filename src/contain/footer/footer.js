import React from 'react'
import classes from './footer.module.scss'
import { Container } from '../../hoc/container/container'
import logo from '../../img/footer/logo.svg'

export const Footer = () => (
    <footer className={classes.Footer}>
        <Container>
            <div className={classes.Contain}>
                <img src={logo} alt={'Logo'}/>

                <section>
                    <p className={classes.Description}>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</p>
                    <p className={classes.Phone}>+7 (3412) 93-88-61, 43-29-29</p>
                    <p className={classes.link}>htc-cs.ru</p>
                </section>
            </div>
        </Container>
    </footer>
)