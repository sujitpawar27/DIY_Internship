class CartService {
    constructor() {
        this.cart = [];
    }

    addItem(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            this.cart.push({ ...product, quantity: product.quantity });
        }
        this.saveCart();
    }

    viewCart() {
        return this.cart;
    }

    updateItem(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeItem(productId);
            }
            this.saveCart();
        }
    }

    removeItem(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
    }

    calculateTotal() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    saveCart() {
        // Logic to persist cart data (e.g., save to a database or in-memory storage)
    }
}

module.exports = CartService;