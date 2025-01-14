"use client"

import styles from "./intro.module.css"
import { MillionScopeIcon } from "@/components/icons";

export default function Intro() {
    return (
        <div className="x:flex x:flex-row x:justify-center x:items-end x:gap-2 x:mt-8">
            <MillionScopeIcon />

            <h1 className="x:text-3xl x:leading-none x:font-extrabold x:text-center">MillionScope</h1>
        </div>
    )
}
