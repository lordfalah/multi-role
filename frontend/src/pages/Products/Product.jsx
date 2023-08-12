import Table from "../../components/Table";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Paginate from "../../components/Paginate";
import PlusCircle from "../../icon/PlusCircle";
import Search from "../../icon/Search";

const Product = () => {
  const { product, isError, isLoading, isSuccess } = useSelector(
    (state) => state.product
  );

  return (
    <section className="my-auto mx-auto w-fit overflow-hidden space-y-4 min-h-screen lg:h-auto py-0 lg:py-10 flex flex-col justify-center lg:block flex-auto max-w-xl md:max-w-3xl xl:max-w-7xl px-5 sm:px-0 xl:px-8">
      <div className="flex sm:justify-between sm:items-center flex-col sm:flex-row w-full gap-y-4 ">
        <div className="">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Customers
            </h2>
            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              240 vendors
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            These companies have purchased in the last 12 months.
          </p>
        </div>

        <div className="flex gap-y-4 justify-between sm:flex-col">
          <div className="flex justify-end">
            <Link
              to="/dashboard/product/add"
              className="flex items-center justify-center text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg w-fit gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600 py-2.5 px-5 justify-self-end"
            >
              <PlusCircle />
              Product
            </Link>
          </div>

          <div className="relative flex items-center justify-end">
            <span className="absolute">
              <Search className="text-gray-400 dark:text-gray-600 mx-3" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="block py-2 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg w-56 sm:w-60 xl:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
      </div>

      <div className="min-h-0 wrapper overflow-x-auto">
        <Table />
      </div>

      <Paginate className="px-10 sm:px-6 md:px-0 max-w-7xl lg:pl-8 lg:max-w-3xl xl:max-w-4xl">
        {isSuccess
          ? product?.map((_, idx) => (
              <a
                key={idx}
                href="#"
                className="px-2 py-1 text-sm text-blue-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                {idx + 1}
              </a>
            ))
          : null}
      </Paginate>
    </section>
  );
};

export default Product;
