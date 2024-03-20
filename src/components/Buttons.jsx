import { useState } from 'react';
import {
    PoundCircleOutlined,
    UserAddOutlined,
    PlusCircleOutlined,
} from '@ant-design/icons';
import { FloatButton } from 'antd';


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

