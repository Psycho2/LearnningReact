import React, { useState } from 'react';
import './menuMain.css'
import { AppstoreOutlined, CoffeeOutlined, SettingOutlined, NotificationOutlined, WhatsAppOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
    {
        label: '首页',
        key: 'mail',
        icon: <AppstoreOutlined />,
    },
    {
        label: '论坛',
        key: 'app',
        icon: <CoffeeOutlined />,
    },
    {
        label: '科普',
        key: 'SubMenu',
        icon: <SettingOutlined />,
    },
    {
        label: "通知",
        key: 'alipay',
        icon: <NotificationOutlined />,
    },{
        label: "关于我们",
        key: 'aboutUs',
        icon: <WhatsAppOutlined />,
    },

];

const MenuMain: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MenuMain;
