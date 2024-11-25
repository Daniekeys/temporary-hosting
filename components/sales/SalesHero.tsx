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
import check from "../../assets/svg/check-icon.svg";
import { useRouter } from "next/router";

const initialValues = {
  name: "",
  email: "",
  phonenumber: "",
  orgName: "",
  dataNeed: "",
  dataType: "",
  painPoint: "",
};
 
const SalesHero = () => {

  const [success, setSuccess] = useState(false);
  const [stage, setStage] = useState(1);
  const router = useRouter();
  
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
              {success ? (
                <div className="w-full bg-white rounded-[20px] max-w-[536px] py-12 lg:py-16    ">
                  <div className="w-full max-w-[341px] flex flex-col mx-auto items-center">
                    <span>
                      <Image
                        src={check}
                        alt="checker"
                        width={120}
                        height={120}
                      />
                    </span>

                    <p className="text-[14px] font-sans lg:text-[16px] text-[#333] font-medium mt-4 text-center">
                      Thank you for completing the form. It was nice meeting you
                      and your business.
                    </p>

                    <div className="w-full max-w-[287px] mx-auto mt-14 ">
                      <button
                        type="button"
                        className={`w-full   bg-[#4747D6] rounded-[30px] py-[10px] px-5 font-sans flex items-center justify-center text-white font-semibold`}
                        onClick={() => router.push("/")}
                      >
                        Go Home
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Formik
                  initialValues={initialValues}
                  validationSchema={Yup.object().shape({
                    name: Yup.string().required("Name is required"),
                    email: Yup.string()
                      .matches(/@/, "Email must contain the '@' symbol")
                      .email("Must be a valid email")
                      .max(255, "Email must be at most 255 characters")
                      .required("Email is required"),
                    orgName: Yup.string().required(
                      "Organization Name is required"
                    ),

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

                    dataNeed: Yup.string().required(
                      "Please the type of data you need"
                    ),
                    painPoint: Yup.string(),
                  })}
                  onSubmit={async (values) => {
                    try {
                      const response = await axios.post(
                        "https://api.wecollect.tech/sale-info",
                        {
                          name: values.name,
                          email: values.email,
                          phone: values.phonenumber,
                          orgName: values.orgName,
                          dataNeeded: values.dataNeed,
                          dataPainPoint: values.painPoint,
                          dataType: values.dataType,
                        }
                      );

                      if (response.status === 200) {
                        console.log(
                          "Data successfully sent to server:",
                          response.data
                        );
                        setSuccess(true);

                        // 2. Send notification to Slack
                        await axios.post("/api/send-to-slack", {
                          name: values.name,
                          email: values.email,
                          phone: values.phonenumber,
                          orgName: values.orgName,
                          dataNeeded: values.dataNeed,
                          dataType: values.dataType,
                          painPoint: values.painPoint,
                        });
                        console.log("Notification sent to Slack!");
                      }
                    } catch (error) {
                      console.error("An error occurred:", error);
                      setSuccess(false);
                    } finally {
                      setSuccess(true);
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
                      <h1 className="text-primary font-semibold text-mainBlue lg:max-w-[500px] lg:text-[40px] 2xl:text-[48px] text-2xl lg:leading-[65px] pl-10 mt-10 lg:mt-4  font-serif">
                        Help Us Meet Your Data Need!
                      </h1>
                      <p className="mt-4 text-ash text-[16px] lg:text-[18px]  lg:pl-10 font-sans">
                        Kindly provide more details on the data you are
                        requesting
                      </p>
                      <div className="w-full  rounded-[20px]  pb-5 ">
                        <div className="w-full flex flex-col xl:w-10/12 lg:pl-10 text-[#333]">
                          {/* form session */}
                          <div className="mt-10 lg:mt-14 flex flex-col">
                            {stage === 1 && (
                              <div className="flex flex-col space-y-[30px]">
                                {/* single input */}
                                <div className="flex flex-col">
                                  <label className="text-[#333] text-[14px] font-sans lg:text-[16px] font-semibold">
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
                                  <label className="text-[#333] text-[14px] font-sans lg:text-[16px] font-semibold">
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
                                    className={`w-full h-[42px] rounded-[8px] border px-3 lg:px-5 outline-none placeholder:text-[14px] lg:placeholder:text-[16px] placeholder:text-[#999] font-medium mt-2 
      ${
        errors.email && touched.email
          ? "border-red-500"
          : "border-[#333] border-opacity-30"
      }
    `}
                                    placeholder="johndoe@wecollect.tech"
                                  />
                                </div>
                                {/* end of single input */}
                                {/* single input */}
                                <div className="flex flex-col">
                                  <label className="text-[#333] text-[14px] font-sans lg:text-[16px] font-semibold">
                                    Phone
                                  </label>
                                  <input
                                    id="age"
                                    name="phonenumber"
                                    type="tel"
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
                                  <label className="text-[#333] text-[14px] font-sans lg:text-[16px] font-semibold">
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
                                  <label className="text-[#333] text-[14px] font-sans lg:text-[16px] font-semibold">
                                    Data Need*
                                  </label>
                                  <div className="w-full border h-[42px] pr-4 flex items-center bg-white rounded-md shadow-sm focus:outline-none   focus:border-[#333] border-opacity-30">
                                    <select
                                      id="gender"
                                      name="dataNeed"
                                      value={values.dataNeed}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      className="mt-2 block w-full px-3 border h-[42px] font-sans  bg-transparent  focus:outline-none  border-none sm:text-[14px]   "
                                    >
                                      <option
                                        className="font-sans"
                                        value=" Select Data Need"
                                      >
                                        Select Data Need
                                      </option>
                                      <option
                                        className="font-sans"
                                        value=" Academics"
                                      >
                                        Academics
                                      </option>
                                      <option
                                        className="font-sans"
                                        value=" Research"
                                      >
                                        Research
                                      </option>
                                      <option
                                        className="font-sans"
                                        value=" Marketing"
                                      >
                                        Marketing
                                      </option>
                                      <option
                                        className="font-sans"
                                        value="  Media and Publishing"
                                      >
                                        Media and Publishing
                                      </option>
                                      <option
                                        className="font-sans"
                                        value="Business growth"
                                      >
                                        Business growth
                                      </option>
                                      <option
                                        className="font-sans"
                                        value="Governance"
                                      >
                                        Governance
                                      </option>
                                      <option
                                        className="font-sans"
                                        value=" Others"
                                      >
                                        Others
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                {/* end of single input */}
                                {/* single input */}
                                <div className="flex flex-col">
                                  <label className="text-[#333] text-[14px] font-sans lg:text-[16px] font-semibold">
                                    Data Type*
                                  </label>
                                  <div className="w-full border h-[42px] pr-4 flex items-center bg-white rounded-md shadow-sm focus:outline-none   focus:border-[#333] border-opacity-30">
                                    <select
                                      id="type"
                                      name="dataType"
                                      value={values.dataType}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      className="mt-2 block w-full px-3 font-sans border h-[42px]  bg-transparent  focus:outline-none  border-none sm:text-[14px]   "
                                    >
                                      <option
                                        className="font-sans"
                                        value="male"
                                      >
                                        Select Data Type
                                      </option>
                                      <option
                                        className="font-sans"
                                        value=" Interviews & Survey"
                                      >
                                        Interviews & Survey
                                      </option>
                                      <option
                                        className="font-sans"
                                        value=" Asset Enumeration"
                                      >
                                        Asset Enumeration
                                      </option>
                                      <option
                                        className="font-sans"
                                        value=" Environmental Assessment"
                                      >
                                        Environmental Assessment
                                      </option>
                                      <option
                                        className="font-sans"
                                        value=" Monitoring Evaluation"
                                      >
                                        Monitoring Evaluation
                                      </option>
                                      <option
                                        className="font-sans"
                                        value="Incident Reporting"
                                      >
                                        Incident Reporting
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                {/* end of single input */}
                                {/* single input */}
                                <div className="flex flex-col">
                                  <label className="text-[#1e1e1e] text-[14px] font-sans lg:text-[16px] font-semibold">
                                    Brief Description or Direction on Data *
                                  </label>
                                  <textarea
                                    id="phonenumber"
                                    name="painPoint"
                                    value={values.painPoint}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full h-[120px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-[14px] lg:placeholder:text-[16px] placeholder:text-[#999] font-medium mt-2 flex items-start pt-2"
                                    placeholder="Enter your data pain point"
                                  />
                                </div>
                                {/* end of single input */}
                              </div>
                            )}
                          </div>

                          <button
                            // disabled={!isValid || isSubmitting}
                            type="submit"
                            className={`w-full ${
                              isValid ? "bg-[#4747D6]" : "bg-slate-500"
                            } rounded-[30px] font-sans py-[10px] px-5 mt-10 flex items-center justify-center text-white font-semibold`}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              )}
            </div>
            {/* end of list */}
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default SalesHero;
