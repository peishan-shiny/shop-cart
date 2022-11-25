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
        v-for="product in category.products"
        :key="product.id"
        :initial-product="product"
      />
    </div>
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
    };
  },
  watch: {
    initialCategory(newData) {
      this.category = { ...this.category, ...newData };
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