import { styled } from '@mui/material/styles';
import React from 'react';
const LayoutAside = styled('div')``;

const StyledDiv = styled('div')`
  width: var(--aside-width);
  height: var(--aside-height);
  position: fixed;
  top: calc(var(--header-height) + var(--nav-height));
  background-image: ${(props) => {
    return `url(${props.adImgUrl})`;
  }};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  & > iframe {
    height: 100%;
  }
`;

const Aside = ({ adImgUrl }) => {
  return (
    <LayoutAside>
      <StyledDiv>
        {/* <StyledDiv adImgUrl={adImgUrl}></StyledDiv> */}
        <iframe
          src='https://ads-partners.coupang.com/widgets.html?id=903247&template=carousel&trackingCode=AF2815384&subId=&width=150&height=740&tsource='
          width='150'
          height='740'
          frameborder='0'
          scrolling='no'
          referrerpolicy='unsafe-url'
          browsingtopics
        ></iframe>
      </StyledDiv>
    </LayoutAside>
  );
};

export default Aside;
