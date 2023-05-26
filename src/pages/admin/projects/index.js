// pages/index.js
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
function Page() {
  return <div>Welcome to Orojects list </div>;
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
