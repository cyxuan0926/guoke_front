<template>
  <div class="solution">
      <public-header/>
      <public-nav />
      <child-banner :childBanner='childBanner' />
      <ul class="solution-list" >
            <li v-for="item in solutionList" :key="item._id">
            <img :src="item.imgUrl" alt="">
            <div class="mark">
                <h4>{{item.title}}</h4>
                <p>{{item.description}}</p>
                <nuxt-link :to=" { path: '/solution/detail', query: { solutionId: item._id }}">查看详情</nuxt-link>
            </div>
            </li>
        </ul>
      <contact-us/>
      <public-footer/>
  </div>
</template>

<script>
import PublicHeader from '../../components/PublicHeader'
import PublicNav from '../../components/PublicNav'
import ChildBanner from '../../components/ChildBanner'
import ContactUs from '../../components/ContactUs'
import PublicFooter from '../../components/PublicFooter'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      childBanner: {
        theme: 'solution',
        text: '解决方案'
      }
    }
  },
  methods: {
    ...mapActions(['getSolutionList'])
  },
  created () {
    this.getSolutionList()
  },
  computed: {
    ...mapState({
      solutionList: state => {
        const {solutionList} = state.index
        let mapList = []
        for (let i = 0; i < solutionList.length; i++) {
          for (let j = 0; j < solutionList[i].length; j++) {
            mapList.push(solutionList[i][j])
          }
        }
        return mapList
      }
    })
  },
  components: {
    'public-header': PublicHeader,
    'public-nav': PublicNav,
    'public-footer': PublicFooter,
    'child-banner': ChildBanner,
    'contact-us': ContactUs
  }
}
</script>

<style>
.solution-list{
  width:1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap:wrap;
  padding: 90px 0 150px 0;
  margin: 0 auto;
}
.solution-list li{
    text-align: center;
  height: 270px;
  width: 270px;
  margin: 0 15px 30px 15px;
  background: aqua;
  position: relative;
  overflow: hidden;
}
.solution-list li img{
  width: 100%;
  height: 100%;
  vertical-align: middle;
  transition: all 0.5s;
}
.solution-list li .mark{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  padding-top: 120px;
  box-sizing: border-box;
  display: block;
}
.solution-list li .mark h4{
  display: inline-block;
  color: #fff;
  font-size: 22px;
  line-height: 2;
  border-bottom: 1px solid #fff;
  transition: all 1s;
}
.solution-list li .mark p{
  margin: 20px 0 20px 0;
  font-size: 14px;
  color: #fff;
  transition: all 1s;
}
.solution-list li .mark a{
  display: inline-block;
  height: 34px;
  line-height: 34px;
  text-align: center;
  width: 120px;
  border-radius: 17px;
  background-color: #0580d2;
  color: #fff;
  opacity: 0;
  transition: all 1s;
}
.solution-list li:hover img{
  transform: scale(1.2);
}
.solution-list li .mark:hover a{
  opacity: 1;
  transform: translateY(-40px);
}
.solution-list li .mark:hover h4{
  transform: translateY(-40px);
}
.solution-list li .mark:hover p{
  transform: translateY(-40px);
}
</style>

