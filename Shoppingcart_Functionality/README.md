# Shopping Cart Application

This is a simple shopping cart application built with Node.js and Express. It allows users to manage their selected products through a RESTful API.

## Features

- Add items to the cart
- View items in the cart
- Update item quantities in the cart
- Remove items from the cart
- Calculate total price of items in the cart
- Persistent cart storage

## Project Structure

```
shopping-cart-app
├── src
│   ├── controllers
│   │   └── cartController.js
│   ├── models
│   │   └── cart.js
│   ├── routes
│   │   └── cartRoutes.js
│   ├── services
│   │   └── cartService.js
│   └── app.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd shopping-cart-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Use an API client (like Postman) to interact with the following endpoints:

   - **Add Item**: `POST /cart/add`
   - **View Cart**: `GET /cart`
   - **Update Item**: `PUT /cart/update`
   - **Remove Item**: `DELETE /cart/remove`

## Environment Variables

Create a `.env` file in the root directory to set up any necessary environment variables.

## License

This project is licensed under the MIT License.