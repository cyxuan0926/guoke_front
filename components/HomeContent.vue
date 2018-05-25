<template>
  <Content class="index-content">
      <Carousel autoplay :autoplay-speed='4000' >
        <CarouselItem v-for="(item,index) in bannerList" :key="index">
            <div class="item-carousel">
              <img :src='item.imgUrl' alt="banner">
              <div class="more">
                <div class="more-wrap">
                  <div class="more-content">
                    <h3>{{item.title}}</h3>
                    <p>{{item.description}}</p>
                    <nuxt-link v-if="item.url" :to="item.url">了解更多</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
        </CarouselItem>
      </Carousel>
      <Detail />
      <section class="project">
          <h3>解决方案</h3>
          <p>在数字交互的大背景下，国科云通通过交互体验服务，助力企业直达终端用户</p>
          <Tabs active-key="1">
              <TabPane v-for="(arr,index) in solutionList" :key="index" :name="`name${index}`">
                <ul class="project-list">
                  <li v-for="item in arr" :key="item._id">
                    <img :src="item.imgUrl" alt="">
                    <div class="mark">
                      <h4>{{item.title}}</h4>
                      <p>{{item.description}}</p>
                      <nuxt-link :to="{ path: '/solution/detail', query: { solutionId: item._id }}">查看详情</nuxt-link>
                    </div>
                  </li>
                </ul>
              </TabPane>
          </Tabs>
           <nuxt-link class="more-project" to="/solution">更多案例>></nuxt-link>
      </section>
      <ContactUs/>
  </Content>
</template>

<script>
import Detail from '../components/Detail'
import ContactUs from '../components/ContactUs'

export default {
  props: {
    bannerList: {
      required: true,
      default: []
    },
    solutionList: {
      required: true,
      default: []
    }
  },
  data () {
    return {
      value2: 0
    }
  },
  components: {
    Detail,
    ContactUs
  }
}
</script>

<style>
/* 轮播样式 */
.item-carousel{
  position: relative;
  height: auto;
  width: 100%;
}
.item-carousel img{
  width: 100%;
  vertical-align: middle;
}
.item-carousel .more{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.item-carousel .more-wrap{
  position: relative;
  width: 1200px;
  margin: 0 auto;
}
.item-carousel .more-content{
  position: absolute;
  left: 0;
  top: 160px;
  color: #fff;
}
.item-carousel .more-content h3{
  font-size: 40px;
  font-weight: normal;
}
.item-carousel .more-content p{
  font-size: 20px;
  margin-top: 25px;
}
.item-carousel .more-content a{
  display: block;
  margin-top: 40px;
  width: 110px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #0b99f8;
  border-radius: 4px;
  font-size: 15px;
  color: #fff;
}
/* 解决方案样式 */
.project{
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.project h3{
  letter-spacing: 0.3em;
  font-size: 30px;
  color: #333;
}
.project>p{
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #999;
}
.project>a{
  display: inline-block;
  line-height: 1.8;
  color: #333;
  font-size: 15px;
  border-bottom: 2px solid #333;
  margin-top: 25px;
}
.ivu-tabs-bar{
  border-bottom: none;
}
.ivu-tabs-nav-scroll{
  display: flex;
  justify-content: center;
  align-items: center;
}
.ivu-tabs-nav-scroll .ivu-tabs-tab{
  width: 40px;
  margin-right: 0px;
  background-color: #d2d2d2;
  height: 6px!important;
  padding: 0px;
}
.ivu-tabs-ink-bar {
  display: none!important;
}
.ivu-tabs-tab-active{
  background-color: #0580d2!important;
}


.project-list{
  width:100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.project-list li{
  height: 370px;
  width: 370px;
  background: aqua;
  margin: 0 15px;
  position: relative;
  overflow: hidden;
}
.project-list li img{
  width: 100%;
  height: 100%;
  vertical-align: middle;
  transition: all 0.5s;
}
.project-list li .mark{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  padding-top: 180px;
  box-sizing: border-box;
  display: block;
}
.project-list li .mark h4{
  display: inline-block;
  color: #fff;
  font-size: 22px;
  line-height: 2;
  border-bottom: 1px solid #fff;
  transition: all 1s;
}
.project-list li .mark p{
  margin: 20px 0 20px 0;
  font-size: 15px;
  color: #fff;
  transition: all 1s;
}
.project-list li .mark a{
  display: inline-block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 140px;
  border-radius: 20px;
  background-color: #0580d2;
  color: #fff;
  opacity: 0;
  transition: all 1s;
}
.project-list li:hover img{
  transform: scale(1.2);
}
.project-list li .mark:hover a{
  opacity: 1;
  transform: translateY(-20px);
}
.project-list li .mark:hover h4{
  transform: translateY(-20px);
}
.project-list li .mark:hover p{
  transform: translateY(-20px);
}
</style>


