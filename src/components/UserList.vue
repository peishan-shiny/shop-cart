<template>
  <ul class="left">
    <li class="user-list">
      <router-link to="/user" class="title"
        >我的會員
        <span><i class="el-icon-arrow-right"></i></span>
      </router-link>
    </li>
    <li class="user-list">
      <router-link to="/user/manage" class="title"
        >管理會員資訊
        <span><i class="el-icon-arrow-right"></i></span>
      </router-link>
    </li>
    <li class="user-list">
      <router-link to="/user/old/order" class="title"
        >管理訂單
        <span><i class="el-icon-arrow-right"></i></span>
      </router-link>
    </li>
    <li class="user-list">
      <router-link to="/user/impression" class="title"
        >心得回顧
        <span><i class="el-icon-arrow-right"></i></span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {};
  },
};
</script>

<style scoped>
.user-list {
  line-height: 3rem;
  min-width: 180px;
  white-space: nowrap;
}
.title {
  font-size: var(--thr-font-size);
  color: var(--black);
}
.title:hover {
  color: var(--black-hover);
  border-bottom: 1px solid var(--black-hover);
}
.el-icon-arrow-right {
  float: right;
  line-height: 3rem;
  padding-left: 1rem;
}
</style>