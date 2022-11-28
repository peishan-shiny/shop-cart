<template>
  <StoryContent />
</template>


<script>
import StoryContent from "../components/StoryContent";

export default {
  name: "Story",
  components: {
    StoryContent,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  font-family: "微軟正黑體";
}

@media screen and (max-width: 480px) {
}
</style>
