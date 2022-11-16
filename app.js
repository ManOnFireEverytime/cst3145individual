const app = new Vue({
  el: "#app",
  data: {
    lessons: lessons,

    cart: [],
  },
  methods: {
    //Add item to Cart
    addToCart(item) {
      this.cart.push(item);
    },
    //Checking if the user can add item to cart
    canAddToCart(item) {
      return item.Space > this.cartCount(item);
    },
    // Item Cart count
    cartCount(item) {
      let count = 0;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === item) {
          count++;
        }
      }
      return count;
    },
  },
  computed: {},
});
