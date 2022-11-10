<template>
  <div class="header">
    <!-- 行動版的橫幅fixed -->
    <div class="phone-wrap">
      <div class="phone">
        <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
        <label for="navbar-toggle" class="navbar-toggle-label">
          <i class="el-icon-menu menu"></i>
        </label>
        <img src="https://i.imgur.com/KoJtvfu.png" class="p-logo" alt="" />
        <!-- <el-link icon="el-icon-search" class="search"></el-link> -->
        <i class="el-icon-search search"></i>

        <div class="p-category">
          <div class="p-category-title">
            <el-link
              v-for="category in categories"
              :key="category.id"
              type="info"
              class="p-category-item"
              >{{ category.name }}

              <div class="p-sort">
                <el-link
                  v-for="sort in category.sorts"
                  :key="sort.id"
                  type="info"
                  class="p-sort-item"
                  >{{ sort.name }}</el-link
                >
              </div>
            </el-link>
          </div>
        </div>
      </div>
    </div>
    <!-- PC的橫幅fixed -->
    <div class="header-util">
      <el-row type="flex" class="row-bg" justify="end">
        <el-link type="info" class="header-util-item">登入會員</el-link>
        <el-link type="info" class="header-util-item">我的會員</el-link>
        <el-link type="info" class="header-util-item">購物車</el-link>
        <el-link type="info" class="header-util-item">聯絡我們</el-link>
        <el-link icon="el-icon-search" class="header-util-item"></el-link>
      </el-row>
    </div>
    <!-- PC的橫幅沒有fixed -->
    <div class="navbar">
      <div class="nav-wrap">
        <img src="https://i.imgur.com/KoJtvfu.png" class="logo" alt="" />
        <div class="nav">
          <el-link type="info" class="nav-item">會員權益</el-link>
          <el-link type="info" class="nav-item">現正優惠</el-link>
          <el-link type="info" class="nav-item">熱銷推薦</el-link>
          <el-link type="info" class="nav-item">優惠活動</el-link>
          <el-link type="info" class="nav-item">精選文章</el-link>
          <el-link type="info" class="nav-item">新產品</el-link>
        </div>
      </div>
      <div class="category">
        <div class="category-title">
          <el-link
            v-for="category in categories"
            :key="category.id"
            type="info"
            class="category-item"
            >{{ category.name }}

            <div class="sort">
              <el-link
                v-for="sort in category.sorts"
                :key="sort.id"
                type="info"
                class="sort-item"
                >{{ sort.name }}</el-link
              >
            </div>
          </el-link>
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
  name: "Header",

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
  },
};
</script>

<style scoped>
* {
  font-family: "微軟正黑體";
}
.phone-wrap {
  display: none;
}

.header-util {
  z-index: 9999;
  width: 100vw;
  position: fixed;
  background-color: var(--sec-color);
  height: 40px;
}
.row-bg {
  width: 80vw;
  margin: 0 auto;
  line-height: 40px;
}
.header-util-item {
  margin-left: 1rem;
  font-size: var(--des-font-size);
}
.navbar {
  width: 80vw;
  margin: 0 auto;
  position: relative;
  top: 4rem;
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
  font-size: var(--thr-font-size);
  padding-bottom: 0.5rem;
}
.category {
  margin-top: 1.5rem;
}
.category-title {
  display: flex;
  flex-direction: row;
}
.category-item {
  margin-right: 2rem;
  font-size: var(--thr-font-size);
}
.sort {
  display: flex;
  flex-direction: column;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 0.2s ease-out;
  z-index: 9999;
  background-color: var(--sec-color);
  position: absolute;
}
.sort-item {
  padding: 0.5rem 1rem;
  text-align: center;
  white-space: nowrap;
  font-size: var(--thr-font-size);
}
.category-item:hover .sort {
  transform: scale(1, 1);
}

@media screen and (max-width: 480px) {
  .header-util,
  .category {
    display: none;
  }
  .phone-wrap {
    all: unset;
    z-index: 9999;
    width: 100vw;
    position: fixed;
    background-color: var(--sec-color);
    height: 50px;
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
    color: var(--black);
  }
  .logo {
    display: none;
  }
  .navbar {
    all: unset;
    margin: 0 auto;
    position: relative;
    top: 50px;
  }
  .nav-wrap {
    all: unset;
    line-height: 40px;
    box-sizing: border-box;
  }
  .nav {
    width: 90vw;
    margin: 0 auto;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
  .nav-item {
    all: unset;
    margin: 0 0.5rem;
    font-size: var(--thr-font-size);
  }
  .p-category {
    width: 60vw;
    position: fixed;
    top: 50px;
    left: 0px;
    height: 100vh;
    font-size: var(--thr-font-size);
    background-color: var(--sec-color);
    transform: scale(0, 1);
    transform-origin: left;
    transition: transform 0.2s ease-out;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .p-category-title {
    width: 30vw;
    display: flex;
    flex-direction: column;
  }
  .p-category-item {
    padding: 0.5rem 1rem;
    text-align: center;
    font-size: var(--thr-font-size);
  }
  .p-sort {
    display: flex;
    flex-direction: column;
    transform: scale(0, 1);
    transform-origin: left;
    transition: transform 0.2s ease-out;
    background-color: var(--white);
    position: fixed;
    left: 30vw;
    top: 0px;
    width: 30vw;
    height: 100vh;
  }
  .p-sort-item {
    padding: 0.5rem 1rem;
    font-size: var(--thr-font-size);
  }
  .navbar-toggle:checked ~ .p-category {
    transform: scale(1, 1);
  }
  .p-category-item:hover .p-sort {
    transform: scale(1, 1);
  }
}
</style>