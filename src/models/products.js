import getinfo from "../utils/sun/index";
export default {
  namespace: "productsun",
  state: {
    list: [],
  },
  //异步提交reducers触发action     call
  subscriptions: {},
  effects: {
    *fetch({ payload }, { call, put, select }) {
      // eslint-disable-line
      // call 可以去调用服务端请求
      const { data } = yield call(getinfo);
      yield put({ type: "getinfo", data });
    },
  },
  reducers: {
    delete(state, { id }) {
      let list = state.list.filter((item) => item.goodsId !== id);
      state.list = list;
      return { ...state };
    },
    getinfo(state, { data }) {
      state.list = [...data];
      return { ...state };
    },
  },
};
