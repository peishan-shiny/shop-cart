<template>
  <div class="right">
    <!-- 會員資訊 -->
    <div class="area">
      <p class="title">一般會員</p>
      <div class="descript">
        <p class="member">心得回顧 <span> &nbsp; 0</span></p>
      </div>
    </div>
    <!-- 修改會員資料 -->
    <div class="area">
      <p class="title">管理會員資訊</p>
    </div>
    <!-- 歷史訂單 -->
    <div class="area">
      <p class="title">歷史訂單</p>
      <div class="order-status"></div>
      <div class="order-content"></div>
    </div>
    <!-- 心得回顧 -->
    <div class="area">
      <p class="title">心得回顧</p>
      <el-table :data="tableData" stripe>
        <el-table-column prop="user" label="留言人"> </el-table-column>
        <el-table-column prop="score" label="評分" min-width="150px">
          <el-rate v-model="value"></el-rate>
        </el-table-column>
        <el-table-column prop="content" label="內文"> </el-table-column>
        <el-table-column prop="date" label="留言時間"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserMain",
  data() {
    return {
      imgURL: require("../assets/images/article.jpg"),
      isAction: false,
      tableData: [
        {
          user: "珊珊",
          score: 5,
          content: "很服貼不掉妝，會再回購！",
          date: "2022/11/12",
        },
        {
          user: "牛牛",
          score: 5,
          content: "讚啦！回購10次，真心推薦！",
          date: "2022/12/12",
        },
      ],
      value: 5,
    };
  },
};
</script>

<style scoped>
* {
  font-family: "微軟正黑體";
}
.right {
  margin-left: 1rem;
  line-height: 2rem;
}
.area {
  margin-bottom: 2rem;
}
.title {
  font-size: var(--sec-font-size);
  color: var(--main-color);
}
.descript {
  padding-left: 2rem;
  padding-top: 1rem;
}
.member {
  color: var(--black);
  /* border-bottom: 1px solid var(--black); */
  text-decoration-line: underline;
  text-underline-offset: 0.5rem;
}

@media screen and (max-width: 480px) {
  .right {
    margin-left: 0rem;
  }
}
</style>