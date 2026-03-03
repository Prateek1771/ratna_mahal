import { createContext, useContext, useReducer, useMemo, useCallback } from "react";

const WishlistContext = createContext(null);

function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.some((item) => item.id === action.payload.id);
      if (exists) return state;
      return [...state, action.payload];
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR_WISHLIST":
      return [];
    default:
      return state;
  }
}

export function WishlistProvider({ children }) {
  const [items, dispatch] = useReducer(wishlistReducer, []);

  const value = useMemo(() => {
    const itemCount = items.length;
    const isWishlisted = (id) => items.some((item) => item.id === id);

    return {
      items,
      itemCount,
      isWishlisted,
      addItem: (product) =>
        dispatch({
          type: "ADD_ITEM",
          payload: {
            id: product.id,
            brand: product.brand,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.images?.[0] ?? product.image,
            badge: product.badge,
          },
        }),
      removeItem: (id) => dispatch({ type: "REMOVE_ITEM", payload: id }),
      toggleItem: (product) => {
        if (isWishlisted(product.id)) {
          dispatch({ type: "REMOVE_ITEM", payload: product.id });
        } else {
          dispatch({
            type: "ADD_ITEM",
            payload: {
              id: product.id,
              brand: product.brand,
              name: product.name,
              price: product.price,
              originalPrice: product.originalPrice,
              image: product.images?.[0] ?? product.image,
              badge: product.badge,
            },
          });
        }
      },
      clearWishlist: () => dispatch({ type: "CLEAR_WISHLIST" }),
    };
  }, [items]);

  return (
    <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
