import { Spinner } from "@nextui-org/react";

const Fallback = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Spinner color="secondary" label="Loading...." labelColor="secondary" />
      </div>
    </>
  );
};

export default Fallback;
