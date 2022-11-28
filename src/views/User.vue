<template>
  <div class="container">
    <h1 class="title">我的會員帳戶</h1>
    <hr class="title-line" />
    <div class="area">
      <UserList class="left" />
      <div class="right">
        <!-- 會員資訊 -->
        <div class="right-area">
          <p class="right-title">一般會員</p>
          <div class="descript">
            <p class="member">歷史訂單 <span> &nbsp; 0</span></p>
          </div>
          <div class="descript">
            <p class="member">心得回顧 <span> &nbsp; 0</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import UserList from "../components/UserList";

export default {
  name: "User",
  components: {
    UserList,
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
/* right */
.right {
  margin-left: 1rem;
  width: 100%;
}
.right-area {
  margin-bottom: 3rem;
  color: var(--black);
}
.right-title {
  font-size: var(--sec-font-size);
  font-weight: 700;
  color: var(--main-color);
  margin-bottom: 1rem;
}
/* 會員資訊 */
.descript {
  padding-left: 2rem;
  padding-top: 1rem;
}
.member {
  text-decoration-line: underline;
  text-underline-offset: 0.5rem;
}

@media screen and (max-width: 768px) {
  .container {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 100px;
  }
  .area {
    display: flex;
    flex-direction: column;
  }
  .right {
    margin-top: 2rem;
    margin-left: 0;
  }
}
</style>
