import React, { Fragment } from 'react';
import { Button } from 'antd';

const Home = ()=>{
    return (<Fragment>
        <h1 className="text-3xl font-bold underline text-green-800">
      Hello world!
    </h1>
        <Button type="primary">Home</Button>
    </Fragment> )
}

export default Home