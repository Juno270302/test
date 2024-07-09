import { Card, Col } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Store {
  key: number;
  storeName: string;
  address: string;
}

interface StoreItemProps {
  store: Store;
}

const StoreItem: React.FC<StoreItemProps> = ({ store }) => {
  return (
    <Col span={6} key={store.key}>
      <Card style={{ borderColor: "#D1D1D1", borderRadius: "20px" }}>
        <Link href={`/stores/${store.key}`}>
          <div className="w-full flex justify-center py-3">
            <Image
              src={"/store/store-icon.jpg"}
              alt="store"
              width={150}
              height={150}
              className=""
            />
          </div>
          <div className="flex flex-col text-black border-t-2 py-2 px-5">
            <h1 className="text-xl font-bold">{store.storeName}</h1>
            <p className="text-gray-400">{store.address}</p>
          </div>
        </Link>
      </Card>
    </Col>
  );
};

export default StoreItem;