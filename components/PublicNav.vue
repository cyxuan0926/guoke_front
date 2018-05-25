<template>
    <div class="nav-wrap">
          <Menu class="nav-content" mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem v-for="(item,index) in navList" :key="index" :name="index">
              <nuxt-link :to="item.url">{{item.title}}</nuxt-link>
            </MenuItem>
          </Menu>
      </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  data () {
    return {
      theme1: 'light'
    }
  },
  computed: {
    ...mapState({
      navList: state => state.index.navList
    })
  },
  methods: {
    ...mapActions(['getNavList'])
  },
  created () {
    this.getNavList()
  }
}
</script>

<style>
/* 导航栏样式 */
.nav-wrap{
  background-color: #1971ac;
  height: 70px;
}
.nav-content{
  height: 70px;
  line-height: 70px;
  background-color: #1971ac;
  color: #fff!important;
  width: 1200px;
  margin: 0 auto;
  padding-left: 35px;
}
.nav-content a{
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item{
  background-color: #1971ac;
  color: #fff;
  position: relative;
  border-bottom: none;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item::after{
  width: 0;
  height: 3px;
  position: absolute;
  content: "";
  bottom: 0;
  left: 10px;
  background-color: #fde428;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover::after{
  width: calc(100% - 20px);
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover{
  color: #fff;
  background: #1971ac;
  border: none;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active{
  border: none;
}
.ivu-menu-horizontal.ivu-menu-light:after{
  display: none;
}
</style>


