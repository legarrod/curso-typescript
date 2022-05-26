import React from 'react';
import { Table, Space } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { useSotoreTodos } from '../store/useSotoreTodos';

interface DataType {
  key: string;
  task: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Tarea',
    dataIndex: 'task',
    key: 'task',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Acción',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <button className='bg-orange-700 text-white p-2 rounded-xl' onClick={()=>{console.log(record.task);
        }}>
            Eliminar
        </button>
      </Space>
    ),
  },
];

const TodoTable: React.FC = () => {
  const { listTodos } = useSotoreTodos();

  return <Table columns={columns} dataSource={listTodos} />;
};

export default TodoTable;
