import 'antd/dist/antd.css';
import { TimePicker } from 'antd';
import type { Moment } from 'moment';
import moment from 'moment';
import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';

const onChange = (time: Moment, timeString: string) => {
  console.log(time, timeString);
};

const App: React.FC = () => (
 <div style={{width:"100vw",height:"100vh"}}>
     <TimePicker onChange={onChange} use12Hours format="HH:mm:ss a" use12Hours defaultValue={moment('00:00:00', 'HH:mm:ss')} />
 </div>
);

export default App;