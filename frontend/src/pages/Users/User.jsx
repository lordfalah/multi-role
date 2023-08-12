import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user?.role !== "admin") navigate("/dashboard");
  }, [user, navigate]);

  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center flex-col h-fit w-fit">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name Product
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p className="text-red text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="price"
              type="number"
              placeholder="xxxxx"
            />
            <p className="text-grey-dark text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <div className="relative z-10">
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-zip"
              type="text"
              placeholder={90210}
            />
          </div>
        </div>
      </div>
    </div>
  );

  // return user?.role !== "admin" ? (
  //   <Navigate to="/dashboard" replace={true} />
  // ) : (
  //   <div className="w-full flex justify-center items-center min-h-screen">
  //     <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center flex-col h-fit w-fit">
  //       <div className="-mx-3 md:flex mb-6">
  //         <div className="md:w-1/2 px-3 mb-6 md:mb-0">
  //           <label
  //             className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
  //             htmlFor="grid-first-name"
  //           >
  //             Name Product
  //           </label>
  //           <input
  //             className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
  //             id="grid-first-name"
  //             type="text"
  //             placeholder="Jane"
  //           />
  //           <p className="text-red text-xs italic">
  //             Please fill out this field.
  //           </p>
  //         </div>
  //         <div className="md:w-1/2 px-3">
  //           <label
  //             className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
  //             htmlFor="grid-last-name"
  //           >
  //             Last Name
  //           </label>
  //           <input
  //             className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
  //             id="grid-last-name"
  //             type="text"
  //             placeholder="Doe"
  //           />
  //         </div>
  //       </div>
  //       <div className="-mx-3 md:flex mb-6">
  //         <div className="md:w-full px-3">
  //           <label
  //             className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
  //             htmlFor="price"
  //           >
  //             Price
  //           </label>
  //           <input
  //             className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
  //             id="price"
  //             type="number"
  //             placeholder="xxxxx"
  //           />
  //           <p className="text-grey-dark text-xs italic">
  //             Make it as long and as crazy as you'd like
  //           </p>
  //         </div>
  //       </div>
  //       <div className="-mx-3 md:flex mb-2">
  //         <div className="md:w-1/2 px-3 mb-6 md:mb-0">
  //           <label
  //             className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
  //             htmlFor="grid-city"
  //           >
  //             City
  //           </label>
  //           <input
  //             className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
  //             id="grid-city"
  //             type="text"
  //             placeholder="Albuquerque"
  //           />
  //         </div>
  //         <div className="md:w-1/2 px-3">
  //           <label
  //             className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
  //             htmlFor="grid-state"
  //           >
  //             State
  //           </label>
  //           <div className="relative z-10">
  //             <select
  //               className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
  //               id="grid-state"
  //             >
  //               <option>New Mexico</option>
  //               <option>Missouri</option>
  //               <option>Texas</option>
  //             </select>
  //             <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
  //               <svg
  //                 className="h-4 w-4"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 viewBox="0 0 20 20"
  //               >
  //                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
  //               </svg>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="md:w-1/2 px-3">
  //           <label
  //             className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
  //             htmlFor="grid-zip"
  //           >
  //             Zip
  //           </label>
  //           <input
  //             className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
  //             id="grid-zip"
  //             type="text"
  //             placeholder={90210}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default User;
