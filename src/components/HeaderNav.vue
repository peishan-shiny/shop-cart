<template>
  <div class="navbar">
    <!-- 網頁版的category沒有fixed -->
    <!-- 手機版的category有fixed -->
    <div class="nav-wrap">
      <img src="https://i.imgur.com/KoJtvfu.png" class="logo" alt="" />
      <div class="nav">
        <el-link
          type="info"
          class="nav-item"
          v-for="program in programs"
          :key="program.id"
          >{{ program.name }}
        </el-link>
        <!-- <el-link type="info" class="nav-item">熱銷推薦 </el-link>
        <el-link type="info" class="nav-item">優惠活動 </el-link>
        <el-link type="info" class="nav-item">精選文章 </el-link>
        <el-link type="info" class="nav-item">新產品 </el-link> -->
      </div>
    </div>
    <div class="category">
      <div class="category-title">
        <el-link
          type="info"
          class="category-item"
          v-for="category in categories"
          :key="category.id"
          >{{ category.name }}</el-link
        >
      </div>
      <div class="category-title">
        <el-link
          type="info"
          class="category-item"
          v-for="sort in sorts"
          :key="sort.id"
          >{{ sort.name }}</el-link
        >
      </div>
      <!-- <el-link type="info" class="category-item">彩妝系列</el-link>
      <el-link type="info" class="category-item">香氛系列</el-link>
      <el-link type="info" class="category-item">身體髮品</el-link>
      <el-link type="info" class="category-item">美妝工具</el-link> -->
    </div>
  </div>
</template>

<script>
const dummyData = {
  categories: [
    {
      id: 1,
      name: "保養系列",
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
      ],
    },
    {
      id: 3,
      name: "香氛系列",
    },
    {
      id: 4,
      name: "身體髮品",
    },
    {
      id: 5,
      name: "美妝工具",
    },
  ],
  programs: [
    {
      id: 1,
      name: "會員權益",
    },
    {
      id: 2,
      name: "現正優惠",
    },
    {
      id: 3,
      name: "熱銷推薦",
    },
    {
      id: 4,
      name: "優惠活動",
    },
    {
      id: 5,
      name: "精選文章",
    },
    {
      id: 6,
      name: "新產品",
    },
  ],

  // categoryDetail: [全部, 粉底, 粉底液, 氣墊, 蜜粉, 腮紅, 口紅, 眼影],
  // programNow: [全部, 洗顏組, 保濕組, 修護組, 茶樹, 精油],
};

export default {
  name: "HeaderNav",

  data() {
    return {
      categories: [],
      programs: [],
      sorts: [],
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.categories = [...this.categories, ...dummyData.categories];
      this.programs = [...this.programs, ...dummyData.programs];
      this.sorts = [...this.sorts, ...dummyData.categories[1].sorts];
    },
  },
};
</script>

<style scoped>
.navbar {
  position: relative;
  top: 60px;
}
.nav-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 100px;
}
.nav-item {
  margin-left: 1rem;
  margin-bottom: 1rem;
}
.category {
  margin-top: 1rem;
}

.category-item {
  margin-right: 1rem;
}

@media screen and (max-width: 480px) {
  .logo {
    display: none;
  }
  .navbar {
    all: unset;
    position: relative;
    top: 50px;
  }
  .nav-wrap {
    all: unset;
    line-height: 40px;
    box-sizing: border-box;
  }
  .nav {
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
  .nav-item {
    all: unset;
    margin-right: 1rem;
  }
  .category {
    all: unset;
    display: flex;
    flex-direction: row;
    width: 60vw;
    height: 100vh;
    position: fixed;
    top: 50px;
    left: 0px;
    background-color: #f3f1f1;
  }
  .category-title {
    width: 30vw;
    display: flex;
    flex-direction: column;
  }
  .category-item {
    all: unset;
    padding-left: 1rem;
    padding-top: 2rem;
  }
}
</style>
