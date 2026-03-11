import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface CartItem {
    _id: string;   // Maps to product._id
    name: string;
    price: number;
    image: string;
    size: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string, size: string) => void;
    updateQuantity: (id: string, size: string, quantity: number) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (newItem: CartItem) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item._id === newItem._id && item.size === newItem.size);
            if (existingItem) {
                return prev.map(item =>
                    (item._id === newItem._id && item.size === newItem.size)
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            }
            return [...prev, newItem];
        });
    };

    const removeFromCart = (id: string, size: string) => {
        setCartItems(prev => prev.filter(item => !(item._id === id && item.size === size)));
    };

    const updateQuantity = (id: string, size: string, quantity: number) => {
        if (quantity < 1) return;
        setCartItems(prev => prev.map(item =>
            (item._id === id && item.size === size)
                ? { ...item, quantity }
                : item
        ));
    };

    const clearCart = () => setCartItems([]);

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartCount,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
