<template>
  <div class="left">
    <el-collapse @change="handleChange">
      <el-collapse-item title="新產品" name="13" class="item-wrap">
        <router-link to="/new-product" class="item">新產品</router-link>
      </el-collapse-item>

      <el-collapse-item title="現正優惠" name="11" class="item-wrap">
        <router-link to="/discount" class="item">現正優惠</router-link>
      </el-collapse-item>

      <el-collapse-item title="熱銷推薦" name="12" class="item-wrap">
        <router-link to="/recommend" class="item">熱銷推薦</router-link>
      </el-collapse-item>

      <el-collapse-item
        :title="category.name"
        :name="category.id"
        v-for="category in categories"
        :key="category.id"
        type="info"
        class="category-item"
      >
        <div class="sort">
          <router-link
            :to="{
              name: 'products-categories',
              params: { id: sort.id },
            }"
            v-for="sort in category.sorts"
            :key="sort.id"
            class="sort-item"
            >{{ sort.name }}</router-link
          >
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
const dummyData = {
  categories: [
    {
      id: 1,
      name: "保養系列",
      sorts: [
        {
          id: 1,
          parentId: 1,
          name: "全部",
        },
        {
          id: 7,
          parentId: 1,
          name: "乳液",
        },
        {
          id: 8,
          parentId: 1,
          name: "精華液",
        },
        {
          id: 9,
          parentId: 1,
          name: "面膜",
        },
      ],
    },
    {
      id: 2,
      name: "彩妝系列",
      sorts: [
        {
          id: 2,
          parentId: 2,
          name: "全部",
        },
        {
          id: 15,
          parentId: 2,
          name: "遮瑕膏",
        },
        {
          id: 16,
          parentId: 2,
          name: "粉底液",
        },
        {
          id: 17,
          parentId: 2,
          name: "睫毛膏",
        },
        {
          id: 18,
          parentId: 2,
          name: "眼影",
        },
        {
          id: 19,
          parentId: 2,
          name: "腮紅",
        },
        {
          id: 20,
          parentId: 2,
          name: "口紅",
        },
        {
          id: 21,
          parentId: 2,
          name: "指甲油",
        },
      ],
    },
    {
      id: 3,
      name: "香氛系列",
      sorts: [
        {
          id: 3,
          parentId: 3,
          name: "全部",
        },
        {
          id: 38,
          parentId: 3,
          name: "精緻香水",
        },
        {
          id: 39,
          parentId: 3,
          name: "擴香瓶",
        },
      ],
    },
    {
      id: 4,
      name: "身體髮品",
      sorts: [
        {
          id: 4,
          parentId: 4,
          name: "全部",
        },
        {
          id: 42,
          parentId: 4,
          name: "沐浴乳",
        },
        {
          id: 43,
          parentId: 4,
          name: "洗髮精",
        },
        {
          id: 44,
          parentId: 4,
          name: "潤髮乳",
        },
        {
          id: 45,
          parentId: 4,
          name: "潤膚乳",
        },
      ],
    },
    {
      id: 5,
      name: "美妝工具",
      sorts: [
        {
          id: 5,
          parentId: 5,
          name: "全部",
        },
        {
          id: 51,
          parentId: 5,
          name: "睫毛夾",
        },
        {
          id: 52,
          parentId: 5,
          name: "各式刷具",
        },
      ],
    },
    {
      id: 6,
      name: "男士保養",
      sorts: [
        {
          id: 6,
          parentId: 6,
          name: "全部",
        },
        {
          id: 56,
          parentId: 6,
          name: "控油洗面乳",
        },
        {
          id: 57,
          parentId: 6,
          name: "抗痘洗面乳",
        },
      ],
    },
  ],
};

export default {
  name: "CategoriesList",
  data() {
    return {
      categories: dummyData.categories,
    };
  },
  created() {},

  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
.item {
  margin-left: 1rem;
  font-size: var(--thr-font-size);
  color: var(--black);
}
.item:hover {
  border-bottom: 1px solid var(--black);
}
.item-wrap,
.category-item {
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sort {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
}
.sort-item {
  margin-top: 0.5rem;
  font-size: var(--thr-font-size);
  color: var(--black);
}
.sort-item:hover {
  border-bottom: 1px solid var(--black);
}
@media screen and (max-width: 480px) {
}
</style>

<style>
.el-collapse-item__header {
  font-size: var(--thr-font-size);
  color: var(--black);
}
</style>