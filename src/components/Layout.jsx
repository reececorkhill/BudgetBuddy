import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    WalletOutlined,
   InteractionOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    BookOutlined,
    UserOutlined,
    BarChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';


const { Header, Sider, Content } = Layout;
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className="main-container">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Profile',
                        },
                        {
                            key: '2',
                            icon: <WalletOutlined />,
                            label: 'Income',
                        },
                        {
                            key: '3',
                            icon: <InteractionOutlined />,
                            label: 'Transactions',
                        },
                        {
                            key: '4',
                            icon: <BarChartOutlined />,
                            label: 'Graph',
                        },
                        {
                            key: '5',
                            icon: <BookOutlined />,
                            label: 'Recommendations',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content className="content-main"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Content

                </Content>
            </Layout>
        </Layout>
    );
};
export default App;