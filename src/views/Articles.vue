<template>
  <div class="container">
    <h1 class="title">精選文章</h1>
    <hr class="title-line" />
    <div class="area">
      <ArticleList class="left" />
      <ArticleMain class="right" />
    </div>
  </div>
</template>


<script>
import ArticleList from "../components/ArticleList";
import ArticleMain from "../components/ArticleMain";

export default {
  name: "Articles",
  components: {
    ArticleList,
    ArticleMain,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
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
.area {
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
}

@media screen and (max-width: 768px) {
  .container {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 100px;
  }
  .left {
    display: none;
  }
}
</style>
