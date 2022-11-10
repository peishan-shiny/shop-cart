<template>
  <div class="container">
    <section class="section">
      <p class="section-title">現正優惠</p>
      <slick :options="slickOptions">
        <div v-for="item in products" :key="item.id" class="card">
          <div class="card-image">
            <a href=""><img :src="item.imgURL" alt="" class="image" /></a>
          </div>
          <div class="info">
            <p class="product-title">{{ item.title }}</p>
            <div v-if="item.discount" class="discount-descript">
              <p class="original-price">{{ "NT$" + item.price }}</p>
              <p class="discount-red">{{ item.discount * 10 + "折" }}</p>
            </div>
            <div v-else style="height: 32px"></div>
            <p class="price">
              {{
                "NT$" +
                (item.discount
                  ? Math.ceil(item.price * item.discount)
                  : item.price)
              }}
            </p>
            <button class="quick-view action">快速瀏覽</button>
          </div>
        </div>
      </slick>
    </section>
  </div>
</template>

<script>
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const dummyData = {
  products: [
    {
      id: 1,
      title: "超服貼輕透粉底",
      price: 1080,
      discount: 0.5,
      imgURL: require("../assets/images/product-01.jpg"),
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
  name: "ProducdCardList",
  components: { Slick },

  data() {
    return {
      products: dummyData.products,
      slickOptions: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "微軟正黑體";
}
.container {
  /* width: 80vw; */
  padding: 2rem 0;
  margin: 0 auto;
  position: relative;
  top: 150px;
}
.section {
  width: 80vw;
  margin: 0 auto;
}
.section-title {
  font-size: var(--main-font-size);
  color: var(--main-color);
  margin-bottom: 2rem;
}
.slick-slider {
  display: flex;
  flex-direction: row;
}
.card {
  padding-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.image {
  width: 100%;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 2rem;
  position: relative;
}
.original-price {
  text-decoration: line-through;
}
.discount-descript {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.discount-red {
  border-radius: 10px;
  background: rgb(215, 10, 10);
  color: var(--white);
  margin-left: 2rem;
  padding: 0 1rem;
  font-size: var(--thr-font-size);
}
.product-title {
  font-size: var(--sec-font-size);
  letter-spacing: 0.2rem;
  font-weight: 700;
}
.price {
  font-size: var(--sec-font-size);
}
.quick-view {
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 6.5rem;
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