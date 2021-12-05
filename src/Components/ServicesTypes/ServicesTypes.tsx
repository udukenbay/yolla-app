import React from 'react';
import { ServicesTypesWrapper } from './ServicesTypes.style';
import { ServicesList } from './ServicesTypesList.js';

export default function ServicesTypes(): React.ReactElement {

  const list = ServicesList;
  // list.map(item => console.log(item.serviceName))
  console.log(list);
  
  const listTitles = list.map((item) => (
    <div>
      <img src={item.img} alt={item.serviceName} />
      <h3>{item.serviceName}</h3>
      <div>
        <ul>
          {
          item.services_list.map((val) => 
            <li>
              {val}
            </li>
          )
          }
          
        </ul>
      </div>
    </div>
  ));

  return (
      <ServicesTypesWrapper>
        <div>
          <p>Main Wrapper TSETING</p>
          {listTitles}
        </div>
      </ServicesTypesWrapper>
  );
}