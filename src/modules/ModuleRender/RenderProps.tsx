import React from 'react'
import { Result, Button } from 'antd';
import Blog from "./containers/Blog"

const MessageSuccess = ()=>{
  return (<Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
       Perfecto!
      </Button>,
      <Button key="buy">Ver mas</Button>,
    ]}
  />)
}

const MessageError= ()=>{
  return (<Result
    status="error"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        LO lamento se daño :/
      </Button>,
      <Button key="buy">Ver mas</Button>,
    ]}
  />)
}


function RenderProps() {

const fnNoData = ()=>{
  "Mucha logica"
}
const fnErrorname = ()=>{
"Mas logica"
}
const fnSucces=()=>{
"La logica de succes"
}

  const responseLLibrary: any = {
    NOTA_DATA: ()=>fnNoData(),
    ERROR_NAME: ()=>fnErrorname(),
    DATA_SUCCESS: ()=>fnSucces()
  }

  const cbGetResponse =(response: any)=>{
    if (response) {
      responseLLibrary[response]();
    }

  }

  return (
    <div>
      <Blog render={MessageSuccess} renderError={MessageError}/>
    </div>
  )
}

export default RenderProps