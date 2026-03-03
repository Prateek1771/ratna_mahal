import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const TABS = ["Orders", "Addresses", "Settings"];

const MOCK_ORDERS = [
  {
    id: "RM-2024-78312",
    date: "12 Jan 2025",
    status: "Delivered",
    items: [
      { name: "Divyam Kundan Bridal Necklace Set", brand: "Suvarni", qty: 1, price: 285000 },
    ],
    total: 285000,
  },
  {
    id: "RM-2024-65201",
    date: "28 Nov 2024",
    status: "Delivered",
    items: [
      { name: "Heritage Jadau Ring in 22K Gold", brand: "Vaidehi", qty: 1, price: 175000 },
      { name: "Temple Gold Jhumka Earrings", brand: "Kanakdhara", qty: 1, price: 68000 },
    ],
    total: 243000,
  },
];

const MOCK_ADDRESS = {
  label: "Home",
  name: "Priya Mehta",
  line1: "42, Lotus Lane, Jubilee Hills",
  line2: "Hyderabad, Telangana 500033",
  phone: "+91 98765 43210",
};

function formatPrice(amount) {
  return "\u20B9" + amount.toLocaleString("en-IN");
}

function StatusBadge({ status }) {
  const colors =
    status === "Delivered"
      ? "bg-green-50 text-green-700 border-green-200"
      : status === "Shipped"
      ? "bg-blue-50 text-blue-700 border-blue-200"
      : "bg-amber-50 text-amber-700 border-amber-200";

  return (
    <span className={`text-[10px] uppercase tracking-[0.1em] font-semibold px-2.5 py-1 border ${colors}`}>
      {status}
    </span>
  );
}

function OrdersTab() {
  return (
    <div className="space-y-6">
      {MOCK_ORDERS.map((order) => (
        <div key={order.id} className="border border-border p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.1em] text-secondary">Order {order.id}</p>
              <p className="text-[11px] text-secondary mt-0.5">{order.date}</p>
            </div>
            <StatusBadge status={order.status} />
          </div>

          <div className="space-y-3 border-t border-border pt-4">
            {order.items.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.1em] text-secondary">{item.brand}</span>
                  <p>{item.name}</p>
                </div>
                <span className="shrink-0 ml-4">{formatPrice(item.price)}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4 pt-3 border-t border-border text-sm font-medium">
            <span>Total</span>
            <span>{formatPrice(order.total)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function AddressesTab() {
  return (
    <div className="space-y-4">
      <div className="border border-border p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-[0.1em] font-semibold bg-bg-light px-2.5 py-1">
            {MOCK_ADDRESS.label}
          </span>
        </div>
        <p className="text-sm font-medium">{MOCK_ADDRESS.name}</p>
        <p className="text-sm text-secondary mt-1">{MOCK_ADDRESS.line1}</p>
        <p className="text-sm text-secondary">{MOCK_ADDRESS.line2}</p>
        <p className="text-sm text-secondary mt-1">{MOCK_ADDRESS.phone}</p>
      </div>

      <button className="w-full border border-primary text-primary py-3.5 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-primary/5 transition-colors">
        Add New Address
      </button>
    </div>
  );
}

function SettingsTab() {
  const rows = [
    { label: "Email", value: "priya.mehta@email.com" },
    { label: "Password", value: "••••••••" },
    { label: "Notifications", value: "Email & SMS" },
    { label: "Language", value: "English" },
  ];

  return (
    <div className="space-y-0">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between py-4 border-b border-border">
          <div>
            <p className="text-sm font-medium">{row.label}</p>
            <p className="text-[11px] text-secondary mt-0.5">{row.value}</p>
          </div>
          <button className="text-[11px] uppercase tracking-[0.1em] text-secondary hover:text-primary transition-colors">
            Edit
          </button>
        </div>
      ))}

      <button className="w-full mt-6 border border-accent text-accent py-3.5 text-[12px] uppercase tracking-[0.18em] font-medium hover:bg-accent/5 transition-colors">
        Sign Out
      </button>
    </div>
  );
}

const TAB_CONTENT = {
  Orders: OrdersTab,
  Addresses: AddressesTab,
  Settings: SettingsTab,
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Orders");
  const ActiveComponent = TAB_CONTENT[activeTab];

  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Profile header */}
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-xl font-serif">
          PM
        </div>
        <h1 className="font-serif text-2xl mt-4">Priya Mehta</h1>
        <p className="text-[11px] uppercase tracking-[0.14em] text-secondary mt-1.5">
          Gold Member since 2021
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex justify-center gap-8 border-b border-border mb-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-3 text-[11px] uppercase tracking-[0.14em] transition-colors ${
              activeTab === tab ? "text-primary font-semibold" : "text-secondary hover:text-primary"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="profile-tab-indicator"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
