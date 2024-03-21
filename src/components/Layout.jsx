import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Message from './Message.jsx';
import AddTransaction from './AddTransaction.jsx';
import Transactions from './Transactions.jsx';
import Balance from './Balance.jsx';
import Income from './Income.jsx';
import Expenses from './Expenses.jsx';
import Buttons from './Buttons.jsx';
import { Row, Col } from 'antd';
import {
    WalletOutlined,
    InteractionOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    BookOutlined,
    HomeOutlined,
    BarChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';


const { Header, Sider, Content } = Layout;
const App = () => {
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className="main-container">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" data-testid="cypress-menu">
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <HomeOutlined />,
                                label: 'Home',
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
                </div>

            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        width:'5rem',
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
                             width: '95rem',
                             justifyContent: 'center',
                             background: colorBgContainer,
                             borderRadius: borderRadiusLG,
                         }}
                >


                    <div>
                        <Row gutter={16}>
                            <Col span={24}>
                                
                                <Message /> {/* This is the welcome message. */}
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                
                                <Balance /> 
                            </Col>
                        </Row>
                        <Row gutter={20}>
                            <Col span={12}>
                                
                                <Income/>
                            </Col>
                            <Col span={12}>
                                
                                <Expenses/>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                
                                <Transactions/> {/* This component displays list of added transactions. */}
                            </Col>
                        </Row>
                        <Row id="transaction-buttons" gutter={16}>
                            <Col span={24}>
                                
                                <AddTransaction/> {/*This component allows the user to add a transaction. */}
                            </Col>
                        </Row>
                    </div>

                    <div className="Buttons-section" data-testid="cypress-interface-section">
                        <Buttons/>
                    </div>


                </Content>
            </Layout>
        </Layout>
    );
};
export default App;