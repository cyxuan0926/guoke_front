<template>
    <div class="hello">
      <public-header/>
      <public-nav />
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
  export default {
    data () {
      return {
        msg: '企业文化'
      }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

