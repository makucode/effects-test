import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

export default function useLenisScroll() {
    useIsomorphicLayoutEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            //@ts-expect-error unvollständige Typen
            smooth: true,
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        // WICHTIG: ScrollTrigger mit Lenis koppeln
        lenis.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                return value !== undefined
                    ? lenis.scrollTo(value)
                    : lenis.scroll;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            pinType: document.body.style.transform ? "transform" : "fixed",
        });

        return () => {
            lenis.destroy();
        };
    }, []);
}
