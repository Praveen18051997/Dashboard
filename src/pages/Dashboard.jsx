import Layout from "../components/Layout";
import OverviewHeader from "../components/Dashboard/OverviewHeader";
import StatCard from "../components/Dashboard/StatCard";
import StatisticsChart from "../components/Dashboard/StatisticsChart";
import AnalyticsChart from "../components/Dashboard/AnalyticsChart";
import SalesChart from "../components/Dashboard/SalesChart";
import HorizontalStatistics from "../components/Dashboard/HorizontalStatistics";
import LastOrders from "../components/Dashboard/LastOrders";
import Transactions from "../components/Dashboard/Transactions";

import dollarIcon from "../assets/images/dollar.png";
import statisticsIcon from "../assets/images/statistics.png";
import userIcon from "../assets/images/user.png";

const Dashboard = () => {
  return (
    <Layout>
      {/* Overview */}
      <div id="dashboard-content">
        <OverviewHeader />
      </div>

      {/* Stat Cards */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

        <StatCard
          title="Total Income"
          value="$8.500"
          percentage="↑ 50.8%"
          positive
          icon={
            <img
              src={dollarIcon}
              alt="Dollar"
              className="h-14 w-14 object-contain"
            />
          }
        />

        <StatCard
          title="Total Sales"
          value="3.500K"
          percentage="↓ 10.5%"
          positive={false}
          icon={
            <img
              src={statisticsIcon}
              alt="Statistics"
              className="h-14 w-14 object-contain"
            />
          }
        />

        <StatCard
          title="New Clients"
          value="2.500K"
          percentage="↑ 24.9%"
          positive
          icon={
            <img
              src={userIcon}
              alt="User"
              className="h-14 w-14 object-contain"
            />
          }
        />

      </div>

      {/* Charts */}

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">

        <StatisticsChart />

        <AnalyticsChart />

      </div>

      {/* Sales & Horizontal Statistics */}

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-6">

        <div className="xl:col-span-2">
          <SalesChart />
        </div>

        <div className="xl:col-span-4">
          <HorizontalStatistics />
        </div>

      </div>

      {/* Tables */}

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-12">

        <div className="min-w-0 xl:col-span-8">
          <LastOrders />
        </div>

        <div className="xl:col-span-4">
          <Transactions />
        </div>

      </div>

    </Layout>
  );
};

export default Dashboard;