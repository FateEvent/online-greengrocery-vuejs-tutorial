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
          <td><i :class="`icofont-3x icofont-` + getIcon(key)"></i></td>
          <td>{{ key }}</td>
          <td>${{ getPrice(key) }}</td>
          <td class="center">{{ quantity }}</td>
          <td>${{ quantity * getPrice(key) }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  props: ['inventory', 'pastOrders', 'getIcon', 'getPrice']
}
</script>
