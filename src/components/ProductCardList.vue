<template>
  <div class="container">
    <section class="section">
      <p class="section-title">現正優惠</p>
      <slick :options="slickOptions">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :initial-product="product"
        />
        <!-- <div v-for="item in products" :key="item.id" class="card">
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
        </div> -->
      </slick>
    </section>
  </div>
</template>

<script>
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";

const dummyData = {
  products: [
    {
      id: 1,
      name: "超服貼輕透粉底",
      price: 1080,
      discount: 0.5,
      imgURL: require("../assets/images/product-01.jpg"),
      shot_des:
        "超輕薄粉體配方，透過彈性網狀層均勻沾附在粉撲，使粉體無重力完美服貼肌膚。",
      format: [
        {
          id: 1,
          name: "N1",
        },
        {
          id: 2,
          name: "N2",
        },
        {
          id: 3,
          name: "N3",
        },
        {
          id: 4,
          name: "S1",
        },
        {
          id: 5,
          name: "S2",
        },
      ],
      directions: "1.均勻不結塊的半霧面妝容。2.高水分配方帶來的涼感。",
      use: "1.基礎保養後使用。2.使用內附智慧型粉撲沾取適量輕拍於臉部, 以輕壓方式由臉部中央向外均勻塗抹。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "超服貼輕透粉底",
        },
        {
          id: 2,
          title: "容量",
          content: "15g",
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
            "1.使用後皮膚若有異狀請立即停用。2.使用後請密封瓶蓋。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
        },
      ],
    },
    {
      id: 2,
      name: "楊澄淋代言款",
      price: 1980,
      imgURL: require("../assets/images/product-02.png"),
    },
    {
      id: 3,
      name: "露營攜帶組",
      price: 690,
      discount: 0.95,
      imgURL: require("../assets/images/product-03.png"),
    },
    {
      id: 4,
      name: "小資族保養系列",
      price: 1580,
      discount: 0.7,
      imgURL: require("../assets/images/product-04.png"),
    },
    {
      id: 5,
      name: "男士清潔洗面乳",
      price: 590,
      imgURL: require("../assets/images/product-05.png"),
    },
  ],
};

export default {
  name: "ProducdCartList",
  components: { Slick, ProductCard },

  data() {
    return {
      products: dummyData.products,
      slickOptions: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
            breakpoint: 600,
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
  max-width: 1440px;
  margin: 0 auto;
}
.section-title {
  font-size: var(--main-font-size);
  color: var(--main-color);
  margin-bottom: 2rem;
}
/* .slick-slider {
  display: flex;
  flex-direction: row;
} */
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