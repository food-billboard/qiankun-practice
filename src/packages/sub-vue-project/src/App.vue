<template>
  <div>
    <router-link :to="routeLinkTo('/')">
      <a-button>home</a-button>
    </router-link>
    <br />
    <router-link to="/mine">
      <a-button>mine normal</a-button>
    </router-link>
    <router-link :to="routeLinkTo('/mine')">
      <a-button>mine</a-button>
    </router-link>
    <br />
    <router-link :to="routeLinkTo('/about')">
      <a-button>about</a-button>
    </router-link>
    <router-view></router-view>
    <br />
    <a-rate :value="5" />
  </div>
</template>

<script>
import { Button, Rate } from 'ant-design-vue'

export default {
  name: 'App',
  components: {
    AButton: Button,
    ARate: Rate
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
