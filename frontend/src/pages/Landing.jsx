import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="landing">

      {/* HERO */}
      <section className="hero">
        <div>
          <h1>
            Bulk Grocery Procurement <br />
            for Hotels, Events & Caterers
          </h1>
          <p>
            EVORA is a B2B grocery supply platform built to replace unreliable
            local sourcing. We supply vegetables, grains, oils, spices, dairy
            and kitchen essentials in bulk — with predictable pricing,
            assured quality, and scheduled delivery.
          </p>

          <div className="hero-cta">
            <button className="primary">Request Bulk Quote</button>
            <button className="secondary">View Today’s Prices</button>
          </div>
        </div>

        <div>
          <div className="price-box">
            <h3>Procurement Based on Daily Market Rates</h3>
            <p>
              Prices are updated every day based on wholesale market data,
              eliminating overcharging, bargaining, and middlemen dependency.
            </p>
          </div>
        </div>
      </section>

      {/* OPERATIONAL STATS */}
      <section className="stats">
        <div className="stat">
          <h3>Daily Fulfilment</h3>
          <p>Fresh stock sourced and delivered every day</p>
        </div>
        <div className="stat">
          <h3>Bulk-First Model</h3>
          <p>Optimised for large kitchens and events</p>
        </div>
        <div className="stat">
          <h3>Price Transparency</h3>
          <p>Market price vs EVORA price shown clearly</p>
        </div>
        <div className="stat">
          <h3>Scheduled Delivery</h3>
          <p>Time-slot based logistics for operations</p>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="serve">
        <h2>Who EVORA Is Built For</h2>
        <div className="serve-grid">
          <div className="serve-card">
            <strong>Hotels & Resorts</strong>
            <p>
              Consistent daily supply for breakfast, lunch and banquet
              operations without procurement uncertainty.
            </p>
          </div>
          <div className="serve-card">
            <strong>Caterers</strong>
            <p>
              Bulk ordering for weddings, corporate events and large gatherings
              with assured quantity and delivery timelines.
            </p>
          </div>
          <div className="serve-card">
            <strong>Event Organizers</strong>
            <p>
              One supplier for complete grocery needs, reducing coordination
              with multiple vendors.
            </p>
          </div>
          <div className="serve-card">
            <strong>Large Family Functions</strong>
            <p>
              Transparent pricing and bulk quantities for functions without
              retail overpricing.
            </p>
          </div>
        </div>
      </section>

      {/* WHY EVORA */}
      <section className="price-adv">
        <div>
          <h2>Why Businesses Switch to EVORA</h2>
          <p>
            Traditional sourcing depends on local vendors, fluctuating prices,
            and last-minute availability. EVORA replaces this with a structured,
            data-backed procurement system designed for scale.
          </p>

          <ul style={{ marginTop: "14px", color: "#444" }}>
            <li>• Reduced dependency on multiple local suppliers</li>
            <li>• Predictable daily pricing</li>
            <li>• Bulk-friendly logistics</li>
            <li>• Centralised ordering and billing</li>
          </ul>
        </div>

        <div className="price-box">
          <h3>Save 8% – 18%</h3>
          <p>
            Average savings compared to unstructured local market purchases,
            depending on category and volume.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div>
          <h2>Start Smarter Bulk Procurement</h2>
          <p>
            Move away from unreliable sourcing. Get consistent supply, clear
            pricing and dependable delivery with EVORA.
          </p>
        </div>
        <button>Request a Business Account</button>
      </section>

    </div>
  );
};

export default Landing;