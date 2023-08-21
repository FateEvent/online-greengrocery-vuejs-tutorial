<template>
  <h1>Past Orders</h1>

  <main class="wrapper">
    <h1>Past Orders</h1>

    <table class="product-table">
      <thead>
        <tr>
          <td><span class="sr-only">Product Image</span></td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Total</td>
          <td><span class="sr-only">Actions</span></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(quantity, key, i) in pastOrders" :key="i">
          <td><i :class="icon(key)"></i></td>
          <td>{{ key }}</td>
          <td>${{ price(key) }}</td>
          <td class="center">{{ quantity }}</td>
          <td>${{ quantity * price(key) }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import food from '@/food.json'

export default {
  data () {
    return {
      inventory: food,
      pastOrders: {}
    }
  },
  methods: {
    retrievePastOrders () {
      if (localStorage) {
        const savedOrders = JSON.parse(localStorage.getItem('cart'))
        if (savedOrders) {
          this.pastOrders = savedOrders
          console.log(this.pastOrders)
        }
      }
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
  computed: {
    icon: function () {
      return (key) => `icofont-2x icofont-${this.getIcon(key)}`
    },
    price: function () {
      return (key) => this.getPrice(key)
    }
  },
  created () {
    window.addEventListener('load', this.retrievePastOrders)
  }
}
</script>
