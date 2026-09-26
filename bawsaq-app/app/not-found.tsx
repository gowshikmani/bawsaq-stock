import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <div className={styles.grid}></div>

      <div className={styles.glow}></div>

      <section className={styles.card}>

        {/* BAWSAQ LOGO */}
        <div className={styles.logoArea}>
          <div className={styles.logoMark}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div>
            <h1>BAWSAQ</h1>
            <p>MARKET TERMINAL</p>
          </div>
        </div>

        {/* ERROR */}
        <div className={styles.errorCode}>
          404
        </div>

        <div className={styles.divider}></div>

        <h2>PAGE NOT FOUND</h2>

        <p className={styles.message}>
          The requested market terminal route does not exist
          or may have been moved.
        </p>

        {/* TERMINAL STATUS */}
        <div className={styles.status}>
          <span></span>
          TERMINAL CONNECTION: ONLINE
        </div>

        {/* BUTTON */}
        <Link
          href="/"
          className={styles.homeButton}
        >
          RETURN TO DASHBOARD
          <span>→</span>
        </Link>

        <p className={styles.footer}>
          BAWSAQ NETWORK • SECURE CONNECTION
        </p>

      </section>
    </main>
  );
}