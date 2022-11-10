<template>
  <div class="left">
    <el-collapse @change="handleChange">
      <el-collapse-item title="現正優惠" name="11">
        <el-link type="info" class="item">現正優惠</el-link>
      </el-collapse-item>

      <el-collapse-item title="熱銷推薦" name="12">
        <el-link type="info" class="item">熱銷推薦</el-link>
      </el-collapse-item>

      <el-collapse-item title="優惠活動" name="13">
        <el-link type="info" class="item">優惠活動</el-link>
      </el-collapse-item>

      <el-collapse-item title="新產品" name="14">
        <el-link type="info" class="item">新產品</el-link>
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
          <el-link
            v-for="sort in category.sorts"
            :key="sort.id"
            type="info"
            class="sort-item"
            >{{ sort.name }}</el-link
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
          name: "全部",
        },
        {
          id: 2,
          name: "乳液",
        },
        {
          id: 3,
          name: "乳霜",
        },
        {
          id: 4,
          name: "保濕噴霧",
        },
      ],
    },
    {
      id: 2,
      name: "彩妝系列",
      sorts: [
        {
          id: 1,
          name: "全部",
        },
        {
          id: 2,
          name: "粉底",
        },
        {
          id: 3,
          name: "粉底液",
        },
        {
          id: 4,
          name: "氣墊",
        },
        {
          id: 5,
          name: "蜜粉",
        },
        {
          id: 6,
          name: "腮紅",
        },
        {
          id: 7,
          name: "口紅",
        },
        {
          id: 8,
          name: "眼影",
        },
        {
          id: 9,
          name: "打亮",
        },
      ],
    },
    {
      id: 3,
      name: "香氛系列",
      sorts: [
        {
          id: 1,
          name: "全部",
        },
        {
          id: 2,
          name: "檸檬柑橘",
        },
        {
          id: 3,
          name: "密桃蘋果",
        },
        {
          id: 4,
          name: "香草萊姆",
        },
        {
          id: 5,
          name: "茉莉花香",
        },
        {
          id: 6,
          name: "白麝香",
        },
        {
          id: 7,
          name: "小蒼蘭",
        },
      ],
    },
    {
      id: 4,
      name: "身體髮品",
      sorts: [
        {
          id: 1,
          name: "全部",
        },
        {
          id: 2,
          name: "沐浴乳",
        },
        {
          id: 3,
          name: "護髮乳",
        },
        {
          id: 4,
          name: "潤髮乳",
        },
        {
          id: 5,
          name: "潤膚乳",
        },
      ],
    },
    {
      id: 5,
      name: "美妝工具",
      sorts: [
        {
          id: 1,
          name: "全部",
        },
        {
          id: 2,
          name: "睫毛夾",
        },
        {
          id: 3,
          name: "各式刷具",
        },
      ],
    },
    {
      id: 6,
      name: "男士保養",
      sorts: [
        {
          id: 1,
          name: "全部",
        },
        {
          id: 2,
          name: "控油洗面乳",
        },
        {
          id: 3,
          name: "酷涼洗面乳",
        },
      ],
    },
  ],
};

export default {
  name: "CategoriesList",
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.categories = [...dummyData.categories];
    },
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
.item {
  margin-left: 1rem;
}
.item,
.category-item {
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
}
@media screen and (max-width: 480px) {
}
</style>