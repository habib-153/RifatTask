/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useState } from "react";
import { TQueryParams } from "../../../types/global";
import { TUser } from "../../../types/userManagement.type";
import { useGetAllUsersQuery } from "../../../redux/features/admin/userManagement.api";

export type TTableData = Pick<
  TUser,
  "fullName" | "userId" | "email" | "dept" 
>;

const UserData = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const {
    data: userData,
    //isLoading,
    isFetching,
  } = useGetAllUsersQuery([
    { name: "sort", value: "id" },
    ...params,
  ]);

  const tableData = userData?.data?.map(
    ({ _id, fullName, userId, email, dept }) => ({
      key: _id,
      fullName,
      userId,
      email,
      dept
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "fullName",
    },

    {
      title: "User Id",
      key: "userid",
      dataIndex: "userId",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Department",
      key: "dept",
      dataIndex: "dept",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        //console.log(item);
        return (
          <Space>
            {/* <Link to={`/admin/student-data/${item.key}`}> */}
              <Button>Details</Button>
            {/* </Link> */}
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );

      setParams(queryParams);
    }
  };

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />
    </>
  );
};

export default UserData;