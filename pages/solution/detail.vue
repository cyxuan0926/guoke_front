<template>
  <div class="solution-detail">
    <public-header />
    <public-nav />
    <child-banner :childBanner='childBanner'/>
    <div v-if="solutionDetail"  class="solution-detail--content">
      <h3>{{solutionDetail.name}}</h3>
      <h4>软件介绍</h4>
      <p>{{solutionDetail.introduction}}</p>
      <h4>组成部分和应用领域</h4>
      <p>{{solutionDetail.constitute}}</p>
      <h4>技术特点</h4>
      <ol>
        <li v-for="(item,index) in solutionDetail.technology" :key="index" >{{item}}</li>
      </ol>
    </div>
    <p v-else  class="not-find">暂无该方案详情！！！</p>
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
        text: '解决方案详情'
      }
    }
  },
  methods: {
    ...mapActions(['getSolutionDetail'])
  },
  created () {
    const { solutionId } = this.$route.query
    if (!solutionId) {
      this.$router.push('/')
    } else {
      this.getSolutionDetail(solutionId)
    }
  },
  computed: {
    ...mapState({
      solutionDetail: state => state.index.solutionDetail
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
.solution-detail--content{
  width: 1200px;
  margin: 0 auto;
  padding: 50px 200px 70px 200px;
  box-sizing: border-box;
}
.solution-detail--content h3{
  text-align: center;
  color: #0981d1;
  font-size: 28px;
  line-height: 53px;
  margin-bottom: 20px;
  font-weight: normal;
}
.solution-detail--content h4{
  font-size: 22px;
  color: #333;
  line-height: 56px;
}
.solution-detail--content p{
  text-indent: 2em;
  font-size:12px;
  line-height: 20px;
  color: #333;
}
.solution-detail--content ol{
  padding-left: 26px;
}
.solution-detail--content ol li{
  line-height: 20px;
}
.not-find{
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0 100px 0;
  text-align: center;
  font-size: 30px;
  color: red;
}
</style>

