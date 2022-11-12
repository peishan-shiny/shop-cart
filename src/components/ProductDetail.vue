<template>
  <div class="container">
    <div class="image-area">
      <slick :options="sliderFor" class="slider-for">
        <div>
          <img class="image" :src="product.imgURL" alt="" />
        </div>
        <div>
          <img class="image" src="https://i.imgur.com/KZXJKrm.jpg" alt="" />
        </div>
        <div>
          <img class="image" src="https://i.imgur.com/KZXJKrm.jpg" alt="" />
        </div>
        <div>
          <img class="image" src="https://i.imgur.com/Spox5DV.jpg" alt="" />
        </div>
        <div>
          <img class="image" src="https://i.imgur.com/Spox5DV.jpg" alt="" />
        </div>
      </slick>
      <slick :options="sliderNav" class="slider-nav">
        <div>
          <img class="image" :src="product.imgURL" alt="" />
        </div>
        <div>
          <img class="image" src="https://i.imgur.com/KZXJKrm.jpg" alt="" />
        </div>
        <div>
          <img class="image" src="https://i.imgur.com/KZXJKrm.jpg" alt="" />
        </div>
        <div>
          <img class="image" src="https://i.imgur.com/Spox5DV.jpg" alt="" />
        </div>
        <div>
          <img class="image" src="https://i.imgur.com/Spox5DV.jpg" alt="" />
        </div>
      </slick>
    </div>
    <div class="text-area">
      <p class="title">{{ product.name }}</p>
      <p class="brief">{{ product.shot_des }}</p>
      <el-select
        v-model="formatValue"
        @change="selectChanged"
        placeholder="規格"
        class="el-select"
      >
        <el-option
          v-for="item in product.format"
          :key="item.id"
          :label="item.name"
          :value="item.name"
        >
        </el-option>
      </el-select>
      <!-- 選完規格的商品才會出現 -->
      <div v-if="isSelect" class="count">
        <p>{{ formatValue }}</p>
        <el-input-number
          v-model="num"
          :min="1"
          :max="10"
          label="描述文字"
        ></el-input-number>
        <span class="unit-price">
          <p class="original-price" v-if="product.discount">
            {{ "$NT" + product.price }}
          </p>
          <p class="price">
            {{
              product.discount
                ? "$NT" + product.price * product.discount
                : "$NT" + product.price
            }}
          </p>
        </span>
      </div>
      <button class="btn-add action">加入購物車</button>
      <!-- 產品說明 & 使用方法 -->
      <el-collapse v-model="activeNames">
        <el-collapse-item title="產品說明" name="1">
          <div class="descript-content">{{ product.directions }}</div>
        </el-collapse-item>
        <el-collapse-item title="使用方法" name="2">
          <div class="descript-content">{{ product.use }}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";

export default {
  name: "ProductDetail",
  components: {
    Slick,
  },
  props: {
    initialProduct: {
      type: Object,
      default: () => ({
        id: -1,
        name: "",
        price: 0,
        discount: 0,
        imgURL: "",
        shot_des: "。",
        format: [],
        directions: "",
        use: "",
        details: [],
      }),
    },
  },
  data() {
    return {
      product: { ...this.initialProduct },
      sliderFor: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav", //將滑塊設置為其他滑塊的導航（類或ID名稱）,適用於多個輪播圖共用一個導航
      },
      sliderNav: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: true,
        arrows: false,
        focusOnSelect: true, // 預設 false
      },
      formatValue: "", //綁定在el-select(規格)上的
      isSelect: false,
      num: 1,
      activeNames: ["1"], //綁定在el-collapse上的
    };
  },
  methods: {
    selectChanged(value) {
      this.isSelect = true;
      console.log(value);
    },
  },
};
</script>

<style scoped>
* {
  font-family: "微軟正黑體";
}
.container {
  display: flex;
  flex-direction: row;
}
.image-area {
  width: 40%;
}
.image {
  width: 100%;
}
.text-area {
  padding: 0 1rem;
  width: 60%;
  line-height: 3rem;
}
.title {
  font-size: var(--main-font-size);
  font-weight: 700;
  letter-spacing: 0.2rem;
}
.brief {
  font-size: var(--thr-font-size);
}
.el-select {
  margin: 1.5rem 0;
}
.count {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.original-price {
  text-decoration: line-through;
}
.price {
  font-size: var(--sec-font-size);
}
.btn-add {
  padding: 1rem 0;
  margin-bottom: 1.5rem;
  width: 100%;
}
.descript-content {
  font-size: var(--thr-font-size);
}

@media screen and (max-width: 480px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .image-area {
    all: unset;
  }
  .text-area {
    width: unset;
    line-height: 2rem;
  }
  .title {
    margin: 1rem 0;
  }
}
</style>

<style>
.el-collapse-item__header {
  font-size: var(--thr-font-size);
}
</style>