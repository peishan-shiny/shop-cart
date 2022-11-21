<template>
  <div class="right">
    <img :src="imgURL" alt="" class="img" />
    <p class="create-time">2022/11/12</p>
    <p class="title">茶樹的故鄉</p>
    <p class="summary">
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
    <button type="button" class="btn-read action" @click="isAction = !isAction">
      {{ isAction ? "收合內文" : "繼續閱讀" }}
    </button>
    <p class="content" v-if="isAction">
      The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum." Section
      1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
      illo inventore veritatis et quasi architecto beatae vitae dicta sunt
      explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
      odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
      quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
      eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
      corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
      nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
      nulla pariatur?" 1914 translation by H. Rackham "But I must explain to you
      how all this mistaken idea of denouncing pleasure and praising pain was
      born and I will give you a complete account of the system, and expound the
      actual teachings of the great explorer of the truth, the master-builder of
      human happiness. No one rejects, dislikes, or avoids pleasure itself,
      because it is pleasure, but because those who do not know how to pursue
      pleasure rationally encounter consequences that are extremely painful. Nor
      again is there anyone who loves or pursues or desires to obtain pain of
      itself, because it is pain, but because occasionally circumstances occur
      in which toil and pain can procure him some great pleasure. To take a
      trivial example, which of us ever undertakes laborious physical exercise,
      except to obtain some advantage from it? But who has any right to find
      fault with a man who chooses to enjoy a pleasure that has no annoying
      consequences, or one who avoids a pain that produces no resultant
      pleasure?"
    </p>
  </div>
</template>

<script>
export default {
  name: "ArticleMain",
  data() {
    return {
      imgURL: require("../assets/images/article.jpg"),
      isAction: false,
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
  line-height: 2rem;
}
.img {
  width: 100%;
}
.title {
  font-size: var(--sec-font-size);
  font-weight: 700;
}
.btn-read {
  padding: 0.5rem 2rem;
  margin: 2rem 0;
}

@media screen and (max-width: 480px) {
  .right {
    margin-left: 0rem;
  }
}
</style>