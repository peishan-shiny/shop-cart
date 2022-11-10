<template>
  <div class="right">
    <div class="img-block">
      <p class="category-name">{{ category.name }}</p>
      <img :src="img" alt="" class="img" />
    </div>

    <el-select
      v-model="value"
      placeholder="依上架時間新 → 舊"
      class="select-range"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <div class="products-wrap">
      <div v-for="item in products" :key="item.id" class="card">
        <div class="card-image">
          <a href=""><img :src="item.imgURL" alt="" class="image" /></a>
        </div>
        <div class="info">
          <p class="product-title">{{ item.title }}</p>
          <div v-if="item.discount" class="discount-descript">
            <p class="original-price">{{ "NT$" + item.price }}</p>
            <p class="discount-red">{{ item.discount * 10 + "折" }}</p>
          </div>
          <div v-else style="height: 32px"></div>
          <p class="price">
            {{
              "NT$" +
              (item.discount
                ? Math.ceil(item.price * item.discount)
                : item.price)
            }}
          </p>
          <button class="quick-view action">快速瀏覽</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesMain",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      products: [],
      img: require("../assets/images/green.jpg"),
      options: [
        {
          value: "選項1",
          label: "依上架時間新 → 舊",
        },
        {
          value: "選項2",
          label: "依上架時間舊 → 新",
        },
        {
          value: "選項3",
          label: "依價格低 → 高",
        },
        {
          value: "選項4",
          label: "依價格高 → 低",
        },
      ],
      value: "",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.products = this.category.sorts[0].products;
    },
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
.img-block {
  height: 300px;
  overflow: hidden;
  position: relative;
}
.category-name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--white);
  font-size: var(--sec-font-size);
  letter-spacing: 0.2rem;
}
.img {
  width: 100%;
}
.select-range {
  margin: 2rem 0;
  float: right;
}
.products-wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* grid-template-rows: 400px 400px 400px; */
  grid-gap: 2rem 0;
}
.card {
  padding-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.image {
  width: 100%;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 2rem;
  position: relative;
}
.original-price {
  text-decoration: line-through;
}
.discount-descript {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.discount-red {
  border-radius: 10px;
  background: rgb(215, 10, 10);
  color: var(--white);
  margin-left: 2rem;
  padding: 0 1rem;
  font-size: var(--thr-font-size);
}
.product-title {
  font-size: var(--sec-font-size);
  letter-spacing: 0.2rem;
  font-weight: 700;
}
.price {
  font-size: var(--sec-font-size);
}
.quick-view {
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 6.5rem;
}
@media screen and (max-width: 480px) {
  .right {
    /* all: unset; */
    margin: 1rem 0;
  }
  .img-block {
    height: 200px;
  }
  .select-range {
    margin: 1rem 0;
  }
}
</style>