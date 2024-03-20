import React, { useState } from 'react';
import {
    PoundCircleOutlined, UserAddOutlined, PlusCircleOutlined, MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { FloatButton, Switch } from 'antd';


const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};

const { Header, Sider, Content } = Layout;

const App = () => {
    const [open, setOpen] = useState(true);
    const onChange = (checked) => {
        setOpen(checked);
    };
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (

        <>

            <Layout>
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
                                label: 'nav 1',
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'nav 2',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
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
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content
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




            <FloatButton.Group
                open={open}
                trigger="click"
                style={{
                    right: 24,
                }}
                icon={<PlusCircleOutlined />}
            >
                <FloatButton />
                <FloatButton icon={<UserAddOutlined />} />
                <FloatButton icon={<PoundCircleOutlined />} />
            </FloatButton.Group>
            <Switch
                onChange={onChange}
                checked={open}
                style={{
                    margin: 16,
                }}
            />
        </>


    );

};



export default App;

