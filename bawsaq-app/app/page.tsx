import Link from "next/link";

const markets = [
  {
    name: "NIFTY 50",
    value: "25,420.65",
    change: "+0.82%",
    positive: true,
  },
  {
    name: "SENSEX",
    value: "83,210.12",
    change: "+0.61%",
    positive: true,
  },
  {
    name: "NASDAQ",
    value: "21,440.32",
    change: "-0.13%",
    positive: false,
  },
  {
    name: "S&P 500",
    value: "6,021.45",
    change: "-0.21%",
    positive: false,
  },
  {
    name: "USD / INR",
    value: "83.26",
    change: "+0.12%",
    positive: true,
  },
];

const movers = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    price: "₹1,421.35",
    change: "+2.14%",
    positive: true,
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy Services",
    price: "₹3,921.20",
    change: "+1.72%",
    positive: true,
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank",
    price: "₹1,892.60",
    change: "+1.48%",
    positive: true,
  },
  {
    symbol: "INFY",
    name: "Infosys",
    price: "₹1,612.45",
    change: "+1.32%",
    positive: true,
  },
  {
    symbol: "ICICIBANK",
    name: "ICICI Bank",
    price: "₹1,248.30",
    change: "+1.21%",
    positive: true,
  },
];

const globalMarkets = [
  {
    name: "S&P 500",
    value: "6,021.45",
    change: "-0.21%",
    positive: false,
    flag: "🇺🇸",
  },
  {
    name: "NASDAQ",
    value: "21,440.32",
    change: "-0.13%",
    positive: false,
    flag: "🇺🇸",
  },
  {
    name: "DOW JONES",
    value: "44,711.32",
    change: "-0.18%",
    positive: false,
    flag: "🇺🇸",
  },
  {
    name: "FTSE 100",
    value: "9,234.67",
    change: "+0.32%",
    positive: true,
    flag: "🇬🇧",
  },
  {
    name: "DAX",
    value: "23,689.12",
    change: "+0.41%",
    positive: true,
    flag: "🇩🇪",
  },
  {
    name: "NIKKEI 225",
    value: "45,732.60",
    change: "+0.68%",
    positive: true,
    flag: "🇯🇵",
  },
];

const heatmap = [
  { name: "Banking", change: "+1.24%", type: "heat-positive-strong" },
  { name: "IT", change: "+0.87%", type: "heat-positive" },
  { name: "Auto", change: "+0.42%", type: "heat-positive" },
  { name: "Pharma", change: "-0.31%", type: "heat-negative" },
  { name: "FMCG", change: "+0.28%", type: "heat-positive" },
  { name: "Energy", change: "+0.15%", type: "heat-positive" },
  { name: "Metals", change: "-0.62%", type: "heat-negative-strong" },
  { name: "Realty", change: "-0.48%", type: "heat-negative" },
  { name: "Telecom", change: "+0.27%", type: "heat-positive" },
];

const news = [
  {
    title: "RBI keeps repo rate unchanged at 6.5%",
    source: "The Economic Times · 2h ago",
  },
  {
    title: "TCS announces $1.2B deal with global client for AI transformation",
    source: "Livemint · 4h ago",
  },
  {
    title: "Sensex gains 600 points as banking stocks rally",
    source: "Business Standard · 5h ago",
  },
];

export default function Home() {
  return (
    <div className="bawsaq-app">
      {/* =========================================
          SIDEBAR
      ========================================= */}

      <aside className="sidebar">
        <div className="logo-area">
          <div>
            <div className="logo">
              BAWSAQ
            </div>

            <span className="logo-tagline">
              THE MARKET NEVER SLEEPS
            </span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section-title">
            Main
          </div>

          <Link href="/" className="nav-item active">
            <span className="nav-icon">⌂</span>
            <span>Dashboard</span>
          </Link>

          <Link href="/markets" className="nav-item">
            <span className="nav-icon">◫</span>
            <span>Markets</span>
          </Link>

          <Link href="/stocks" className="nav-item">
            <span className="nav-icon">▥</span>
            <span>Stocks</span>
          </Link>

          <Link href="/screener" className="nav-item">
            <span className="nav-icon">⌕</span>
            <span>Screener</span>
          </Link>

          <Link href="/watchlist" className="nav-item">
            <span className="nav-icon">☆</span>
            <span>Watchlist</span>
          </Link>

          <Link href="/portfolio" className="nav-item">
            <span className="nav-icon">▣</span>
            <span>Portfolio</span>
          </Link>

          <Link href="/news" className="nav-item">
            <span className="nav-icon">▤</span>
            <span>News</span>
          </Link>

          <Link href="/alerts" className="nav-item">
            <span className="nav-icon">♢</span>
            <span>Alerts</span>
          </Link>

          <div className="nav-section-title">
            Tools
          </div>

          <Link href="/compare" className="nav-item">
            <span className="nav-icon">⇄</span>
            <span>Stock Comparison</span>
          </Link>

          <Link href="/calculator" className="nav-item">
            <span className="nav-icon">▦</span>
            <span>Calculator</span>
          </Link>

          <Link href="/calendar" className="nav-item">
            <span className="nav-icon">□</span>
            <span>Economic Calendar</span>
          </Link>

          <Link href="/settings" className="nav-item">
            <span className="nav-icon">⚙</span>
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      {/* =========================================
          MAIN AREA
      ========================================= */}

      <main className="main-area">

        {/* TOPBAR */}

        <header className="topbar">

          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search stocks, indices, or companies..."
            />
          </div>

          <div className="market-status">
            <span className="market-status-dot" />
            MARKET OPEN
          </div>

          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: "11px",
              whiteSpace: "nowrap",
            }}
          >
            23 SEP 2026&nbsp;&nbsp; 10:42 AM
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--text-primary)",
              fontSize: "12px",
            }}
          >
            <span>◯</span>
            Sanjeev
            <span style={{ color: "var(--text-muted)" }}>⌄</span>
          </div>
        </header>

        {/* DASHBOARD */}

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

          {/* GRID */}

          <div className="dashboard-grid">

            {/* =====================================
                HERO
            ===================================== */}

            <section className="panel hero-panel">

              <div className="hero-content">

                <div className="hero-label">
                  Markets Today
                </div>

                <h1 className="hero-title">
                  BULLISH SENTIMENT{" "}
                  <span>RETURNS</span>
                </h1>

                <p className="hero-description">
                  Indian indices open higher as banking
                  and IT stocks lead the rally. Global
                  cues remain mixed.
                </p>

                <button className="hero-button">
                  VIEW MARKET ANALYSIS →
                </button>

              </div>
            </section>

            {/* =====================================
                TOP MOVERS
            ===================================== */}

            <section className="panel movers-panel">

              <div className="panel-header">
                <h2 className="panel-title">
                  Top Movers
                </h2>

                <span className="panel-action">
                  View All →
                </span>
              </div>

              <div className="movers-tabs">
                <button className="mover-tab active">
                  Gainers
                </button>

                <button className="mover-tab">
                  Losers
                </button>

                <button className="mover-tab">
                  Most Active
                </button>
              </div>

              <table className="stock-table">

                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Last Price</th>
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

                      <td
                        className={
                          stock.positive
                            ? "positive"
                            : "negative"
                        }
                      >
                        ▲ {stock.change}
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </section>

            {/* =====================================
                NIFTY CHART
            ===================================== */}

            <section className="panel chart-panel">

              <div className="panel-header">
                <div>
                  <div className="panel-title">
                    NIFTY 50
                  </div>

                  <div
                    style={{
                      marginTop: "5px",
                      fontFamily:
                        '"JetBrains Mono", monospace',
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  >
                    25,420.65

                    <span
                      className="positive"
                      style={{
                        marginLeft: "8px",
                        fontSize: "11px",
                      }}
                    >
                      ▲ +208.75 (+0.82%)
                    </span>
                  </div>
                </div>
              </div>

              <div className="movers-tabs">
                <button className="mover-tab active">
                  1D
                </button>

                <button className="mover-tab">
                  1W
                </button>

                <button className="mover-tab">
                  1M
                </button>

                <button className="mover-tab">
                  3M
                </button>

                <button className="mover-tab">
                  1Y
                </button>

                <button className="mover-tab">
                  5Y
                </button>
              </div>

              <div className="chart-container">

                <svg
                  className="chart-svg"
                  viewBox="0 0 500 230"
                  preserveAspectRatio="none"
                >
                  {/* Grid */}

                  <line
                    x1="0"
                    y1="30"
                    x2="500"
                    y2="30"
                    stroke="#1b2a32"
                  />

                  <line
                    x1="0"
                    y1="80"
                    x2="500"
                    y2="80"
                    stroke="#1b2a32"
                  />

                  <line
                    x1="0"
                    y1="130"
                    x2="500"
                    y2="130"
                    stroke="#1b2a32"
                  />

                  <line
                    x1="0"
                    y1="180"
                    x2="500"
                    y2="180"
                    stroke="#1b2a32"
                  />

                  {/* Area */}

                  <path
                    d="
                      M 0 175
                      L 20 145
                      L 40 155
                      L 60 120
                      L 80 135
                      L 100 105
                      L 120 120
                      L 140 92
                      L 160 105
                      L 180 80
                      L 200 100
                      L 220 76
                      L 240 88
                      L 260 65
                      L 280 78
                      L 300 55
                      L 320 67
                      L 340 48
                      L 360 58
                      L 380 42
                      L 400 52
                      L 420 35
                      L 440 43
                      L 460 27
                      L 480 36
                      L 500 20
                      L 500 230
                      L 0 230
                      Z
                    "
                    fill="rgba(141, 242, 60, 0.08)"
                  />

                  {/* Line */}

                  <polyline
                    points="
                      0,175
                      20,145
                      40,155
                      60,120
                      80,135
                      100,105
                      120,120
                      140,92
                      160,105
                      180,80
                      200,100
                      220,76
                      240,88
                      260,65
                      280,78
                      300,55
                      320,67
                      340,48
                      360,58
                      380,42
                      400,52
                      420,35
                      440,43
                      460,27
                      480,36
                      500,20
                    "
                    fill="none"
                    stroke="#8df23c"
                    strokeWidth="2"
                  />
                </svg>

              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(4, 1fr)",
                  padding: "0 14px 14px",
                  gap: "8px",
                }}
              >
                {[
                  ["OPEN", "25,211.40"],
                  ["HIGH", "25,486.20"],
                  ["LOW", "25,178.35"],
                  ["PREV. CLOSE", "25,211.85"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "8px",
                      }}
                    >
                      {label}
                    </div>

                    <div
                      style={{
                        marginTop: "4px",
                        fontFamily:
                          '"JetBrains Mono", monospace',
                        fontSize: "9px",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* =====================================
                HEATMAP
            ===================================== */}

            <section className="panel heatmap-panel">

              <div className="panel-header">
                <h2 className="panel-title">
                  Market Heatmap
                </h2>

                <span className="panel-action">
                  View All →
                </span>
              </div>

              <div className="heatmap">
                {heatmap.map((sector) => (
                  <div
                    key={sector.name}
                    className={`heatmap-cell ${sector.type}`}
                  >
                    <span>{sector.name}</span>

                    <strong>
                      {sector.change}
                    </strong>
                  </div>
                ))}
              </div>
            </section>

            {/* =====================================
                GLOBAL MARKETS
            ===================================== */}

            <section className="panel movers-panel">

              <div className="panel-header">
                <h2 className="panel-title">
                  Global Markets
                </h2>

                <span className="panel-action">
                  View All →
                </span>
              </div>

              <table className="stock-table">

                <tbody>
                  {globalMarkets.map((market) => (
                    <tr key={market.name}>

                      <td>
                        <span
                          style={{
                            marginRight: "8px",
                          }}
                        >
                          {market.flag}
                        </span>

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

            {/* =====================================
                FEATURED STOCK
            ===================================== */}

            <section className="panel featured-stock">

              <div className="panel-header">
                <h2 className="panel-title">
                  Featured Stock
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
                      Energy | Conglomerate
                    </div>
                  </div>

                  <span className="positive">
                    ↗
                  </span>

                </div>

                <div className="stock-big-price">
                  ₹1,421.35

                  <span
                    className="positive"
                    style={{
                      marginLeft: "8px",
                      fontSize: "11px",
                    }}
                  >
                    +29.82 (+2.14%)
                  </span>
                </div>

                <div className="stock-stats">

                  {[
                    ["MARKET CAP", "₹19.2T"],
                    ["P/E", "24.3"],
                    ["EPS", "₹58.5"],
                    ["ROE", "10.8%"],
                    ["DEBT / EQUITY", "0.42"],
                    ["DIVIDEND YIELD", "0.35%"],
                  ].map(([label, value]) => (
                    <div
                      className="stock-stat"
                      key={label}
                    >
                      <div className="stock-stat-label">
                        {label}
                      </div>

                      <div className="stock-stat-value">
                        {value}
                      </div>
                    </div>
                  ))}

                </div>

                <button
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    marginTop: "15px",
                  }}
                >
                  VIEW DETAILED ANALYSIS →
                </button>

              </div>
            </section>

            {/* =====================================
                BAWSAQ ANALYSIS
            ===================================== */}

            <section className="panel analysis-panel">

              <div className="panel-header">

                <h2 className="panel-title">
                  BAWSAQ Analysis
                </h2>

                <span
                  style={{
                    color: "var(--green)",
                    fontSize: "9px",
                    fontWeight: 700,
                  }}
                >
                  AI
                </span>

              </div>

              <div className="analysis-content">

                <div className="analysis-score">

                  <div className="score-ring">
                    7.8
                  </div>

                  <div>
                    <div
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "9px",
                      }}
                    >
                      OVERALL RATING
                    </div>

                    <div className="analysis-rating">
                      Strong Buy
                    </div>
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

                      <span
                        className={
                          value === "Medium"
                            ? "neutral"
                            : "positive"
                        }
                      >
                        {value}
                      </span>
                    </div>
                  ))}

                </div>

                <p
                  style={{
                    marginTop: "14px",
                    color: "var(--text-muted)",
                    fontSize: "10px",
                    lineHeight: 1.5,
                  }}
                >
                  Reliance shows strong fundamentals
                  and solid growth prospects. Valuation
                  remains moderate with positive momentum.
                </p>

              </div>
            </section>

            {/* =====================================
                NEWS
            ===================================== */}

            <section className="panel news-panel">

              <div className="panel-header">
                <h2 className="panel-title">
                  Recent News
                </h2>

                <span className="panel-action">
                  View All →
                </span>
              </div>

              {news.map((item, index) => (
                <article
                  className="news-item"
                  key={index}
                >
                  <div className="news-thumbnail" />

                  <div>
                    <div className="news-title">
                      {item.title}
                    </div>

                    <div className="news-source">
                      {item.source}
                    </div>
                  </div>
                </article>
              ))}

            </section>

            {/* =====================================
                PORTFOLIO
            ===================================== */}

            <section className="panel portfolio-panel">

              <div className="panel-header">
                <h2 className="panel-title">
                  Portfolio Overview
                </h2>

                <span className="panel-action">
                  View All →
                </span>
              </div>

              <div
                style={{
                  padding: "18px",
                }}
              >

                <div
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "9px",
                  }}
                >
                  TOTAL VALUE
                </div>

                <div
                  style={{
                    marginTop: "5px",
                    fontFamily:
                      '"JetBrains Mono", monospace',
                    fontSize: "23px",
                    fontWeight: 600,
                  }}
                >
                  ₹7,42,680
                </div>

                <div
                  className="positive"
                  style={{
                    marginTop: "5px",
                    fontFamily:
                      '"JetBrains Mono", monospace',
                    fontSize: "10px",
                  }}
                >
                  ▲ +4.98% Today
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: "20px",
                  }}
                >

                  <div
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      background:
                        "conic-gradient(#8df23c 0 68%, #45a9ff 68% 86%, #a855f7 86% 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "58px",
                        height: "58px",
                        borderRadius: "50%",
                        background:
                          "var(--bg-panel)",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      fontSize: "10px",
                    }}
                  >
                    <span>● Equity&nbsp; 68%</span>
                    <span>● Mutual Funds&nbsp; 18%</span>
                    <span>● Cash&nbsp; 14%</span>
                  </div>

                </div>

              </div>
            </section>

            {/* =====================================
                QUICK ACCESS
            ===================================== */}

            <section className="panel quick-panel">

              <div className="panel-header">
                <h2 className="panel-title">
                  Quick Access
                </h2>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(2, 1fr)",
                  gap: "8px",
                  padding: "14px",
                }}
              >

                <button className="btn btn-secondary">
                  ☆ Add to Watchlist
                </button>

                <button className="btn btn-secondary">
                  ⇄ Compare Stocks
                </button>

                <button className="btn btn-secondary">
                  ♢ Set Alert
                </button>

                <button className="btn btn-secondary">
                  ⌕ Open Screener
                </button>

              </div>

              <div
                style={{
                  margin: "0 14px 14px",
                  minHeight: "70px",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "12px",
                  background:
                    "linear-gradient(135deg, #08151b, #0c2029)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "16px",
                    }}
                  >
                    BAWSAQ
                  </div>

                  <div
                    style={{
                      marginTop: "3px",
                      color: "var(--text-muted)",
                      fontSize: "8px",
                      letterSpacing: "1px",
                    }}
                  >
                    THE MARKET NEVER SLEEPS
                  </div>
                </div>
              </div>

            </section>

          </div>
        </section>
      </main>
    </div>
  );
}