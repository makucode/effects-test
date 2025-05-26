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
    wide,
}: {
    amount?: number;
    text?: string;
    leftText?: boolean;
    wide?: boolean;
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
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: trigger.current,
                    start: "start 95%", // Element ganz unten im Viewport starten (start bottom & start 50%)
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
            } ${wide ? styles.Wide : ""}`}
            ref={trigger}
        >
            {text ? (
                <p ref={ref}>{text}</p>
            ) : (
                <Image
                    ref={ref}
                    src={`https://picsum.photos/1440/1440?t=${Math.random()}`}
                    width={wide ? 2560 : 1440}
                    height={1440}
                    alt="Scrollable Image - Random"
                    sizes="(min-width: 1px) 50vw, 50vw"
                />
            )}
        </div>
    );
};

export default ScrollElement;
