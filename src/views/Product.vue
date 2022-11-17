<template>
  <div class="sticky-footer">
    <div class="sticky-content">
      <Header />

      <div class="container">
        <ProductDetail :initialProduct="product" />
        <ProductDetailTwo :initialProduct="product" />
      </div>
    </div>
    <Footer class="sticky-bottom"> </Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
import ProductDetailTwo from "../components/ProductDetailTwo";

const dummyData = {
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
      id: 2,
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
};

export default {
  name: "Product",
  components: {
    Header,
    Footer,
    ProductDetail,
    ProductDetailTwo,
  },
  data() {
    return {
      product: {},
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.product = dummyData;
    },
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
  top: 50px;
}
@media screen and (max-width: 480px) {
  .container {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 25px;
  }
}
</style>