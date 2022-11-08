<template>
  <div class="container">
    <section class="section discount">
      <p class="section-title">現正優惠</p>
      <div class="move-box">
        <button class="btn-left" @click="left">
          <i class="arrow el-icon-arrow-left"></i>
        </button>
        <div class="wrap" ref="moveWidth">
          <div
            class="card-list"
            :style="{ transform: 'translateX(' + currentOffset + 'px)' }"
          >
            <!-- 跑for迴圈 -->
            <div
              class="card"
              v-for="item in products"
              :key="item.id"
              :style="{ minWidth: width }"
            >
              <div class="card-image">
                <a href=""><img :src="item.imgURL" alt="" class="image" /></a>
              </div>
              <div class="info">
                <p class="product-title">{{ item.title }}</p>
                <div class="discount-descript" v-if="item.discount">
                  <p class="original-price">{{ "NT$" + item.price }}</p>
                  <p class="discount-red">{{ item.discount * 10 + "折" }}</p>
                </div>
                <p class="price">
                  {{
                    "NT$" +
                    (item.discount
                      ? Math.ceil(item.price * item.discount)
                      : item.price)
                  }}
                </p>
              </div>
              <button class="quick-view action">快速瀏覽</button>
            </div>
          </div>
        </div>
        <button class="btn-right" @click="right">
          <i class="arrow el-icon-arrow-right"></i>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
const dummyData = {
  products: [
    {
      id: 1,
      title: "超服貼輕透粉底",
      price: 1080,
      discount: 0.5,
      imgURL: require("../assets/images/product-01.png"),
    },
    {
      id: 2,
      title: "楊澄淋代言款",
      price: 1980,
      imgURL: require("../assets/images/product-02.png"),
    },
    {
      id: 3,
      title: "露營攜帶組",
      price: 690,
      discount: 0.95,
      imgURL: require("../assets/images/product-03.png"),
    },
    {
      id: 4,
      title: "小資族保養系列",
      price: 1580,
      discount: 0.7,
      imgURL: require("../assets/images/product-04.png"),
    },
    {
      id: 5,
      title: "男士清潔洗面乳",
      price: 590,
      imgURL: require("../assets/images/product-05.png"),
    },
  ],
};

export default {
  name: "ProducdCard",
  data() {
    return {
      products: dummyData.products,
      currentOffset: 0,
      width: "", //單張卡片寬度
      wrapWidth: "", //整個WRAP寬度
      cardList: "", //card-list 的 DOM
    };
  },
  mounted() {
    this.setCardWidth();
    // this.cardList = document.querySelector(".card-list");
    // window.addEventListener("resize", () => {
    //   // this.currentoffset = 0;
    //   // this.setcardWidth();
    // });
  },
  methods: {
    setCardWidth() {
      const wrap = document.querySelector(".wrap");
      this.wrapWidth = wrap.clientWidth;
      console.log("wrapWidth:", this.wrapWidth);
      this.width = this.wrapWidth / 4 + "px";
    },
    right() {
      console.log("點擊前", this.currentOffset);
      if (this.currentOffset <= (-this.wrapWidth / 4) * (10 - 6)) return;
      this.currentOffset -= this.wrapWidth / 4;
      console.log("點擊後", this.currentOffset);
    },
    left() {
      console.log("點擊前", this.currentOffset);
      if (this.currentOffset >= -2) return;
      this.currentOffset += this.wrapWidth / 4;
      console.log("點擊後", this.currentOffset);
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
  margin: 0 auto;
  position: relative;
  top: 150px;
}
.section-title {
  font-size: var(--main-font-size);
  color: var(--main-color);
  margin-bottom: 2rem;
}
.move-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.wrap {
  position: relative;
  overflow: hidden;
}
.arrow {
  font-size: 1.5rem;
  color: var(--white);
}
.btn-left,
.btn-right {
  z-index: 999;
  width: 2rem;
  height: 2rem;
  border: unset;
  border-radius: 50%;
  background: var(--black);
  margin: 0 1rem;
}
.card-list {
  display: flex;
  flex-direction: row;
  transition: all 0.2s;
}
.card {
  /* width: 300px; */
  margin: 0 1rem;
  position: relative;
}
.image {
  height: 300px;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 2rem;
}
.original-price {
  text-decoration: line-through;
}
.discount-descript {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.discount-red {
  /* border: 1px solid rgb(215, 10, 10); */
  border-radius: 10px;
  background: rgb(215, 10, 10);
  color: var(--white);
  margin-left: 2rem;
  padding: 0.25rem 1rem;
  font-size: var(--sec-font-size);
}
.product-title {
  font-size: var(--thr-font-size);
}
.price {
  font-size: var(--sec-font-size);
}
.quick-view {
  width: 100%;
  margin: 1rem auto;
  /* position: absolute;
  bottom: -60px; */
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