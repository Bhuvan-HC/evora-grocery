import {
  Truck,
  ShoppingCart,
  IndianRupee,
  TrendingDown,
  Package,
  FileText,
  Bell,
  HelpCircle,
  LogOut,
  Repeat,
  BarChart3,
} from "lucide-react";

import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash-root">

      {/* TOP BAR */}
      <header className="dash-top">
        <div className="brand">
          <span className="logo-dot" />
          <h1>EVORA</h1>
        </div>

        <div className="top-right">
          <span className="delivery-status">
            <Truck size={14} /> Receiving Orders Today
          </span>
          <span className="business-name">
            Sri Lakshmi Caterers – Bengaluru
          </span>
        </div>
      </header>

      <div className="dash-body">

        {/* SIDEBAR */}
        <aside className="dash-sidebar">
          <nav>
            <a className="active"><BarChart3 size={16} /> Dashboard</a>
            <a><TrendingDown size={16} /> Today’s Prices</a>
            <a><ShoppingCart size={16} /> New Order</a>
            <a><Package size={16} /> My Orders</a>
            <a><FileText size={16} /> Invoices & GST</a>
            <a><HelpCircle size={16} /> Support</a>
            <a className="logout"><LogOut size={16} /> Logout</a>
          </nav>
        </aside>

        {/* MAIN */}
        <main className="dash-main">

          {/* KPI STRIP */}
          <section className="kpi-strip">
            <div>
              <span className="kpi-label">Orders Today</span>
              <strong><ShoppingCart size={14} /> 3</strong>
            </div>
            <div>
              <span className="kpi-label">Next Delivery</span>
              <strong><Truck size={14} /> 4:30 – 6:00 PM</strong>
            </div>
            <div>
              <span className="kpi-label">This Month Spend</span>
              <strong><IndianRupee size={14} /> 42,800</strong>
            </div>
            <div>
              <span className="kpi-label">Avg Savings</span>
              <strong><TrendingDown size={14} /> 12.4%</strong>
            </div>
          </section>

          {/* ACTIVE DELIVERY */}
          <section className="panel">
            <h2><Truck size={18} /> Active Delivery</h2>

            <div className="delivery-card">
              <div>
                <strong>Order EV-2341</strong>
                <p>Vegetables • Grains • Cooking Oils (42 SKUs)</p>
              </div>
              <div className="eta">
                <span>Status</span>
                <strong>Out for Dispatch</strong>
              </div>
            </div>
          </section>

          {/* QUICK ACTIONS */}
          <section className="panel">
            <h2>Quick Actions</h2>

            <div className="actions">
              <button className="primary">
                <ShoppingCart size={16} /> New Procurement Order
              </button>
              <button>
                <TrendingDown size={16} /> View Today’s Prices
              </button>
              <button>
                <Repeat size={16} /> Repeat Last Order
              </button>
            </div>
          </section>

          {/* ORDERS & BILLING */}
          <section className="panel grid-2">
            <div>
              <h2><Package size={18} /> Recent Orders</h2>
              <ul className="list">
                <li>EV-2339 — Delivered</li>
                <li>EV-2338 — Delivered</li>
                <li>EV-2337 — Cancelled (Supplier Shortage)</li>
              </ul>
            </div>

            <div>
              <h2><FileText size={18} /> Invoices & GST</h2>
              <ul className="list">
                <li>April 2026 GST Invoice</li>
                <li>March 2026 GST Invoice</li>
                <li>February 2026 GST Invoice</li>
              </ul>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;