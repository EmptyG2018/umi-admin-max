const PageLoading = () => {
    return <div>loading...</div>
}

// 运行时配置
export const initialStateConfig = {
  loading: <PageLoading />
};

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
    console.log("getInitialState");
  return { name: '@umijs/max' };
}


export function onRouteChange({ location, clientRoutes, routes, action }) {
  console.log("onRouteChange");
}

export function patchRoutes({ routes, routeComponents }) {
  console.log('patchRoutes');
}

export function patchClientRoutes({ routes }) {
  console.log("patchClientRoutes");
}

export function render(oldRender) {
    
    console.log('oldRender');
    oldRender();
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};
