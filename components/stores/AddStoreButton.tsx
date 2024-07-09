import { Button, Col } from "antd";
import Link from "next/link";

import React from "react";

const AddStoreButton = () => {
  return (
    <div className="w-full h-full text-right px-5 pb-3">
      <Link href={"/createStore"}>
        <Button
          style={{
            backgroundColor: "#ffffff",
            border: "3px solid #1677FF",
            height: "50px",
          }}
        >
          <p className="text-[#1677FF] font-bold px-3 text-xl">New Store</p>
        </Button>
      </Link>
    </div>
  );
};

export default AddStoreButton;
