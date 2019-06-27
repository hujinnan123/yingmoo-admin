/* 文件夹说明: 全部放置验证规则 */
/* export function vaildateUserName(value) {
  if (value.length < 0 && !value) return false
}
export function vaildatePassWord(value) {
  if (value.length < 0 && !value) return false
}
export function vaildateVCode(value) {
  if (value.length < 0 && !value) return false
} */

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
