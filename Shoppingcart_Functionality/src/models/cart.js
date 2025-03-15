class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            this.items.push({ ...product, quantity: product.quantity });
        }
    }

    updateItem(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }

    viewCart() {
        return this.items;
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    clearCart() {
        this.items = [];
    }
}

module.exports = Cart;