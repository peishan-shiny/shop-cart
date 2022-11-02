<template>
  <div class="container">
    <h1 class="title">會員登入</h1>
    <hr class="title-line" />
    <form>
      <div class="form-border">
        <div class="form-inner-top">
          <a href="" class="choose">註冊會員</a>
          <a href="" class="choose">會員登入</a>
        </div>
        <div class="form-inner-bottom">
          <div class="form-content">
            <el-input v-model="mail" placeholder="電郵"></el-input>
          </div>
          <div class="form-content">
            <el-input v-model="password" placeholder="密碼"></el-input>
          </div>
          <div class="form-content">
            <button type="submit" class="action submit">開始購物吧！</button>
          </div>
          <div class="form-content">
            <a href="">忘記密碼？</a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignInForm",

  data() {
    return {
      mail: "",
      password: "",
    };
  },
};
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 0 auto;
  position: relative;
  top: 250px;
}
.title {
  font-size: var(--main-font-size);
}
.title-line {
  width: 100%;
}
.form-border {
  width: 80vw;
  max-width: 400px;
  margin: 2rem auto;
  border: 1px solid #f3f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-inner-top {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.choose {
  width: 50%;
  padding: 2rem;
  text-align: center;
  border: 1px solid #f3f1f1;
  margin-bottom: 2rem;
}
.form-content {
  width: 75vw;
  max-width: 300px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.submit {
  width: 100%;
  padding: 1rem 0;
  border: 0px;
}

@media screen and (max-width: 480px) {
  .container {
    width: 90vw;
    margin: 0 auto;
  }
}
</style>