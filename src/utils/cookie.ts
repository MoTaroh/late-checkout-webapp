export const createCacheKey = (searchParam: any) => {
  return `${searchParam.stayYear}${searchParam.stayMonth}${searchParam.stayDay}_${searchParam.stayCount}_${searchParam.adultNum}`;
};

export const isCached = (key: string, cookies: object) => {
  return key in cookies;
};
