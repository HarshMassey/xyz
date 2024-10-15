import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, addItem, removeItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
    const dispatch = useDispatch(); // Initialize dispatch

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity > 0) {
            dispatch(updateQuantity({ name: item.name, quantity: newQuantity })); // Dispatch updateQuantity
        }
    };

    const handleAddItem = () => {
        dispatch(addItem({ ...item, quantity: 1 })); // Dispatch addItem with an additional quantity
    };

    const handleRemoveItem = () => {
        dispatch(removeItem(item.name)); // Dispatch removeItem based on item name
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <div className="cart-item-cost">{item.cost}</div>
                <input 
                    type="number" 
                    value={item.quantity} 
                    min="1" 
                    onChange={handleQuantityChange} 
                    className="quantity-input"
                />
                <button onClick={handleAddItem} className="add-button">
                    Add More
                </button>
                <button onClick={handleRemoveItem} className="remove-button">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
