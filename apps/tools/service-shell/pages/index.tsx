import { useState, useMemo, useCallback } from 'react';
import CommonHeader from '../components/CommonHeader';
import '@mono-playground/tools-ui/global';
import SideMenu from '../components/SideMenu';
import { Box } from '@mono-playground/tools-ui';
import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const MfeAsterixService = dynamic(() => import('asterix/App'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const MfeButtonComponentS3 = dynamic(() => import('app2/Button'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const MfeObelixServiceNav = dynamic(() => import('obelix/Nav'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export const Index = () => {
  const [workspaceService, setWorkspaceService] = useState('index');
  const renderWorkspace = useMemo(() => {
    switch(workspaceService) {
      case 'asterix': return <>Asterix <MfeAsterixService /></>;
      case 'obelix': return <>Obelix <MfeObelixServiceNav /></>;
      case 'index': 
      default: return <>This is an external component coming from public AWS S3 <MfeButtonComponentS3 /></>;
    }
  }, [workspaceService]);
  const onSetWorkspace = useCallback((incomingService) => setWorkspaceService(incomingService), []);
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <SideMenu onSetWorkspace={onSetWorkspace}/>
      <Box width="100vw">
        <CommonHeader />
        <Box
          as="section"
          display="flex"
          flexDirection="column"
          padding="4x"
          height="100%"
        >
          {renderWorkspace}
        </Box>
      </Box>
    </div>
  );
}

export default Index;
