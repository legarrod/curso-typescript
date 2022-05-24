import React, { useState } from 'react';

export default function Blog(props: any) {
const [showRenderProps, setShowRenderProps]= useState(false)
const [showRenderPropsError, setShowRenderPropsError]= useState(false)
    const {render, renderError}= props
const handlerShowMessaje = ()=>{
    setShowRenderProps(!showRenderProps)
}
const handlerShowMessajeError = ()=>{
    setShowRenderPropsError(!showRenderPropsError)
}

  return (
    <div>
      <h1 className='text-4xl text-sky-900'>Ultimas noticias</h1>
      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <button className='bg-green-800 text-white text-2xl rounded-xl p-2 mt-3' onClick={handlerShowMessaje}>
          Ver success
      </button>
      <button className='bg-red-800 text-white text-2xl rounded-xl p-2 mt-3 ml-2' onClick={handlerShowMessajeError}>
          Ver error
      </button>
      {
          showRenderProps && !showRenderPropsError &&<div>{render()} </div>
      } 
      {
          showRenderPropsError&& !showRenderProps &&<div>{renderError()} </div>
      }
    </div>
  );
}
