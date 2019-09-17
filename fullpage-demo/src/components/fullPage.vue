<template>
  <transition-group tag="div" :name="name">
    <div class="block"
         v-show="index === curIndex"
         v-for="(list,index) in pages" :key="index"
         :style="{'background-color': bgColor&&bgColor[index]?bgColor[index]:baseBgc}"
         @transitionend="end">{{list}}
      <slot name="one" v-if="index===1"></slot>
      <slot name="two" v-if="index===2"></slot>
    </div>
  </transition-group>
</template>

<script>
    export default {
      name: "fullPage",
      props:{
        bgColor:{
          type:Array,
        },
        baseBgc:{
          default: '#c90'
        },
        pages:{
          type:Number,
          required: true,
          default(){
            return 1
          }
        }
      },
      data(){
        return {
          curIndex:0,
          name:'',
          canWhell: true,
        }
      },
      mounted(){
        window.addEventListener('mousewheel',this.wheelEvent,false)
      },

      methods: {
        wheelEvent(e){
          if (this.canWhell){
            this.canWhell = false
            if (e.deltaY>0){
              if(this.curIndex === this.pages-1){
                return this.canWhell = true
              }
              this.name = 'down'
              this.curIndex +=1
            }else if (e.deltaY<0) {
              if(this.curIndex === 0){
                return this.canWhell = true
              }
              this.name = 'up'
              this.curIndex -=1
            }
          }
        },
        end(){
          this.canWhell = true
        }
      },
    }
</script>

<style scoped>
  .block{
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .down-enter-active{
    transition: all 1s ease;
  }
  .down-leave-active{
    transition: all 1s ease;

  }
  .down-enter{
    transform: translateY(100%);
  }
  .down-leave{
    transform: translate(0);
  }
  .up-enter-active{
    transition: all 1s ease;
  }
  .up-leave-active{
    transition: all 1s ease;

  }
  .up-enter{
    transform: translateY(-100%);
  }
  .up-leave{
    transform: translate(0);
  }
</style>
