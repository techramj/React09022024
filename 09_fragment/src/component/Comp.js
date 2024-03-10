import CompA from "./CompA";
import CompB from "./CompB";
import Wrapper from "./Wrapper";

const Comp = ()=>{
    return(
        <Wrapper>
            <CompA/>
            <CompB/>
        </Wrapper>
    );
}

export default Comp;