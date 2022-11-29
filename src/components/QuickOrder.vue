<template>
  <div class="quick-order">
    <!-- 訂購項目列表 -->
    <div class="list">
      <!-- content跑for迴圈 -->
      <div class="content" v-for="item in preducts" :key="item.id">
        <img :src="item.imgURL" alt="" class="img" />
        <div class="descript">
          <i class="el-icon-close delete" @click="deleteItem"></i>
          <p class="name">{{ item.name }}</p>
          <p class="format">規格：{{ item.format[0].name }}</p>
          <el-input-number
            v-model="item.num"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
          <div class="money">
            <p>
              <span>{{ item.num }}</span
              ><span> X</span> ${{
                item.discount ? item.price * item.discount : item.price
              }}
            </p>
            <p class="sum">
              小計：${{
                item.num *
                (item.discount ? item.price * item.discount : item.price)
              }}
            </p>
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
        <p class="total-number">NT${{ totalNumber }}</p>
      </div>
    </div>

    <button type="button" class="btn-order action">
      <router-link to="/order" class="btn-text">結帳</router-link>
    </button>
  </div>
</template>

<script>
const jsData = {
  products: [
    {
      id: 37,
      parentId: 21,
      num: 2,
      name: "糖果色系指甲油",
      price: 250,
      discount: 0.9,
      imgURL: require("../assets/images/product/makeup/nail-polish-01.jpg"),
      shot_des: "呈現霧面糖果色系。",
      format: [
        {
          id: 1,
          name: "Q1",
        },
        {
          id: 2,
          name: "Q2",
        },
        {
          id: 3,
          name: "Q3",
        },
        {
          id: 4,
          name: "Q4",
        },
      ],
      directions: "1.長效護甲油基底更加持久。2.修護長久損傷指甲",
      use: "1.護甲基底油後使用，以刷毛沾取適量產品均勻塗抹於指甲上。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "糖果色系指甲油",
        },
        {
          id: 2,
          title: "容量",
          content: "7ml",
        },
        {
          id: 3,
          title: "製造地",
          content: "台灣",
        },
        {
          id: 4,
          title: "注意事項",
          content:
            "1.請勿與其他產品混合使用，產品屬外用，若誤食請送醫處理。2.使用後請密封。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
        },
      ],
    },
    {
      id: 41,
      parentId: 39,
      num: 1,
      name: "室內擴香瓶",
      price: 490,
      discount: 0.9,
      imgURL: require("../assets/images/product/fragrance/fragrance0.1.jpg"),
      shot_des: "多種香味讓你選擇，讓空間散發自然香氣。",
      format: [
        {
          id: 1,
          name: "檸檬柑橘",
        },
        {
          id: 2,
          name: "蜜桃蘋果",
        },
        {
          id: 3,
          name: "香草萊姆",
        },
        {
          id: 4,
          name: "茉莉花香",
        },
        {
          id: 5,
          name: "白麝香",
        },
        {
          id: 6,
          name: "小蒼蘭",
        },
      ],
      directions: "1.使用天然花草萃取液，香氣不刺鼻。",
      use: "1.將擴香棒放進擴香瓶中，即能緩緩釋放香氣。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "室內擴香瓶",
        },
        {
          id: 2,
          title: "容量",
          content: "150ml",
        },
        {
          id: 3,
          title: "製造地",
          content: "台灣",
        },
        {
          id: 4,
          title: "注意事項",
          content:
            "1.請保持通風。2.請勿使用於其他用途。3.請存放於嬰幼兒無法碰觸之處。",
        },
      ],
    },
  ],
};

export default {
  name: "QuickOrder",
  data() {
    return {
      preducts: jsData.products,
      totalNumber: 0,
    };
  },
  // 這邊要監聽num的改變，使用深層監聽deep，監聽陣列裡的參數num
  watch: {
    preducts: {
      handler: function (newValue) {
        this.preducts = newValue;
        this.calculateTotal();
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    this.calculateTotal();
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
    calculateTotal() {
      this.totalNumber = 0;
      const sumArr = [];
      this.preducts.forEach((item) => {
        const sum =
          item.num * (item.discount ? item.price * item.discount : item.price);
        sumArr.push(sum);
      });

      for (let i = 0; i < sumArr.length; i++) {
        this.totalNumber = this.totalNumber + sumArr[i];
      }
      console.log(this.totalNumber);
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
.name {
  font-size: var(--sec-font-size);
  font-weight: 700;
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
  .quick-order {
    width: 80%;
    margin: 0 auto;
  }
  .content {
    all: unset;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    border-bottom: 1px solid var(--black);
  }
  .descript {
    all: unset;
    margin: 1rem 0;
  }
}
</style>
