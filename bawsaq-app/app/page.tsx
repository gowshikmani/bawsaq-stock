"use client";

import { useState } from "react";
import Link from "next/link";

const markets = [
  { name: "NIFTY 50", value: "25,420.65", change: "+0.82%", positive: true },
  { name: "SENSEX", value: "83,210.12", change: "+0.61%", positive: true },
  { name: "NASDAQ", value: "21,440.32", change: "-0.13%", positive: false },
  { name: "S&P 500", value: "6,021.45", change: "-0.21%", positive: false },
  { name: "USD / INR", value: "83.26", change: "+0.12%", positive: true },
];

const movers = [
  {
    symbol: "RELIANCE",
    price: "₹1,421.35",
    change: "+2.14%",
    positive: true,
  },
  {
    symbol: "TCS",
    price: "₹3,921.20",
    change: "+1.72%",
    positive: true,
  },
  {
    symbol: "HDFCBANK",
    price: "₹1,892.60",
    change: "+1.48%",
    positive: true,
  },
  {
    symbol: "INFY",
    price: "₹1,612.45",
    change: "+1.32%",
    positive: true,
  },
  {
    symbol: "ICICIBANK",
    price: "₹1,248.30",
    change: "+1.21%",
    positive: true,
  },
];

const globalMarkets = [
  { name: "S&P 500", value: "6,021.45", change: "-0.21%", positive: false },
  { name: "NASDAQ", value: "21,440.32", change: "-0.13%", positive: false },
  { name: "DOW JONES", value: "44,711.32", change: "-0.18%", positive: false },
  { name: "FTSE 100", value: "9,234.67", change: "+0.32%", positive: true },
  { name: "DAX", value: "23,689.12", change: "+0.41%", positive: true },
];

const heatmap = [
  { name: "BANKING", change: "+1.24%", type: "heat-positive-strong" },
  { name: "IT", change: "+0.87%", type: "heat-positive" },
  { name: "AUTO", change: "+0.42%", type: "heat-positive" },
  { name: "PHARMA", change: "-0.31%", type: "heat-negative" },
  { name: "FMCG", change: "+0.28%", type: "heat-positive" },
  { name: "ENERGY", change: "+0.15%", type: "heat-positive" },
  { name: "METALS", change: "-0.62%", type: "heat-negative-strong" },
  { name: "REALTY", change: "-0.48%", type: "heat-negative" },
  { name: "TELECOM", change: "+0.27%", type: "heat-positive" },
];

const news = [
  {
    title: "RBI keeps repo rate unchanged at 6.5%",
    source: "Economic Times · 2h ago",
  },
  {
    title: "TCS announces major global AI transformation deal",
    source: "Livemint · 4h ago",
  },
  {
    title: "Banking stocks lead today's market rally",
    source: "Business Standard · 5h ago",
  },
];

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div
      className={`bawsaq-app ${
        sidebarCollapsed ? "sidebar-collapsed" : ""
      }`}
    >
      {/* ================================
          SIDEBAR
      ================================= */}

      <aside className="sidebar">
        <div className="logo-area">
          <div className="logo-wrapper">
            <div className="logo">
              BAWSAQ
            </div>

            <div className="logo-tagline">
              THE MARKET NEVER SLEEPS
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">

          <div className="nav-section-title">
            MAIN
          </div>

          <Link href="/" className="nav-item active">
            <span className="nav-icon">⌂</span>
            <span className="nav-label">Dashboard</span>
          </Link>

          <Link href="/markets" className="nav-item">
            <span className="nav-icon">◫</span>
            <span className="nav-label">Markets</span>
          </Link>

          <Link href="/stocks" className="nav-item">
            <span className="nav-icon">▥</span>
            <span className="nav-label">Stocks</span>
          </Link>

          <Link href="/screener" className="nav-item">
            <span className="nav-icon">⌕</span>
            <span className="nav-label">Screener</span>
          </Link>

          <Link href="/watchlist" className="nav-item">
            <span className="nav-icon">☆</span>
            <span className="nav-label">Watchlist</span>
          </Link>

          <Link href="/portfolio" className="nav-item">
            <span className="nav-icon">▣</span>
            <span className="nav-label">Portfolio</span>
          </Link>

          <Link href="/news" className="nav-item">
            <span className="nav-icon">▤</span>
            <span className="nav-label">News</span>
          </Link>

          <Link href="/alerts" className="nav-item">
            <span className="nav-icon">♢</span>
            <span className="nav-label">Alerts</span>
          </Link>

          <div className="nav-section-title">
            TOOLS
          </div>

          <Link href="/compare" className="nav-item">
            <span className="nav-icon">⇄</span>
            <span className="nav-label">Compare</span>
          </Link>

          <Link href="/calculator" className="nav-item">
            <span className="nav-icon">▦</span>
            <span className="nav-label">Calculator</span>
          </Link>

          <Link href="/calendar" className="nav-item">
            <span className="nav-icon">□</span>
            <span className="nav-label">Economic Calendar</span>
          </Link>

          <Link href="/settings" className="nav-item">
            <span className="nav-icon">⚙</span>
            <span className="nav-label">Settings</span>
          </Link>

        </nav>

        <div className="sidebar-footer">
          <div className="market-indicator">
            <span />
            <span className="market-indicator-text">
              MARKET OPEN
            </span>
          </div>
        </div>
      </aside>

      {/* ================================
          MAIN
      ================================= */}

      <main className="main-area">

        {/* TOPBAR */}

        <header className="topbar">

          <button
            className="sidebar-toggle"
            onClick={() =>
              setSidebarCollapsed((current) => !current)
            }
            aria-label={
              sidebarCollapsed
                ? "Expand sidebar"
                : "Collapse sidebar"
            }
          >
            {sidebarCollapsed ? "»" : "«"}
          </button>

          <div className="search-box">
            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search stocks, indices, companies..."
            />

            <span className="search-shortcut">
              /
            </span>
          </div>

          <div className="topbar-right">

            <div className="market-status">
              <span className="market-status-dot" />
              MARKET OPEN
            </div>

            <div className="topbar-date">
              23 SEP 2026
            </div>

            <div className="user-profile">
              <div className="user-avatar">
                S
              </div>

              <span>
                User
              </span>
            </div>

          </div>
        </header>

        {/* ================================
            DASHBOARD
        ================================= */}

        <section className="dashboard">

          {/* MARKET STRIP */}

          <div className="market-strip">

            {markets.map((market) => (
              <div
                className="market-card"
                key={market.name}
              >
                <div className="market-name">
                  {market.name}
                </div>

                <div className="market-value">
                  {market.value}
                </div>

                <div
                  className={`market-change ${
                    market.positive
                      ? "positive"
                      : "negative"
                  }`}
                >
                  {market.positive ? "▲" : "▼"}{" "}
                  {market.change}
                </div>
              </div>
            ))}

          </div>

          <div className="dashboard-grid">

            {/* HERO */}

            <section className="panel hero-panel">

              <div className="hero-content">

                <div className="hero-label">
                  MARKET INTELLIGENCE
                </div>

                <h1 className="hero-title">
                  THE MARKET{" "}
                  <span>NEVER SLEEPS.</span>
                </h1>

                <p className="hero-description">
                  Track markets, discover opportunities,
                  analyze companies and understand what's
                  moving the market.
                </p>

                <button className="hero-button">
                  EXPLORE MARKETS →
                </button>

              </div>

              <div className="hero-stat">

                <span>
                  MARKET SENTIMENT
                </span>

                <strong>
                  74
                </strong>

                <small>
                  / 100
                </small>

                <div className="sentiment-bar">
                  <span />
                </div>

              </div>

            </section>

            {/* TOP MOVERS */}

            <section className="panel movers-panel">

              <div className="panel-header">

                <h2 className="panel-title">
                  TOP MOVERS
                </h2>

                <span className="panel-action">
                  VIEW ALL →
                </span>

              </div>

              <div className="movers-tabs">
                <button className="mover-tab active">
                  GAINERS
                </button>

                <button className="mover-tab">
                  LOSERS
                </button>

                <button className="mover-tab">
                  ACTIVE
                </button>
              </div>

              <table className="stock-table">

                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Change</th>
                  </tr>
                </thead>

                <tbody>

                  {movers.map((stock) => (
                    <tr key={stock.symbol}>

                      <td>
                        <span className="stock-symbol">
                          {stock.symbol}
                        </span>
                      </td>

                      <td className="stock-price">
                        {stock.price}
                      </td>

                      <td className="positive">
                        ▲ {stock.change}
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>
            </section>

            {/* NIFTY CHART */}

            <section className="panel chart-panel">

              <div className="panel-header">

                <div>
                  <div className="panel-title">
                    NIFTY 50
                  </div>

                  <div className="chart-price">
                    25,420.65

                    <span className="positive">
                      +0.82%
                    </span>
                  </div>
                </div>

                <span className="panel-action">
                  DETAILS →
                </span>

              </div>

              <div className="chart-tabs">

                <button className="chart-tab active">
                  1D
                </button>

                <button className="chart-tab">
                  1W
                </button>

                <button className="chart-tab">
                  1M
                </button>

                <button className="chart-tab">
                  3M
                </button>

                <button className="chart-tab">
                  1Y
                </button>

              </div>

              <div className="chart-container">

                <svg
                  viewBox="0 0 600 240"
                  preserveAspectRatio="none"
                  className="chart-svg"
                >

                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#8df23c"
                        stopOpacity="0.18"
                      />

                      <stop
                        offset="100%"
                        stopColor="#8df23c"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <g className="chart-grid">
                    <line x1="0" y1="40" x2="600" y2="40" />
                    <line x1="0" y1="90" x2="600" y2="90" />
                    <line x1="0" y1="140" x2="600" y2="140" />
                    <line x1="0" y1="190" x2="600" y2="190" />
                  </g>

                  <path
                    className="chart-area"
                    d="
                      M0 185
                      L25 165
                      L50 174
                      L75 142
                      L100 150
                      L125 128
                      L150 139
                      L175 106
                      L200 119
                      L225 91
                      L250 105
                      L275 78
                      L300 90
                      L325 68
                      L350 79
                      L375 58
                      L400 67
                      L425 52
                      L450 60
                      L475 43
                      L500 48
                      L525 34
                      L550 40
                      L575 25
                      L600 18
                      L600 240
                      L0 240
                      Z
                    "
                  />

                  <polyline
                    className="chart-line"
                    points="
                      0,185
                      25,165
                      50,174
                      75,142
                      100,150
                      125,128
                      150,139
                      175,106
                      200,119
                      225,91
                      250,105
                      275,78
                      300,90
                      325,68
                      350,79
                      375,58
                      400,67
                      425,52
                      450,60
                      475,43
                      500,48
                      525,34
                      550,40
                      575,25
                      600,18
                    "
                  />

                </svg>

              </div>

              <div className="chart-stats">

                <div>
                  <span>OPEN</span>
                  <strong>25,211.40</strong>
                </div>

                <div>
                  <span>HIGH</span>
                  <strong>25,486.20</strong>
                </div>

                <div>
                  <span>LOW</span>
                  <strong>25,178.35</strong>
                </div>

                <div>
                  <span>VOLUME</span>
                  <strong>412.8M</strong>
                </div>

              </div>

            </section>

            {/* HEATMAP */}

            <section className="panel heatmap-panel">

              <div className="panel-header">

                <h2 className="panel-title">
                  MARKET HEATMAP
                </h2>

                <span className="panel-action">
                  EXPAND →
                </span>

              </div>

              <div className="heatmap">

                {heatmap.map((sector) => (
                  <div
                    key={sector.name}
                    className={`heatmap-cell ${sector.type}`}
                  >
                    <span>
                      {sector.name}
                    </span>

                    <strong>
                      {sector.change}
                    </strong>
                  </div>
                ))}

              </div>

            </section>

            {/* GLOBAL MARKETS */}

            <section className="panel global-panel">

              <div className="panel-header">

                <h2 className="panel-title">
                  GLOBAL MARKETS
                </h2>

                <span className="panel-action">
                  VIEW ALL →
                </span>

              </div>

              <table className="stock-table">

                <tbody>

                  {globalMarkets.map((market) => (
                    <tr key={market.name}>

                      <td>
                        <span className="stock-symbol">
                          {market.name}
                        </span>
                      </td>

                      <td className="stock-price">
                        {market.value}
                      </td>

                      <td
                        className={
                          market.positive
                            ? "positive"
                            : "negative"
                        }
                      >
                        {market.positive
                          ? "▲"
                          : "▼"}{" "}
                        {market.change}
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </section>

            {/* FEATURED STOCK */}

            <section className="panel featured-stock">

              <div className="panel-header">

                <h2 className="panel-title">
                  FEATURED STOCK
                </h2>

                <span className="panel-action">
                  ↗
                </span>

              </div>

              <div className="stock-main">

                <div className="stock-heading">

                  <div>
                    <div className="stock-company">
                      RELIANCE INDUSTRIES
                    </div>

                    <div className="stock-sector">
                      NSE · RELIANCE
                    </div>
                  </div>

                  <span className="positive">
                    +2.14%
                  </span>

                </div>

                <div className="stock-big-price">
                  ₹1,421.35
                </div>

                <div className="stock-change-large positive">
                  ▲ +29.82
                </div>

                <div className="stock-stats">

                  {[
                    ["MARKET CAP", "₹19.2T"],
                    ["P/E", "24.3"],
                    ["EPS", "₹58.5"],
                    ["ROE", "10.8%"],
                    ["D/E", "0.42"],
                    ["DIVIDEND", "0.35%"],
                  ].map(([label, value]) => (
                    <div
                      className="stock-stat"
                      key={label}
                    >
                      <span className="stock-stat-label">
                        {label}
                      </span>

                      <strong className="stock-stat-value">
                        {value}
                      </strong>
                    </div>
                  ))}

                </div>

                <button className="btn btn-primary full-width">
                  VIEW FULL ANALYSIS →
                </button>

              </div>

            </section>

            {/* BAWSAQ ANALYSIS */}

            <section className="panel analysis-panel">

              <div className="panel-header">

                <h2 className="panel-title">
                  BAWSAQ ANALYSIS
                </h2>

                <span className="ai-badge">
                  AI
                </span>

              </div>

              <div className="analysis-content">

                <div className="analysis-score">

                  <div className="score-ring">
                    7.8
                  </div>

                  <div>
                    <span className="analysis-label">
                      ANALYSIS SCORE
                    </span>

                    <strong className="analysis-rating">
                      Strong
                    </strong>
                  </div>

                </div>

                <div className="analysis-list">

                  {[
                    ["Fundamentals", "Strong"],
                    ["Valuation", "Moderate"],
                    ["Growth", "Strong"],
                    ["Momentum", "Positive"],
                    ["Risk", "Medium"],
                  ].map(([label, value]) => (
                    <div
                      className="analysis-row"
                      key={label}
                    >
                      <span>{label}</span>

                      <strong
                        className={
                          value === "Medium"
                            ? "neutral"
                            : "positive"
                        }
                      >
                        {value}
                      </strong>
                    </div>
                  ))}

                </div>

                <p className="analysis-description">
                  Fundamental and momentum indicators
                  currently show positive conditions.
                  This analysis is informational and not
                  financial advice.
                </p>

              </div>

            </section>

            {/* NEWS */}

            <section className="panel news-panel">

              <div className="panel-header">

                <h2 className="panel-title">
                  MARKET NEWS
                </h2>

                <span className="panel-action">
                  VIEW ALL →
                </span>

              </div>

              {news.map((item) => (
                <article
                  className="news-item"
                  key={item.title}
                >
                  <div className="news-thumbnail" />

                  <div>
                    <h3 className="news-title">
                      {item.title}
                    </h3>

                    <p className="news-source">
                      {item.source}
                    </p>
                  </div>
                </article>
              ))}

            </section>

            {/* PORTFOLIO */}

            <section className="panel portfolio-panel">

              <div className="panel-header">

                <h2 className="panel-title">
                  PORTFOLIO
                </h2>

                <span className="panel-action">
                  VIEW →
                </span>

              </div>

              <div className="portfolio-content">

                <span className="portfolio-label">
                  TOTAL VALUE
                </span>

                <strong className="portfolio-value">
                  ₹7,42,680
                </strong>

                <span className="portfolio-return positive">
                  ▲ +4.98% TODAY
                </span>

                <div className="portfolio-bar">

                  <span
                    className="portfolio-equity"
                  />

                  <span
                    className="portfolio-funds"
                  />

                  <span
                    className="portfolio-cash"
                  />

                </div>

                <div className="portfolio-legend">

                  <span>
                    <i className="legend-equity" />
                    Equity 68%
                  </span>

                  <span>
                    <i className="legend-funds" />
                    Funds 18%
                  </span>

                  <span>
                    <i className="legend-cash" />
                    Cash 14%
                  </span>

                </div>

              </div>

            </section>

            {/* QUICK ACCESS */}

            <section className="panel quick-panel">

              <div className="panel-header">

                <h2 className="panel-title">
                  QUICK ACCESS
                </h2>

              </div>

              <div className="quick-grid">

                <Link
                  href="/watchlist"
                  className="btn btn-secondary"
                >
                  ☆ WATCHLIST
                </Link>

                <Link
                  href="/compare"
                  className="btn btn-secondary"
                >
                  ⇄ COMPARE
                </Link>

                <Link
                  href="/alerts"
                  className="btn btn-secondary"
                >
                  ♢ ALERTS
                </Link>

                <Link
                  href="/screener"
                  className="btn btn-secondary"
                >
                  ⌕ SCREENER
                </Link>

              </div>

            </section>

          </div>
        </section>
      </main>
    </div>
  );
}
