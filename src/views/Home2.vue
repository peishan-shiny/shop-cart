<template>
  <div class="sticky-footer">
    <div class="sticky-content">
      <Header />
      <div class="banner">
        <el-carousel trigger="click">
          <el-carousel-item v-for="item in images" :key="item">
            <!-- <img
              v-for="img in images"
              :key="img.id"
              :src="img.url"
              alt=""
              class="image"
            /> -->
            <p class="text-style">{{ item.title ? item.title : "" }}</p>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <Footer class="sticky-bottom"> </Footer>
  </div>
</template>


<script>
const dummyData = {
  images: [
    {
      id: 1,
      url: "https://i.imgur.com/vJCR06y.jpg",
      title: "",
    },
    {
      id: 2,
      url: "https://i.imgur.com/lgYrQow.jpg",
      title: "100%純天然萃取",
    },
  ],
};
import Header from "../components/Header.vue";
import Footer from "../components/Footer";

export default {
  name: "SignIn",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      images: dummyData.images,
    };
  },
};
</script>

<style scoped>
.sticky-content {
  padding-bottom: 250px;
}
.banner {
  width: 80vw;
  margin: 0 auto;
  position: relative;
  top: 100px;
}
/* .el-carousel__container {
  height: 600px;
} */
.el-carousel__item h3 {
  color: var(--white);
  font-size: var(--thr-font-size);
  opacity: 0.75;
  line-height: 250px;
  margin: 0 auto;
}
.el-carousel__item:nth-child(2n) {
  background-image: url("https://i.imgur.com/lgYrQow.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0 50%;
}
.el-carousel__item:nth-child(2n + 1) {
  background-image: url("https://i.imgur.com/vJCR06y.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0 50%;
}
.text-style {
  all: unset;
  color: var(--white);
  font-size: var(--sec-font-size);
  position: absolute;
  top: 3rem;
  left: 5rem;
  letter-spacing: 0.5rem;
}

@media screen and (max-width: 480px) {
  .banner {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 50px;
  }
  .text-style {
    all: unset;
    color: var(--white);
    font-size: var(--des-font-size);
    position: absolute;
    top: 5rem;
    left: 3rem;
    letter-spacing: 0.5rem;
  }
  /* .el-carousel__container {
    height: 300px;
  } */
}
</style>
