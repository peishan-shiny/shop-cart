<template>
  <div class="container">
    <section class="section">
      <p class="section-title">{{ discountProdects.name }}</p>
      <slick :options="slickOptions">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :initial-product="product"
        />
      </slick>
    </section>
  </div>
</template>

<script>
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";

export default {
  name: "ProducdCardList",
  components: { Slick, ProductCard },
  props: {
    discountProdects: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      products: this.discountProdects.products,
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