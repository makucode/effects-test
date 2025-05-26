import React from "react";
import Image from "next/image";

import ScrollElement from "../ScrollElement/ScrollElement";
import ScrollOut from "./ScrollOut/ScrollOut";

import styles from "./TopSection.module.scss";

const TopSection = () => {
    return (
        <section className={styles.TopSection}>
            <div className={styles.Content}>
                <ScrollOut>
                    <h1>Lorem Ipsum</h1>
                </ScrollOut>
                <div className={styles.Image}>
                    <Image
                        src={`https://picsum.photos/1440/1440?t=${Math.random()}`}
                        width={2560}
                        height={1440}
                        alt="Scrollable Image - Random"
                        sizes="(min-width: 1px) 50vw, 50vw"
                    />
                </div>
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
