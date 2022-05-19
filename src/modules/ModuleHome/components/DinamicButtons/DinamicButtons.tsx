import React, { Fragment } from 'react'
import { Button } from 'antd';
import {useStoreGlobalHome} from "../../store/useStoreGlobalHome"

function DinamicButtons(props: any) {
    const {setText, count, setCount, counttwo, setCounttwo} = props
    const {setShowResults} = useStoreGlobalHome()
    const onclickSuma = (set: any, initialValue: number, increment: number) => {
        set(initialValue + increment);
        setShowResults(true);
        setText("FELICITACIONES!")
    };

  return (
    <Fragment>
        <Button
        type="primary"
        className="mx-2 bg-slate-700"
        onClick={() => onclickSuma(setCount, count, 2)}
      >
        Suma + 2
      </Button>
      <Button
        type="primary"
        className="mx-2 bg-slate-700"
        onClick={() => onclickSuma(setCounttwo, counttwo, 5)}
      >
        Suma + 5
      </Button>
    </Fragment>
  )
}

export default DinamicButtons