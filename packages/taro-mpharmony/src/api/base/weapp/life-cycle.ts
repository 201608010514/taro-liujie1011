import Taro from '@tarojs/api'

function getCustomLaunchInfo () {
  let launchInfo
  try {
    // @ts-ignore
    const params = JSON.parse(window.customLaunchOptions)
    launchInfo = {
      referrerInfo: {},
      apiCategory: 'default',
    }
    if (params.appId) {
      Object.assign(launchInfo.referrerInfo, { appId: params.appId })
    }
    if (params.extraData) {
      Object.assign(launchInfo.referrerInfo, { extraData: params.extraData })
    }
    if (params.path) {
      Object.assign(launchInfo, { path: params.path })
    }
    if (params.query) {
      const parts = params.query.split('&')
      const query = {}
      for (const param of parts) {
        const items = param.split('=')
        query[items[0]] = items[1]
      }
      Object.assign(launchInfo, { query })
    }
  } catch (err) {
    launchInfo = {
      referrerInfo: {},
      apiCategory: 'default',
    }
  }
  return launchInfo
}

let launchOptions
function initLaunchOptions (options = {}) {
  Object.assign(options, getCustomLaunchInfo())
  launchOptions = options
}

Taro.eventCenter.once('__taroRouterLaunch', initLaunchOptions)

// 生命周期
export const getLaunchOptionsSync: typeof Taro.getLaunchOptionsSync = () => launchOptions
export const getEnterOptionsSync: typeof Taro.getEnterOptionsSync = () => launchOptions
