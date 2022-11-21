<template>
  <div class="sticky-footer">
    <div class="sticky-content">
      <Header />

      <div class="container">
        <h1 class="title">我的會員帳戶</h1>
        <hr class="title-line" />
        <Cart />
        <div class="area">
          <UserList class="left" />
          <div class="right">
            <!-- 管理訂單 -->
            <div class="right-area">
              <p class="right-title">管理訂單</p>
              <div class="order-state">
                <!-- 已結束 -->
                <div class="ending">
                  <div class="ending-state">
                    <p class="ending-text">取消</p>
                    <p class="ending-number">0</p>
                  </div>
                  <div class="ending-state">
                    <p class="ending-text">退貨</p>
                    <p class="ending-number">0</p>
                  </div>
                </div>

                <!-- 進行中 -->
                <div class="processing">
                  <div class="processing-state">
                    <p class="state-number">0</p>
                    <p class="state-text">接收訂單</p>
                  </div>
                </div>
                <div>
                  <i class="el-icon-arrow-right"></i>
                </div>
                <div class="processing">
                  <div class="processing-state">
                    <p class="state-number">0</p>
                    <p class="state-text">完成結帳</p>
                  </div>
                </div>
                <div>
                  <i class="el-icon-arrow-right"></i>
                </div>
                <div class="processing">
                  <div class="processing-state">
                    <p class="state-number">0</p>
                    <p class="state-text">準備出貨</p>
                  </div>
                </div>
                <div>
                  <i class="el-icon-arrow-right"></i>
                </div>
                <div class="processing">
                  <div class="processing-state">
                    <p class="state-number">0</p>
                    <p class="state-text">正在配送</p>
                  </div>
                </div>
                <div>
                  <i class="el-icon-arrow-right"></i>
                </div>
                <div class="processing">
                  <div class="processing-state">
                    <p class="state-number">0</p>
                    <p class="state-text">完成出貨</p>
                  </div>
                </div>
                <div>
                  <i class="el-icon-arrow-right"></i>
                </div>
                <div class="processing">
                  <div class="processing-state">
                    <p class="state-number">0</p>
                    <p class="state-text">確認收貨</p>
                  </div>
                </div>
              </div>
              <!-- 訂單細項 -->
              <div class="order-detail">
                <div class="detail-title"><p>訂購日期</p></div>
                <div class="detail-title"><p>訂購編號</p></div>
                <div class="detail-title"><p>商品</p></div>
                <div class="detail-title"><p>付款金額</p></div>
                <div class="detail-title"><p>訂單狀態</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="sticky-bottom"> </Footer>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer";
import UserList from "../components/UserList";
import Cart from "../components/Cart";

export default {
  name: "UserOldOrder",
  components: {
    Header,
    Footer,
    UserList,
    Cart,
  },
  data() {
    return {};
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

/* right */
.right {
  margin-left: 1rem;
  width: 100%;
}
.right-area {
  margin-bottom: 3rem;
  color: var(--black);
}
.right-title {
  font-size: var(--sec-font-size);
  font-weight: 700;
  color: var(--main-color);
  margin-bottom: 1rem;
}
/* 管理訂單 */
.order-state {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
/* 已結束 */
.ending-state {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-right: 1px solid var(--black);
  padding: 0 1rem;
}
.ending-number {
  border-bottom: 1px solid var(--black);
  padding: 0.3rem 0;
  margin-left: 1rem;
}
/* 進行中 */
.processing {
  padding: 1rem 1rem;
}
.processing-state {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.state-number {
  border-bottom: 1px solid var(--black);
  padding: 0.3rem 0;
  margin-bottom: 1rem;
}
.state-text {
  text-align: center;
}
/* 訂單細項 */
.order-detail {
  display: flex;
  flex-flow: row wrap;
  margin: 2rem 0;
  border-top: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
}
.detail-title {
  padding: 0.5rem 1rem;
  flex: 1;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .container {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 100px;
  }
  .area {
    display: flex;
    flex-direction: column;
  }
  .right {
    margin-top: 2rem;
    margin-left: 0;
  }
}
</style>
