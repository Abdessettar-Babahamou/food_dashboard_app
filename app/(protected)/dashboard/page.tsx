import HomeHeader from "@/components/home-header";
import MostSideBar from "@/components/most-side-bar";
import OrderCard from "@/components/order-card";
import OrderReports from "@/components/order-reports";

function Dashboard() {
  return (
    <div className="flex flex-col gap-y-2 relative lg:mr-[470px]">
      {/* header */}
      <HomeHeader />
      {/* header */}
      {/* orderCard */}
      <OrderCard />

      {/* Order Reports */}
      <OrderReports />
      <MostSideBar />
    </div>
  );
}

export default Dashboard;
