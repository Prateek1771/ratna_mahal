import { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const reveal = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail("");
    }
  };

  return (
    <section ref={reveal} className="animate-on-scroll bg-bg-cream pt-14 pb-16 md:pt-20 md:pb-24 text-center">
      <p className="text-[11px] uppercase tracking-[0.2em] text-secondary mb-3">Newsletter</p>
      <h2 className="font-serif text-2xl md:text-3xl">Stay in Touch</h2>
      <p className="text-sm text-secondary mt-3 max-w-sm mx-auto leading-relaxed">
        Subscribe for exclusive access to new collections, festive offers, and wedding season specials.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex mx-auto max-w-md mt-8 px-4 md:px-0"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="flex-1 border border-border px-4 py-3 outline-none focus:border-primary transition-colors duration-200 text-sm bg-white"
        />
        <button
          type="submit"
          className="bg-primary text-white px-8 py-3 text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-primary/85 transition-colors duration-200 whitespace-nowrap shrink-0"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}
