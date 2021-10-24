<template>
  <div class="pictures-cont">
      <transition name="fade">
    <div class="modal-window" v-if="this.active">
        <div class="modal-window-wrapper">
            <button 
            class="btn-modal"
            @click="activeModal"
            >&#215;</button>
            <img :src="this.choose.image" 
            alt="" 
            class="picture-image-modal"
        />
        <p v-html="this.choose.title" class="modal-picture-title"></p>
        <p class="modal-picture-price">{{this.choose.price}}</p>
        </div>
    </div>
     </transition>


    <div class="container">
      <div class="row">
        <p class="pictures-cont-title">Картины эпохи Возрождения</p>
      </div>
    </div>
    <div class="container">
      <div class="row gx-5 gy-5">
        <PictureItem
          v-for="picture of pictures"
          :key="picture.id"
          :picture="picture"
          @choose="header($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PictureItem from "./PictureItem.vue";
export default {
  components: {
    PictureItem,
  },
  data() {
    return {
      pictures: [
        {
          id: 1,
          title: "«Рождение Венеры» <br>Сандро Боттичелли",
          lastPrice: "2 000 000 $",
          price: "1 000 000 $",
          image: "../src/assets/venera.jpg",
          sold: false,
        },
        {
          id: 2,
          title: "«Тайная вечеря» <br>Леонардо да Винчи",
          lastPrice: "",
          price: "3 000 000 $",
          image: "../src/assets/secret_evening.jpg",
          sold: false,
        },
        {
          id: 3,
          title: "«Сотворение Адама» <br>Микеланджело",
          lastPrice: "6 000 000 $",
          price: "5 000 000 $",
          image: "../src/assets/adam.jpg",
          sold: false,
        },
        {
          id: 4,
          title: "«Урок анатомии» <br>Рембрандт",
          lastPrice: "",
          price: "",
          image: "../src/assets/anatomy.jpg",
          sold: true,
        },
      ],
      choose: '',
      active: false
    };
  },

  methods:{
      header: function(val){
          this.choose = val
          if (this.choose.sold !== true)
            this.active = true
      },
      activeModal: function(){
          this.active = false
      }
  }
};
</script>

<style>
.pictures-cont-title {
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
  color: #343030;
  padding-top: 45px;
  margin-bottom: 39px;
}

.modal-window {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(214, 214, 214, .5);
  z-index: 1000;
}

.picture-image-modal{
    width: 100%;
}

.modal-window-wrapper{
    width: 50%;
    margin: 0 auto;
    background-color: #fff;
    margin-top: 30px;
    border-radius: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
}

.modal-picture-title{
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    margin-top: 30px;
}

.modal-picture-price{
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: #727272;
    margin-top: 30px;
    margin-bottom: 30px;
}

.btn-modal{
    background-color: transparent;
    border: none;
    font-size: 3rem;
    margin-right: 30px;
    margin-bottom: 5px;
}

.btn-modal:hover,
.btn-modal:focus{
    color: #a5a5a5;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>