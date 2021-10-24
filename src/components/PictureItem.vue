<template>
  <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 picture">
    
    <div class="picture-item-container card h-100">
      <div class="picture-image-cont">
        <img :src="this.picture.image" 
            alt="" 
            class="picture-image"
            :class="{soldImage: this.picture.sold}"
      />
      <button 
      class="picture-button"
      @click="$emit('choose', picture)"
      >
        <p class="picture-title" 
        v-html="this.picture.title"
        :class="{soldText: this.picture.sold}"
        ></p>
      </button>
      </div>
      <div class="picture-item-pay-cont">
        <div class="picture-item-pay" v-if="this.picture.sold === false">
        <div class="picture-item-prices">
          <p class="picture-item-lastprice">{{ this.picture.lastPrice }}</p>
          <p class="picture-item-price">{{ this.picture.price }}</p>
        </div>
        <button class="btn-buy"
         @click="clickPay"
          :class="{loaded: this.type ==='loaded'}"
         >
          <div v-if="type === 'buy'">Купить</div>
          <div v-else-if="type === 'loading'"><Loader/></div>
          <div v-else-if="type === 'loaded'">	&#10004; В корзине</div>
        </button>
      </div>
      <div v-else>
        <p class="picture-item-sold-text">Продана на аукционе</p>
      </div>
      </div>
    </div>
    </div>
</template>

<script>
import Loader from './Loader.vue'

export default {
  components:{
    Loader
  },
  props: {
    picture: {
      type: Object,
    },
  },
  data() {
    return {
      type: $cookies.get(this.picture.id) ? $cookies.get(this.picture.id) : 'buy'
    };
  },
  methods:{
    clickPay: function(){

      if (this.type === 'buy'){
      this.$cookies.set(this.picture.id, "loaded", 90)//set cookie for 90 sec
      this.type = 'loading'
      setTimeout(()=>{
        this.type = 'loaded'
      }, 2000)
      }
    }
  },
};
</script>

<style>

.picture-image {
  width: 100%;
}

.picture-item-container {
  border: 1px solid #e1e1e1;
  display:flex;
  flex-wrap: inherit;
  justify-content: space-between;
}

.picture-title {
  font-family: Merriweather;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #343030;
  margin-top: 20px;
  text-align: left;
  padding-left: 24px;
  padding-right: 24px;
}

.picture-item-pay{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 24px;
  margin-top: 22px;
}

.picture-item-price{
  font-family: Merriweather;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 150%;
color: #343030;
}

.picture-item-lastprice{
  font-family: Merriweather;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 150%;
text-decoration-line: line-through;
color: #A0A0A0;
}

.soldImage{
  opacity: .5;
}

.soldText{
  color: #777676;
}

.picture-item-sold-text{
  padding-left: 24px;
  padding-right: 2px;
  padding-bottom: 24px;
  color: #777676;
  font-family: Merriweather;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 150%;
margin-top: 34px;
}

.btn-buy {
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  background: #403432;
  padding: 14px 0;
  border: none;
  width: 118px;
  text-align: center;
}

.btn-buy:hover,
.btn-buy:focus,
.btn-buy:active{
  background: #776763;
}

.loaded{
  background-color: #5B3A32;
}

.picture-button{
  background-color: transparent;
  border: 0;
  padding: 0;
}


</style>