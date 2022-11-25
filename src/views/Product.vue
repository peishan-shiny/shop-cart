<template>
  <div class="sticky-footer">
    <div class="sticky-content">
      <Header />

      <div class="container">
        <ProductDetail :initialProduct="product" />
        <ProductDetailTwo :initialProduct="product" />
      </div>
    </div>
    <Footer class="sticky-bottom"> </Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
import ProductDetailTwo from "../components/ProductDetailTwo";

const jsData = {
  categories: [
    {
      id: 1,
      name: "保養系列",
      parentId: 0,
    },
    {
      id: 7,
      parentId: 1,
      name: "乳液",
      products: [
        {
          id: 10,
          parentId: 7,
          name: "茶樹保濕乳液",
          price: 600,
          discount: 0.8,
          imgURL: require("../assets/images/product/maintenance/lotion-01.jpg"),
          shot_des: "含有綠茶的萃取與綠茶籽油，強效保濕乳。",
          directions: "1.溫和不刺膚的保濕乳液。2.每天使用維持細緻水嫩。",
          use: "取適量由內至外輕柔塗抹於臉、頸部。",
          details: [
            {
              id: 1,
              title: "商品",
              content: "茶樹保濕乳液",
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
                "1.使用後皮膚若有異狀請立即停用。2.使用後請密封瓶蓋。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
            },
          ],
        },
        {
          id: 11,
          parentId: 7,
          name: "平衡調理乳液",
          price: 600,
          discount: 0.8,
          imgURL: require("../assets/images/product/maintenance/lotion-02.jpg"),
          shot_des: "有助於重新平衡肌膚酸鹼度及油水平衡，使肌膚回到健康狀態。",
          directions: "1.溫和不刺膚的調理乳液。2.幫助肌膚回到油水平衡的狀態。",
          use: "取適量由內至外輕柔塗抹於臉、頸部。",
          details: [
            {
              id: 1,
              title: "商品",
              content: "平衡調理乳液",
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
                "1.使用後皮膚若有異狀請立即停用。2.使用後請密封瓶蓋。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      parentId: 1,
      name: "精華液",
      products: [
        {
          id: 12,
          parentId: 8,
          name: "保濕精華液",
          price: 800,
          discount: 0.9,
          imgURL: require("../assets/images/product/maintenance/essence-01.jpg"),
          shot_des: "含豐富的保濕精華，持續性給予肌膚滋潤再生修護。",
          directions:
            "1.溫和不刺膚的精華液。2.10大配方，保濕不黏膩，給予肌膚滿滿的營養，喚醒肌膚活力。",
          use: "取適量由內至外輕柔塗抹於臉、頸部。",
          details: [
            {
              id: 1,
              title: "商品",
              content: "保濕精華液",
            },
            {
              id: 2,
              title: "容量",
              content: "90ml",
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
      ],
    },
    {
      id: 9,
      parentId: 1,
      name: "面膜",
      products: [
        {
          id: 13,
          parentId: 9,
          name: "超貼膚面膜(白)",
          price: 300,
          discount: 0.9,
          imgURL: require("../assets/images/product/maintenance/mask-01.jpg"),
          shot_des:
            "完美服貼於臉部輪廓，均勻地為肌膚傳遞活性成分的生物纖維面膜。",
          directions:
            "1.極致服貼的高級面膜。2.幫助強化肌膚表層、改善肌膚、增加肌膚水分、加強肌膚彈性、提亮肌膚透明度。",
          use: "潔膚後，將面膜貼至臉部，靜置10~20分鐘後取下。",
          details: [
            {
              id: 1,
              title: "商品",
              content: "超貼膚面膜(白)",
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
          id: 14,
          parentId: 9,
          name: "超貼膚面膜(黑)",
          price: 300,
          discount: 0.9,
          imgURL: require("../assets/images/product/maintenance/mask-02.jpg"),
          shot_des:
            "完美服貼於臉部輪廓，均勻地為肌膚傳遞活性成分的生物纖維面膜。",
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
      ],
    },
    {
      id: 2,
      name: "彩妝系列",
      parentId: -1,
    },
    {
      id: 15,
      parentId: 2,
      name: "遮瑕膏",
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
      ],
    },
    {
      id: 16,
      parentId: 2,
      name: "粉底液",
      products: [
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
      ],
    },
    {
      id: 17,
      parentId: 2,
      name: "睫毛膏",
      products: [
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
      ],
    },
    {
      id: 18,
      parentId: 2,
      name: "眼影",
      products: [
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
      ],
    },
    {
      id: 19,
      parentId: 2,
      name: "腮紅",
      products: [
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
      ],
    },
    {
      id: 20,
      parentId: 2,
      name: "口紅",
      products: [
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
    },
    {
      id: 21,
      parentId: 2,
      name: "指甲油",
      products: [
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
      ],
    },
    {
      id: 3,
      name: "香氛系列",
      parentId: -2,
    },

    {
      id: 38,
      parentId: 3,
      name: "精緻香水",
      products: [
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
      ],
    },
    {
      id: 39,
      parentId: 3,
      name: "擴香瓶",
      products: [
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
      ],
    },

    {
      id: 4,
      name: "身體髮品",
      parentId: -3,
    },

    {
      id: 42,
      parentId: 4,
      name: "沐浴乳",
      products: [
        {
          id: 46,
          parentId: 42,
          name: "沐浴乳",
          price: 390,
          imgURL: require("../assets/images/product/body/Body-Wash-01.jpg"),
          shot_des: "採用天然植物成分，清爽細緻質地，保濕不黏膩。",
          directions: "1.多種植萃保濕成分。",
          use: "1.沐浴時，取適量在手心搓泡後用於身體。",
          details: [
            {
              id: 1,
              title: "商品",
              content: "沐浴乳",
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
      ],
    },
    {
      id: 43,
      parentId: 4,
      name: "洗髮精",
      products: [
        {
          id: 47,
          parentId: 43,
          name: "薄荷精油洗髮精",
          price: 390,
          imgURL: require("../assets/images/product/body/Shampoo-01.jpg"),
          shot_des: "採用天然植物成分，添加薄荷精油，洗淨後涼爽。",
          directions: "1.多種植萃取成分，洗淨後涼爽。2.保持頭髮光澤柔順。",
          use: "1.沐浴時，取適量在手心至頭皮搓泡。",
          details: [
            {
              id: 1,
              title: "商品",
              content: "薄荷精油洗髮精",
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
          id: 48,
          parentId: 43,
          name: "玫瑰精油洗髮精",
          price: 390,
          imgURL: require("../assets/images/product/body/Shampoo-02.jpg"),
          shot_des: "採用天然植物成分，添加玫瑰精油，適合染燙後髮質使用。",
          directions:
            "1.多種植萃取成分，適合染燙後髮質使用。2.延長染燙後持久性。",
          use: "1.沐浴時，取適量在手心至頭皮搓泡。",
          details: [
            {
              id: 1,
              title: "商品",
              content: "玫瑰精油洗髮精",
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
      ],
    },
    {
      id: 44,
      parentId: 4,
      name: "潤髮乳",
      products: [
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
      ],
    },
    {
      id: 45,
      parentId: 4,
      name: "潤膚乳",
      products: [
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
      ],
    },
    {
      id: 5,
      name: "美妝工具",
      parentId: -4,
    },

    {
      id: 51,
      parentId: 5,
      name: "睫毛夾",
      products: [
        {
          id: 53,
          parentId: 51,
          name: "睫毛夾",
          price: 120,
          imgURL: require("../assets/images/product/tool/eyelash-01.jpg"),
          shot_des: "睫毛彎彎，使眼睛有神。",
          directions: "1.夾翹睫毛神器。",
          use: "1.上完眼妝後，將夾子對準睫毛根部，慢慢夾緊。",
          details: [
            {
              id: 1,
              title: "商品",
              content: "睫毛夾",
            },
            {
              id: 2,
              title: "容量",
              content: "1支",
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
                "1.請小心使用，勿使用於其他用途。3.請存放於嬰幼兒無法碰觸之處。",
            },
          ],
        },
      ],
    },
    {
      id: 52,
      parentId: 5,
      name: "各式刷具",
      products: [
        {
          id: 54,
          parentId: 52,
          name: "各式刷具1",
          price: 190,
          imgURL: require("../assets/images/product/tool/Brush-01.jpg"),
          shot_des: "柔順的毛刷，上妝更輕鬆",
          directions: "1.毛刷為精挑過的動物毛，使用起來柔順不刺癢。",
          use: "1.毛刷沾取適量的粉，至臉上輕刷。",
          details: [
            {
              id: 1,
              title: "商品",
              content: "各式刷具",
            },
            {
              id: 2,
              title: "容量",
              content: "1組",
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
                "1.請小心使用，勿使用於其他用途。3.請存放於嬰幼兒無法碰觸之處。",
            },
          ],
        },
        {
          id: 55,
          parentId: 52,
          name: "各式刷具2",
          price: 190,
          imgURL: require("../assets/images/product/tool/Brush-02.jpg"),
          shot_des: "柔順的毛刷，上妝更輕鬆",
          directions: "1.毛刷為精挑過的動物毛，使用起來柔順不刺癢。",
          use: "1.毛刷沾取適量的粉，至臉上輕刷。",
          details: [
            {
              id: 1,
              title: "商品",
              content: "各式刷具2",
            },
            {
              id: 2,
              title: "容量",
              content: "1組",
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
                "1.請小心使用，勿使用於其他用途。3.請存放於嬰幼兒無法碰觸之處。",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "男士保養",
      parentId: -5,
    },
    {
      id: 56,
      parentId: 6,
      name: "控油洗面乳",
      products: [
        {
          id: 58,
          parentId: 56,
          name: "控油洗面乳",
          price: 290,
          imgURL: require("../assets/images/product/man/oil-control-01.jpg"),
          shot_des: "添加控油成分，將皮膚保濕鎖水。",
          directions: "1.添加天然控油成分，將皮膚保濕鎖水，洗淨髒汙。",
          use: "1.取適量於手心搓至起泡，用於臉上",
          details: [
            {
              id: 1,
              title: "商品",
              content: "控油洗面乳",
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
    },
    {
      id: 57,
      parentId: 6,
      name: "抗痘洗面乳",
      products: [
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
    },
  ],
};

// const dummyData = {
//   id: 1,
//   name: "超服貼輕透粉底",
//   price: 1080,
//   discount: 0.5,
//   imgURL: require("../assets/images/product-01.jpg"),
//   shot_des:
//     "超輕薄粉體配方，透過彈性網狀層均勻沾附在粉撲，使粉體無重力完美服貼肌膚。",
//   format: [
//     {
//       id: 1,
//       name: "N1",
//     },
//     {
//       id: 2,
//       name: "N2",
//     },
//     {
//       id: 3,
//       name: "N3",
//     },
//     {
//       id: 4,
//       name: "S1",
//     },
//     {
//       id: 5,
//       name: "S2",
//     },
//   ],
//   directions: "1.均勻不結塊的半霧面妝容。2.高水分配方帶來的涼感。",
//   use: "1.基礎保養後使用。2.使用內附智慧型粉撲沾取適量輕拍於臉部, 以輕壓方式由臉部中央向外均勻塗抹。",
//   details: [
//     {
//       id: 1,
//       title: "商品",
//       content: "超服貼輕透粉底",
//     },
//     {
//       id: 2,
//       title: "容量",
//       content: "15g",
//     },
//     {
//       id: 3,
//       title: "製造地",
//       content: "台灣",
//     },
//     {
//       id: 4,
//       title: "注意事項",
//       content:
//         "1.使用後皮膚若有異狀請立即停用。2.使用後請密封瓶蓋。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。",
//     },
//   ],
// };

export default {
  name: "Product",
  components: {
    Header,
    Footer,
    ProductDetail,
    ProductDetailTwo,
  },
  data() {
    return {
      categories: jsData.categories,
      product: {},
    };
  },
  created() {
    const { parentId = "", id = "" } = this.$route.query;
    this.fetchData(parentId, id);
    // console.log("product", parentId, id);
  },

  methods: {
    fetchData(parentId, id) {
      // console.log(parseInt(parentId), parseInt(id));
      const category = this.categories.filter(
        (item) => item.id === parseInt(parentId)
      );
      // console.log(category);
      const productData = category[0].products.filter(
        (item) => item.id === parseInt(id)
      );
      // console.log(productData);
      this.product = productData[0];
    },
  },
};
</script>

<style scoped>
.sticky-content {
  min-height: 100vh;
  padding-bottom: 250px;
}
.container {
  width: 80vw;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  top: 50px;
}
@media screen and (max-width: 480px) {
  .container {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 30px;
  }
}
</style>