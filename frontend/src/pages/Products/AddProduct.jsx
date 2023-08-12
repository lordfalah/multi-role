import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/product/ProductApi";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    price: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const onForm = async (e) => {
    e.preventDefault();
    const { name, price } = form;

    try {
      await dispatch(
        createProduct({ name, price: parseInt(price), image: selectedFile })
      ).unwrap();

      navigate("/dashboard/product");
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const onChanges = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <form
        onSubmit={onForm}
        method="post"
        encType="multipart/form-data"
        className="bg-white shadow-md rounded px-8 py-8 flex justify-center flex-col h-fit w-fit"
      >
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
              name="name"
              placeholder="Jane"
              onChange={onChanges}
              value={form.name}
              required
              autoComplete="off"
            />
            <p className="text-red text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="price"
            >
              PRICE
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="price"
              type="number"
              name="price"
              placeholder="xxxxx"
              onChange={onChanges}
              value={form.price}
              required
              autoComplete="off"
            />
          </div>
        </div>
        <div className="-mx-3 md:flex ">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              id="image"
              type="file"
              placeholder="xxxxx"
              onChange={handleImageChange}
              required
            />
            <p className="text-grey-dark text-xs italic mt-2">
              Maximal size file is 5mb
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="bg-slate-500 text-white w-fit mt-8 rounded-full px-5 py-2  "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
