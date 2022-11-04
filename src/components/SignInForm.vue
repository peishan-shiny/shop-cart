<template>
  <div class="container">
    <h1 class="title" v-if="tabActive === 'login'">會員登入</h1>
    <h1 class="title" v-if="tabActive === 'reg'">註冊會員</h1>
    <hr class="title-line" />
    <form>
      <div class="form-border">
        <div class="form-inner-top">
          <a
            href="#/signIn"
            class="choose"
            :class="[{ active: tabActive === 'reg' }]"
            @click="tabActive = 'reg'"
            >註冊會員</a
          >
          <a
            href="#/signIn"
            class="choose"
            :class="[{ active: tabActive === 'login' }]"
            @click="tabActive = 'login'"
            >會員登入</a
          >
        </div>
        <div class="form-inner-bottom">
          <!-- 登入 -->
          <div class="login" v-if="tabActive === 'login'">
            <div class="form-content">
              <el-input v-model="mail" placeholder="電郵"></el-input>
            </div>
            <div class="form-content">
              <el-input v-model="password" placeholder="密碼"></el-input>
            </div>
            <div class="form-content">
              <button type="submit" class="action loginSubmit">
                開始購物吧！
              </button>
            </div>
            <div class="form-content">
              <a href="">忘記密碼？</a>
            </div>
          </div>
          <!-- 註冊 -->
          <div class="register" v-if="tabActive === 'reg'">
            <div class="form-content">
              <el-input v-model="name" placeholder="用戶名"></el-input>
            </div>
            <div class="form-content">
              <el-input v-model="mail" placeholder="電郵"></el-input>
            </div>
            <div class="form-content">
              <el-input
                v-model="password"
                placeholder="密碼(至少8個字元)"
              ></el-input>
            </div>
            <div class="form-content">
              <el-input
                v-model="passwordAgain"
                placeholder="重複登打密碼(至少8個字元)"
              ></el-input>
            </div>
            <div class="form-content">
              <el-select
                v-model="value"
                placeholder="請選擇性別"
                class="gender"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="form-content">
              <el-date-picker
                v-model="birthday"
                type="date"
                placeholder="請選擇生日"
                class="birthday"
                style="width: 100%"
              >
              </el-date-picker>
            </div>
            <div class="form-content">
              <el-checkbox v-model="newsChecked"
                >我願意接收 POPO SHOP 的最新消息、優惠等資訊</el-checkbox
              >
            </div>
            <div class="form-content">
              <el-checkbox v-model="agreeChecked"
                >我同意<a href="">網站服務條款及隱私政策</a></el-checkbox
              >
            </div>
            <div class="form-content">
              <button type="submit" class="action regSubmit">立即加入！</button>
            </div>
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
      name: "",
      mail: "",
      password: "",
      passwordAgain: "",
      options: [
        {
          value: 1,
          label: "女生",
        },
        {
          value: 1,
          label: "男生",
        },
      ],
      birthday: "",
      newsChecked: false,
      agreeChecked: false,
      tabActive: "login",
    };
  },
};
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 0 auto;
  position: relative;
  top: 200px;
}
.title {
  font-size: var(--main-font-size);
  color: var(--black);
}
.title-line {
  width: 100%;
}
.form-border {
  width: 80vw;
  max-width: 400px;
  margin: 2rem auto;
  border: 2px solid #f3f1f1;
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
.choose.active {
  border: unset;
}
.form-content {
  width: 75vw;
  max-width: 300px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loginSubmit,
.regSubmit {
  width: 100%;
  padding: 1rem 0;
  border: 0px;
}
.gender,
.birthday {
  width: unset;
  width: 100%;
  max-width: 300px;
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