import { useSelector } from "react-redux";
import HistorySection from "../components/contents/HistorySection";

const Dashboard = () => {
  const { contents } = useSelector((state) => state.persist);

  return (
    <>
      <div>{contents && <HistorySection contents={contents} />}</div>
    </>
  );
};

export default Dashboard;
