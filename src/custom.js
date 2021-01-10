module.exports = {
  name: 'customDot',

  props: {
    text: {
      type: String,
      default: '...'
    },
    speed: {
      type: Number | String,
      default: 500
    }
  },

  data () {
    return {
      interval: null,
      count: 0,
      letters: [],
      loadedLetters: [],
      total: 0
    }
  },

  mounted () {
    this.startLoading()
  },

  methods: {
    startLoading () {
      this.letters = this.text.split('')
      this.total = this.letters.length
      this.interval = setInterval(this.loading, this.speed)
    },
    loading () {
      this.count = this.count < this.total ? this.count + 1 : 0
      this.loadedLetters = this.letters.slice(0, this.count)
    },
    stopLoading () {
      clearInterval(this.interval)
      this.interval = null
      this.count = 0
    }
  },

  beforeDestroy () {
    this.stopLoading()
  },

  render (createElement) {
    return createElement('span', {}, this.loadedLetters)
  }
}
