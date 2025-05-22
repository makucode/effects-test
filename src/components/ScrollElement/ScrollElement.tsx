"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./ScrollElement.module.scss";

gsap.registerPlugin(ScrollTrigger);

const ScrollElement = ({
    amount = 1,
    text,
    leftText,
}: {
    amount?: number;
    text?: string;
    leftText?: boolean;
}) => {
    const trigger = useRef(null);
    const ref = useRef(null);

    useGSAP(() => {
        const el = ref.current;

        gsap.fromTo(
            el,
            {
                y: 100 * amount,
                opacity: 0,
                blur: text ? 0 : 20,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: trigger.current,
                    start: "start bottom", // Element ganz unten im Viewport starten
                    end: "start 50%",
                    scrub: true, // an Scroll-Position koppeln
                    /* markers: true, */
                },
            }
        );
    }, []);

    return (
        <div
            className={`${styles.ScrollElement} ${
                leftText ? styles.LeftText : ""
            }`}
            ref={trigger}
        >
            {text ? (
                <p ref={ref}>{text}</p>
            ) : (
                <Image
                    ref={ref}
                    src={`https://picsum.photos/1440/1440?t=${Math.random()}`}
                    width={1440}
                    height={1440}
                    alt="Scrollable Image - Random"
                    sizes="(min-width: 1px) 50vw, 50vw"
                />
            )}
        </div>
    );
};

export default ScrollElement;
