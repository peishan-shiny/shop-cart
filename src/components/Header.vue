<template>
  <div class="header">
    <!-- 行動版的橫幅fixed -->
    <div class="phone-wrap">
      <div class="phone">
        <input
          type="checkbox"
          id="navbar-toggle"
          :class="[
            'navbar-toggle',
            { open: isOpen === 'ok' },
            { close: isClose === 'ok' },
          ]"
          @click="open"
        />
        <label for="navbar-toggle" class="navbar-toggle-label">
          <i class="el-icon-menu menu"></i>
        </label>
        <img
          src="https://i.imgur.com/KoJtvfu.png"
          class="p-logo"
          alt=""
          @click="toHome"
        />
        <i class="el-icon-search search"></i>

        <div class="p-category">
          <div class="p-category-title">
            <el-link
              v-for="category in categories"
              :key="category.id"
              type="info"
              class="p-category-item"
              :underline="false"
              >{{ category.name }}

              <div class="p-sort" @click="close">
                <router-link
                  class="p-sort-item"
                  :to="{
                    name: 'products-categories',
                    params: { id: sort.id },
                  }"
                  v-for="sort in category.sorts"
                  :key="sort.id"
                  >{{ sort.name }}</router-link
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
        <router-link to="/signIn" class="header-util-item"
          >登入會員</router-link
        >
        <router-link to="/user" class="header-util-item">我的會員</router-link>
        <el-link
          type="info"
          class="header-util-item"
          :underline="false"
          @click="drawer = true"
          >購物車</el-link
        >
        <router-link to="/contact" class="header-util-item"
          >聯絡我們</router-link
        >
        <router-link to="#" class="header-util-item"
          ><i class="el-icon-search"></i
        ></router-link>
      </el-row>
    </div>
    <!-- drawer -->
    <el-drawer title="我是訂單" :visible.sync="drawer" :size="drawerWidth">
      <div class="drawerTop">
        <el-page-header @back="drawer = false"> </el-page-header>
        <el-badge :value="2" :max="20" class="drawerItem">
          <i class="el-icon-shopping-cart-2 icon-cart"></i>
        </el-badge>
      </div>

      <QuickOrder :show.sync="drawer" />
    </el-drawer>
    <!-- PC的橫幅沒有fixed -->
    <div class="navbar">
      <div class="nav-wrap">
        <img
          src="https://i.imgur.com/KoJtvfu.png"
          class="logo"
          alt=""
          @click="toHome"
        />
        <div class="nav">
          <router-link to="#" class="nav-item">現正優惠</router-link>
          <router-link to="#" class="nav-item">熱銷推薦</router-link>
          <router-link to="/activities" class="nav-item">優惠活動</router-link>
          <router-link to="/articles" class="nav-item">精選文章</router-link>
          <router-link to="#" class="nav-item">新產品</router-link>
        </div>
      </div>
      <div class="category">
        <div class="category-title">
          <el-link
            v-for="category in categories"
            :key="category.id"
            type="info"
            class="category-item"
            :underline="false"
            >{{ category.name }}

            <div class="sort">
              <router-link
                v-for="sort in category.sorts"
                :key="sort.id"
                :to="{
                  name: 'products-categories',
                  params: { id: sort.id },
                }"
                class="sort-item"
                >{{ sort.name }}</router-link
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

import QuickOrder from "./QuickOrder.vue";

export default {
  name: "Header",
  components: {
    QuickOrder,
  },
  data() {
    return {
      isDevice: false,
      categories: dummyData.categories,
      drawer: false,
      isOpen: "no",
      isClose: "no",
    };
  },
  computed: {
    drawerWidth() {
      if (this.isDevice) {
        return "100%";
      }
      return "60%";
    },
  },
  created() {
    this.isMobile();
    window.addEventListener("resize", this.isMobile);
  },
  methods: {
    isMobile() {
      const result = window.matchMedia("(max-width: 768px)").matches;
      this.isDevice = result;
      return result;
    },
    toHome() {
      this.$router.push("/home");
    },
    open() {
      this.isOpen = "ok";
      this.isClose = "no";
    },
    close() {
      this.isOpen = "no";
      this.isClose = "ok";
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
  max-width: 1440px;
  margin: 0 auto;
  line-height: 40px;
}
.header-util-item {
  margin-left: 1rem;
  font-size: var(--des-font-size);
  color: var(--black);
}
.header-util-item:hover {
  color: var(--black-hover);
}
.navbar {
  width: 80vw;
  max-width: 1440px;
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
  line-height: 2rem;
}
.logo {
  width: 100px;
  cursor: pointer;
}
.nav-item {
  margin-left: 1rem;
  font-size: var(--thr-font-size);
  color: var(--black);
  white-space: nowrap;
}
.nav-item:hover {
  color: var(--black-hover);
  border-bottom: 1px solid var(--black-hover);
}
.category {
  margin-top: 1.5rem;
}
.category-title {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.category-item {
  margin-right: 2rem;
  font-size: var(--thr-font-size);
  white-space: nowrap;
  line-height: 2rem;
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
  color: var(--black);
  padding: 0.5rem 1rem;
  text-align: center;
  white-space: nowrap;
  font-size: var(--thr-font-size);
}
.sort-item:hover {
  color: var(--white);
  background-color: var(--black);
}
.category-item:hover .sort {
  transform: scale(1, 1);
}

/* drawer */
.drawerTop {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--black);
}
.drawerItem {
  margin-top: 10px;
  margin-right: 40px;
}
.icon-cart {
  font-size: 35px;
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
    cursor: pointer;
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
    color: var(--black);
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
  }
  .p-category-title {
    width: 30vw;
    position: fixed;
    left: 0px;
    top: 0px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .p-category-item {
    padding: 0.5rem 1rem;
    text-align: center;
    font-size: var(--thr-font-size);
  }
  .p-sort {
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 100vh;
    position: fixed;
    left: 30vw;
    top: 0px;
    transform: scale(0, 1);
    transform-origin: left;
    transition: transform 0.2s ease-out;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .p-sort-item {
    color: var(--black);
    padding: 0.5rem 1rem;
    font-size: var(--thr-font-size);
  }
  /* .navbar-toggle:checked ~ .p-category {
    transform: scale(1, 1);
  } */
  .p-category-item:hover {
    background-color: var(--white);
  }
  .p-category-item:hover .p-sort {
    transform: scale(1, 1);
  }
  .p-sort-item:hover {
    color: var(--white);
    background-color: var(--black);
  }

  /* 增加樣式進去class */
  .navbar-toggle.open ~ .p-category {
    transform: scale(1, 1);
  }

  .navbar-toggle.close ~ .p-category {
    transform: scale(0, 1);
  }
}
</style>