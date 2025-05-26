"use client";

import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import styles from "./TextElement.module.scss";
const TextElement = () => {
    const { scrollYProgress } = useScroll();

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className={styles.TextElement}>
            <motion.p style={{ marginLeft: x }}>
                Büro für Lorem und Ipsum
            </motion.p>
        </div>
    );
};

export default TextElement;
