"use client";

import { useState } from "react";
import styles from "./dashboard.module.css";

const marketData = [
  {
    symbol: "S&P 500",
    price: "6,721.34",
    change: "+0.82%",
  },
  {
    symbol: "NASDAQ",
    price: "22,631.48",
    change: "+1.14%",
  },
  {
    symbol: "DOW JONES",
    price: "46,142.08",
    change: "+0.43%",
  },
];

const movers = [
  {
    symbol: "NVDA",
    name: "NVIDIA",
    price: "$184.32",
    change: "+4.82%",
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    price: "$341.26",
    change: "+3.41%",
  },
  {
    symbol: "AMD",
    name: "AMD",
    price: "$168.73",
    change: "+2.76%",
  },
  {
    symbol: "AAPL",
    name: "Apple",
    price: "$256.18",
    change: "+1.92%",
  },
];

const watchlist = [
  {
    symbol: "AAPL",
    price: "$256.18",
    change: "+1.92%",
    positive: true,
  },
  {
    symbol: "NVDA",
    price: "$184.32",
    change: "+4.82%",
    positive: true,
  },
  {
    symbol: "TSLA",
    price: "$341.26",
    change: "-0.74%",
    positive: false,
  },
  {
    symbol: "MSFT",
    price: "$512.64",
    change: "+0.63%",
    positive: true,
  },
];

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [activePeriod, setActivePeriod] = useState("1D");

  return (
    <main className={styles.dashboard}>

      {/* ================= NAVBAR ================= */}

      <header className={styles.navbar}>

        <div className={styles.logoArea}>
          <div className={styles.logoMark}>
            <span />
            <span />
            <span />
          </div>

          <div>
            <h1>BAWSAQ</h1>
            <p>MARKET TERMINAL</p>
          </div>
        </div>

        <div className={styles.search}>
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search stocks, companies..."
          />

          <kbd>CTRL K</kbd>
        </div>

        <div className={styles.navRight}>

          <div className={styles.marketStatus}>
            <span />
            MARKETS OPEN
          </div>

          <button
            className={styles.iconButton}
            aria-label="Minimize"
          >
            −
          </button>

          <button
            className={styles.iconButton}
            aria-label="Maximize"
          >
            □
          </button>

          <div className={styles.profile}>
            <div className={styles.avatar}>
              A
            </div>

            <span>TRADER</span>
          </div>

        </div>

      </header>

      {/* ================= MAIN LAYOUT ================= */}

      <div className={styles.mainLayout}>

        {/* ================= SIDEBAR ================= */}

        <aside className={styles.sidebar}>

          <div className={styles.sidebarTitle}>
            TERMINAL
          </div>

          {[
            "Dashboard",
            "Markets",
            "Stocks",
            "Watchlist",
            "Portfolio",
            "News",
          ].map((item) => (

            <button
              key={item}
              className={`${styles.menuItem} ${
                activeMenu === item
                  ? styles.active
                  : ""
              }`}
              onClick={() => setActiveMenu(item)}
            >

              <span className={styles.menuIcon}>

                {item === "Dashboard" && "▦"}
                {item === "Markets" && "◈"}
                {item === "Stocks" && "↗"}
                {item === "Watchlist" && "☆"}
                {item === "Portfolio" && "▤"}
                {item === "News" && "▱"}

              </span>

              <span>
                {item}
              </span>

              {item === "Watchlist" && (
                <span className={styles.badge}>
                  4
                </span>
              )}

            </button>

          ))}

          <div className={styles.sidebarBottom}>

            <button className={styles.menuItem}>
              <span className={styles.menuIcon}>
                ⚙
              </span>

              <span>
                Settings
              </span>
            </button>

            <div className={styles.connection}>

              <span />

              <div>
                <strong>
                  CONNECTION
                </strong>

                <small>
                  SECURE • ONLINE
                </small>
              </div>

            </div>

          </div>

        </aside>

        {/* ================= CONTENT ================= */}

        <section className={styles.content}>

          {/* PAGE HEADER */}

          <div className={styles.pageHeading}>

            <div>
              <p className={styles.eyebrow}>
                MARKET TERMINAL / OVERVIEW
              </p>

              <h2>
                Dashboard
              </h2>
            </div>

            <div className={styles.date}>
              MARKET DATA

              <strong>
                LIVE
              </strong>
            </div>

          </div>

          {/* ================= MARKET CARDS ================= */}

          <div className={styles.marketGrid}>

            {marketData.map((market) => (

              <div
                className={styles.marketCard}
                key={market.symbol}
              >

                <div className={styles.cardTop}>

                  <span>
                    {market.symbol}
                  </span>

                  <span className={styles.liveDot} />

                </div>

                <div className={styles.marketPrice}>
                  {market.price}
                </div>

                <div className={styles.marketBottom}>

                  <span className={styles.positive}>
                    ▲ {market.change}
                  </span>

                  <span>
                    Today
                  </span>

                </div>

              </div>

            ))}

          </div>

          {/* ================= CHART ================= */}

          <div className={styles.chartCard}>

            <div className={styles.sectionHeader}>

              <div>

                <p className={styles.eyebrow}>
                  MARKET PERFORMANCE
                </p>

                <h3>
                  S&P 500
                </h3>

              </div>

              <div className={styles.chartPrice}>

                <strong>
                  6,721.34
                </strong>

                <span>
                  +0.82%
                </span>

              </div>

            </div>

            {/* CHART CONTROLS */}

            <div className={styles.chartControls}>

              {[
                "1D",
                "1W",
                "1M",
                "3M",
                "1Y",
                "5Y",
              ].map((period) => (

                <button
                  key={period}
                  className={
                    activePeriod === period
                      ? styles.chartActive
                      : ""
                  }
                  onClick={() =>
                    setActivePeriod(period)
                  }
                >
                  {period}
                </button>

              ))}

            </div>

            {/* CHART */}

            <div className={styles.chart}>

              <div className={styles.chartGrid} />

              <svg
                viewBox="0 0 1000 300"
                preserveAspectRatio="none"
                className={styles.chartSvg}
              >

                <defs>

                  <linearGradient
                    id="chartFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor="#22c55e"
                      stopOpacity="0.25"
                    />

                    <stop
                      offset="100%"
                      stopColor="#22c55e"
                      stopOpacity="0"
                    />

                  </linearGradient>

                </defs>

                <path
                  d="
                    M0 240
                    L45 225
                    L85 235
                    L125 205
                    L170 218
                    L210 175
                    L250 190
                    L290 145
                    L335 160
                    L375 130
                    L420 148
                    L460 110
                    L505 125
                    L550 92
                    L595 108
                    L635 78
                    L680 95
                    L720 62
                    L765 82
                    L810 52
                    L850 68
                    L900 42
                    L945 58
                    L1000 28
                    L1000 300
                    L0 300
                    Z
                  "
                  fill="url(#chartFill)"
                />

                <path
                  d="
                    M0 240
                    L45 225
                    L85 235
                    L125 205
                    L170 218
                    L210 175
                    L250 190
                    L290 145
                    L335 160
                    L375 130
                    L420 148
                    L460 110
                    L505 125
                    L550 92
                    L595 108
                    L635 78
                    L680 95
                    L720 62
                    L765 82
                    L810 52
                    L850 68
                    L900 42
                    L945 58
                    L1000 28
                  "
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                />

              </svg>

              <div className={styles.chartLabels}>

                <span>09:30</span>
                <span>11:00</span>
                <span>13:00</span>
                <span>15:00</span>
                <span>16:00</span>

              </div>

            </div>

          </div>

          {/* ================= BOTTOM PANELS ================= */}

          <div className={styles.bottomGrid}>

            {/* TOP MOVERS */}

            <div className={styles.panel}>

              <div className={styles.sectionHeader}>

                <div>

                  <p className={styles.eyebrow}>
                    MARKET ACTIVITY
                  </p>

                  <h3>
                    Top Movers
                  </h3>

                </div>

                <button className={styles.viewButton}>
                  VIEW ALL →
                </button>

              </div>

              <div className={styles.stockList}>

                {movers.map((stock) => (

                  <div
                    className={styles.stockRow}
                    key={stock.symbol}
                  >

                    <div className={styles.stockIdentity}>

                      <div className={styles.stockLogo}>
                        {stock.symbol[0]}
                      </div>

                      <div>

                        <strong>
                          {stock.symbol}
                        </strong>

                        <small>
                          {stock.name}
                        </small>

                      </div>

                    </div>

                    <strong>
                      {stock.price}
                    </strong>

                    <span className={styles.positive}>
                      {stock.change}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* WATCHLIST */}

            <div className={styles.panel}>

              <div className={styles.sectionHeader}>

                <div>

                  <p className={styles.eyebrow}>
                    YOUR STOCKS
                  </p>

                  <h3>
                    Watchlist
                  </h3>

                </div>

                <button className={styles.addButton}>
                  + ADD
                </button>

              </div>

              <div className={styles.watchlist}>

                {watchlist.map((stock) => (

                  <div
                    className={styles.watchRow}
                    key={stock.symbol}
                  >

                    <strong>
                      {stock.symbol}
                    </strong>

                    <span>
                      {stock.price}
                    </span>

                    <em
                      className={
                        stock.positive
                          ? styles.positive
                          : styles.negative
                      }
                    >
                      {stock.change}
                    </em>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}