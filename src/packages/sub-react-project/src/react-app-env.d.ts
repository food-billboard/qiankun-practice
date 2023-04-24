/// <reference types="react-scripts" />

interface Window {
  __POWERED_BY_QIANKUN__: string;
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string 
}

declare module "*.less" {
  const classes: { [key: string]: string };
  export default classes;
}
