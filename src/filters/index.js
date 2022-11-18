import Vue from 'vue'
import * as filter from './filter'

Object.keys(filter).forEach(k => Vue.filter(k, filter[k]))

Vue.prototype.$hideString = Vue.filter('hideString')

