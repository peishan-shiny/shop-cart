<template>
  <div class="container">
    <h1 v-if="tabActive === 'login'" class="title">會員登入</h1>
    <h1 v-if="tabActive === 'reg'" class="title">註冊會員</h1>
    <hr class="title-line" />
    <form @submit.stop.prevent="handleSumit">
      <div class="form-border">
        <div class="form-inner-top">
          <a
            :class="[{ active: tabActive === 'reg' }]"
            @click="tabActive = 'reg'"
            href="#/signIn"
            class="choose"
            >註冊會員</a
          >
          <a
            :class="[{ active: tabActive === 'login' }]"
            @click="tabActive = 'login'"
            href="#/signIn"
            class="choose"
            >會員登入</a
          >
        </div>
        <div class="form-inner-bottom">
          <!-- 登入 -->
          <div v-if="tabActive === 'login'" class="login">
            <div class="form-content">
              <el-input
                v-model="mail"
                type="email"
                placeholder="電郵"
                required
              ></el-input>
            </div>
            <div class="form-content">
              <el-input
                v-model="password"
                type="password"
                placeholder="密碼"
                required
              ></el-input>
            </div>
            <div class="form-content">
              <button type="submit" class="action loginSubmit">
                開始購物吧！
              </button>
            </div>
            <div class="form-content">
              <p class="forget">
                <a href="" class="text-main-color">忘記密碼？</a>
              </p>
            </div>
          </div>
          <!-- 註冊 -->
          <div v-if="tabActive === 'reg'" class="register">
            <div class="form-content">
              <el-input v-model="name" placeholder="用戶名" required></el-input>
            </div>
            <div class="form-content">
              <el-input
                v-model="mail"
                type="email"
                placeholder="電郵"
                required
              ></el-input>
            </div>
            <div class="form-content">
              <el-input
                v-model="password"
                type="password"
                placeholder="密碼(至少8個字元)"
                required
              ></el-input>
            </div>
            <div class="form-content">
              <el-input
                v-model="passwordAgain"
                type="password"
                placeholder="重複登打密碼(至少8個字元)"
                required
              ></el-input>
            </div>
            <div class="form-content">
              <el-select
                v-model="gender"
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
                required
              >
              </el-date-picker>
            </div>
            <div class="form-content">
              <div class="checked-box">
                <el-checkbox v-model="newsChecked" required></el-checkbox>
                <p class="checked-text">
                  我願意接收 POPO SHOP 的最新消息、優惠等資訊
                </p>
              </div>
            </div>
            <div class="form-content">
              <div class="checked-box">
                <el-checkbox v-model="agreeChecked" required></el-checkbox>
                <p class="checked-text">
                  我同意
                  <router-link to="/privacy/policy" class="text-main-color"
                    >服務條款及隱私政策</router-link
                  >
                </p>
              </div>
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
import { Toast } from "../utils/helpers";
import testAPI from "../apis/test";

export default {
  name: "SignInForm",
  data() {
    return {
      name: "",
      mail: "",
      password: "",
      passwordAgain: "",
      gender: "",
      options: [
        {
          value: 1,
          label: "女生",
        },
        {
          value: 2,
          label: "男生",
        },
      ],
      birthday: "",
      newsChecked: false,
      agreeChecked: false,
      tabActive: "login",
      isProcessing: false,
    };
  },
  created() {
    this.fetchTestData();
  },
  methods: {
    handleSumit(e) {
      if (!this.name) {
        Toast.fire({
          icon: "warning",
          title: "請填寫用戶名",
        });
        return;
      } else if (!this.mail) {
        Toast.fire({
          icon: "warning",
          title: "請填寫電子信箱",
        });
        return;
      } else if (!this.password) {
        Toast.fire({
          icon: "warning",
          title: "請填寫密碼",
        });
        return;
      } else if (!this.passwordAgain) {
        Toast.fire({
          icon: "warning",
          title: "請再次填寫密碼",
        });
        return;
      } else if (this.agreeChecked === false) {
        Toast.fire({
          icon: "warning",
          title: "請勾選網站服務條款及隱私政策",
        });
        return;
      }

      //串接API，將資料子層傳給父層
      console.log(e.target);
    },

    async fetchTestData() {
      try {
        const { data } = await testAPI.getData();

        if (data.status === "error") {
          throw new Error(data.message);
        }
        //拿取資料
        console.log(data);
      } catch (error) {
        //若有錯誤記得將isLoading改成false，才不會是空白頁面
        this.isProcessing = false;
        Toast.fire({
          icon: "warning",
          title: "資料錯誤請稍後再試！",
        });
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: "微軟正黑體";
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
  color: var(--main-color);
}
.choose.active {
  border: unset;
}
.login,
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-content {
  width: 75vw;
  max-width: 300px;
  margin-bottom: 2rem;
}
.loginSubmit,
.regSubmit {
  width: 100%;
  padding: 1rem 0;
}
.gender,
.birthday {
  width: unset;
  width: 100%;
  max-width: 300px;
}
.forget {
  text-align: center;
}
.text-main-color {
  color: var(--main-color);
  border-bottom: 1px solid var(--main-color);
  padding-bottom: 1px;
}
.checked-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.checked-text {
  color: var(--black);
  font-size: var(--des-font-size);
  white-space: normal;
  line-height: 1.5rem;
  padding: 0 0.5rem;
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