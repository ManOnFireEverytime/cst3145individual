const app = new Vue({
  el: "#app",
  data: {
    lessons: lessons,
    onHome: true,
    ascending: true,
    sortBy: "subject",
    cart: [],
    search: "",
  },
  methods: {
    //Change Pages
    changePage() {
      this.onHome = !this.onHome;
    },
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
    //Remove item from cart
    removeFromCart() {
      //Remove 1 item from cart
      this.cart.splice(this.cart.item, 1);
      //Switch to home page if cart becomes empty
      if (this.cart.length <= 0) {
        this.changePage();
      }
    },
    //Submitted Form Message
    submitForm() {
      alert("Your order has been Submitted");
    },
  },
  computed: {
    //Searching & Sorting
    filteredLessons: function () {
      let tempLessons = this.lessons;

      //Search Function
      if (this.search != "") {
        tempLessons = tempLessons.filter((item) => {
          return (
            item.Subject.toLowerCase().match(this.search.toLowerCase()) ||
            item.Location.toLowerCase().match(this.search.toLowerCase())
          );
        });
      }

      return tempLessons;
    },
    // Number of items in Cart
    cartItemCount: function () {
      return this.cart.length || "";
    },
  },
});
