import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Bill = () => {
  const { gheBanChon, tongTien } = useSelector((state) => state.bookingSlice);
  const dispatch = useDispatch();
  return (
    <div className="text-center my-20 items-center">
      <h2 className="uppercase font-bold my-5 text-2xl">
        Danh sách ghế bạn chọn
      </h2>

      <div className="relative mx-10 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Số ghế
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {gheBanChon.map((item, index) => {
              console.log(item);
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.soGhe}
                  </td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.gia}
                  </td>
                  <td className="px-6 py-4">{item.gia}</td>
                </tr>
              );
            })}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td
                className="px-6 py-4 font-semibold text-center uppercase text-gray-900 dark:text-white"
                colSpan={3}
              >
                Thành tiền
              </td>
              <td className="px-6 py-4">{tongTien}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bill;
