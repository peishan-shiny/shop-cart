<template>
  <div class="container">
    <OrderList />
  </div>
</template>

<script>
import OrderList from "../components/OrderList";

export default {
  name: "Order",
  components: {
    OrderList,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  width: 80vw;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  top: 150px;
}
@media screen and (max-width: 480px) {
  .container {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 100px;
  }
}
</style>