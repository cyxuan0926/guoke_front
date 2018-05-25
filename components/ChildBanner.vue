<template>
  <div class="child-banner">
      <img v-if="childBanner.theme == 'about'" src="../assets/img/child-banner-about.jpg" alt="">
      <img v-else-if="childBanner.theme == 'solution'" src="../assets/img/child-banner-project.jpg" alt="">
      <img v-else-if="childBanner.theme == 'contact-us'" src="../assets/img/child-banner-contact-us.jpg" alt="">
      <p>{{childBanner.text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    childBanner: {
      type: Object,
      default: {
        theme: 'about',
        text: ''
      }
    }
  }
}
</script>
<style>
.child-banner{
    width: 100%;
    height: 200px;
    position: relative;
}
.child-banner img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
.child-banner p{
    position: absolute;
    left: 50%;
    top: 0;
    height: 200px;
    line-height: 200px;
    width: 1200px;
    transform: translateX(-50%);
    font-size: 36px;
    color: #fff;
    box-sizing: border-box;
    padding-left: 20px;
}
</style>


