import React, { Fragment } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CustomCard = (listCharacter: any) => {

  return (
    <div className='w-full flex flex-wrap justify-center'>
      {listCharacter?.listCharacter.length && listCharacter?.listCharacter.map((item: any) => 
      <div className='m-1'  key={item?.id}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src={item?.image}
            />
          }
        >
          <Meta title={item?.name} description={` ${item?.species} / ${item?.gender}`} />
        </Card>
        </div>
      )}
    </div>
  );
};

export default CustomCard;
