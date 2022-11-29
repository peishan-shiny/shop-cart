<template>
  <div>
    <i class="el-icon-shopping-cart-2 cart"></i>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      // 這邊要傳購物車的資料進來，判斷有東西就要浮現，且不管在哪個頁面都存在，只要使用者是登錄狀態下
    };
  },
};
</script>

<style scoped>
.cart {
  display: none;
}
@media screen and (max-width: 480px) {
  .cart {
    all: unset;
    font-size: 35px;
    color: var(--black);
    background-color: var(--white);
    border: 10px solid var(--white);
    border-radius: 50%;
    opacity: 0.8;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 9999;
  }
}
</style>