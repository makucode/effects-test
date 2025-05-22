import React from "react";

import ScrollElement from "../ScrollElement/ScrollElement";

import styles from "./TopSection.module.scss";

const TopSection = () => {
    return (
        <section className={styles.TopSection}>
            <div className={styles.Content}>
                <h1>Lorem Ipsum</h1>
                <ScrollElement />
                <ScrollElement
                    amount={0.5}
                    text={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea.`}
                />
                <ScrollElement
                    amount={0.5}
                    text={`At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`}
                />
            </div>
        </section>
    );
};

export default TopSection;
