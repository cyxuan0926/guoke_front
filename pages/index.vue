<template>
    <Layout>
        <public-header />
        <public-nav />
        <home-content :bannerList='bannerList'  :solutionList='solutionList' />
        <public-footer/>
    </Layout>
</template>

<script>
import PublicHeader from '../components/PublicHeader'
import PublicNav from '../components/PublicNav'
import HomeContent from '../components/HomeContent'
import PublicFooter from '../components/PublicFooter'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  created () {
    this.getBannerList()
    this.getSolutionList()
  },
  computed: {
    ...mapState({
      bannerList: state => state.index.bannerList,
      solutionList: state => state.index.solutionList
    })
  },
  methods: {
    ...mapActions(['getBannerList', 'getSolutionList'])
  },
  components: {
    'public-header': PublicHeader,
    'public-nav': PublicNav,
    'home-content': HomeContent,
    'public-footer': PublicFooter
  }
}
</script>

<style scoped>
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
</style>
