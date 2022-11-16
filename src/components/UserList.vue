<template>
  <ul class="left">
    <li class="user-list">
      <el-link type="info" class="title">我的會員</el-link>
      <span><i class="el-icon-arrow-right"></i></span>
    </li>
    <li class="user-list">
      <el-link type="info" class="title">管理會員資訊</el-link>
      <span><i class="el-icon-arrow-right"></i></span>
    </li>
    <li class="user-list">
      <el-link type="info" class="title">歷史訂單</el-link>
      <span><i class="el-icon-arrow-right"></i></span>
    </li>
    <li class="user-list">
      <el-link type="info" class="title">心得回顧</el-link>
      <span><i class="el-icon-arrow-right"></i></span>
    </li>
  </ul>
</template>

<style scoped>
.user-list {
  line-height: 3rem;
  white-space: nowrap;
  min-width: 180px;
}
.title {
  font-size: var(--thr-font-size);
}
.el-icon-arrow-right {
  float: right;
  line-height: 3rem;
  padding-left: 1rem;
}
</style>