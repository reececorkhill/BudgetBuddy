import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Button } from 'antd';
import { EuroCircleOutlined, UserAddOutlined, PlusCircleOutlined } from '@ant-design/icons';

import { FloatButton, Switch } from 'antd';



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

