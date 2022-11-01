<template>
  <div>
    <HeaderUtil />
    <div class="container">
      <HeaderNav />

      <!-- <form>
        <el-tabs type="border-card">
          <el-tab-pane label="用户管理" lazy="true">

          </el-tab-pane>
          <el-tab-pane label="配置管理" lazy="true"></el-tab-pane>
        </el-tabs>
      </form> -->
    </div>
  </div>
</template>


<script>
import HeaderUtil from "../components/HeaderUtil.vue";
import HeaderNav from "../components/HeaderNav.vue";

export default {
  name: "SignIn",
  components: {
    HeaderUtil,
    HeaderNav,
  },
};
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 0 auto;
}

@media screen and (max-width: 480px) {
  .container {
    width: 90vw;
    margin: 0 auto;
  }
}
</style>