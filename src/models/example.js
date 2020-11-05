
export default {

  namespace: 'example',

  state: {},
  //定制场景，条件判断触发指定action
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
//异步提交reducers触发action     call
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
