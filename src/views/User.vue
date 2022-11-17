<template>
  <div class="sticky-footer">
    <div class="sticky-content">
      <Header />

      <div class="container">
        <h1 class="title">我的會員帳戶</h1>
        <hr class="title-line" />
        <Cart />
        <div class="area">
          <UserList class="left" />
          <UserMain class="right" />
        </div>
      </div>
    </div>
    <Footer class="sticky-bottom"> </Footer>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer";
import UserList from "../components/UserList";
import UserMain from "../components/UserMain";
import Cart from "../components/Cart";

export default {
  name: "User",
  components: {
    Header,
    Footer,
    UserList,
    UserMain,
    Cart,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.sticky-content {
  min-height: 100vh;
  padding-bottom: 250px;
}
.container {
  width: 80vw;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  top: 150px;
}
.title {
  font-size: var(--main-font-size);
  color: var(--black);
}
.title-line {
  width: 100%;
}
.area {
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
}

@media screen and (max-width: 480px) {
  .container {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 100px;
  }
  .left {
    display: none;
  }
}
</style>
