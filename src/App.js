import './App.css';
import List from './components/list.js';
import {List as AntdList} from 'antd';
import {Table} from 'antd';
import axios from 'axios';

const dataSource = [
  {
    key: '1',
    name: 'Vlad',
    age: 27,
    address: '10 Downing Street',
    penis: '16 cm'
  },
  {
    key: '2',
    name: 'Andrew',
    age: 27,
    address: '10 Downing Street',
    penis: '4 cm'
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Penis',
    dataIndex: 'penis',
    key: 'penis',
  }
];

<Table dataSource={dataSource} columns={columns} />;

const values = [
  {
    value: '10', 
    displayValue: 'test value 10'
  },
  {
    value: '20', 
    displayValue: 'test value 20'
  },
  {
    value: '30', 
    displayValue: 'test value 30'
  }
];


function App() {
  
  axios.get('https://swapi.dev/api/people/1').then((response) => {
    debugger
    const skywoker = response
  }); 
  
  return (
    <div className="App">
      <main>
        <List data = {values}/>
        <AntdList 
          dataSource = {['test', 'test1', 'test2','test3']} 
          renderItem={(item) => <AntdList.Item>{item}</AntdList.Item>} 
          bordered
          class="Table"
        />
        <div class="Table">
          <Table 
            dataSource = {dataSource}
            columns = {columns}  
            bordered
          />
        </div>
      </main>
    </div>
  );
}

export default App;