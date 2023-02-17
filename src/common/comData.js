import type {MenuProps} from "antd";
import React from "react";
import { AppstoreOutlined, CoffeeOutlined, SettingOutlined, NotificationOutlined, WhatsAppOutlined, TeamOutlined } from '@ant-design/icons';

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
    },{
        label: "加入我们",
        key: 'joinUs',
        icon: <TeamOutlined />,
    },

];
export default items;
