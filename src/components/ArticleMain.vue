<template>
  <div class="right">
    <img :src="imgURL" alt="" class="img" />
    <p class="create-time">2022/11/12</p>
    <p class="title">茶樹的故鄉</p>
    <p class="content">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32.
    </p>
  </div>
</template>

<script>
export default {
  name: "ArticleMain",
  data() {
    return {
      imgURL: require("../assets/images/article.jpg"),
    };
  },
};
</script>

<style scoped>
* {
  font-family: "微軟正黑體";
}
.right {
  margin-left: 1rem;
}
.img {
  width: 100%;
}

@media screen and (max-width: 480px) {
}
</style>