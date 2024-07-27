import { useDispatch, useSelector } from "react-redux";
import { addSeat } from "../redux/bookingSlice";

const SeatInfo = (props) => {
  //   console.log(props);
  const dispatch = useDispatch();

  return (
    <div className="seat_info">
      {props.danhSachGhe.map((item, index) => {
        // console.log(item);
        // console.log(item.danhSachGhe);

        return (
          <div className="grid grid-cols-12 space-y-5 mx-16">
            <div className="row_name col-span-1 h-100 flex justify-center text-xl items-end font-bold text-yellow-300">
              {item.hang}
            </div>

            <div className="col-span-11">
              <div className="grid grid-cols-12">
                {item.danhSachGhe.map((item1, index1) => {
                  return (
                    <button
                      // onClick={handleClick}
                      onClick={() => {
                        dispatch(addSeat(item1));
                      }}
                      className="mx-2 py-1 border border-yellow-300 rounded-md text-sm"
                    >
                      {item1.soGhe}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SeatInfo;
