"use client";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  Pagination,
  Row,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import type { FormProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Chip, generateChips } from "../../lib/chip/data";
import AddChipButton from "./AddChipButton";

interface FieldType {
  key?: string;
  chipName?: string;
  chipInfo?: String;
}

const ChipProfile = () => {
  const [chips, setChips] = useState<Chip[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 6;

  useEffect(() => {
    const chipsData = generateChips(20); // Adjust this number based on your data or API
    setChips(chipsData);
  }, []);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const visibleChips = chips.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handleDeleteById = (id: string) => {
    const updatedChips = chips.filter((chip) => chip.key !== id);
    setChips(updatedChips);
  };

  return (
    <>
      <div className="pt-5 px-[6%] text-end">
        <AddChipButton />
      </div>

      <Row className="gap-10 pt-5 h-[500px] flex justify-center ">
        {visibleChips.map((chip) => {
          return (
            <Col key={chip.key} span={7}>
              <div className="border-2 border-[#2457C5] rounded-xl p-4 flex space-x-5 relative">
                <div className="w-[30%]">
                  <Image
                    src={"/store/store-icon.jpg"}
                    alt="store"
                    width={150}
                    height={150}
                  />
                </div>
                <Form
                  name={`basic ${chip.key}`}
                  initialValues={{
                    chipName: chip.chipName,
                    chipInfo: chip.chipInfo,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  className="w-[70%]"
                >
                  <Form.Item<FieldType>
                    name="chipName"
                    rules={[
                      {
                        required: true,
                        message: "Please input chip's label!",
                      },
                    ]}
                  >
                    <Input
                      style={{ width: "100%", borderColor: "#2457C5" }}
                      placeholder="Chip’s label"
                    />
                  </Form.Item>

                  <Form.Item<FieldType>
                    name="chipInfo"
                    rules={[
                      {
                        required: true,
                        message: "Please input chip's additional info!",
                      },
                    ]}
                  >
                    <TextArea
                      style={{ width: "100%", borderColor: "#2457C5" }}
                      rows={3}
                      placeholder="Chip’s additional info"
                    />
                  </Form.Item>
                </Form>
                <button
                  className="absolute -top-3 -right-3 bg-white w-[30px] h-[30px] rounded-full border-2 border-[#B31C1C] font-bold text-[17px] pb-5 text-[#B31C1C]  "
                  onClick={() => handleDeleteById(chip.key)}
                >
                  x
                </button>
              </div>
            </Col>
          );
        })}
      </Row>

      <Pagination
        current={currentPage}
        total={chips.length}
        pageSize={itemsPerPage}
        onChange={onPageChange}
        style={{ marginTop: "20px", textAlign: "center", width: "100%" }}
      />
    </>
  );
};

export default ChipProfile;
