// 初始通信
export const INIT = "init";

// 创建组件
export const SYNC_MESSAGE = "sync_message";

// 选中组件
export const SELECT_COMPONENT = "select_component";

// 布局列表
export const LAYOUT_LIST = [
  {
    label: "一行两个",
    icon: "/layouts/one_rows_two_cols.svg",
    rows: 1,
    cols: 2,
    area: [{ gridArea: "1 / 1 / 2 / 2" }, { gridArea: "1 / 2 / 2 / 3" }],
  },
  {
    label: "一行三个",
    icon: "/layouts/one_rows_three_cols.svg",
    rows: 1,
    cols: 3,
    area: [
      { gridArea: "1 / 1 / 2 / 2" },
      { gridArea: "1 / 2 / 2 / 3" },
      { gridArea: "1 / 3 / 2 / 4" },
    ],
  },
  {
    label: "一行四个",
    icon: "/layouts/one_rows_four_cols.svg",
    rows: 1,
    cols: 4,
    area: [
      { gridArea: "1 / 1 / 2 / 2" },
      { gridArea: "1 / 2 / 2 / 3" },
      { gridArea: "1 / 3 / 2 / 4" },
      { gridArea: "1 / 4 / 2 / 5" },
    ],
  },
  {
    label: "二左二右",
    icon: "/layouts/two_rows_two_cols.svg",
    rows: 2,
    cols: 2,
    area: [
      { gridArea: "1 / 1 / 2 / 2" },
      { gridArea: "1 / 2 / 2 / 3" },
      { gridArea: "2 / 1 / 3 / 2" },
      { gridArea: "2 / 2 / 3 / 3" },
    ],
  },
  {
    label: "一左二右",
    icon: "/layouts/one_left_two_right.svg",
    rows: 2,
    cols: 2,
    area: [
      { gridArea: "1 / 1 / 3 / 2" },
      { gridArea: "1 / 2 / 2 / 3" },
      { gridArea: "2 / 2 / 3 / 3" },
    ],
  },
  {
    label: "一上二下",
    icon: "/layouts/one_top_two_bottom.svg",
    rows: 2,
    cols: 2,
    area: [
      { gridArea: "1 / 1 / 2 / 3" },
      { gridArea: "2 / 1 / 3 / 2" },
      { gridArea: "2 / 2 / 3 / 3" },
    ],
  },
  {
    label: "一左三右",
    icon: "/layouts/one_left_three_right.svg",
    rows: 8,
    cols: 8,
    area: [
      { gridArea: "1 / 1 / 9 / 5" },
      { gridArea: "1 / 5 / 5 / 9" },
      { gridArea: "5 / 5 / 9 / 7" },
      { gridArea: "5 / 7 / 9 / 9" },
    ],
  },
  {
    label: "自定义",
    icon: "/layouts/custom.svg",
    rows: 4,
    cols: 4,
  },
].map((v) => ({ ...v, value: v.label }));
