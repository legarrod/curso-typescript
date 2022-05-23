import React from 'react';
import SidebarCustom from 'components/Navbar/Navbar';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useStoreNavbar } from '../Navbar/useStoreNavbar';
const { Header, Content } = Layout;

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutCustom = (props: LayoutProps) => {
  const { children } = props;
  const { collapsed, setCollapsed } = useStoreNavbar();
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
