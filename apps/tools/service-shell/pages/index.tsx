import CommonHeader from '../components/CommonHeader';
import '@mono-playground/tools-ui/global';
import SideMenu from '../components/SideMenu';
import { Box } from '@mono-playground/tools-ui';

export function Index() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <SideMenu />
      <Box width="100vw">
        <CommonHeader />
        <Box
          as="section"
          display="flex"
          flexDirection="column"
          padding="4x"
          height="100%"
        >
          Workspace
        </Box>
      </Box>
    </div>
  );
}

export default Index;
