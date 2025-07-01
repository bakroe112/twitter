import { Avatar } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";


const validationSchema = Yup.object().shape({
  content:Yup.string().required("Everyone can reply")
})

const HomeSection = () => {
  const handleSubmit = (values) =>{
      console.log("Values: ", values)
  }
  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });
  return (
    <div className="space-y-6">
      <section className="py-5 text-xl opacity-90 font-bold">For you</section>
      <section className="pb-10">
        <div className="flex space-x-5">
          <Avatar
            alt="username"
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          />

        <div  className="w-full">
            <form>
              <div>
                <input type="text" name="content" placeholder="What's happening?" className="border-none outline-none text-xl bg-transparent" {...formik.getFieldProps('content')}/>
                {formik.errors.content && formik.touched.content && (
                  <span className="text-blue-500 cursor-pointer font-bold ">{formik.errors.content}</span>
                )}
              </div>
              {/* <div> 
                <image alt='' src=""/>
              </div> */}
          
                <div className="flex justify-between items-center mt-5">
                  <div className="flex space-x-5 items-center">
                    <ImageIcon />
                  </div>
                </div>
          
            </form>
        </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
