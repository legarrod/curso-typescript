import React, { Fragment } from 'react';
import { Button } from 'antd';

const ButtonComponent = (props: any) => {
  const { name, fn} = props
  return (
    <Fragment>
      <Button
        type="primary"
        className="mr-2 bg-slate-700"
        onClick={fn}
      >
       {name}
      </Button>
    </Fragment>
  );
};

export default ButtonComponent;
