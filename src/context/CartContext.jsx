import { createContext, useContext, useReducer, useMemo, useEffect } from "react";

function loadCart() {
  try {
    const data = localStorage.getItem("ratna_cart");
    return data ? JSON.parse(data) : [];
  } catch { return []; }
}

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const key = `${action.payload.id}_${action.payload.selectedSize}`;
      const existing = state.find(
        (item) => `${item.id}_${item.selectedSize}` === key
      );
      if (existing) {
        return state.map((item) =>
          `${item.id}_${item.selectedSize}` === key
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE_ITEM": {
      const key = `${action.payload.id}_${action.payload.selectedSize}`;
      return state.filter(
        (item) => `${item.id}_${item.selectedSize}` !== key
      );
    }
    case "UPDATE_QTY": {
      const key = `${action.payload.id}_${action.payload.selectedSize}`;
      if (action.payload.quantity <= 0) {
        return state.filter(
          (item) => `${item.id}_${item.selectedSize}` !== key
        );
      }
      return state.map((item) =>
        `${item.id}_${item.selectedSize}` === key
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    }
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart);

  useEffect(() => {
    localStorage.setItem("ratna_cart", JSON.stringify(items));
  }, [items]);

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shippingFee = subtotal >= 10000 ? 0 : subtotal > 0 ? 500 : 0;
    const total = subtotal + shippingFee;

    return {
      items,
      itemCount,
      subtotal,
      shippingFee,
      total,
      addItem: (item) => dispatch({ type: "ADD_ITEM", payload: item }),
      removeItem: (id, selectedSize) =>
        dispatch({ type: "REMOVE_ITEM", payload: { id, selectedSize } }),
      updateQty: (id, selectedSize, quantity) =>
        dispatch({
          type: "UPDATE_QTY",
          payload: { id, selectedSize, quantity },
        }),
      clearCart: () => dispatch({ type: "CLEAR_CART" }),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
