<template>
  <div class="header-util">
    <!-- 手機版的橫幅fixed -->
    <div class="phone">
      <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
      <label for="navbar-toggle" class="navbar-toggle-label">
        <i class="el-icon-menu menu"></i>
      </label>
      <img src="https://i.imgur.com/KoJtvfu.png" class="logo" alt="" />
      <el-link icon="el-icon-search" class="search"></el-link>
    </div>
    <!-- 網頁版的橫幅fixed -->
    <el-row type="flex" class="row-bg" justify="end">
      <el-link type="info" class="header-util-item">登入會員</el-link>
      <el-link type="info" class="header-util-item">我的會員</el-link>
      <el-link type="info" class="header-util-item">購物車</el-link>
      <el-link type="info" class="header-util-item">聯絡我們</el-link>
      <el-link icon="el-icon-search" class="header-util-item"></el-link>
    </el-row>
  </div>
</template>

<style scoped>
.phone {
  display: none;
}

.header-util {
  width: 100vw;
  position: fixed;
  background-color: #f3f1f1;
  height: 40px;
}
.row-bg {
  width: 80vw;
  margin: 0 auto;
  line-height: 40px;
}
.header-util-item {
  margin-left: 1rem;
}

@media screen and (max-width: 480px) {
  .header-util {
    background-color: #f3f1f1;
    height: 50px;
  }
  .row-bg {
    display: none;
  }
  .phone {
    width: 90vw;
    margin: 0 auto;
    line-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .navbar-toggle {
    visibility: hidden;
    position: absolute;
  }
  .logo {
    height: 40px;
  }
  .menu,
  .search {
    font-size: 35px;
    vertical-align: middle;
  }
}
</style>