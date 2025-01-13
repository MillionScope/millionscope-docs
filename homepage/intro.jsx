"use client"

import styles from "./intro.module.css"
import createGlobe from "cobe";
import { MillionScopeIcon } from "@/components/icons";

export default function Intro() {
    return (
        <div className={styles.intro}>
            <MillionScopeIcon />

            <h1 className={styles.introheading}>MillionScope</h1>
        </div>
    )
}
