<template>
  <ActivityCards :initial-activities="activities" />
</template>


<script>
import ActivityCards from "../components/ActivityCards";

const dummyData = {
  activities: [
    {
      id: 1,
      title: "萬聖節活動",
      short_des:
        "10/31前下單→滿$999免運→滿$2999贈送旅行組→滿$4999加碼贈送限定款帆布袋",
      img: require("../assets/images/activity-02.jpg"),
      activity_period: "2022/10/1 ~ 2022/10/31",
    },
    {
      id: 2,
      title: "聖誕節活動",
      short_des:
        "12/25前下單→滿$999免運→滿$1999贈送新款保濕試用組→滿$4999加碼贈送聯名款驚喜包",
      img: require("../assets/images/activity-01.jpg"),
      activity_period: "2022/12/1 ~ 2022/12/25",
    },
  ],
};
export default {
  name: "Activities",
  components: {
    ActivityCards,
  },
  data() {
    return {
      activities: dummyData.activities,
    };
  },
};
</script>
