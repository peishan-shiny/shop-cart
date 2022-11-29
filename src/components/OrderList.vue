<template>
  <div>
    <!-- 訂單內容 content -->
    <div class="area">
      <p class="title">
        訂單內容 <span><i class="el-icon-arrow-down arrow"></i></span>
      </p>
      <div class="order-list">
        <div class="head">
          <p style="width: 55%">商品資料</p>
          <p style="width: 15%">單價</p>
          <p style="width: 15%">數量</p>
          <p style="width: 15%">小計</p>
        </div>
        <!-- 訂購品項跑for迴圈 -->
        <div class="item" v-for="item in preducts" :key="item.id">
          <div class="item-information">
            <img :src="item.imgURL" alt="" class="img" />
            <div>
              <p class="name">{{ item.name }}</p>
              <p class="format">規格：{{ item.format[0].name }}</p>
            </div>
          </div>
          <div class="unit-price">
            <p class="price">
              NT${{ item.discount ? item.price * item.discount : item.price }}
            </p>
            <p class="original-price" v-if="item.discount">
              NT${{ item.price }}
            </p>
          </div>
          <div class="amount">{{ item.num }}</div>
          <div class="sum">
            NT${{
              item.num *
              (item.discount ? item.price * item.discount : item.price)
            }}
          </div>
        </div>
      </div>
    </div>

    <!-- 付款方式 paying -->
    <div class="area">
      <p class="title">付款方式</p>
      <el-select v-model="payingValue" placeholder="付款方式">
        <el-option
          v-for="item in payingOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

    <!-- 出貨方式 deliver -->
    <div class="area">
      <p class="title">出貨方式</p>
      <el-select v-model="deliverValue" placeholder="出貨方式">
        <el-option
          v-for="item in deliverOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

    <!-- 電子發票 invoice -->
    <div class="area">
      <p class="title">電子發票</p>
      <el-radio v-model="radio" label="捐贈發票">捐贈發票</el-radio>
      <el-radio v-model="radio" label="二聯電子發票">二聯電子發票</el-radio>
      <el-radio v-model="radio" label="三聯電子發票">三聯電子發票</el-radio>
      <!-- 選擇捐贈發票 -->
      <div class="invoice-manner" v-if="radio === '捐贈發票'">
        <el-select v-model="contributeValue" placeholder="請選擇">
          <el-option
            v-for="item in contributeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>

      <!-- 選擇二聯電子發票 -->
      <div class="invoice-manner" v-if="radio === '二聯電子發票'">
        <el-select v-model="personalValue" placeholder="請選擇">
          <el-option
            v-for="item in personalOptions"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          >
          </el-option>
        </el-select>

        <!-- 當選擇 手機條碼載具 時顯示 -->
        <el-input
          v-model="phoneInput"
          placeholder="/00000000"
          class="inputMargin"
          v-if="personalValue === '手機條碼載具'"
        ></el-input>

        <!-- 當選擇 自然人憑證載具 時顯示 -->
        <el-input
          v-model="certificateInput"
          placeholder="TP0300007654321"
          class="inputMargin"
          v-if="personalValue === '自然人憑證載具'"
        ></el-input>
      </div>

      <!-- 選擇三聯電子發票 -->
      <div class="invoice-manner" v-if="radio === '三聯電子發票'">
        <p>
          <el-input
            v-model="companyNumber"
            placeholder="請輸入公司統編8碼"
            required
          ></el-input>
        </p>
        <p>
          <el-input
            v-model="company"
            placeholder="請輸入公司全名"
            class="inputMargin"
            required
          ></el-input>
        </p>
      </div>
    </div>

    <!-- 收件人資訊 information -->
    <div class="area">
      <p class="title">填寫收件人資訊</p>
      <el-input
        v-model="recipientName"
        placeholder="請輸入收件人姓名"
        required
      ></el-input>
      <br />
      <el-input
        v-model="recipientAddress"
        placeholder="請輸入收件人地址"
        class="inputMargin"
        required
      ></el-input>
      <br />
      <el-input
        v-model="recipientPhone"
        placeholder="請輸入收件人電話"
        class="inputMargin"
        required
      ></el-input>
    </div>

    <!-- 訂單金額 expense -->
    <div class="area">
      <p class="title">訂單金額</p>
      <div>
        <p class="expense">
          合計 <span class="expense-text">NT${{ totalNumber }}</span>
        </p>
        <p class="expense">
          運費 <span class="expense-text">{{ freight }}</span>
        </p>
        <p class="expense">
          總金額
          <span class="expense-text">NT${{ totalNumber + freight }}</span>
        </p>
      </div>
    </div>

    <button type="button" class="btn-order action">確認訂單</button>
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
  name: "OrderList",
  data() {
    return {
      preducts: jsData.products,
      totalNumber: 0,
      freight: 60,
      payingOptions: [
        {
          value: "選項1",
          label: "信用卡",
        },
        {
          value: "選項2",
          label: "LINE PAY",
        },
        {
          value: "選項3",
          label: "取貨付款",
        },
      ],
      payingValue: "",
      deliverOptions: [
        {
          value: "選項1",
          label: "宅配",
        },
        {
          value: "選項2",
          label: "超商取貨",
        },
      ],
      deliverValue: "",
      radio: "捐贈發票",
      contributeOptions: [
        {
          value: "選項1",
          label: "伊甸基金會",
        },
      ],
      contributeValue: "",
      personalOptions: [
        {
          value: "選項1",
          label: "手機條碼載具",
        },
        {
          value: "選項2",
          label: "自然人憑證載具",
        },
      ],
      personalValue: "",
      phoneInput: "",
      certificateInput: "",
      companyNumber: "",
      company: "",
      recipientName: "",
      recipientAddress: "",
      recipientPhone: "",
    };
  },
  created() {
    this.calculateTotal();
  },
  methods: {
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
* {
  font-family: "微軟正黑體";
}
.area {
  margin-bottom: 5rem;
}
.title {
  font-size: var(--main-font-size);
  color: var(--black);
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--black);
  margin-bottom: 1rem;
}
.arrow {
  float: right;
}
/* 訂單內容 content */
.head {
  font-size: var(--sec-font-size);
  color: var(--black);
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
}
.item {
  font-size: var(--thr-font-size);
  color: var(--black);
  display: flex;
  flex-direction: row;
  height: 150px;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--black);
}
.img {
  height: 100%;
  margin-right: 1rem;
}
.item-information {
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 2rem;
  width: 55%;
}
.unit-price,
.amount,
.sum {
  width: 15%;
  align-self: center;
  line-height: 2rem;
}
.original-price {
  text-decoration: line-through;
}
/* 電子發票 invoice */
.invoice-manner {
  margin-top: 1rem;
}
/* 訂單金額 expense */
.expense {
  font-size: var(--thr-font-size);
  color: var(--black);
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--black);
  margin-bottom: 1rem;
}
.expense-text {
  float: right;
}
.inputMargin {
  margin-top: 1rem;
}
.btn-order {
  width: 50%;
  margin: 0 25%;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

@media screen and (max-width: 768px) {
  .order-list {
    display: flex;
    flex-direction: row;
  }
  .title {
    font-size: var(--sec-font-size);
  }
  .head {
    display: none;
  }
  .item {
    all: unset;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: var(--thr-font-size);
    color: var(--black);
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--black);
  }
  .img {
    height: 100px;
  }
  .item-information {
    display: flex;
    flex-direction: row;
    line-height: 2rem;
    white-space: nowrap;
  }
  .unit-price,
  .amount,
  .sum {
    all: unset;
    line-height: 2rem;
  }
}
</style>