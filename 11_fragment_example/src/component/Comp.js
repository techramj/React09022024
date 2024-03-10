import CompA from "./CompA";
import CompB from "./CompB";
import React, {Fragment} from 'react';

const Comp = ()=>{
    return(
        <Fragment>
            <CompA/>
            <CompB/>
        </Fragment>
    );
}

export default Comp;