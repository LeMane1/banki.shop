<template>
  <div class="footer">
    <div class="footer-wrapper">
      <ul class="navbar-list">
        <li class="navbar-link">
          {{ this.navbar.catalog }}
        </li>
        <li class="navbar-link">
          {{ this.navbar.delivery }}
        </li>
        <li class="navbar-link">
          {{ this.navbar.pay }}
        </li>
        <li class="navbar-link">
          {{ this.navbar.contacts }}
        </li>
        <li class="navbar-link">
          {{ this.navbar.about }}
        </li>
      </ul>
      <div class="info-menu">
        <div class="phone">
            +7 (812) 555-55-55
        </div>
        <div class="geo">
            г. Санкт-Петербург, ул. Ефимова, 3
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navbar: {
      type: Object,
    },
  },
};
</script>

<style>
.footer {
  background-color: #eceaea;
  margin-top: 320px;
}
.footer-wrapper {
  max-width: 1216px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #eceaea;
  padding-top: 37px;
  padding-bottom: 37px;
}

.phone{
    font-family: Merriweather;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 150%;
color: #555555;
background: url(/src/assets/icons/icon-phone.svg) no-repeat left;
    padding-left: 24px;
}

.geo{
    background: url(/src/assets/icons/icon-geo.svg) no-repeat left;
    padding-left: 24px;
    font-family: Merriweather;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 150%;
color: #555555;
margin-left: 51px;
}

.info-menu{
    display:flex;
    flex-wrap: wrap;
    justify-content: right;
}

@media screen and (max-width: 1216px) {
  .footer-wrapper{
    justify-content: center;
  }
}
</style>