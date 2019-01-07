<template>
  <div class="hourglass">
    <div class="state" @click="oneOnOff">
      <div class="state-menu" :class="oneIsShow?'open':''">
        <div class="pin-icon">1</div>
        <div class="state-menu-name">未开始</div>
        <div class="icon">{{oneIsShow?'^':'v'}}</div>
      </div>
      <div class="task" v-show="oneIsShow">
        <div class="task-alone">
          <div class="task-alone-name">生意照片</div>
          <router-link to="/1" class="state-icon"><span style="margin: 15px">1</span></router-link>
        </div>
      </div>
    </div>
    <div class="state">
      <div class="state-menu" @click="twoOnOff" :class="twoIsShow?'open':''">
        <div class="pin-icon">1</div>
        <div class="state-menu-name">进行中</div>
        <div class="icon">{{twoIsShow?'^':'v'}}</div>
      </div>
      <div class="task" v-show="twoIsShow">
        <div class="task-alone">
          <div class="task-alone-name">生意照片</div>
          <router-link to="/1" class="state-icon">O</router-link>
        </div>
      </div>
    </div>
    <div class="state">
      <div class="state-menu" @click="threeOnOff" :class="threeIsShow?'open':''">
        <div class="pin-icon">1</div>
        <div class="state-menu-name">跟进中</div>
        <div class="icon">{{threeIsShow?'^':'v'}}</div>
      </div>
      <div class="task" v-show="threeIsShow">
        <div class="task-alone">
          <div class="task-alone-name">生意照片</div>
          <router-link to="/1" class="state-icon">O</router-link>
        </div>
      </div>
    </div>
    <div class="state">
      <div class="state-menu" @click="fourOnOff" :class="fourIsShow?'open':''">
        <div class="pin-icon">1</div>
        <div class="state-menu-name">已完成</div>
        <div class="icon">{{fourIsShow?'^':'v'}}</div>
      </div>
      <div class="task" v-show="fourIsShow">
        <div class="task-alone">
          <div class="task-alone-name">生意照片</div>
          <router-link to="/1" class="state-icon">O</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        oneIsShow: false,
        twoIsShow: false,
        threeIsShow: false,
        fourIsShow: false,
      }
    },
    methods: {
      oneOnOff(){
        this.oneIsShow = !this.oneIsShow
      },
      twoOnOff(){
        this.twoIsShow = !this.twoIsShow
      },
      threeOnOff(){
        this.threeIsShow = !this.threeIsShow
      },
      fourOnOff(){
        this.fourIsShow = !this.fourIsShow
      }
    }
  }
</script>

<style scoped>
  .hourglass{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .state{
    width: 80%;
    border-radius: 5px;
    margin: 30px auto 0;
    position: relative;
  }
  .state-menu{
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }
  .pin-icon{
    width: 50px;
    position: absolute;
    top: -25px;
  }
  .state-menu-name{
    flex: 1;
  }
  .open{
    background: red;
    color: #fff;
  }
  .icon{
    width: 50px;
    position: absolute;
    right: 0;
  }
  .task{
    border-radius: 5px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    padding-top: 10px;
    position: relative;
    top: -10px;
  }
  .task-alone{
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    border-bottom: 1px solid #ddd;
  }
  .task-alone:last-child{
    border-bottom: 0;
  }
  .task-alone{
    display: flex;
    text-align: center;
  }
  .task-alone-name{
    flex: 1;
  }
  .state-icon{
    width: 50px;
    border-left: 1px solid #ddd;
    position: absolute;
    right: 0;
  }
  .state-icon div{
    display: inline-block;
    border: 1px solid #999;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    font-size: 12px;
    vertical-align:top
  }
</style>
