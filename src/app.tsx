// 运行时配置
import { RunTimeLayoutConfig } from '@umijs/max';
import { PageLoading } from '@ant-design/pro-components';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return {
    name: "model data： demo"
  }
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    title: "主应用",
    menu: {
      locale: false,
    },
    onPageChange: () => {
      console.log('gewageg');
    }
  };
};
