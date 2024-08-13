import { reactive } from "vue";

// 全局状态
export default reactive({
  components: [], // 组件列表
  counter: {}, // 组件个数 Map
  currentComponentId: null, // 当前选择的组件id
});
