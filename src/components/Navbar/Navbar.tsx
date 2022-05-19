import React from 'react';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {useStoreGlobalContact} from "modules/ModuleContact/store/useStoreGlobalContact"
const { Header, Content, Footer } = Layout;

function Navbar() {
  const {resultTotal}= useStoreGlobalContact()
  const menuOptions = [{id: 1, name: "Inicio", path: "/"}, {id: 2, name: "Contacto", path: "/contact"}]
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      // items={new Array(3).fill(null).map((_, index) => ({
      //   key: String(index + 1),
      //   label: `nav ${index + 1}`,
      // }))}
    >
    {menuOptions.map((item: any)=>(<Link to={item.path}>
      <Menu.Item key={item.id} icon={<MailOutlined />}>
        {item.name}
      </Menu.Item>
    </Link>))}
    <p className='text-2xl font-semibold text-white'>{resultTotal}</p>
    </Menu>
  </Header>
  );
}

export default Navbar;
