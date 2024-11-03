import { Button } from "@nextui-org/react";
import ContentCard from "../components/contents/card/ContentCard";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { contents } = useSelector((state) => state.persist);

  console.log(contents);

  return (
    <>
      <div>
        <h1>Home Page</h1>
        <Button color="primary">Button</Button>
        {contents.map((content) => {
          return <ContentCard key={content.id} />;
        })}
      </div>
    </>
  );
};

export default Dashboard;
