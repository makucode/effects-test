import styles from "./page.module.scss";

import TopSection from "@/components/TopSection/TopSection";
import ScrollElement from "@/components/ScrollElement/ScrollElement";

export default function Home() {
    return (
        <div className={styles.page}>
            <TopSection />

            <section className={styles.Col2}>
                <ScrollElement amount={1.5} />
                <ScrollElement amount={1} />
            </section>

            <section>
                <ScrollElement
                    amount={0.5}
                    text="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                />
            </section>

            <section className={styles.Col2}>
                <ScrollElement amount={1} />
                <ScrollElement amount={1.5} />
            </section>

            <section>
                <ScrollElement wide />
            </section>

            <section>
                <ScrollElement
                    amount={0.5}
                    leftText
                    text="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                />
            </section>
        </div>
    );
}
