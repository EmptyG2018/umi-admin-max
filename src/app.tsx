// 运行时配置
import services from '@/services/demo';
import { history } from '@umijs/max';
import { RunTimeLayoutConfig } from '@umijs/max';
// import GlobalLoading from './components/GlobalLoading';

const { getProfile } = services.UserController;

const loginPath = '/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
// export const initialStateConfig = {
//   loading: <GlobalLoading />,
// };

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  profile?: API.Profile_;
  getProfile?: () => Promise<API.Result_Profile_>;
}> {
  const profileOk = await getProfile();
  return {
    profile: profileOk.data,
    getProfile,
  };
}

export function patchClientRoutes({ routes }: any) {
  // 根据 extraRoutes 对 routes 做一些修改
  console.log('app:patchClientRoutes routes', routes);
}

export function render(oldRender: () => void) {
  console.log('app:render');
  oldRender();
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  console.log('initialState', initialState);

  return {
    fixSiderbar: true,
    layout: 'mix',

    menu: {
      locale: false,
    },

    onPageChange: () => {
      const { location } = history;
      if (!initialState.profile && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },

    // 退出登录业务逻辑
    logout: () => {
      alert('退出登录');
    },
  };
};
