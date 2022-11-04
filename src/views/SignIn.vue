<template>
  <div class="sticky-footer">
    <div class="sticky-contant">
      <Header />

      <SignInForm />
    </div>
    <Footer class="sticky-bottom"> </Footer>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import SignInForm from "../components/SignInForm.vue";
import Footer from "../components/Footer";

export default {
  name: "SignIn",
  components: {
    Header,
    SignInForm,
    Footer,
  },
};
</script>

<style>
/* .sticky-footer {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
} */
.sticky-contant {
  /* min-height: 100vh; */
  padding-bottom: 250px;
}
/* .sticky-bottom {
  height: 250px;
} */
</style>
