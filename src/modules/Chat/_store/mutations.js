/* eslint no-param-reassign: "error" */
// 禁止对函数参数再赋值
const MESSAGES_UPDATED = (state, messages) => {
  state.messages = messages;
};

export default {
  MESSAGES_UPDATED,
};
