import React from "react";
import Badge from "../Badge";
import TYPE from "../../shared/typeTag";
import moment from "moment";

const Col = ({ data }) => (
  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      className="my-3 mx-4 font-medium text-gray-900 whitespace-normal min-w-[200px] line-clamp-2 dark:text-white"
    >
      {data.title}
    </th>
    <td className="py-3 px-4 whitespace-nowrap text-xl">
      <div className="flex">
        <Badge color={"green"}>{data.state}</Badge>
      </div>
    </td>
    <td className="py-3 px-4  ">
      <div className="grid grid-cols-[1fr_1fr] gap-2  max-w-[170px]">
        {data.types.map((item, index) => (
          <Badge color={TYPE[item].color} key={item}>
            {TYPE[item].title}
          </Badge>
        ))}
      </div>
    </td>
    <td className="py-3 px-4 whitespace-nowrap">
      {moment(data.last_changed.time).format("D-M-YYYY")}
    </td>
    <td className="py-3 px-4">
      <a
        href="#"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Edit
      </a>
    </td>
  </tr>
);
export default function Table({ tableData }) {
  // console.log(tableData);
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-4">
              Nội dung
            </th>
            <th scope="col" className="py-3 px-4">
              Trạng thái
            </th>
            <th scope="col" className="py-3 px-4">
              Category
            </th>
            <th scope="col" className="py-3 px-4">
              Gần đây
            </th>
            <th scope="col" className="py-3 px-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <Col data={item} key={index} />
          ))}
        
        </tbody>
      </table>
    </div>
  );
}
