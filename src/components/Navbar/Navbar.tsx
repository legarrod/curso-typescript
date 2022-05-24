import React from 'react';
import { HistoryOutlined, DashboardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useStoreNavbar } from './useStoreNavbar';
import logo from 'assets/img/log.png';
const { Sider } = Layout;

const SidebarCustom: React.FC = () => {
  const { collapsed } = useStoreNavbar();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <img src={logo} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <DashboardOutlined />
          <span>Inicio</span>
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="2">
          <HistoryOutlined />
          <span>ApiRest</span>
          <Link to="/rick" />
        </Menu.Item>
        <Menu.Item key="3">
          <HistoryOutlined />
          <span>Render Props</span>
          <Link to="/render" />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarCustom;
