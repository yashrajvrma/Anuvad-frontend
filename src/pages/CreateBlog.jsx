import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { RefreshCcw } from "lucide-react";
import axios from "axios";

export default function CreateBlog() {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [language, setLanguage] = useState("Hindi");

  const [res, setres] = useState({
    title: "",
    description: "",
    language: "",
  });

  const [formData, setFormData] = useState({
    title: "",
    language: "hi",
    description: "",
  });

  const [preview, setPreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleOnTranslate = async () => {
    console.log("in");
    console.log("formData" + formData.description);
    console.log("formData" + formData.title);
    console.log("formData" + formData.language);
    if (
      !formData.title ||
      !formData.language ||
      (!formData.description && !selectedFile)
    ) {
      return;
    }

    // console.log("in");
    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("description", description);
    // formData.append("image", selectedImage);
    // if (selectedFile) formData.append("file", selectedFile);
    // formData.append("language", language);

    try {
      // Log the formData for debugging
      console.log(formData);

      // Make the POST request with JSON data
      const response = await axios.post(
        "http://localhost:8000/translate", // Replace with the correct endpoint
        {
          target_language: formData.language,
          text: formData.title,
        },
        {
          headers: {
            "Content-Type": "application/json", // Specify the content type
          },
        }
      );

      // Log the response
      console.log("Response:", response.data);
      setres((prevRes) => ({
        ...prevRes,
        title: response.data.translation,
      }));
    } catch (error) {
      // Log any errors
      console.error("Error fetching docs:", error);
    }
    // file upload
    if (
      selectedFile?.name.split(".")[1] === "mp4" ||
      selectedFile?.name.split(".")[1] === "mov"
    ) {
      try {
        // Create a FormData object
        const formData = new FormData();
        formData.append("file", selectedFile); // Append the file to FormData
        // If you need to send additional data, you can append it as well
        // formData.append("additionalData", "value");

        // Log the formData for debugging
        console.log(formData);

        // Make the POST request with the form data
        const videoResponse = await axios.post(
          "http://localhost:8000/video-to-text", // Replace with your API endpoint
          formData, // Send the formData containing the file
          {
            headers: {
              // No need to set Content-Type manually; Axios will do that for you
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Log the response
        console.log("Response:", videoResponse.data);

        // Update state with the response
        // setres((prevRes) => ({
        //   ...prevRes,
        //   description: videoResponse.data.text,
        // }));
        setFormData((prev) => ({
          ...prev,
          description: videoResponse.data.text,
        }));

        console.log("desc" + formData.description);
        setSelectedFile(null);
        console.log("formData inside image" + formData);
      } catch (error) {
        // Log any errors
        console.error("Error fetching docs:", error);
      }
    } else {
      // description
      if (formData.description != "") {
        try {
          // Log the formData for debugging
          console.log(formData);

          // Make the POST request with JSON data
          const response = await axios.post(
            "http://localhost:8000/translate", // Replace with the correct endpoint
            {
              target_language: formData.language,
              text: formData.description,
            },
            {
              headers: {
                "Content-Type": "application/json", // Specify the content type
              },
            }
          );

          // Log the response
          console.log("Response:", response.data);
          setres((prevRes) => ({
            ...prevRes,
            description: response.data.translation,
          }));
        } catch (error) {
          // Log any errors
          console.error("Error fetching docs:", error);
        }
      }
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="">Create Post</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-hidden">
          <div className="relative min-h-screen rounded-xl bg-muted/50 flex flex-col">
            {/* Content */}
            <div className="flex justify-center items-start gap-6 p-6 h-full">
              {/* Left Panel */}
              <div className="w-1/2 h-[700px] bg-white shadow-md rounded-lg p-6 flex flex-col">
                {/* Title Input */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData, // Spread the previous state to retain other properties
                        title: e.target.value, // Update only the `title` field
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Upload Image Section */}
                <label
                  htmlFor="uploadImage"
                  className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col justify-center items-center text-gray-400 mb-4 cursor-pointer"
                >
                  <div className="text-2xl mb-2">
                    <i className="fa-solid fa-cloud-arrow-up"></i>
                  </div>
                  <p className="font-medium">Upload image</p>
                  <p className="text-sm">Max 1000 KB files are allowed</p>
                  <input
                    id="uploadImage"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
                {selectedImage && (
                  <p className="text-center text-sm text-gray-500 mb-4">
                    Selected file: {selectedImage.name}
                  </p>
                )}

                {/* Description Input */}
                <div className="mb-4 flex-grow">
                  <textarea
                    placeholder="Write a description...."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                    rows="6"
                    className="w-full h-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Upload File Section */}
                <label
                  htmlFor="uploadFile"
                  className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col justify-center items-center text-gray-400 mb-4 cursor-pointer"
                >
                  <div className="text-2xl mb-2">
                    <i className="fa-solid fa-cloud-arrow-up"></i>
                  </div>
                  <p className="font-medium">Upload file</p>
                  <p className="text-sm">Accepted: .pdf, .docx, .mp4, .mov</p>
                  <input
                    id="uploadFile"
                    type="file"
                    accept=".pdf,.docx,.mp4,.mov"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </label>
                {selectedFile && (
                  <p className="text-center text-sm text-gray-500 mb-4">
                    Selected file: {selectedFile.name}
                  </p>
                )}
              </div>

              <div className="flex justify-center items-center h-[700px]">
                <button
                  onClick={() => handleOnTranslate()}
                  // disabled={!isFormValid}
                  // className={`px-4 py-2 rounded-md ${
                  //   isFormValid
                  //     ? "bg-blue-500 text-white hover:bg-blue-600"
                  //     : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  // }`}
                >
                  <RefreshCcw />
                </button>
              </div>

              {/* Right Panel */}
              <div className="w-1/2 h-[700px] bg-white shadow-md rounded-lg p-6 flex flex-col">
                {/* Language Dropdown */}
                <div className="flex items-center justify-between mb-6">
                  <select
                    value={formData.language}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        language: e.target.value,
                      })
                    }
                    className="border border-gray-300 rounded-md p-3 w-3/4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="hi">Hindi</option>
                    <option value="mr">Marathi</option>
                    <option value="gu">Gujarati</option>
                    <option value="ta">Tamil</option>
                    <option value="kn">Kannada</option>
                    <option value="te">Telugu</option>
                    <option value="bn">Bengali</option>
                    <option value="ml">Malayalam</option>
                    <option value="pa">Punjabi</option>
                    <option value="or">Odia</option>
                  </select>
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full text-green-600 font-bold">
                    97%
                  </div>
                </div>

                {/* Readonly Textarea */}
                <div className="flex-grow">
                  <input
                    type="text"
                    value={res.title}
                    placeholder="translated title"
                    readOnly
                    className="w-full h-4 border rounded-md p-3 text-gray-700 bg-neutral-50 placeholder-gray-400 focus:outline-none py-5 mb-4"
                  />
                  <textarea
                    readOnly
                    value={res.description}
                    placeholder="translated description"
                    className="w-full h-full border rounded-md p-3 text-gray-700 bg-neutral-50 placeholder-gray-400 focus:outline-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="fixed bottom-4 right-4 flex justify-end gap-4 p-4">
              <button className="px-6 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none">
                Save Draft
              </button>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                Publish
              </button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
