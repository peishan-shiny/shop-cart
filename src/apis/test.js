import axios from 'axios'

export default {
  getData() {
    return axios.get('https://sparkling-pine-4477.fly.dev/products')
  },
}