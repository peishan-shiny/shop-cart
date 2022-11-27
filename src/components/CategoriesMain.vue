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
      <ProductCard
        v-for="product in pageChangeItem.length
          ? pageChangeItem[0]
          : category.products"
        :key="product.id"
        :initial-product="product"
      />
    </div>

    <!-- 分頁 -->
    <el-pagination
      layout="prev, pager, next"
      :total="category.products.length"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      style="text-align: center"
    >
    </el-pagination>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";

export default {
  name: "CategoriesMain",
  components: { ProductCard },
  props: {
    initialCategory: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      category: this.initialCategory,
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
      currentPage: 1,
      pageSize: 12, //每頁顯示多少數據
      pageChangeItem: [],
    };
  },
  created() {
    this.renderCards(1);
  },
  watch: {
    initialCategory(newData) {
      this.category = { ...this.category, ...newData };
      this.renderCards(1);
    },
  },
  methods: {
    renderCards(page) {
      this.pageChangeItem = [];
      this.currentPage = page;
      const productSum = this.category.products;
      const begin = (this.currentPage - 1) * this.pageSize;
      const end = begin + this.pageSize;

      this.pageChangeItem.push(productSum.slice(begin, end));
    },
    handleCurrentChange(val) {
      this.pageChangeItem = [];
      this.currentPage = val;
      // console.log(val);
      const productSum = this.category.products;
      const begin = (this.currentPage - 1) * this.pageSize;
      const end = begin + this.pageSize;
      // console.log(this.currentPage, begin, end);
      this.pageChangeItem.push(productSum.slice(begin, end));
      // console.log(this.pageChangeItem);
      // return productSum.slice(begin, end);
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
  min-height: 200px;
  max-height: 300px;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 320px));
  grid-gap: 2rem 0;
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
  .products-wrap {
    justify-content: center;
  }
}
</style>