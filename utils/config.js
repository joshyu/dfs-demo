import api from './api'
/**
 * 配置信息
 */
export const isDev = !!api.getStorageSync('isDev');

export const config = {
  isDev: !!wx.getStorageSync('isDev')
};