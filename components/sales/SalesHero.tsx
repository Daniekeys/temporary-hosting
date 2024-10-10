import React, { useState } from "react";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/pop-sweet.png";
import Image from "next/image";
import MobileNav from "../navbar/mobile-nav";
import saleBoy from "../../assets/png/sales-boy.png";
import * as Yup from "yup";
import axios from "axios";
import { Formik } from "formik";
const initialValues = {
  name: "",
  email: "",
  gender: "male",
  age: "",
  phonenumber: "",
  orgName: "",
  dataNeed: "",
  painPoint: "",
};

const SalesHero = () => {
  const [success, setSuccess] = useState(false);
  const [stage, setStage] = useState(1);
  return (
    <div className=" w-full h-full sales-hero-bg  ">
      <div className="w-full lg:h-screen h-screen l  relative  flex flex-col">
        <NewNavbar />
        <MobileNav present={2} />
        <ContainerLayout>
          <div className="w-full flex flex-col lg:flex-row pt-20 gap-8 lg:h-screen ">
            {/* start of boy */}
            <div className="w-full lg:w-1/2 lg:flex justify-center overflow-y-hidden hidden">
              <Image
                src={saleBoy}
                alt="sales"
                className="w-auto object-contain h-auto max-h-[839px]"
              />
            </div>
            {/* end pf boy */}
            {/* start of list of boy */}
            <div className="w-full lg:w-1/2 flex flex-col items-center h-[90vh] flow-hide">
              <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape({
                  name: Yup.string().required("Name is required"),
                  email: Yup.string()
                    .email("Must be a valid email")
                    .max(255)
                    .required("Email is required"),
                  gender: Yup.string().required("Gender is required"),
                  age: Yup.number()
                    .required("Age is required")
                    .positive()
                    .integer(),
                  phonenumber: Yup.string()
                    .required("Phonenumber is required")
                    .min(
                      11,
                      "Please ensure your phonenumber is eleven characters and starts with a zero"
                    )
                    .max(
                      11,
                      "Please ensure your phonenumber is eleven characters and starts with a zero"
                    )
                    // eslint-disable-next-line func-names
                    .test("isValid", "Invalid phonenumber", function (value) {
                      if (value === undefined) return false;
                      return /(^0)(7|8|9){1}(0|1){1}[0-9]{8}/.test(
                        value.trim().replace(/\s/g, "")
                      );
                    }),
                  orgName: Yup.string().required("Academic level is required"),
                  dataNeed: Yup.string().required(
                    "Please input your institution"
                  ),
                  painPoint: Yup.string(),
                })}
                onSubmit={async (values) => {
                  try {
                    const response = await axios.post(
                      "https://api.wecollect.tech/createAmbassador/",
                      {
                        name: values.name,
                        email: values.email,
                        gender: values.gender,
                        age: values.age,
                        phonenumber: values.phonenumber,
                      }
                    );

                    if (response.status === 200) {
                      console.log(response.data);
                      setSuccess(true);
                    }
                  } catch (e) {
                    throw new Error(e);
                  }
                }}
              >
                {({
                  values,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  isValid,
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col"
                  >
                    <h1 className="text-primary font-semibold text-mainBlue lg:max-w-[500px] lg:text-[40px] 2xl:text-[48px] text-2xl lg:leading-[65px] pl-10 mt-10 lg:mt-4 ">
                      Your Data Journey Begins Here
                    </h1>
                    <p className="mt-4 text-ash text-[16px] lg:text-[18px]  lg:pl-10">
                      Help Us learn more about your data needs.
                    </p>
                    <div className="w-full  rounded-[20px]  pb-5 ">
                      <div className="w-full flex flex-col xl:w-10/12 lg:pl-10 text-[#333]">
                        {/* form session */}
                        <div className="mt-10 lg:mt-14 flex flex-col">
                          {stage === 1 && (
                            <div className="flex flex-col space-y-[30px]">
                              {/* single input */}
                              <div className="flex flex-col">
                                <label className="text-[#333] text-[14px] lg:text-[16px] font-semibold">
                                  Name*
                                </label>
                                <input
                                  id="name"
                                  name="name"
                                  type="text"
                                  value={values.name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-[14px] lg:placeholder:text-[16px] placeholder:text-[#999] font-medium mt-2"
                                  placeholder="Enter full name"
                                />
                              </div>
                              {/* end of single input */}
                              {/* single input */}
                              <div className="flex flex-col">
                                <label className="text-[#333] text-[14px] lg:text-[16px] font-semibold">
                                  Email Address
                                </label>
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  required
                                  value={values.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-[14px] lg:placeholder:text-[16px] placeholder:text-[#999] font-medium mt-2"
                                  placeholder="johndoe@wecollect.tech"
                                />
                              </div>
                              {/* end of single input */}
                              {/* single input */}
                              <div className="flex flex-col">
                                <label className="text-[#333] text-[14px] lg:text-[16px] font-semibold">
                                  Phone
                                </label>
                                <input
                                  id="age"
                                  name="phonenumber"
                                  type="number"
                                  value={values.phonenumber}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-[14px] lg:placeholder:text-[16px] placeholder:text-[#999] font-medium mt-2"
                                  placeholder="Enter phone"
                                />
                              </div>
                              {/* end of single input */}
                              {/* single input */}
                              <div className="flex flex-col">
                                <label className="text-[#333] text-[14px] lg:text-[16px] font-semibold">
                                  Organization Name*
                                </label>
                                <input
                                  id="name"
                                  name="orgName"
                                  type="text"
                                  value={values.orgName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-[14px] lg:placeholder:text-[16px] placeholder:text-[#999] font-medium mt-2"
                                  placeholder="Enter full name"
                                />
                              </div>
                              {/* end of single input */}
                              {/* single input */}
                              <div className="flex flex-col">
                                <label className="text-[#333] text-[14px] lg:text-[16px] font-semibold">
                                  Data Need*
                                </label>
                                <div className="w-full border h-[42px] pr-4 flex items-center bg-white rounded-md shadow-sm focus:outline-none   focus:border-[#333] border-opacity-30">
                                  <select
                                    id="gender"
                                    name="dataNeed"
                                    value={values.dataNeed}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="mt-2 block w-full px-3 border h-[42px]  bg-transparent  focus:outline-none  border-none sm:text-[14px]   "
                                  >
                                    <option value="male">Research</option>
                                    <option value="female">Survey</option>
                                  </select>
                                </div>
                              </div>
                              {/* end of single input */}
                              {/* single input */}
                              <div className="flex flex-col">
                                <label className="text-[#333] text-[14px] lg:text-[16px] font-semibold">
                                  What Are Your Data Pain Point *
                                </label>
                                <input
                                  id="phonenumber"
                                  name="phonenumber"
                                  type="tel"
                                  value={values.phonenumber}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-[14px] lg:placeholder:text-[16px] placeholder:text-[#999] font-medium mt-2"
                                  placeholder="Enter your data pain point"
                                />
                              </div>
                              {/* end of single input */}
                            </div>
                          )}
                        </div>

                        {stage === 1 && (
                          <button
                            disabled={!isValid || isSubmitting}
                            type="submit"
                            className={`w-full ${
                              isValid ? "bg-[#4747D6]" : "bg-slate-500"
                            } rounded-[30px] py-[10px] px-5 mt-10 flex items-center justify-center text-white font-semibold`}
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
            {/* end of list */}
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default SalesHero;
