import * as types from './mutation-types'

export default {
  [types.SET_BANNER_LIST] (state, bannerList) {
    state.bannerList = bannerList
  },
  [types.SET_NAV_LIST] (state, navList) {
    state.navList = navList
  },
  [types.SET_SOLUTION_LIST] (state, solutionList) {
    state.solutionList = solutionList
  },
  [types.SET_SOLUTION_DETAIL] (state, solutionDetail) {
    state.solutionDetail = solutionDetail
  }
}
