import React from 'react';
import SidebarCustom from 'components/Navbar/Navbar';
import { Layout, Input } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useStoreNavbar } from '../Navbar/useStoreNavbar';
import { getData } from 'api/AsyncHttpRequest';
import { useGlobalStore } from 'store/useGlobalStore';
const { Header, Content } = Layout;
const { Search } = Input;

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutCustom = (props: LayoutProps) => {
  const urlBase = process.env.REACT_APP_API_BASE_URL;
  const { children } = props;
  const { collapsed, setCollapsed } = useStoreNavbar();
  const { setCharacterList }: any = useGlobalStore();

  const cbResponse = (response: any) => {
    setCharacterList(response?.results);
  };

  const onSearch = (value: string) =>
    getData(`${urlBase}/?name=${value}`, cbResponse);

  return (
    <Layout>
      <SidebarCustom />
      <Layout className="site-layout">
        <Header
          className="site-layout-background trigger"
          style={{ padding: 0 }}
        >
          {collapsed ? (
            <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} />
          ) : (
            <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />
          )}
          <div className="w-full px-3">
            <Search
              style={{ backgroundColor: '#1890ff' }}
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
        <footer
          className="bg-slate-900"
          style={{ textAlign: 'center', height: '70px' }}
        >
          <p className="text-white text-xl">Curso reactjs con typescript</p>
        </footer>
      </Layout>
    </Layout>
  );
};

export default LayoutCustom;
