import { Button } from "antd";

const AddChipButton = () => {
  return (
    <Button
      style={{
        border: "3px solid #000000",
        fontSize: "15px",
        height: "40px",
      }}
    >
      <p className="text-black font-bold px-3 text-lg">New Chip</p>
    </Button>
  );
};

export default AddChipButton;
