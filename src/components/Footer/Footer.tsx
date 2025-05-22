import React from "react";
import Link from "next/link";

import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <ul>
                <li>
                    <Link href={"#"}>Impressum,</Link>
                </li>
                <li>
                    <Link href={"#"}>Datenschutz,</Link>
                </li>
                <li>
                    <Link href={"#"}>Instagram</Link>
                </li>
            </ul>
            <Link href="mailto:hallo@hungerundkoch.com">
                hallo@hungerundkoch.com
            </Link>
        </footer>
    );
};

export default Footer;
