<template>
  <div class="mobile">
    <div class="sorts-wrap">
      <div class="sorts">
        <el-link
          v-for="item in sorts"
          :key="item.id"
          type="info"
          class="sort-item"
          >{{ item.name }}</el-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortsList",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sorts: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.sorts = this.category.sorts;
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 480px) {
  .sort-item {
    margin: 0 0.5rem;
    font-size: var(--thr-font-size);
  }
  .sorts-wrap {
    line-height: 40px;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }
}
</style>