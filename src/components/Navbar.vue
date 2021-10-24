<template>
  <div class="header">
    <div class="wrapper-header">
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
      <div class="search-menu">
        <input type="text" class="input-search" placeholder="Поиск по названию картины"/>
        <button class="btn-search">{{ this.search }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navbar: {
      type: Object
    }
  },
  data() {
    return {
      search: "Найти"
    };
  },
};
</script>

<style>
.wrapper-header {
  max-width: 1216px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
}
.header {
    border-bottom: 1px solid #E1E1E1;
    padding: 0;
    margin-top: 0;
}
.navbar-link {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #343030;
  list-style-type: none; /* Убираем маркеры */
  margin-right: 48px;
}

.navbar-link:hover,
.navbar-link:focus,
.navbar-link:active{
  border-bottom: 2px solid #343030;
}
.navbar-list {
  margin-left: 96px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
}

@media screen and (max-width: 1216px) {
 .navbar-list{
    margin-left: 0;
    justify-content: center;
  }
  .wrapper-header{
    justify-content: center;
  }
}

@media screen and (max-width: 882px) {
 .navbar-list{
    margin-bottom: 20px;
  }
}
.btn-search {
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  background: #403432;
  padding: 14px 36px;
  margin-left: 0;
  border: none;
}

.btn-search:hover,
.btn-search:focus,
.btn-search:active{
  background: #776763;
}

.input-search {
  font-family: Merriweather;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #9F9F9F;
  padding: 14px 16px;
  padding-right: 60px;
  background-color: transparent;
  border: 1px solid #E1E1E1;
  margin-right: 0;
}

.input-search:active,
.input-search:focus{
  font-family: Merriweather;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 150%;
color: #343030;
border: 1px solid #B5B5B5;
}
</style>