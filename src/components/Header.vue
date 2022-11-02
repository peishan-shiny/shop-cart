<template>
  <div class="header-util">
    <!-- 手機版的橫幅fixed -->
    <div class="phone">
      <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
      <label for="navbar-toggle" class="navbar-toggle-label">
        <i class="el-icon-menu menu"></i>
      </label>
      <img src="https://i.imgur.com/KoJtvfu.png" class="p-logo" alt="" />
      <el-link icon="el-icon-search" class="search"></el-link>
    </div>
    <!-- 網頁版的橫幅fixed -->
    <el-row type="flex" class="row-bg" justify="end">
      <el-link type="info" class="header-util-item">登入會員</el-link>
      <el-link type="info" class="header-util-item">我的會員</el-link>
      <el-link type="info" class="header-util-item">購物車</el-link>
      <el-link type="info" class="header-util-item">聯絡我們</el-link>
      <el-link icon="el-icon-search" class="header-util-item"></el-link>
    </el-row>

    <div class="navbar">
      <!-- 網頁版的category沒有fixed -->
      <!-- 手機版的category有fixed -->
      <div class="nav-wrap">
        <img src="https://i.imgur.com/KoJtvfu.png" class="logo" alt="" />
        <div class="nav">
          <el-link type="info" class="category-item">會員權益</el-link>
          <el-link type="info" class="category-item">現正優惠</el-link>
          <el-link type="info" class="category-item">熱銷推薦</el-link>
          <el-link type="info" class="category-item">優惠活動</el-link>
          <el-link type="info" class="category-item">精選文章</el-link>
          <el-link type="info" class="category-item">新產品</el-link>
        </div>
      </div>
      <div class="category">
        <div class="category-title">
          <el-link
            @click.stop.prevent="clickCategory(category.id)"
            type="info"
            class="category-item"
            v-for="category in categories"
            :key="category.id"
            >{{ category.name }}</el-link
          >
        </div>
        <div class="category-title sort">
          <el-link
            type="info"
            class="category-item"
            v-for="sort in categorySorts"
            :key="sort.id"
            >{{ sort.name }}</el-link
          >
        </div>
      </div>
    </div>
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
  ],

  // categoryDetail: [全部, 粉底, 粉底液, 氣墊, 蜜粉, 腮紅, 口紅, 眼影],
  // programNow: [全部, 洗顏組, 保濕組, 修護組, 茶樹, 精油],
};

export default {
  name: "Header",

  data() {
    return {
      categories: [],
      category: [],
      categorySorts: [],
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.categories = [...this.categories, ...dummyData.categories];
    },
    clickCategory(id) {
      console.log(id);
      this.category = this.categories.filter((category) => category.id === id);
      this.categorySorts = this.category[0].sorts;
    },
  },
};
</script>

<style scoped>
.phone {
  display: none;
}

.header-util {
  width: 100vw;
  position: fixed;
  background-color: #f3f1f1;
  height: 40px;
}
.row-bg {
  width: 80vw;
  margin: 0 auto;
  line-height: 40px;
}
.header-util-item {
  margin-left: 1rem;
}
.navbar {
  width: 80vw;
  margin: 0 auto;
  position: relative;
  top: 1rem;
}
.nav-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.nav {
  text-align: end;
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
.sort {
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 0.2s ease-out;
  z-index: 999;
  background-color: var(--sec-color);
  padding: 2rem 1rem;
}
.category-title:hover ~ .sort {
  transform: scale(1, 1);
}
.category-item {
  margin-right: 1rem;
}

@media screen and (max-width: 480px) {
  .header-util {
    background-color: #f3f1f1;
    height: 50px;
  }
  .row-bg {
    display: none;
  }
  .phone {
    width: 90vw;
    margin: 0 auto;
    line-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .navbar-toggle {
    visibility: hidden;
    position: absolute;
  }
  .p-logo {
    height: 40px;
  }
  .menu,
  .search {
    font-size: 35px;
    vertical-align: middle;
  }
  .logo {
    display: none;
  }
  .navbar {
    all: unset;
    position: relative;
    top: 0px;
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