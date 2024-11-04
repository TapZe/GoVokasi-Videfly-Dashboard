import { Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
import HistorySection from "../components/contents/HistorySection";

const Dashboard = () => {
  const { contents } = useSelector((state) => state.persist);

  console.log(contents);

  return (
    <>
      <div>
        <HistorySection contents={contents} />
      </div>
    </>
  );
};

export default Dashboard;
