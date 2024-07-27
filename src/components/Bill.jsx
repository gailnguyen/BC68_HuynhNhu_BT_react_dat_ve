import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTicket } from "../redux/bookingSlice";

const Bill = () => {
  const { gheBanChon, tongTien } = useSelector((state) => state.bookingSlice);
  const dispatch = useDispatch();

  return (
    <div className="text-center my-20 items-center">
      <h2 className="uppercase font-bold my-5 text-2xl text-white">
        Danh sách ghế bạn chọn
      </h2>

      <div className="relative mx-10 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Số ghế
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Đơn giá
              </th>
              <th scope="col" className="px-6 py-3">
                Hủy
              </th>
            </tr>
          </thead>
          <tbody>
            {gheBanChon.map((item, index) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.soGhe}
                  </td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                      minimumFractionDigits: 0,
                    }).format(item.gia)}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        dispatch(removeTicket(item));
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td
                className="px-6 py-4 font-bold text-center uppercase text-red-500 dark:text-white"
                colSpan={2}
              >
                Thành tiền
              </td>
              <td className="px-6 py-4 text-red-500 font-bold" colSpan={2}>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                  minimumFractionDigits: 0,
                }).format(tongTien)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bill;
