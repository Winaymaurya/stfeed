import { useFormik } from "formik";
import { signUpSchema } from "../../../schema";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const SingUp = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
        navigate("/singIn");
      },
    });

  return (
    <>
      <div className="relative min-h-screen flex ">
        <div className="flex flex-col  items-center justify-center flex-auto min-w-0 bg-blue-500 ">
          <div className=" bg-white border-2 rounded-xl p-3">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-gray-900 animate-pulse">
                  Welcome
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Please create your account
                </p>
              </div>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  {!values.email || errors.email ? null : (
                    <div className="absolute right-3 mt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  )}
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Email
                  </label>

                  <input
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email ? (
                    <p className="ml-3 text-sm font-bold text-red-700 tracking-wide animate-bounce">
                      {errors.email}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative">
                  {!values.rollNumber || errors.rollNumber ? null : (
                    <div className="absolute right-3 mt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  )}
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Roll Number
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type="number"
                    placeholder="Enter Your Roll Number"
                    name="rollNumber"
                    value={values.rollNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.rollNumber ? (
                    <p className="ml-3 text-sm font-bold text-red-700 tracking-wide animate-bounce">
                      {errors.rollNumber}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative">
                  {!values.password || errors.password ? null : (
                    <div className="absolute right-3 mt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  )}
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password ? (
                    <p className="ml-3 text-sm font-bold text-red-700 tracking-wide animate-bounce">
                      {errors.password}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative">
                  {!values.cPassword || errors.cPassword ? null : (
                    <div className="absolute right-3 mt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  )}
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Confirm Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password"
                    placeholder="Enter your password"
                    name="cPassword"
                    value={values.cPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.cPassword ? (
                    <p className="ml-3 text-sm font-bold text-red-700 tracking-wide animate-bounce">
                      {errors.cPassword}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Already have an account?</span>
                  <a
                    className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                    onClick={() => navigate("/SingIn")}
                  >
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
