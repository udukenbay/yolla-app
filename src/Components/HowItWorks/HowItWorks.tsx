import React from 'react';
import { Wrapper, HowItWorksWrapper } from './HowItWorks.style';
import RequestServices from '../../Common/Images/HowItWorks/RequestServices.png';
import GetConnected from '../../Common/Images/HowItWorks/GetConnected.png';
import HirePay from '../../Common/Images/HowItWorks/HirePay.png';

export default function HowItWorks(): React.ReactElement {
  return (
    <Wrapper>
        <h2>
            How It Works
        </h2>

        <HowItWorksWrapper>
            <img src={ RequestServices } alt="RequestServices" />
            <p>1. Request Services</p>
        </HowItWorksWrapper>

        <HowItWorksWrapper>
            <img src={ GetConnected } alt="GetConnected" />
            <p>2. Get Connected</p>        
        </HowItWorksWrapper>

        <HowItWorksWrapper>
            <img src={ HirePay } alt="HirePay" />
            <p>3. Hire & Pay</p>
        </HowItWorksWrapper>
    </Wrapper>
    
  );
}