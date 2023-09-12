<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/actual-products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <a href="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </a>
      <!-- <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link> -->
    </nav>
    <div @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </div>
  </header>
  <router-view
    :inventory="inventory"
    :addToCart="addToCart"
    :getPrice="getPrice"
    :getIcon="getIcon"
    :pastOrders="pastOrders"
  />

  <CartSidebar
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
    :registerOrders="registerOrders"
    :getPrice="getPrice"
    :getIcon="getIcon"
  />
</template>

<script>
import CartSidebar from '@/components/CartSidebar.vue'
import food from '@/food.json'

export default {
  components: {
    CartSidebar
  },
  data () {
    return {
      showSidebar: false,
      inventory: food,
      cart: {},
      pastOrders: {}
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  methods: {
    registerOrders () {
      if (localStorage) {
        const tmpObj = { ...this.pastOrders }
        for (const [key1, value1] of Object.entries(tmpObj)) {
          for (const [key2, value2] of Object.entries(this.cart)) {
            if (key1 === key2) {
              tmpObj[key1] = value1 + value2
            }
          }
        }
        const savedOrders = { ...this.cart, ...tmpObj }
        localStorage.setItem('pastOrders', JSON.stringify(savedOrders))
        location.reload()
      }
    },
    retrievePastOrders () {
      if (localStorage) {
        const savedOrders = JSON.parse(localStorage.getItem('pastOrders'))
        if (savedOrders) {
          this.pastOrders = savedOrders
        }
      }
    },
    registerCart () {
      if (localStorage) {
        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
    },
    retrieveCart () {
      if (localStorage) {
        const savedOrders = JSON.parse(localStorage.getItem('cart'))
        if (savedOrders) {
          this.cart = savedOrders
        }
      }
    },
    addToCart (name, quantity) {
      if (quantity > 0) {
        if (!this.cart[name]) this.cart[name] = 0
        this.cart[name] += quantity
        this.registerCart()
      }
    },
    removeItem (name) {
      delete this.cart[name]
      this.registerCart()
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    getPrice (name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product.price.USD
    },
    getIcon (name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product.icon
    }
  },
  created () {
    window.addEventListener('load', this.retrievePastOrders)
    window.addEventListener('load', this.retrieveCart)
  },
  mounted () {
    window.addEventListener('load', this.retrievePastOrders)
    window.addEventListener('load', this.retrieveCart)
  }
}
</script>
