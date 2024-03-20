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


const App = () => {
    const [open, setOpen] = useState(true);
    const onChange = (checked) => {
        setOpen(checked);
    };
    return (
        <>
            <FloatButton.Group
                onChange={onChange}
                checked={open}
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
           
        </>


    );

};





export default App;

