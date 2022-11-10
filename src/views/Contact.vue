<template>
  <div class="sticky-footer">
    <div class="sticky-content">
      <Header />

      <ContactForm />
    </div>
    <Footer class="sticky-bottom"> </Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ContactForm from "../components/ContactForm.vue";
import Footer from "../components/Footer";

export default {
  name: "CreateComment",
  components: {
    Header,
    ContactForm,
    Footer,
  },
};
</script>

<style scoped>
.sticky-content {
  padding-bottom: 250px;
}
</style>
