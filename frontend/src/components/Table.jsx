import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/product/ProductApi.js";
import { formatDate } from "../utils/index.js";
import Setting from "../icon/Setting.jsx";
import Trash from "../icon/Trash.jsx";
import { Link } from "react-router-dom";

const colomsName = [
  "No",
  "Date",
  "Name",
  "Customer",
  "Price",
  "Image",
  "Action",
];

const Table = () => {
  const { product, isError, isLoading, isSuccess } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="inline-block min-w-full py-2 align-middle w-[1000px] lg:w-[900px]">
        <div className="border border-gray-200 dark:border-gray-700 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-fixed ">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                {colomsName.map((col, idx) => (
                  <th
                    key={idx}
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    {col}
                  </th>
                ))}

                <th scope="col" className="relative py-3.5 px-4">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
              {isSuccess
                ? product &&
                  product !== null &&
                  product?.map((prd, idx) => (
                    <Fragment key={idx}>
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          <span>{idx + 1}</span>
                        </td>
                        <td className="px-4 py-4 text-sm text-emerald-500  dark:text-gray-300 whitespace-nowrap">
                          {formatDate(prd?.createdAt)}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 dark:text-gray-200 ">
                            {prd?.name}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <h2>{prd?.user?.name}</h2>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {prd?.price}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <img
                            src={prd?.images[0]?.url}
                            alt={prd?.images[0]?.filename}
                            className="object-cover object-center bg-no-repeat w-full h-24 md:h-28 lg:w-4/5 lg:h-32 xl:w-44 xl:h-28"
                          />
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap flex justify-between">
                          <Link to={`/dashboard/product/${prd?.uuid}`}>
                            <Setting />
                          </Link>

                          <Link to={`/dashboard/product/${prd?.uuid}`}>
                            <Trash />
                          </Link>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap"></td>
                      </tr>
                    </Fragment>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Table;

// 9821b5dc-1012-43ea-9ff5-1fd3ef1af00d
