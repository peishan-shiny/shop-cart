<template>
  <div class="container">
    <h1 class="title">{{ category.name }}</h1>
    <hr class="title-line" />
    <div class="area">
      <SortsList :category="category" class="mobile" />
      <CategoriesList class="left" />
      <CategoriesMain :initialCategory="category" class="right" />
    </div>
  </div>
</template>

<script>
import SortsList from "../components/SortsList";
import CategoriesList from "../components/CategoriesList";
import CategoriesMain from "../components/CategoriesMain";

const jsData = {
  name: "新產品",
  products: [
    {
      id: 22,
      parentId: 15,
      name: "遮瑕膏",
      price: 390,
      imgURL: require("../assets/images/product/makeup/concealer-01.jpg"),
      shot_des: "遮瑕臉部局部斑點、黑眼圈，使臉部膚色更加均勻。",
      format: [
        {
          id: 1,
          name: "N1",
        },
        {
          id: 2,
          name: "N2",
        },
        {
          id: 3,
          name: "N3",
        },
        {
          id: 4,
          name: "S1",
        },
        {
          id: 5,
          name: "S2",
        },
      ],
      directions:
        "1.霧面、保濕、多功能遮瑕。2.有5種不同的遮瑕色號，可自行挑出接近膚色顯得更自然。",
      use: "基礎保養後，取適量輕點於臉部需要遮瑕的部位再輕輕塗抹均勻。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "遮瑕膏",
        },
        {
          id: 2,
          title: "容量",
          content: "30g",
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
            "1.使用後皮膚若有異狀請立即停用。2.使用後請密封瓶蓋。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
        },
      ],
    },
    {
      id: 23,
      parentId: 16,
      name: "持妝霧感粉底液",
      price: 790,
      imgURL: require("../assets/images/product/makeup/liquid-foundation-01.jpg"),
      shot_des: "24小時長效持妝，永不停歇的續航力。",
      format: [
        {
          id: 1,
          name: "N1",
        },
        {
          id: 2,
          name: "N2",
        },
        {
          id: 3,
          name: "N3",
        },
        {
          id: 4,
          name: "S1",
        },
        {
          id: 5,
          name: "S2",
        },
      ],
      directions:
        "1.24小時的完美持妝粉底液，呈現微霧底妝。2.有5種不同的遮瑕色號，可自行挑出接近膚色顯得更自然。",
      use: "基礎保養後，取適量產品塗抹於肌膚上，再輕輕塗抹均勻。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "持妝霧感粉底液",
        },
        {
          id: 2,
          title: "容量",
          content: "30g",
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
            "1.使用後皮膚若有異狀請立即停用。2.使用後請密封瓶蓋。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
        },
      ],
    },
    {
      id: 24,
      parentId: 16,
      name: "保濕粉底液",
      price: 790,
      imgURL: require("../assets/images/product/makeup/liquid-foundation-02.jpg"),
      shot_des: "24小時長效保濕，不裂不花的底妝。",
      format: [
        {
          id: 1,
          name: "N1",
        },
        {
          id: 2,
          name: "N2",
        },
        {
          id: 3,
          name: "N3",
        },
        {
          id: 4,
          name: "S1",
        },
        {
          id: 5,
          name: "S2",
        },
      ],
      directions:
        "1.24小時的完美持妝粉底液。2.有5種不同的遮瑕色號，可自行挑出接近膚色顯得更自然。",
      use: "基礎保養後，取適量產品塗抹於肌膚上，再輕輕塗抹均勻。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "保濕粉底液",
        },
        {
          id: 2,
          title: "容量",
          content: "30g",
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
            "1.使用後皮膚若有異狀請立即停用。2.使用後請密封瓶蓋。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
        },
      ],
    },
    {
      id: 25,
      parentId: 17,
      name: "電眼睫毛膏",
      price: 490,
      imgURL: require("../assets/images/product/makeup/mascara-01.jpg"),
      shot_des: "極細的刷毛，帶給睫毛根根分明效果的防暈染睫毛膏。",
      directions:
        "1.防油防水維持一整天不暈染。2.全新設計的極細刷頭讓睫毛膏不再結塊。",
      use: "1.使用睫毛刷沾取適量從睫毛根部以Z字型向上刷。3.再刷下睫毛以完成眼妝。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "電眼睫毛膏",
        },
        {
          id: 2,
          title: "容量",
          content: "5g",
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
            "1.使用後皮膚若有異狀請立即停用。2.使用後請密封瓶蓋。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
        },
      ],
    },
    {
      id: 26,
      parentId: 17,
      name: "無辜眼神睫毛膏",
      price: 490,
      imgURL: require("../assets/images/product/makeup/mascara-02.jpg"),
      shot_des: "韓妞最愛用，打造無辜眼神必備神器。",
      directions:
        "1.防油防水維持一整天不暈染。2.全新設計的極細刷頭讓睫毛膏不再結塊。",
      use: "1.使用睫毛刷沾取適量從睫毛根部以Z字型向上刷。3.再刷下睫毛以完成眼妝。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "無辜眼神睫毛膏",
        },
        {
          id: 2,
          title: "容量",
          content: "5g",
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
            "1.使用後皮膚若有異狀請立即停用。2.使用後請密封瓶蓋。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
        },
      ],
    },
    {
      id: 27,
      parentId: 18,
      name: "15色眼影盤",
      price: 990,
      imgURL: require("../assets/images/product/makeup/eye-shadow-01.jpg"),
      shot_des: "15色眼影盤，打亮可共用，臉型立體效果加分盤。",
      directions: "1.防油防水維持一整天不暈染。2.15色一次滿足你的cosplay。",
      use: "1.以眼影棒或眼影刷沾取適量塗抹於眼皮上。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "15色眼影盤",
        },
        {
          id: 2,
          title: "容量",
          content: "3g/格",
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
      id: 28,
      parentId: 18,
      name: "16色眼影盤",
      price: 990,
      imgURL: require("../assets/images/product/makeup/eye-shadow-02.jpg"),
      shot_des: "16色眼影盤，打亮可共用，臉型立體效果加分盤。",
      directions: "1.防油防水維持一整天不暈染。2.16色一次滿足你的cosplay。",
      use: "1.以眼影棒或眼影刷沾取適量塗抹於眼皮上。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "16色眼影盤",
        },
        {
          id: 2,
          title: "容量",
          content: "3g/格",
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
      id: 29,
      parentId: 18,
      name: "4色眼影盤",
      price: 490,
      imgURL: require("../assets/images/product/makeup/eye-shadow-03.jpg"),
      shot_des: "大地色實用耐看，好搭配。",
      directions: "1.防油防水維持一整天不暈染。",
      use: "1.以眼影棒或眼影刷沾取適量塗抹於眼皮上。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "4色眼影盤",
        },
        {
          id: 2,
          title: "容量",
          content: "3g/格",
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
      id: 30,
      parentId: 19,
      name: "粉色系腮紅盤",
      price: 390,
      imgURL: require("../assets/images/product/makeup/Blush-01.jpg"),
      shot_des: "粉色系腮紅使你更加動人可愛。",
      format: [
        {
          id: 1,
          name: "R1",
        },
        {
          id: 2,
          name: "R2",
        },
        {
          id: 3,
          name: "O1",
        },
        {
          id: 4,
          name: "O2",
        },
      ],
      directions:
        "1.鮮明的顯色度以及細緻的粉質，均勻服貼於臉部肌膚，持久不脫妝。",
      use: "1.用腮紅刷沾取適量輕刷於臉部肌膚。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "粉色系腮紅盤",
        },
        {
          id: 2,
          title: "容量",
          content: "4g",
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
      id: 31,
      parentId: 19,
      name: "冷色系腮紅盤",
      price: 390,
      imgURL: require("../assets/images/product/makeup/Blush-02.jpg"),
      shot_des: "冷色系腮紅讓你成為城市的女強人。",
      format: [
        {
          id: 1,
          name: "R1",
        },
        {
          id: 2,
          name: "R2",
        },
        {
          id: 3,
          name: "O1",
        },
        {
          id: 4,
          name: "O2",
        },
      ],
      directions:
        "1.鮮明的顯色度以及細緻的粉質，均勻服貼於臉部肌膚，持久不脫妝。",
      use: "1.用腮紅刷沾取適量輕刷於臉部肌膚。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "冷色系腮紅盤",
        },
        {
          id: 2,
          title: "容量",
          content: "4g",
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
      id: 32,
      parentId: 20,
      name: "水嫩唇膏",
      price: 490,
      imgURL: require("../assets/images/product/makeup/lipstick-01.jpg"),
      shot_des: "呈現水潤光澤的唇膏。",
      format: [
        {
          id: 1,
          name: "R3",
        },
        {
          id: 2,
          name: "R4",
        },
        {
          id: 3,
          name: "R5",
        },
        {
          id: 4,
          name: "P1",
        },
        {
          id: 5,
          name: "P2",
        },
        {
          id: 6,
          name: "P3",
        },
      ],
      directions: "1.保濕且帶有光澤感。",
      use: "1.取適量均勻塗抹於唇部。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "水嫩唇膏",
        },
        {
          id: 2,
          title: "容量",
          content: "4g",
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
      id: 33,
      parentId: 20,
      name: "水嫩唇膏2",
      price: 490,
      imgURL: require("../assets/images/product/makeup/lipstick-02.jpg"),
      shot_des: "呈現水潤光澤的唇膏。",
      format: [
        {
          id: 1,
          name: "R3",
        },
        {
          id: 2,
          name: "R4",
        },
        {
          id: 3,
          name: "R5",
        },
      ],
      directions: "1.保濕且帶有光澤感。",
      use: "1.取適量均勻塗抹於唇部。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "水嫩唇膏2",
        },
        {
          id: 2,
          title: "容量",
          content: "4g",
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
      id: 34,
      parentId: 20,
      name: "水嫩唇膏3",
      price: 490,
      imgURL: require("../assets/images/product/makeup/lipstick-03.jpg"),
      shot_des: "呈現水潤光澤的唇膏。",
      format: [
        {
          id: 1,
          name: "P1",
        },
        {
          id: 2,
          name: "P2",
        },
        {
          id: 3,
          name: "P3",
        },
      ],
      directions: "1.保濕且帶有光澤感。",
      use: "1.取適量均勻塗抹於唇部。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "水嫩唇膏3",
        },
        {
          id: 2,
          title: "容量",
          content: "4g",
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
      id: 35,
      parentId: 20,
      name: "水嫩唇膏4",
      price: 490,
      imgURL: require("../assets/images/product/makeup/lipstick-04.jpg"),
      shot_des: "呈現水潤光澤的唇膏。",
      format: [
        {
          id: 1,
          name: "R3",
        },
        {
          id: 2,
          name: "R4",
        },
        {
          id: 3,
          name: "R5",
        },
        {
          id: 4,
          name: "P1",
        },
        {
          id: 5,
          name: "P2",
        },
        {
          id: 6,
          name: "P3",
        },
      ],
      directions: "1.保濕且帶有光澤感。",
      use: "1.取適量均勻塗抹於唇部。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "水嫩唇膏4",
        },
        {
          id: 2,
          title: "容量",
          content: "4g",
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
      id: 36,
      parentId: 20,
      name: "水嫩唇膏5",
      price: 490,
      imgURL: require("../assets/images/product/makeup/lipstick-05.jpg"),
      shot_des: "呈現水潤光澤的唇膏。",
      format: [
        {
          id: 1,
          name: "R3",
        },
        {
          id: 2,
          name: "R4",
        },
        {
          id: 3,
          name: "R5",
        },
        {
          id: 4,
          name: "P1",
        },
        {
          id: 5,
          name: "P2",
        },
        {
          id: 6,
          name: "P3",
        },
      ],
      directions: "1.保濕且帶有光澤感。",
      use: "1.取適量均勻塗抹於唇部。",
      details: [
        {
          id: 1,
          title: "商品",
          content: "水嫩唇膏5",
        },
        {
          id: 2,
          title: "容量",
          content: "4g",
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
  name: "NewProduct",
  components: {
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