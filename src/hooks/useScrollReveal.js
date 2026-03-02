import { useEffect, useRef, useCallback } from "react";

export default function useScrollReveal() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const ref = useCallback((node) => {
    if (node) observerRef.current?.observe(node);
  }, []);

  return ref;
}
