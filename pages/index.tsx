import { getPrimaryLayout } from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return <div>TEST</div>;
};

Home.getLayout = getPrimaryLayout;

export default Home;
