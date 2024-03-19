import React, { useState } from 'react';
import { Calendar, theme } from 'antd';
import { EuroCircleOutlined, UserAddOutlined, PlusCircleOutlined } from '@ant-design/icons';

import { FloatButton, Switch } from 'antd';


const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};

const App = () => {
    const [open, setOpen] = useState(true);
    const onChange = (checked) => {
        setOpen(checked);
    };
    return (
        <>
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
                <FloatButton icon={<EuroCircleOutlined />} />
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

