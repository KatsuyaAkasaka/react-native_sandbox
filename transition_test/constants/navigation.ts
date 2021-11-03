import { unionToObject, unionToLowerObject } from './utilTypes'
export type tabNames =
  | 'Top'
  | 'Mypage'

export const tabNameObject: unionToLowerObject<tabNames> = {
  top: 'Top',
  mypage: 'Mypage'
} as const


export type stackNames =
  | 'Home'
  | 'Details'

export const stackNameObject: unionToLowerObject<stackNames> = {
  home: 'Home',
  details: 'Details'
} as const

export type drawerNames =
  | 'Home'
  | 'Notification'

export const drawerNameObject: unionToLowerObject<drawerNames> = {
  home: 'Home',
  notification: 'Notification'
} as const

