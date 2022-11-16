<template>
  <div class="sticky-footer">
    <!-- 回到頂部 -->
    <el-backtop :bottom="100">
      <div
        style="
           {
            height: 100%;
            width: 100%;
            color: var(--white);
            background-color: var(--main-color);
            border-radius: 50%;
            opacity: 0.8;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
            text-align: center;
            line-height: 40px;
          }
        "
      >
        UP
      </div>
    </el-backtop>

    <div class="sticky-content">
      <Header />

      <div class="banner">
        <el-carousel :height="bannerHeight + 'px'">
          <el-carousel-item v-for="item in images" :key="item.id">
            <img
              ref="imgHeight"
              :src="item.url"
              @load="imgLoad"
              alt=""
              class="image"
            />
          </el-carousel-item>
        </el-carousel>
      </div>

      <ProductCardList />

      <ProductCardTwo />
    </div>

    <Footer class="sticky-bottom"> </Footer>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer";
import ProductCardList from "../components/ProductCardList";
import ProductCardTwo from "../components/ProductCardTwo";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    ProductCardList,
    ProductCardTwo,
  },
  data() {
    return {
      bannerHeight: "",
      images: [
        { id: 1, url: require("../assets/images/home-01.jpg") },
        { id: 2, url: require("../assets/images/home-02.jpeg") },
      ],
    };
  },
  created() {
    this.imgLoad();
  },
  methods: {
    imgLoad() {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.imgHeight[0].height;
      });
    },
  },
  mounted() {
    window.addEventListener(
      "resize",
      () => {
        this.bannerHeight = this.$refs.imgHeight[0].height;
      },
      false
    );
  },
};
</script>

<style scoped>
* {
  font-family: "微軟正黑體";
}
.sticky-content {
  padding-bottom: 250px;
}
.banner {
  width: 80vw;
  margin: 0 auto;
  position: relative;
  top: 100px;
}
.image {
  width: 100%;
}

@media screen and (max-width: 480px) {
  .banner {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 50px;
  }
  .image {
    width: 100%;
  }
}
</style>
