<template>
  <div class="container">
    <h1 class="title">品牌故事</h1>
    <hr class="title-line" />
    <img :src="imgURL" alt="" class="img" />
    <div>
      <p class="idea">三大經營理念</p>
      <p class="ideaContent">
        100%純天然<br />綠企業．永續經營<br />簡單不奢華的包裝
      </p>
    </div>
    <!-- 100%純天然 -->
    <div class="area nature">
      <img :src="imgURL2" alt="" class="img2" />
      <div>
        <p class="main-text">| 100%純天然 |</p>
        <p class="text">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>
    </div>
    <!-- 綠企業．永續經營 -->
    <div class="area green">
      <div>
        <p class="main-text">| 綠企業．永續經營 |</p>
        <p class="text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </div>
      <img :src="imgURL3" alt="" class="img3" />
    </div>
    <!-- 簡單不奢華的包裝 -->
    <div class="area simple">
      <img :src="imgURL4" alt="" class="img4" />
      <div>
        <p class="main-text">| 簡單不奢華的包裝 |</p>
        <p class="text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoryContent",
  data() {
    return {
      imgURL: require("../assets/images/story.jpg"),
      imgURL2: require("../assets/images/article.jpg"),
      imgURL3: require("../assets/images/story2.jpg"),
      imgURL4: require("../assets/images/story3.jpg"),
    };
  },
};
</script>

<style scoped>
* {
  font-family: "微軟正黑體";
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
.img {
  width: 50%;
  margin: 3rem 25%;
}
.img2,
.img3,
.img4 {
  width: 50%;
}
.idea {
  font-size: var(--main-font-size);
  font-weight: 700;
  color: var(--main-color);
  margin: 2rem 0;
  text-align: center;
}
.ideaContent {
  font-size: var(--sec-font-size);
  color: var(--white);
  line-height: 3rem;
  text-align: center;
  background-color: var(--main-color);
  padding: 2rem;
}
.area {
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.main-text {
  margin: 1rem 2rem;
  font-size: var(--main-font-size);
  color: var(--black);
}
.text {
  margin: 0 2rem;
  font-size: var(--thr-font-size);
  color: var(--black);
  line-height: 2rem;
}

@media screen and (max-width: 900px) {
  .container {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 100px;
  }
  .img {
    width: 100%;
    margin: 2rem 0;
  }
  .img2,
  .img3,
  .img4 {
    width: 100%;
  }
  .area {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-text {
    margin: 1rem 0;
    font-size: var(--sec-font-size);
    text-align: center;
  }
  .text {
    margin: 0;
    text-align: center;
  }
  .green {
    flex-direction: column-reverse;
  }
}
</style>