<template>
  <div class="quick-order">
    <!-- 訂購項目列表 -->
    <div class="list">
      <!-- content跑for迴圈 -->
      <div class="content">
        <img :src="imgURL" alt="" class="img" />
        <div class="descript">
          <i class="el-icon-close delete" @click="deleteItem"></i>
          <p class="name">名稱</p>
          <p class="format">規格</p>
          <el-input-number
            v-model="num"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
          <div class="money">
            <p>數量 X 單價</p>
            <p class="sum">小計</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div>
      <i class="el-icon-delete-solid clear" @click="clearCart"
        ><span>清空購物車</span></i
      >
      <div class="total">
        <p class="total-number">總金額</p>
        <p class="total-number">NT$1080</p>
      </div>
    </div>

    <button type="button" class="btn-order action">
      <router-link to="/order" class="btn-text">訂購</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "QuickOrder",
  data() {
    return {
      imgURL: require("../assets/images/product-01.jpg"),
      num: 1,
    };
  },
  methods: {
    deleteItem() {
      console.log(
        "使用filter將沒有點到的id，回傳一個新陣列並再渲染一次，回傳給後端"
      );
    },
    clearCart() {
      console.log("將購物車改為空陣列 []，回傳給後端");
    },
  },
};
</script>

<style scoped>
.quick-order {
  width: 90%;
  margin: 0 auto;
}
/* 訂購項目列表 */
.content {
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
  height: 150px;
  padding: 1rem 0;
  border-bottom: 1px solid var(--black);
}
.descript {
  flex: 1;
  min-width: 250px;
  padding-left: 1rem;
}
.delete {
  float: right;
  padding-right: 1rem;
  cursor: pointer;
}
.name,
.format {
  margin-bottom: 1rem;
}
.money {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  padding-right: 1rem;
}
.total {
  text-align: right;
  float: right;
  padding-right: 1rem;
  line-height: 2rem;
  font-size: var(--sec-font-size);
}
/* 底部 */
.clear {
  cursor: pointer;
}
.btn-order {
  width: 100%;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.btn-text {
  color: var(--white);
}

@media screen and (max-width: 768px) {
}
</style>
