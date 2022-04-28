import Head from 'next/head';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  sampleTextProp?: string;
  children?: any;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Primary Layout</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export const getPrimaryLayout = (page: any) => (
  <PrimaryLayout>{page}</PrimaryLayout>
);

export default PrimaryLayout;
