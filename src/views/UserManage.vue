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
            <!-- 修改會員資料 -->
            <div class="right-area">
              <p class="right-title">管理會員資訊</p>
              <form>
                <!-- 這邊要帶入原本的資料 -->
                <!-- 修改電子信箱 -->
                <div class="revise-area">
                  <label for="comment" class="text-style">電子信箱</label>
                  <el-input
                    v-model="email"
                    id="email"
                    name="email"
                    type="email"
                    required
                  >
                  </el-input>
                </div>
                <!-- 修改姓名 -->
                <div class="revise-area">
                  <label for="namme" class="text-style">姓名</label>
                  <el-input
                    v-model="namme"
                    id="namme"
                    name="namme"
                    type="text"
                    required
                  >
                  </el-input>
                </div>
                <!-- 修改生日 -->
                <div class="revise-area">
                  <label for="birthday" class="text-style"
                    >生日(年/月/日)</label
                  >
                  <el-input
                    v-model="birthday"
                    id="birthday"
                    name="birthday"
                    type="text"
                    required
                  >
                  </el-input>
                </div>
                <!-- 修改手機 -->
                <div class="revise-area">
                  <label for="phone" class="text-style">手機號碼</label>
                  <el-input
                    v-model="phone"
                    id="phone"
                    name="phone"
                    type="text"
                    required
                  >
                  </el-input>
                </div>
                <!-- 修改地址 -->
                <div class="revise-area">
                  <label for="address" class="text-style">地址</label>
                  <el-input
                    v-model="address"
                    id="address"
                    name="address"
                    type="text"
                    required
                  >
                  </el-input>
                </div>
                <!-- 修改性別 -->
                <div class="revise-area">
                  <label for="gender" class="text-style">性別</label>
                  <el-select
                    v-model="gender"
                    placeholder="請選擇性別"
                    class="gender"
                    id="gender"
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

                <button type="submit" class="btn-store action">儲存</button>
              </form>
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
  name: "UserManage",
  components: {
    Header,
    Footer,
    UserList,
    Cart,
  },
  data() {
    return {
      email: "",
      namme: "",
      birthday: "",
      phone: "",
      address: "",
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

/* 修改會員資料 */
.revise-area {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
}
.text-style {
  min-width: 150px;
  padding-right: 1rem;
  font-size: var(--thr-font-size);
  color: var(--black);
  white-space: nowrap;
}
.btn-store {
  margin-top: 2rem;
  padding: 1rem 0;
  width: 100%;
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
  /* 修改會員資料 */
  .revise-area {
    all: unset;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
  .text-style {
    all: unset;
    font-size: var(--thr-font-size);
    color: var(--black);
    margin-bottom: 1rem;
  }
}
</style>
