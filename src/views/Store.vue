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

      <div class="container">
        <h1 class="title">門市資訊</h1>
        <hr class="title-line" />
        <div class="store">
          <div class="branch">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.8544518596527!2d120.67975031523623!3d24.246868875545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917331437dbfb%3A0x970c8360cda43ced!2z6Ie65Lit5biC56uL56We5bKh5bel5qWt6auY57Sa5Lit562J5a245qCh!5e0!3m2!1szh-TW!2stw!4v1668664193691!5m2!1szh-TW!2stw"
              width="550"
              height="400"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="store-text">
              <p>分店：神岡分店</p>
              <p>電話：04-25600000</p>
              <p>地址：429台中市神岡區中山路627號</p>
            </div>
          </div>

          <div class="branch">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.728356732975!2d120.64862311523585!3d24.2162915767348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346916f68fb28103%3A0x3555fb521d7071b3!2z6Ie65Lit5biC56uL5aSn6I-v5ZyL5rCR5Lit5a24!5e0!3m2!1szh-TW!2stw!4v1668665644882!5m2!1szh-TW!2stw"
              width="550"
              height="400"
              style="border: 0"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="store-text">
              <p>分店：大雅分店</p>
              <p>電話：04-25611111</p>
              <p>地址：428台中市大雅區雅環路一段2號</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer class="sticky-bottom"> </Footer>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer";

export default {
  name: "Story",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style scoped>
* {
  font-family: "微軟正黑體";
}
.sticky-content {
  padding-bottom: 250px;
}
.container {
  width: 80vw;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  top: 150px;
}
.title {
  font-size: var(--main-font-size);
  color: var(--black);
}
.title-line {
  width: 100%;
}
.store {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.branch {
  margin: 2rem 0;
}
.store-text {
  font-size: var(--thr-font-size);
  color: var(--black);
  line-height: 2rem;
}

@media screen and (max-width: 1440px) {
  .store {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
