// 运行时配置
import { RunTimeLayoutConfig } from '@umijs/max';
import services from '@/services/demo';

const { getProfile } = services.UserController;

/** 获取用户信息比较慢的时候会展示一个 loading */
// export const initialStateConfig = {
//   // loading: <PageLoading />,
// };

const delay = () => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  })
}

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  profile?: API.Profile_;
  getProfile?: () => Promise<API.Result_Profile_>;
}> {

  // await delay();

  const profileOk = await getProfile();
  return {
    profile: profileOk.data,
    getProfile,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {

  console.log("initialState", initialState);

  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    title: '主应用',
    menu: {
      locale: false,
    },
    token:{
      colorBgAppListIconHover: 'rgba(0,0,0,0.06)',
      colorTextAppListIconHover: 'rgba(255,255,255,0.95)',
      colorTextAppListIcon: 'rgba(255,255,255,0.85)',
      sider: {
        colorBgCollapsedButton: '#fff',
        colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
        colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
        colorMenuBackground: '#5b55ff',
        colorBgMenuItemCollapsedHover: 'rgba(0,0,0,0.06)',
        colorBgMenuItemCollapsedSelected: 'rgba(0,0,0,0.15)',
        colorMenuItemDivider: 'rgba(255,255,255,0.15)',
        colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
        colorBgMenuItemSelected: 'rgba(0,0,0,0.15)',
        colorTextMenuSelected: '#fff',
        colorTextMenu: 'rgba(255,255,255,0.75)',
        colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
        colorTextMenuTitle: 'rgba(255,255,255,0.95)',
        colorTextMenuActive: 'rgba(255,255,255,0.95)',
        colorTextSubMenuSelected: '#fff',
      },
    },
    onPageChange: () => {
      console.log('gewageg');
    },
  };
};
