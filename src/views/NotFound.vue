<template>
  <h1 class="content">404 Page Not Found-333</h1>
</template>


<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.content {
  font-family: "微軟正黑體";
  font-size: var(--main-font-size);
  color: var(--main-color);
  width: 80vw;
  margin: 0 auto;
  position: relative;
  top: 200px;
}

@media screen and (max-width: 480px) {
  .content {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 100px;
  }
}
</style>
