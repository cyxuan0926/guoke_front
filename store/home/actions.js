import * as types from './mutation-types'
import axios from '../../service/index'

export default {
  getBannerList ({commit}, params) {
    axios.get('banner/list', {params: params}).then(response => {
      return response.data.data
    }).then(bannerList => {
      commit(types.SET_BANNER_LIST, bannerList)
    })
  },
  getNavList ({ commit }, params) {
    axios.get('navigation/list', { params: params }).then(response => {
      return response.data.data
    }).then(navList => {
      commit(types.SET_NAV_LIST, navList)
    })
  },
  getSolutionList ({commit}, params) {
    axios.get('solution/list', { params: params }).then(response => {
      return response.data.data
    }).then(solutionList => {
      commit(types.SET_SOLUTION_LIST, solutionList)
    })
  },
  getSolutionDetail ({ commit }, params) {
    axios.get(`solution-detail/${params}/edit`).then(response => {
      return response.data.data
    }).then(solutionDetail => {
      commit(types.SET_SOLUTION_DETAIL, solutionDetail)
    })
  }
}
