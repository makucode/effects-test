"use client";

import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollOut = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);

    useGSAP(() => {
        const el = ref.current;

        gsap.fromTo(
            el,
            {
                y: 0,
                opacity: 1,
                zIndex: -1,
            },
            {
                y: "100px",
                opacity: 0,
                zIndex: -1,
                duration: 1,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "start 25%", // Element ganz unten im Viewport starten (start bottom & start 50%)
                    end: "bottom start",
                    scrub: true, // an Scroll-Position koppeln
                    /* markers: true, */
                },
            }
        );
    }, []);

    return <div ref={ref}>{children}</div>;
};

export default ScrollOut;
