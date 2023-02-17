import React, { useState } from 'react';
import './menuMain.css'
import { AppstoreOutlined, CoffeeOutlined, SettingOutlined, NotificationOutlined, WhatsAppOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';


const MenuMain: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MenuMain;
