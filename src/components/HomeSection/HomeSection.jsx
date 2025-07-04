import { Avatar, Button } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import TweetCard from "./TweetCard";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Everyone can reply"),
});

const HomeSection = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const [selectImage, setSelectImage] = useState("");

  const handleSubmit = (values) => {
    console.log("Values: ", values);
  };
  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = (event) => {
    setUploadImage(true);
    const imageUrl = event.target.files[0];
    formik.setFieldValue("image", imageUrl);
    setSelectImage(imageUrl);
    setUploadImage(false);
  };

  return (
    // border-r-[1px] border-l-[1px] border-gray-200
       // Chỗ component Home cái chính giữa trang chủ 
    <div className="space-y-4">
      <section className="flex flex-col border-b-[1px] border-gray-200 ">
        <div className="flex justify-between">
          <div className="flex justify-center w-full hover:bg-slate-100">
            <h1 className="py-5 text-lg opacity-90 font-semibold">For you</h1>
          </div>
          <div className="flex justify-center w-full  hover:bg-slate-100">
            <h1 className="py-5 text-lg opacity-90 font-semibold">Following</h1>
          </div>
        </div>
      </section>
      <section className="p-3 pt-0 border-b-[1px] border-gray-200">
        <div className="flex space-x-5">
          <Avatar
            alt="username"
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          />

          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  name="content"
                  placeholder="What's happening?"
                  className="border-none outline-none text-xl bg-transparent"
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-blue-500 cursor-pointer font-bold items-center text-[15px] items-center flex border-b-[1px] border-gray-200 pb-3">
                    <PublicOutlinedIcon fontSize="small" />
                    {formik.errors.content}
                  </span>
                )}
              </div>

              {/* <div> 
                  <image alt='' src=""/>
                </div> */}

              <div className="flex justify-between items-center mt-3">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center cursor-pointer rounded-md space-x-2">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <GifBoxOutlinedIcon className="text-[#1d9bf0] cursor-pointer" />
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"
                    height="22px"
                    width="22px"
                    className="cursor-pointer "
                  >
                    <g>
                      <path
                        fill="#1d9bf0"
                        d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"
                      ></path>
                    </g>
                  </svg>
                  <SentimentSatisfiedOutlinedIcon className="text-[#1d9bf0] cursor-pointer" />
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"
                    height="22px"
                    width="22px"
                    className="cursor-pointer"
                  >
                    <g>
                      <path
                        fill="#1d9bf0"
                        d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"
                      ></path>
                    </g>
                  </svg>
                  <LocationOnOutlinedIcon className="text-[#1d9bf0] opacity-50 " />
                </div>
                <div>
                  <Button
                    variant="contained"
                    disableRipple
                    sx={{
                      borderRadius: "20px",
                      py: "5px",
                      px: "8px",
                      bgcolor: "white",
                      color: "black",
                      textTransform: "none",
                      fontWeight: "700",
                    }}
                    type="submit"
                  >
                    Post
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="p-3 pt-0">
        <TweetCard />
      </section>
    </div>
  );
};

export default HomeSection;
