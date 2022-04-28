import type { NextPage } from 'next';
import { getPrimaryLayout } from '../components/layouts/primary/PrimaryLayout';

const Home: NextPage = () => {
  return <div>TEST</div>;
};

Home.getLayout = getPrimaryLayout;

export default Home;
