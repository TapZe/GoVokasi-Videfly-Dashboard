import { useDispatch } from "react-redux";
import { changePinned } from "../../../../redux/reducers/contentsSlice";
import { Button } from "@nextui-org/react";
import PinnedIcon from "../../../../assets/pinned.svg";
import UnpinnedIcon from "../../../../assets/unpinned.svg";

const PinBtn = ({ id, pinned }) => {
  const dispatch = useDispatch();

  const handlePinClick = async () => {
    await dispatch(changePinned({ id }));
  };

  return (
    <>
      <Button
        className="bg-white bg-opacity-30 text-violet-500"
        size="sm"
        isIconOnly
        onClick={handlePinClick}
      >
        {pinned ? <PinnedIcon /> : <UnpinnedIcon />}
      </Button>
    </>
  );
};

export default PinBtn;
