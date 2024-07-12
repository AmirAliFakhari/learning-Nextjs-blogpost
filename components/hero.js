import React from 'react'
import Image from "next/image"
import classes from "../components/hero.module.css"
function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image width={300} height={300} alt="s" src="/image/site/amirali.png" />
            </div>
            <h1>Hi, I'm Max</h1>
            <p>i blog about every thing</p>
        </section>
    )
}

export default Hero