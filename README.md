# online-greengrocery

Online Greengrocery is a site based on a project developed by Gwen Faraday for a tutorial on VueJs:
- <https://www.youtube.com/watch?v=FXpIoQ_rT_c>.

## Project setup
```
npm install --legacy-peer-deps
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Todo list:
- [x] render images in the ProductCard component;
- [x] render images in the CartSidebar component;
- [x] reset the quantity variable in the Products and Home pages once the products have been sold;
- [x] keep the quantity input in the product cards from getting under 0;
- [x] add browser or database storage for the past orders page;
- [x] add a function to merge the pastOrders and the cart arrays before registration in the local storage;
- [x] find a way to update the PastOrders page in order to have the past orders from the start;
- [x] find a way to import the getPrice and getIcon functions instead of repeating them in PastOrders.vue.

## Bibliography:

For a clear explanation about the `app.use(...)` function, see:
* <https://stackoverflow.com/questions/11321635/nodejs-express-what-is-app-use>;
