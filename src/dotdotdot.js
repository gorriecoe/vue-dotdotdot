module.exports = {
  name: 'dotdotdot',

  props: {
    dots: {
      type: Number | String,
      default: 3
    },
    speed: {
      type: Number | String,
      default: 500
    }
  },

  data () {
    return {
      interval: null,
      count: ''
    }
  },

  mounted () {
    this.startLoading()
  },

  methods: {
    startLoading () {
      this.interval = setInterval(this.loading, this.speed)
    },
    loading () {
      this.count = this.count.length < this.dots ? this.count + '.' : ''
    },
    stopLoading () {
      clearInterval(this.interval)
      this.interval = null
      this.count = ''
    }
  },

  beforeDestroy () {
    this.stopLoading()
  },

  render (createElement) {
    return createElement('span', {}, this.count)
  }
}
