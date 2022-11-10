<template>
  <div class="container">
    <h1 class="title">撰寫評論</h1>
    <hr class="title-line" />
    <form @submit.stop.prevent="handleSumit">
      <div class="area">
        <label for="score" class="text-style">評分</label>
        <el-rate v-model="score" class="score"></el-rate>
      </div>
      <div class="area">
        <label for="comment" class="text-style">內文</label>
        <textarea
          v-model="comment"
          id="comment"
          name="comment"
          rows="50"
          required
        />
      </div>
      <button type="submit" class="action">增加評論</button>
    </form>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers";

export default {
  name: "CommentForm",
  data() {
    return {
      score: null,
      comment: "",
    };
  },
  methods: {
    handleSumit(e) {
      if (!this.comment) {
        Toast.fire({
          icon: "warning",
          title: "請填寫評論",
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
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
}
.text-style {
  font-size: var(--thr-font-size);
  color: var(--black);
  margin: 1rem 0;
}
textarea {
  border: 1px solid var(--black);
  border-radius: 10px;
  width: 50%;
  height: 200px;
}
.action {
  font-size: var(--thr-font-size);
  width: 50%;
  padding: 1rem 0;
}
@media screen and (max-width: 480px) {
  .container {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 100px;
  }
  textarea {
    all: unset;
    border: 1px solid var(--black);
    border-radius: 10px;
    width: 75vw;
    height: 200px;
  }
  .action {
    font-size: var(--thr-font-size);
    width: 75vw;
    padding: 1rem 0;
  }
}
</style>