import React from "react";
import Link from "next/link";

import TextElement from "./TextElement/TextElement";

import styles from "./Header.module.scss";

const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header className={styles.Header}>
                <div className={styles.Sidebar}>
                    <p>Lorem & Ipsum®</p>
                </div>
                <div className={styles.Top}>
                    <TextElement />
                    <nav>
                        <ul>
                            <li>
                                <Link href={"#"}>Hihi,</Link>{" "}
                                <Link href={"#"}>Hehe,</Link>{" "}
                                <Link href={"#"}>Höhö</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={styles.HeaderSpacer}>{children}</div>
        </>
    );
};

export default Header;
