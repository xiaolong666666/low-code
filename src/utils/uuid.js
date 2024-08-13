// 生成随机 id：时间戳 + 8 位随机字符
export const getUuid = () =>
  Date.now() + Math.random().toString(16).slice(2, 10);
