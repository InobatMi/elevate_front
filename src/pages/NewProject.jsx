import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const NewProject = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const categories = [
    {
      name: "Music",
    },
    {
      name: "Robots",
    },
    {
      name: "Technology",
    },
    {
      name: "Art",
    },
    {
      name: "Economics",
    },
    {
      name: "Food",
    },
    {
      name: "Apps",
    },
    {
      name: "Public",
    },
    {
      name: "Books",
    },
  ];

  return (
    <section className="flex items-center  bg-slate-200 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="bg-white rounded px-7 md:w-[45vw] w-[70vw]">
        <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Add Your Project
        </h2>
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 my-5 sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <div>
            <label
              htmlFor="category"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Category
            </label>
            <select
              {...register("category")}
              className=" border-2 rounded py-2 w-full px-3"
              id="category"
            >
              {categories.map((category, index) => (
                <option value={category.name} key={index}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                id="name"
                {...register("name")}
                type="text"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                placeholder="Give a title"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Cover photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  aria-hidden="true"
                  className="mx-auto size-12 text-gray-300"
                />
                <div className="mt-4 flex text-sm/6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs/5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Description
              </label>
            </div>
            <div className="mt-2">
              <textarea
                id="description"
                {...register("description")}
                type="description"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                placeholder="Write a few sentences about project"
              ></textarea>
            </div>
          </div>

          <div>
            <Link to="/Projects">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Add a project
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewProject;
