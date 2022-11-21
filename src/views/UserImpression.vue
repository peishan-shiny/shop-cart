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
          <div class="right">
            <!-- 心得回顧 -->
            <div class="right-area">
              <p class="right-title">心得回顧</p>
              <el-table :data="tableData" stripe class="impression">
                <el-table-column prop="user" label="留言人"> </el-table-column>
                <el-table-column prop="score" label="評分" min-width="150px">
                  <el-rate v-model="scoreValue"></el-rate>
                </el-table-column>
                <el-table-column prop="content" label="內文"> </el-table-column>
                <el-table-column prop="date" label="留言時間">
                </el-table-column>
              </el-table>
            </div>
          </div>
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
import Cart from "../components/Cart";

export default {
  name: "UserImpression",
  components: {
    Header,
    Footer,
    UserList,
    Cart,
  },
  data() {
    return {
      tableData: [
        {
          user: "珊珊",
          score: 5,
          content: "很服貼不掉妝，會再回購！",
          date: "2022/11/12",
        },
      ],
      scoreValue: 5,
    };
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
