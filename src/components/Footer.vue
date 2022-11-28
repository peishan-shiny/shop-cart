<template>
  <footer class="footer">
    <div class="footer-inner">
      <!-- PC/行動共用區 -->
      <div class="footer-left">
        <h1 class="follow-title">Follow us</h1>
        <div class="follow-icon">
          <a href="https://www.facebook.com/">
            <img
              src="https://i.imgur.com/ON0EtSl.png"
              alt=""
              class="icon fb-icon"
            />
          </a>
          <a href="https://store.line.me/">
            <img
              src="https://i.imgur.com/7Ildo3x.png"
              alt=""
              class="icon line-icon"
            />
          </a>
        </div>
        <div class="info">
          <img src="https://i.imgur.com/PJguFLx.png" alt="" class="logo" />
          <div class="info-inner">
            <router-link to="/privacy/policy" class="info-text"
              >服務條款及隱私政策</router-link
            >
            <hr />
            <p class="info-text">© 2022 POPO SHOP</p>
          </div>
        </div>
      </div>
      <!-- PC版 -->
      <div class="footer-right" v-if="!isDevice">
        <!-- 產品資訊 -->
        <div class="footer-menu">
          <h1 class="footer-title">產品資訊</h1>
          <div
            class="footer-item"
            v-for="category in categories"
            :key="category.id"
          >
            <router-link
              :to="{
                name: 'products-categories',
                params: { id: category.id },
              }"
              class="footer-text"
              >{{ category.name }}</router-link
            >
          </div>
        </div>
        <!-- 優惠活動 -->
        <div class="footer-menu">
          <h1 class="footer-title">優惠活動</h1>
          <div class="footer-item">
            <router-link to="/new-product" class="footer-text"
              >新產品</router-link
            >
          </div>
          <div class="footer-item">
            <router-link to="/discount" class="footer-text"
              >現正優惠</router-link
            >
          </div>
          <div class="footer-item">
            <router-link to="/recommend" class="footer-text"
              >熱銷推薦</router-link
            >
          </div>
          <div class="footer-item">
            <router-link to="/activities" class="footer-text"
              >優惠活動</router-link
            >
          </div>
          <div class="footer-item">
            <router-link to="/articles" class="footer-text"
              >精選文章</router-link
            >
          </div>
        </div>
        <!-- 關於我們 -->
        <div class="footer-menu">
          <h1 class="footer-title">關於我們</h1>
          <div class="footer-item">
            <router-link to="/story" class="footer-text">品牌故事</router-link>
          </div>
          <div class="footer-item">
            <router-link to="/store" class="footer-text">門市資訊</router-link>
          </div>
          <div class="footer-item">
            <a href="https://www.104.com.tw/jobs/main/" class="footer-text"
              >人才招募</a
            >
          </div>
          <div class="footer-item">
            <router-link to="/contact" class="footer-text"
              >聯絡我們</router-link
            >
          </div>
        </div>
      </div>
      <!-- 行動版 -->
      <ul class="menu-list" v-else>
        <!-- 產品資訊 -->
        <li class="first activity">
          產品資訊<span> <i class="el-icon-arrow-down arrow-down"></i></span>
          <ul class="activity-list">
            <li
              v-for="category in categories"
              :key="category.id"
              class="second"
            >
              <router-link
                :to="{
                  name: 'products-categories',
                  params: { id: category.id },
                }"
                class="text-white"
                >{{ category.name }}</router-link
              >
            </li>
          </ul>
        </li>
        <!-- 優惠活動 -->
        <li class="first activity">
          優惠活動<span> <i class="el-icon-arrow-down arrow-down"></i></span>
          <ul class="activity-list">
            <li class="second">
              <router-link to="/new-product" class="text-white"
                >新產品</router-link
              >
            </li>
            <li class="second">
              <router-link to="/discount" class="text-white"
                >現正優惠</router-link
              >
            </li>
            <li class="second">
              <router-link to="/recommend" class="text-white"
                >熱銷推薦</router-link
              >
            </li>
            <li class="second">
              <router-link to="/activities" class="text-white"
                >優惠活動</router-link
              >
            </li>
            <li class="second">
              <router-link to="/articles" class="text-white"
                >精選文章</router-link
              >
            </li>
          </ul>
        </li>
        <!-- 其他 -->
        <li class="first">
          <router-link to="/story" class="text-white">品牌故事</router-link>
        </li>
        <li class="first">
          <router-link to="#" class="text-white">人才招募</router-link>
        </li>
        <li class="first">
          <router-link to="/contact" class="text-white">聯絡我們</router-link>
        </li>
      </ul>
    </div>

    <div v-if="isUpScroll" class="footer-bottom">
      <div class="footer-bottom-inner">
        <router-link to="/store" class="text-white"
          ><i class="footer-bottom-icon el-icon-location"></i
        ></router-link>
        <router-link to="/home" class="text-white"
          ><i class="footer-bottom-icon el-icon-s-home"></i
        ></router-link>
        <router-link to="/user" class="text-white"
          ><i class="footer-bottom-icon el-icon-user-solid"></i
        ></router-link>
      </div>
    </div>
  </footer>
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
  name: "Footer",
  props: {
    isUpScroll: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isDevice: false,
      categories: [],
    };
  },
  created() {
    //matches，回傳 boolean值
    this.isMobile();
    this.fetchData();
    window.addEventListener("resize", this.isMobile);
  },
  watch: {
    // height: {
    //   handler(newName, oldName) {
    //     if (newName > oldName) {
    //       this.isUpScroll = false;
    //     } else {
    //       this.isUpScroll = true;
    //     }
    //   },
    // },
  },
  methods: {
    // 判斷裝置的方法
    isMobile() {
      const result = window.matchMedia("(max-width: 768px)").matches;
      console.log(result);
      this.isDevice = result;
    },
    fetchData() {
      this.categories = [...dummyData.categories];
    },
    // 判斷是否上滑
    // scrollHeight(e) {
    //   this.height = e.target.scrollTop;
    //   console.log(this.height);
    // },
  },
};
</script>

<style scoped>
* {
  font-family: "微軟正黑體";
}
.footer {
  background-color: var(--main-color);
  padding: 3rem 1.5rem;
}
.footer-inner {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.footer-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.follow-title {
  font-family: "微軟正黑體";
  letter-spacing: 0.3rem;
  font-size: var(--main-font-size);
  color: var(--white);
}
.icon {
  width: 50px;
  margin: 1.5rem 0.5rem;
}
.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.5rem;
}
.logo {
  width: 80px;
  margin-right: 1.5rem;
}
.info-text {
  font-family: "微軟正黑體";
  font-size: var(--thr-font-size);
  color: var(--white);
}
.footer-right {
  display: flex;
  flex-direction: row;
  justify-content: end;
}
.footer-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1.5rem;
}
.footer-title {
  font-size: var(--sec-font-size);
  color: var(--white);
  margin-bottom: 2rem;
  text-align: center;
}
.footer-item {
  margin-bottom: 1rem;
}
.footer-text {
  font-size: var(--thr-font-size);
  color: var(--white);
}
.footer-text:hover {
  border-bottom: 1px solid var(--white);
}
.text-white {
  color: var(--white);
}

@media screen and (max-width: 768px) {
  .footer {
    background-color: var(--main-color);
    padding: 0 0;
  }
  .footer-inner {
    all: unset;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 2rem 0;
  }
  .menu-list {
    width: 90vw;
    margin-bottom: 1rem;
  }
  .first {
    cursor: pointer;
    color: var(--white);
    padding: 0 0 1rem 0;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--white);
  }
  .second {
    padding: 1rem 0 0 1rem;
  }
  .activity-list {
    width: 100%;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 0.2s ease-out;
    position: absolute;
    background-color: var(--main-color);
    padding-bottom: 1rem;
    z-index: 999;
  }
  .activity:hover .activity-list {
    transform: scale(1, 1);
  }
  .arrow-down {
    position: absolute;
    right: 5vw;
  }

  @media screen and (max-width: 480px) {
    /* 行動版的fix */
    .footer-bottom {
      background-color: var(--sec-color);
      padding: 0.5rem 0;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    .footer-bottom-inner {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    .footer-bottom-icon {
      font-size: 35px;
      color: var(--black);
    }
  }
}
</style>