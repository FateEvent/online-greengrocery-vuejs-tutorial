<template>
  <div class="card">
    <div class="card-title">
      {{ product.name }}
    </div>
    <div class="card-body">
      <i :class="`icofont-10x icofont-` + product.icon"></i>
      <form>
        <div class="row">
          <div class="cell">
            <label>Type:</label>
          </div>
          <div class="cell">
            <em>{{ product.type }}</em>
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label>Price:</label>
          </div>
          <div class="cell">
            ${{ product.price.USD }}
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label>Quantity:</label>
          </div>
          <div class="cell">
            <input type="number" min="0" v-model.number="quantity">
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer">
      <!-- <button @click="addToCart(product.name, quantity)" class="btn btn-light margin"> -->
        <button @click="emptyStock(product.name)" class="btn btn-light margin">
        Add to cart
      </button>
      <button @click="resetData()" class="btn btn-light margin">
        Reset data
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: ['product', 'index', 'addToCart'],
  emits: ['sell'],
  setup (props, { emit }) {
    const quantity = ref(0)

    function emptyStock (name) {
      emit('sell', name, quantity.value)
      resetData()
    }

    function resetData () {
      quantity.value = 0
    }

    return {
      quantity,
      emptyStock,
      resetData
    }
  }
}
</script>
