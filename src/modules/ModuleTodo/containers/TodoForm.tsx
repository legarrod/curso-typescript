import React from 'react';
import { Form, Input, Button } from 'antd';
import { useSotoreTodos } from '../store/useSotoreTodos';

const TodoForm: React.FC = () => {
  const { listTodos, setListTodos } = useSotoreTodos();
  const onFinish = (values: any) => {
    const finalTodos = [...listTodos, values];
    setListTodos(finalTodos);
    localStorage.setItem('listTodos', JSON.stringify(finalTodos));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Tarea" name="task">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Guardar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
