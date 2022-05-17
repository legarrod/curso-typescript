import React from 'react';
import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
      <Link to="/">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Inicio
        </Menu.Item>
      </Link>
      <Link to="/contact">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Contacto
        </Menu.Item>
      </Link>
      {/* <a href='/contact'>
      <Menu.Item key="mail" icon={<MailOutlined />}>
          Contacto href
        </Menu.Item>
      </a> */}
    </Menu>
  );
}

export default Navbar;
