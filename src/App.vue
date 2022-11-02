<template>
  <div id="shop-cart">
    <router-view />
  </div>
</template>

<script>
export default {
  // methods: {
  //   // 新增判斷方法
  //   isMobile() {
  //     let flag = navigator.userAgent.match(
  //       /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  //     );
  //     return flag;
  //   },
  // },
  // mounted() {
  //   if (this.isMobile) {
  //     alert("移動端");
  //     this.$router.replace("/pc_index");
  //   } else {
  //     alert("pc端");
  //     this.$router.replace("/m_index");
  //   }
  // },
};
</script>
