<template>
  <div class="main-wrapper">
    <NavBar :navbar="navbar"/>
    <div class="wrapper">
      <Pictures />
    </div>
    <Footer :navbar="navbar"/>
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import Pictures from "./components/Pictures.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    NavBar,
    Pictures,
    Footer,
  },
  data() {
    return {
      navbar: {
        catalog: "Каталог",
        delivery: "Доставка",
        pay: "Оплата",
        contacts: "Контакты",
        about: "О компании",
      },
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
@font-face {
  font-family: "Merriweather";
  src: url("../src/assets/fonts/Merriweather-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Merriweather";
  src: url("../src/assets/fonts/Merriweather-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

body {
  background-color: #f6f3f3;
  font-family: "Merriweather";
  font-size: 1rem;
}
.wrapper {
  max-width: 1216px;
  margin: 0 auto;
}
</style>