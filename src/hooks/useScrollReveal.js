import { useRef, useCallback } from "react";

let sharedObserver = null;

function getObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            sharedObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
  }
  return sharedObserver;
}

export default function useScrollReveal() {
  const nodeRef = useRef(null);

  const ref = useCallback((node) => {
    // Unobserve previous node if any
    if (nodeRef.current) {
      getObserver().unobserve(nodeRef.current);
    }
    nodeRef.current = node;
    if (node) {
      getObserver().observe(node);
    }
  }, []);

  return ref;
}
