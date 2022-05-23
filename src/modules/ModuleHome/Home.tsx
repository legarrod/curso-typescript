import React, { Fragment} from 'react';
import PrimerCalculadora from "./containers/PrimerCalculadora"
import SegundaCalculadora from "./containers/SegundaCalculadora"
const Home = () => {

  return (
    <Fragment>
     <div className='border-2 p-2 rounded-lg my-2'>
       <h2 className='text-2xl text-center'>Primer clase</h2>
       <PrimerCalculadora />
     </div>
     <div className='border-2 p-2 rounded-lg my-2'>
       <h2 className='text-2xl text-center'>Segunda clase</h2>
       <SegundaCalculadora />
     </div>
    </Fragment>
  );
};

export default Home;
