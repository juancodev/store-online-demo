import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonLoader = (props) => (
  <ContentLoader viewBox="0 0 1165 900" height={900} width={1340} foregroundColor={'#ACD9B2'} speed={1.6} {...props} style={{ width: '98%', height: '100%' }}>
    <rect x="50" y="20" rx="30" ry="30" width="245" height="240" />
    <rect x="50" y="270" rx="0" ry="0" width="245" height="24" />
    <rect x="340" y="270" rx="0" ry="0" width="245" height="24" />
    <rect x="340" y="20" rx="30" ry="30" width="245" height="240" />
    <rect x="630" y="20" rx="30" ry="30" width="245" height="240" />
    <rect x="630" y="270" rx="0" ry="0" width="245" height="24" />
    <rect x="920" y="20" rx="30" ry="30" width="245" height="240" />
    <rect x="920" y="270" rx="0" ry="0" width="245" height="24" />
    <rect x="50" y="340" rx="30" ry="30" width="245" height="240" />
    <rect x="50" y="590" rx="0" ry="0" width="245" height="24" />
    <rect x="345" y="590" rx="0" ry="0" width="245" height="24" />
    <rect x="345" y="340" rx="30" ry="30" width="245" height="240" />
    <rect x="635" y="340" rx="30" ry="30" width="245" height="240" />
    <rect x="635" y="590" rx="0" ry="0" width="245" height="24" />
    <rect x="920" y="590" rx="0" ry="0" width="245" height="24" />
    <rect x="920" y="340" rx="30" ry="30" width="245" height="240" />
  </ContentLoader>
);

export default SkeletonLoader;