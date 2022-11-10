<template>
  <div class="container">
    <h1 class="title">聯絡我們</h1>
    <hr class="title-line" />
    <form @submit.stop.prevent="handleSumit" class="contact-form">
      <!-- 標題 -->
      <div class="area">
        <label for="title" class="text-style">標題</label>
        <el-input
          v-model="title"
          id="title"
          name="title"
          type="text"
          placeholder="請輸入問題"
          maxlength="10"
          show-word-limit
          required
        >
        </el-input>
      </div>
      <!-- 電子信箱 -->
      <div class="area">
        <label for="email" class="text-style">電子信箱</label>
        <el-input
          v-model="email"
          id="email"
          name="email"
          type="email"
          placeholder="abc123456@gmail.com"
          required
        >
        </el-input>
      </div>
      <!-- 訂單編號 -->
      <div class="area">
        <label for="orderNumber" class="text-style">訂單編號</label>
        <el-input
          v-model="orderNumber"
          id="orderNumber"
          name="orderNumber"
          type="number"
          placeholder="請輸入訂單編號"
          required
        >
        </el-input>
      </div>
      <!-- 內容 -->
      <div class="area">
        <label for="content" class="text-style">內容</label>
        <el-input
          v-model="content"
          id="content"
          name="content"
          type="textarea"
          placeholder="請輸入諮詢事項"
          maxlength="1000"
          show-word-limit
          required
        >
        </el-input>
      </div>
      <div class="contact-btn">
        <button type="submit" class="btn-style action-border">取消</button>
        <button type="submit" class="btn-style action">送出</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers";

export default {
  name: "CommentForm",
  data() {
    return {
      title: "",
      email: "",
      orderNumber: "",
      content: "",
      imageUrl: "",
      // dialogVisible: false,
    };
  },
  methods: {
    handleSumit(e) {
      if (!this.title) {
        Toast.fire({
          icon: "warning",
          title: "請填寫標題",
        });
        return;
      } else if (!this.email) {
        Toast.fire({
          icon: "warning",
          title: "請填寫電子信箱",
        });
        return;
      }

      //串接API，將資料子層傳給父層
      console.log(e.target);
    },
  },
};
</script>

<style scoped>
.container {
  width: 80vw;
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
  align-items: center;
  margin: 2rem 0;
}
.text-style {
  width: 150px;
  padding-right: 1rem;
  font-size: var(--sec-font-size);
  white-space: nowrap;
}
.contact-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.btn-style {
  width: 100%;
  margin: 1rem;
  padding: 0.5rem;
}
@media screen and (max-width: 480px) {
  .container {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 100px;
  }
  .contact-form {
    padding: 0 1rem;
  }
  .area {
    all: unset;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
  }
  .text-style {
    all: unset;
    font-size: var(--sec-font-size);
    margin-bottom: 1rem;
  }
}
</style>