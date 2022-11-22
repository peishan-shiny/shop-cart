<template>
  <div class="card">
    <div class="card-image">
      <a href=""><img :src="product.imgURL" alt="" class="image" /></a>
    </div>
    <div class="info">
      <p class="product-title">{{ product.name }}</p>
      <div v-if="product.discount" class="discount-descript">
        <p class="original-price">{{ "NT$" + product.price }}</p>
        <p class="discount-red">{{ product.discount * 10 + "折" }}</p>
      </div>
      <div v-else style="height: 32px"></div>
      <p class="price">
        {{
          "NT$" +
          (product.discount
            ? Math.ceil(product.price * product.discount)
            : product.price)
        }}
      </p>
      <el-button
        type="text"
        @click="centerDialogVisible = true"
        class="quick-view action"
        >快速瀏覽</el-button
      >
    </div>

    <!-- 快速瀏覽的model -->
    <el-dialog
      :visible.sync="centerDialogVisible"
      width="60%"
      append-to-body="true"
      center
    >
      <div class="modal-content">
        <img :src="product.imgURL" alt="" class="modal-img" />
        <div class="modal-text">
          <p class="title">{{ product.name }}</p>
          <p class="brief">
            超輕薄粉體配方，透過彈性網狀層均勻沾附在粉撲，使粉體無重力完美服貼肌膚。
          </p>
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
            <p class="format-value">{{ formatValue }}</p>
            <el-input-number
              v-model="num"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
          </div>
          <div class="unit-price">
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
          </div>
          <div class="btn-box">
            <button class="btn-add action" @click="centerDialogVisible = false">
              查看詳情
            </button>
            <button class="btn-add action" @click="centerDialogVisible = false">
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ProducdCart",
  props: {
    initialProduct: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      product: this.initialProduct,
      centerDialogVisible: false,
      formatValue: "", //綁定在el-select(規格)上的
      isSelect: false,
      num: 1,
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
  box-sizing: border-box;
  font-family: "微軟正黑體";
}
.card {
  padding-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.image {
  width: 100%;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 2rem;
  position: relative;
}
.original-price {
  text-decoration: line-through;
}
.discount-descript {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.discount-red {
  border-radius: 10px;
  background: rgb(215, 10, 10);
  color: var(--white);
  margin-left: 2rem;
  padding: 0 1rem;
  font-size: var(--thr-font-size);
}
.product-title {
  font-size: var(--sec-font-size);
  letter-spacing: 0.2rem;
  font-weight: 700;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  font-size: var(--sec-font-size);
}
.quick-view {
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 6.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

/* modal */
.modal-content {
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  line-height: 3rem;
}
.modal-img {
  height: 300px;
}
.modal-text {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
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
  align-items: center;
}
.format-value {
  margin-right: 1rem;
}
.unit-price {
  text-align: end;
}
.original-price {
  text-decoration: line-through;
}
.price {
  font-size: var(--sec-font-size);
}
.btn-box {
  display: flex;
  flex-direction: row;
  justify-content: end;
}
.btn-add {
  padding: 1rem 0;
  margin-left: 1rem;
  width: 100%;
}
@media screen and (max-width: 1024px) {
  /* modal */
  .modal-content {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    line-height: 3rem;
  }
  .modal-img {
    all: unset;
    width: 100%;
  }
  .modal-text {
    margin-left: 0rem;
  }
}
</style>