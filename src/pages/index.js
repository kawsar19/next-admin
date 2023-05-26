import Head from 'next/head';

import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';


const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Overview | Devias Kit
      </title>
    </Head>
    <div>
      <h2>Welcome to deshi krishi </h2>
    </div>
  </>
);

// Page.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

export default Page;
