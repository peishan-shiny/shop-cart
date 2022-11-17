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

      <StoryContent />
    </div>

    <Footer class="sticky-bottom"> </Footer>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer";
import StoryContent from "../components/StoryContent";

export default {
  name: "Story",
  components: {
    Header,
    Footer,
    StoryContent,
  },
  data() {
    return {};
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

@media screen and (max-width: 480px) {
}
</style>
