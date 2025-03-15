class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }

    async addItem(req, res) {
        try {
            const item = req.body;
            const updatedCart = await this.cartService.addItem(item);
            res.status(201).json(updatedCart);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async viewCart(req, res) {
        try {
            const cart = await this.cartService.viewCart();
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateItem(req, res) {
        try {
            const itemId = req.params.id;
            const updatedItem = req.body;
            const updatedCart = await this.cartService.updateItem(itemId, updatedItem);
            res.status(200).json(updatedCart);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async removeItem(req, res) {
        try {
            const itemId = req.params.id;
            const updatedCart = await this.cartService.removeItem(itemId);
            res.status(200).json(updatedCart);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = CartController;