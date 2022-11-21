<template>
  <div class="container">
    <div class="choose">
      <div
        class="btn-choose"
        :class="{ active: isAction === 'details' }"
        @click="isAction = 'details'"
      >
        產品詳情
      </div>
      <div
        class="btn-choose"
        :class="{ active: isAction === 'impression' }"
        @click="isAction = 'impression'"
      >
        心得感想<span class="impression-count">{{
          "(" + tableData.length + ")"
        }}</span>
      </div>
      <div
        class="btn-choose"
        :class="{ active: isAction === 'delivery' }"
        @click="isAction = 'delivery'"
      >
        配送資訊
      </div>
    </div>
    <div>
      <!-- 產品詳情 -->
      <div class="area" v-if="isAction === 'details'">
        <el-table :data="product.details" border :show-header="showHeader">
          <el-table-column prop="title"> </el-table-column>
          <el-table-column prop="content"> </el-table-column>
        </el-table>
      </div>
      <!-- 心得感想 -->
      <div class="area" v-if="isAction === 'impression'">
        <el-table :data="tableData" stripe>
          <el-table-column prop="user" label="留言人"> </el-table-column>
          <el-table-column prop="score" label="評分" min-width="150px">
            <el-rate v-model="value"></el-rate>
          </el-table-column>
          <el-table-column prop="content" label="內文"> </el-table-column>
          <el-table-column prop="date" label="留言時間"> </el-table-column>
        </el-table>
        <br />
        <button
          type="button"
          class="btn-choose action-border"
          @click="toComment"
        >
          寫評論
        </button>
      </div>
      <!-- 配送資訊 -->
      <div class="area delivery" v-if="isAction === 'delivery'">
        <p>● 完成結帳後1~3個工作天出貨，依照宅配公司配送時間約3~7天抵達。</p>
        <p>● 配送方式：宅配 / 超商取貨。</p>
        <p>
          ● 運費計算方式：滿$1000免運(限台灣本島)。未滿$1000 → 宅配運費$100 /
          超商取貨運費$80
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetailTwo",
  components: {},
  props: {
    initialProduct: {
      type: Object,
      default: () => ({
        id: -1,
        name: "",
        price: 0,
        discount: 0,
        imgURL: "",
        shot_des: "。",
        format: [],
        directions: "",
        use: "",
        details: [],
      }),
    },
  },
  data() {
    return {
      product: { ...this.initialProduct },
      isAction: "details",
      showHeader: false,
      tableData: [
        {
          user: "珊珊",
          score: 5,
          content: "很服貼不掉妝，會再回購！",
          date: "2022/11/12",
        },
        {
          user: "牛牛",
          score: 5,
          content: "讚啦！回購10次，真心推薦！",
          date: "2022/12/12",
        },
      ],
      value: 5,
    };
  },
  methods: {
    toComment() {
      this.$router.push("/comment");
    },
  },
};
</script>

<style scoped>
* {
  font-family: "微軟正黑體";
}
.choose {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 0;
}
.btn-choose {
  width: 100%;
  text-align: center;
  color: var(--main-color);
  border: 1.5px solid var(--main-color);
  border-radius: 0.5rem;
  padding: 1rem 0;
}
.btn-choose.active {
  color: var(--white);
  background-color: var(--main-color);
}
.delivery {
  line-height: 2rem;
}
@media screen and (max-width: 480px) {
}
</style>
