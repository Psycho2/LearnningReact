import React, { useState } from 'react';
import './menuMain.css'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import items from "../common/comData";


const MenuMain: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MenuMain;
