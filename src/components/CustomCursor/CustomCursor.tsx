"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./CustomCursor.module.scss";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const move = (e: MouseEvent) => {
            const { width, height } = cursor.getBoundingClientRect();
            const offsetX = width / 2;
            const offsetY = height / 2;
            cursor.style.transform = `translate3d(${e.clientX - offsetX}px, ${
                e.clientY - offsetY
            }px, 0)`;
        };

        const checkHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, .cursor-hover")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseover", checkHover);
        document.addEventListener("mouseout", checkHover);

        return () => {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseover", checkHover);
            document.removeEventListener("mouseout", checkHover);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`${styles.Cursor} ${isHovering ? styles.Hover : ""}`}
        />
    );
};

export default CustomCursor;
