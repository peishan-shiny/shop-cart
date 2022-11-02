<template>
  <div>
    <Header />

    <SignInForm />
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import SignInForm from "../components/SignInForm.vue";

export default {
  name: "SignIn",
  components: {
    Header,
    SignInForm,
  },
};
</script>

