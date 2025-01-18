import React from "react";
import { Mic } from "lucide-react";
import { Input } from "@/components/ui/input";

function TranslatorUI() {
  return (
    <div className="min-h-screen bg-white-100 text-gray-100 flex justify-center items-center p-4">
      <div className="max-w-5xl w-full bg-neutral-900 rounded-2xl shadow-lg p-6">
        {/* <h1 className="text-2xl font-bold text-center mb-6">Translator</h1> */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="bg-neutral-800 px-0 py-4 rounded-lg flex flex-col border-2 border-neutral-500">
            <div className="flex flex-col justify-center mb-4 w-full px-5 gap-3">
              {/* <h2 className="font-sans text-sm bg-neutral-900 text-neutral-100 text-center rounded-full px-48 py-3"></h2> */}
              <div className="">Title</div>
              <Input type="text" placeholder="Title" />
              {/* <input
              type="text"
              placeholder="title"
              className="font-sans text-sm bg-neutral-900 focus:ring-0 rounded-md px-32 py-3"
            /> */}
            </div>
            <div className="hr-line w-full h-0.5 bg-neutral-700"></div>
            {/* <textarea
              className="bg-neutral-800  placeholder:text-xs text-gray-100 p-3 rounded-lg resize-none h-40 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Please enter text......"
            /> */}
            <textarea
              className="bg-neutral-800 h-96 text-xs placeholder:text-xs placeholder:text-neutral-400 text-neutral-200 p-3 rounded-lg resize-none mb-4  focus-visible:outline-none focus-visible:ring-0 ml-3"
              placeholder="Please enter text......"
            />
            <div className="flex justify-center items-center bg-neutral-900 rounded-full w-8 h-8 ml-4 my-5">
              {" "}
              <Mic size={16} strokeWidth={1.5} color="white" />
            </div>

            <div className="hr-line w-full h-0.5 bg-neutral-700"></div>
            <div></div>
            <div className="flex flex-col justify-center items-center">
              <div className="hover:cursor-text text-white px-4 py-2 text-xs mt-4">
                {" "}
                Upload your Text/Audio files
              </div>
              <div className="flex flex-row max-w-sm justify-center items-center gap-1.5 ">
                {/* <Label htmlFor="picture">Picture</Label> */}
                {/* <Input id="picture" type="file" /> */}
                <input
                  type="file"
                  className="bg-transparent border-2 rounded-full px-5 "
                />
              </div>

              {/* <input
                id="file-upload
                type="file"
                className="hidden"
                accept=".pdf"
              /> */}
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-700 p-4 rounded-lg flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Choose your language</h2>
              <div className="text-green-400 font-bold text-lg">97%</div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-16 h-16 text-teal-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 9h15M4.5 15h15m-7.5-6v6"
                />
              </svg>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-gray-900 hover:bg-gray-700 text-white p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.25L18.75 18.75M5.25 18.75L18.75 5.25"
                  />
                </svg>
              </button>
              <div className="flex space-x-2">
                <button className="bg-gray-900 hover:bg-gray-700 text-white p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 12.75h13.5m-6.75 6.75v-13.5"
                    />
                  </svg>
                </button>
                <button className="bg-gray-900 hover:bg-gray-700 text-white p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TranslatorUI;
