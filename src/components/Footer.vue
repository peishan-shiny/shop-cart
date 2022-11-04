<template>
  <footer class="footer">
    <div class="footer-inner">
      <!-- PC版 -->
      <div class="footer-left">
        <h1 class="follow-title">Follow us</h1>
        <div class="follow-icon">
          <a href="">
            <img
              src="https://i.imgur.com/ON0EtSl.png"
              alt=""
              class="icon fb-icon"
            />
          </a>
          <a href="">
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
            <p><a href="" class="info-text">服務條款及隱私政策</a></p>
            <hr />
            <p class="info-text">© 2022 POPO SHOP</p>
          </div>
        </div>
      </div>

      <div class="footer-right" v-if="!isDevice">
        <div class="footer-menu">
          <h1 class="footer-title">產品資訊</h1>
          <div class="footer-item">
            <a href="" class="footer-text">保養系列</a>
          </div>
          <div class="footer-item">
            <a href="" class="footer-text">彩妝系列</a>
          </div>
          <div class="footer-item">
            <a href="" class="footer-text">香氛系列</a>
          </div>
          <div class="footer-item">
            <a href="" class="footer-text">身體髮品</a>
          </div>
          <div class="footer-item">
            <a href="" class="footer-text">美妝工具</a>
          </div>
        </div>
        <div class="footer-menu">
          <h1 class="footer-title">優惠活動</h1>
          <div class="footer-item">
            <a href="" class="footer-text">現正優惠</a>
          </div>
          <div class="footer-item">
            <a href="" class="footer-text">熱銷推薦</a>
          </div>
          <div class="footer-item">
            <a href="" class="footer-text">優惠活動</a>
          </div>
          <div class="footer-item">
            <a href="" class="footer-text">精選文章</a>
          </div>
          <div class="footer-item">
            <a href="" class="footer-text">新產品</a>
          </div>
        </div>
        <div class="footer-menu">
          <h1 class="footer-title">關於我們</h1>
          <div class="footer-item">
            <a href="" class="footer-text">會員權益</a>
          </div>
          <div class="footer-item">
            <a href="" class="footer-text">品牌故事</a>
          </div>
          <div class="footer-item">
            <a href="" class="footer-text">門市資訊</a>
          </div>
          <div class="footer-item">
            <a href="" class="footer-text">人才招募</a>
          </div>
          <div class="footer-item">
            <a href="" class="footer-text">聯絡我們</a>
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
              class="second"
              v-for="category in categories"
              :key="category.id"
            >
              <a href="">{{ category.name }}</a>
            </li>
          </ul>
        </li>
        <!-- 優惠活動 -->
        <li class="first activity">
          優惠活動<span> <i class="el-icon-arrow-down arrow-down"></i></span>
          <ul class="activity-list">
            <li class="second">
              <a href="">現正優惠</a>
            </li>
            <li class="second">
              <a href="">熱銷推薦</a>
            </li>
            <li class="second">
              <a href="">優惠活動</a>
            </li>
            <li class="second">
              <a href="">精選文章</a>
            </li>
            <li class="second">
              <a href="">新產品</a>
            </li>
          </ul>
        </li>
        <li class="first">
          <a href="">品牌故事</a>
        </li>
        <li class="first">
          <a href="">人才招募</a>
        </li>
        <li class="first">
          <a href="">聯絡我們</a>
        </li>
      </ul>
    </div>

    <div class="footer-bottom" v-if="isDevice">
      <div class="footer-bottom-inner">
        <i class="footer-bottom-icon el-icon-location"></i>
        <i class="footer-bottom-icon el-icon-s-home"></i>
        <i class="footer-bottom-icon el-icon-user-solid"></i>
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
  name: "Footer",
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
  },
  methods: {
    // 新增判斷方法
    isMobile() {
      const result = window.matchMedia("(max-width: 480px)").matches;
      console.log(result);
      this.isDevice = result;
    },
    fetchData() {
      this.categories = [...dummyData.categories];
    },
  },
};
</script>

<style>
a {
  color: var(--white);
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

@media screen and (max-width: 480px) {
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
  .footer-bottom {
    background-color: var(--sec-color);
    padding: 0.5rem 0;
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
  .arrow-down {
    position: absolute;
    right: 5vw;
  }
}
</style>