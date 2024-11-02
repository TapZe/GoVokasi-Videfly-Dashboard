import { Spinner } from "@nextui-org/react";

const Fallback = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Spinner color="primary" label="Loading...." labelColor="primary" />
      </div>
    </>
  );
};

export default Fallback;
