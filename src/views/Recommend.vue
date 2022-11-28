<template>
  <div class="sticky-footer">
    <div class="sticky-content">
      <Header />

      <div class="container">
        <h1 class="title">{{ category.name }}</h1>
        <hr class="title-line" />
        <div class="area">
          <SortsList :category="category" class="mobile" />
          <CategoriesList class="left" />
          <CategoriesMain :initialCategory="category" class="right" />
        </div>
      </div>
    </div>
    <Footer class="sticky-bottom"> </Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer";
import SortsList from "../components/SortsList";
import CategoriesList from "../components/CategoriesList";
import CategoriesMain from "../components/CategoriesMain";

const jsData = {
  name: "熱銷推薦",
  products: [
    {
      id: 14,
      parentId: 9,
      name: "超貼膚面膜(黑)",
      price: 300,
      discount: 0.9,
      imgURL: require("../assets/images/product/maintenance/mask-02.jpg"),
      shot_des: "完美服貼於臉部輪廓，均勻地為肌膚傳遞活性成分的生物纖維面膜。",
      directions:
        "1.極致服貼的高級面膜。2.幫助強化肌膚表層、改善肌膚、增加肌膚水分、加強肌膚彈性、提亮肌膚透明度。",
      use: "潔膚後，將面膜貼至臉部，靜置10~20分鐘後取下。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "超貼膚面膜(黑)",
        },
        {
          id: 2,
          title: "容量",
          content: "20g",
        },
        {
          id: 3,
          title: "製造地",
          content: "台灣",
        },
        {
          id: 4,
          title: "注意事項",
          content:
            "1.使用後皮膚若有異狀請立即停用。2.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。3.避免存放在極端溫度(太熱或太冷)或陽光直射的地方。",
        },
      ],
    },
    {
      id: 37,
      parentId: 21,
      name: "糖果色系指甲油",
      price: 250,
      discount: 0.9,
      imgURL: require("../assets/images/product/makeup/nail-polish-01.jpg"),
      shot_des: "呈現霧面糖果色系。",
      format: [
        {
          id: 1,
          name: "Q1",
        },
        {
          id: 2,
          name: "Q2",
        },
        {
          id: 3,
          name: "Q3",
        },
        {
          id: 4,
          name: "Q4",
        },
      ],
      directions: "1.長效護甲油基底更加持久。2.修護長久損傷指甲",
      use: "1.護甲基底油後使用，以刷毛沾取適量產品均勻塗抹於指甲上。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "糖果色系指甲油",
        },
        {
          id: 2,
          title: "容量",
          content: "7ml",
        },
        {
          id: 3,
          title: "製造地",
          content: "台灣",
        },
        {
          id: 4,
          title: "注意事項",
          content:
            "1.請勿與其他產品混合使用，產品屬外用，若誤食請送醫處理。2.使用後請密封。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
        },
      ],
    },
    {
      id: 40,
      parentId: 38,
      name: "精緻香水",
      price: 490,
      discount: 0.9,
      imgURL: require("../assets/images/product/fragrance/perfume-01.jpg"),
      shot_des: "多種香味讓你選擇，散發自然香氣。",
      format: [
        {
          id: 1,
          name: "檸檬柑橘",
        },
        {
          id: 2,
          name: "蜜桃蘋果",
        },
        {
          id: 3,
          name: "香草萊姆",
        },
        {
          id: 4,
          name: "茉莉花香",
        },
        {
          id: 5,
          name: "白麝香",
        },
        {
          id: 6,
          name: "小蒼蘭",
        },
      ],
      directions: "1.使用天然花草萃取液，香氣不刺鼻。",
      use: "1.噴至手腕內側或脖子，再均勻抹開。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "精緻香水",
        },
        {
          id: 2,
          title: "容量",
          content: "150ml",
        },
        {
          id: 3,
          title: "製造地",
          content: "台灣",
        },
        {
          id: 4,
          title: "注意事項",
          content:
            "1.使用後皮膚若有異狀請立即停用。2.使用後請密封。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
        },
      ],
    },
    {
      id: 41,
      parentId: 39,
      name: "室內擴香瓶",
      price: 490,
      discount: 0.9,
      imgURL: require("../assets/images/product/fragrance/fragrance0.1.jpg"),
      shot_des: "多種香味讓你選擇，讓空間散發自然香氣。",
      format: [
        {
          id: 1,
          name: "檸檬柑橘",
        },
        {
          id: 2,
          name: "蜜桃蘋果",
        },
        {
          id: 3,
          name: "香草萊姆",
        },
        {
          id: 4,
          name: "茉莉花香",
        },
        {
          id: 5,
          name: "白麝香",
        },
        {
          id: 6,
          name: "小蒼蘭",
        },
      ],
      directions: "1.使用天然花草萃取液，香氣不刺鼻。",
      use: "1.將擴香棒放進擴香瓶中，即能緩緩釋放香氣。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "室內擴香瓶",
        },
        {
          id: 2,
          title: "容量",
          content: "150ml",
        },
        {
          id: 3,
          title: "製造地",
          content: "台灣",
        },
        {
          id: 4,
          title: "注意事項",
          content:
            "1.請保持通風。2.請勿使用於其他用途。3.請存放於嬰幼兒無法碰觸之處。",
        },
      ],
    },
    {
      id: 49,
      parentId: 44,
      name: "潤髮乳",
      discount: 0.9,
      price: 390,
      imgURL: require("../assets/images/product/body/conditioner-01.jpg"),
      shot_des: "採用天然植物成分，保持頭髮光澤柔順。",
      directions: "1.多種植萃取成分，保持頭髮光澤柔順，遠離毛躁。",
      use: "1.沐浴時，於頭髮洗淨後，取適量在手心至髮尾搓揉。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "潤髮乳",
        },
        {
          id: 2,
          title: "容量",
          content: "1000ml",
        },
        {
          id: 3,
          title: "製造地",
          content: "台灣",
        },
        {
          id: 4,
          title: "注意事項",
          content:
            "1.使用後頭皮若有異狀請立即停用。2.請勿使用於其他用途。3.請存放於嬰幼兒無法碰觸之處。",
        },
      ],
    },
    {
      id: 50,
      parentId: 45,
      name: "潤膚乳",
      price: 390,
      discount: 0.9,
      imgURL: require("../assets/images/product/body/body-lotion-01.jpg"),
      shot_des: "採用天然植物成分，清爽細緻質地，保濕不黏膩。",
      directions: "1.多種植萃保濕成分，使皮膚返回青春。",
      use: "1.沐浴後，取適量在手心塗抹於身體。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "潤膚乳",
        },
        {
          id: 2,
          title: "容量",
          content: "1000ml",
        },
        {
          id: 3,
          title: "製造地",
          content: "台灣",
        },
        {
          id: 4,
          title: "注意事項",
          content:
            "1.使用後皮膚若有異狀請立即停用。2.請勿使用於其他用途。3.請存放於嬰幼兒無法碰觸之處。",
        },
      ],
    },
    {
      id: 59,
      parentId: 57,
      name: "抗痘洗面乳1",
      price: 350,
      discount: 0.8,
      imgURL: require("../assets/images/product/man/anti-acne-01.jpg"),
      shot_des: "添加抗痘成分，深層洗淨髒汙。",
      directions: "1.添加天然抗痘成分，將皮膚保濕鎖水，洗淨髒汙。",
      use: "1.取適量於手心搓至起泡，用於臉上",
      details: [
        {
          id: 1,
          title: "商品",
          content: "抗痘洗面乳1",
        },
        {
          id: 2,
          title: "容量",
          content: "150ml",
        },
        {
          id: 3,
          title: "製造地",
          content: "台灣",
        },
        {
          id: 4,
          title: "注意事項",
          content:
            "1.使用後皮膚若有異狀請立即停用。2.使用後請密封。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
        },
      ],
    },
    {
      id: 60,
      parentId: 57,
      name: "抗痘洗面乳2",
      price: 350,
      discount: 0.8,
      imgURL: require("../assets/images/product/man/anti-acne-02.jpg"),
      shot_des: "添加抗痘成分，深層洗淨髒汙。",
      directions: "1.添加天然抗痘成分，將皮膚保濕鎖水，洗淨髒汙。",
      use: "1.取適量於手心搓至起泡，用於臉上",
      details: [
        {
          id: 1,
          title: "商品",
          content: "抗痘洗面乳2",
        },
        {
          id: 2,
          title: "容量",
          content: "150ml",
        },
        {
          id: 3,
          title: "製造地",
          content: "台灣",
        },
        {
          id: 4,
          title: "注意事項",
          content:
            "1.使用後皮膚若有異狀請立即停用。2.使用後請密封。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
        },
      ],
    },
  ],
};

export default {
  name: "Recommend",
  components: {
    Header,
    Footer,
    SortsList,
    CategoriesList,
    CategoriesMain,
  },
  data() {
    return {
      category: jsData,
    };
  },
};
</script>

<style scoped>
.mobile {
  display: none;
}
.sticky-content {
  min-height: 100vh;
  padding-bottom: 250px;
}
.container {
  width: 80vw;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  top: 150px;
}
.title {
  font-size: var(--main-font-size);
  color: var(--black);
}
.title-line {
  width: 100%;
}
.area {
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
}
@media screen and (max-width: 480px) {
  .container {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 100px;
  }
  .mobile {
    all: unset;
  }
  .left {
    all: unset;
    display: none;
  }
  .right {
    width: 100%;
  }
  .area {
    all: unset;
  }
}
</style>