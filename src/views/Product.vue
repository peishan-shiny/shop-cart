<template>
  <div class="sticky-footer">
    <div class="sticky-content">
      <Header />

      <div class="container">
        <ProductDetail />
      </div>
    </div>
    <Footer class="sticky-bottom"> </Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";

const dummyData = {
  id: 2,
  name: "彩妝系列",
  sorts: [
    {
      id: 1,
      name: "全部",
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
    },
    {
      id: 2,
      name: "粉底",
    },
    {
      id: 3,
      name: "粉底液",
    },
    {
      id: 4,
      name: "氣墊",
    },
    {
      id: 5,
      name: "蜜粉",
    },
    {
      id: 6,
      name: "腮紅",
    },
    {
      id: 7,
      name: "口紅",
    },
    {
      id: 8,
      name: "眼影",
    },
    {
      id: 9,
      name: "打亮",
    },
  ],
};

export default {
  name: "Product",
  components: {
    Header,
    Footer,
    ProductDetail,
  },
  data() {
    return {
      category: {},
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.category = dummyData;
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
  margin: 0 auto;
  position: relative;
  top: 150px;
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