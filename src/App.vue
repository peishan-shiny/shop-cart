<template>
  <div id="shop-cart">
    <div class="sticky-footer">
      <!-- 回到頂部 -->
      <el-backtop :bottom="50">
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

        <router-view />
      </div>

      <Footer class="sticky-bottom" :isUpScroll="isUpScroll"> </Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer";

export default {
  name: "APP",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      height: 0,
      isUpScroll: false,
    };
  },
  watch: {
    height(newHeight, oldHeight) {
      // console.log(newHeight, oldHeight);
      if (newHeight > oldHeight) {
        this.isUpScroll = false;
      } else {
        this.isUpScroll = true;
      }
    },
  },
  methods: {
    scrollToTop() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      this.height = scrollTop;
      // console.log(scrollTop);
    },

    // 判斷是否上滑
    // scroll(e) {
    //   this.height = e.target.scrollTop;
    //   console.log(this.height);
    // },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  // methods: {
  //   // 新增判斷方法
  //   isMobile() {
  //     let flag = navigator.userAgent.match(
  //       /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  //     );
  //     return flag;
  //   },
  // },
  // mounted() {
  //   if (this.isMobile) {
  //     alert("移動端");
  //     this.$router.replace("/pc_index");
  //   } else {
  //     alert("pc端");
  //     this.$router.replace("/m_index");
  //   }
  // },
};
</script>

<style scoped>
.sticky-content {
  min-height: 100vh;
  padding-bottom: 250px;
}
</style>
