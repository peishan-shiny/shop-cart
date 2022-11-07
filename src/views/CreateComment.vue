<template>
  <div class="sticky-footer">
    <div class="sticky-content">
      <Header />

      <CommentForm />
    </div>
    <Footer class="sticky-bottom"> </Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import CommentForm from "../components/CommentForm.vue";
import Footer from "../components/Footer";

export default {
  name: "SignIn",
  components: {
    Header,
    CommentForm,
    Footer,
  },
};
</script>

<style scoped>
.sticky-content {
  padding-bottom: 250px;
}
</style>
