<template>
  <div class="container">
    <section class="section discount">
      <p class="section-title">{{ newPraducts.name }}</p>
      <slick :options="slickOptions">
        <div v-for="item in products" :key="item.id" class="card">
          <div class="card-content">
            <div class="card-image">
              <router-link
                :to="{
                  name: 'product',
                  query: { parentId: item.parentId, id: item.id },
                }"
                ><img :src="item.imgURL" alt="" class="image"
              /></router-link>
            </div>
            <div class="info">
              <p class="product-title">{{ item.name }}</p>
              <div v-if="item.discount" class="discount-descript">
                <p class="original-price">{{ "NT$" + item.price }}</p>
                <p class="discount-red">{{ item.discount * 10 + "折" }}</p>
              </div>
              <div v-else style="height: 40px"></div>
              <p class="price">
                {{
                  "NT$" +
                  (item.discount
                    ? Math.ceil(item.price * item.discount)
                    : item.price)
                }}
              </p>
            </div>
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

export default {
  name: "ProductCardTwo",
  components: { Slick },
  props: {
    newPraducts: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      products: this.newPraducts.products,
      slickOptions: {
        rows: 3,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        cssEase: "linear",
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
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
  font-family: "微軟正黑體";
}
.container {
  padding: 2rem 0;
  margin: 0 auto;
  position: relative;
  top: 150px;
  background: var(--sec-color);
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
.card-content {
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
}
.image {
  height: 150px;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 2.5rem;
  position: relative;
  margin-left: 1rem;
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
  margin-left: 1rem;
  padding: 0 0.5rem;
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
</style>