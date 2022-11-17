<template>
  <div class="container">
    <h1 class="title">優惠活動</h1>
    <hr class="title-line" />
    <div class="card-list">
      <div
        v-for="activity in activities"
        :key="activity.id"
        class="activity-card"
      >
        <img :src="activity.img" alt="" class="activity-img" />
        <div class="activity-content">
          <h1 class="activity-title">{{ activity.title }}</h1>
          <p class="activity-descript">{{ activity.short_des }}</p>
          <hr class="content-line" />
          <p class="activity-time">
            {{ "活動時間:" + activity.activity_period }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityCards",
  props: {
    initialActivities: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      activities: this.initialActivities,
      //是不是要增加一個data新增時間?
    };
  },
};
</script>

<style scoped>
* {
  font-family: "微軟正黑體";
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
.card-list {
  display: flex;
  flex-direction: row-reverse;
  margin: 2rem 0;
}
.activity-card {
  width: 50%;
  padding: 1.5rem 1.5rem;
  margin: 0 1rem;
  border-radius: 20px;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 1);
  -moz-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 1);
  box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 1);
}
.activity-img {
  width: 100%;
  border-radius: 20px;
}
.activity-content {
  line-height: 2rem;
  color: var(--black);
  margin: 1rem 0;
}
.activity-title {
  font-size: var(--sec-font-size);
  font-weight: 700;
  letter-spacing: 0.2rem;
}
.content-line {
  border: 0.5px solid var(--black);
}

@media screen and (max-width: 768px) {
  .container {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    top: 100px;
  }
  .card-list {
    all: unset;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin: 2rem 0;
  }
  .activity-card {
    width: 90%;
    padding: 1rem 1rem;
    margin: 1rem 0;
  }
}
</style>