/* eslint-disable @next/next/no-img-element */
import React from "react";

const Profile = () => {
  return (
    <>
      <div
        id="main-content"
        className="relative w-full h-full p-5 overflow-y-auto bg-gray-50 lg:ml-64"
      >
        <div className="grid grid-cols-12 gap-3">
          {/* Profile */}
          <div className="col-span-12 xl:col-span-8">
            <div>
              <img
                className="object-cover w-full h-32 lg:h-48"
                src="/Images/cover.png"
                alt="cover"
              />
            </div>
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div className="flex">
                  <img
                    className="w-24 h-24 rounded-full ring-4 ring-blue-300 sm:h-32 sm:w-32"
                    src="/Images/Avatar.png"
                    alt="Avatar"
                  />
                </div>
                <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className="flex-1 min-w-0 mt-6 sm:hidden md:block">
                    <h1 className="text-2xl font-bold text-blue-300 truncate">
                      Youssef Adly
                    </h1>
                    <h6 className="font-light text-gray-500">
                      Product Designer at <b>Twitter</b>
                      {/* <h6>Manchester, UK</h6> */}
                    </h6>
                  </div>
                  <div className="flex flex-col mt-6 space-y-3 justify-stretch sm:flex-row sm:space-x-4 sm:space-y-0">
                    <button
                      type="button"
                      className="inline-flex justify-center px-5 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <span>Edit Profile</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 hidden min-w-0 mt-6 sm:block md:hidden">
                <h1 className="text-2xl font-bold text-blue-300 truncate">
                  Youssef Adly
                </h1>
              </div>
            </div>
            {/* About Me */}
            <div className="flex flex-col p-4 mx-auto my-5 bg-white border border-gray-200 group rounded-xl sm:px-6 lg:px-8">
              <div className="flex justify-between items-center font-semibold text-xl p-1">
                <h6 className="text-gray-900">About Me</h6>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="39"
                    height="39"
                    stroke="#D6DDEB"
                  />
                  <g clip-path="url(#clip0_407_15095)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.2322 15.7322C13.7011 15.2634 14.337 15 15 15H17.5C17.9602 15 18.3333 15.3731 18.3333 15.8333C18.3333 16.2936 17.9602 16.6667 17.5 16.6667H15C14.779 16.6667 14.567 16.7545 14.4107 16.9107C14.2545 17.067 14.1667 17.279 14.1667 17.5V25C14.1667 25.221 14.2545 25.433 14.4107 25.5893C14.567 25.7455 14.779 25.8333 15 25.8333H22.5C22.721 25.8333 22.933 25.7455 23.0893 25.5893C23.2455 25.433 23.3333 25.221 23.3333 25V22.5C23.3333 22.0398 23.7064 21.6667 24.1667 21.6667C24.6269 21.6667 25 22.0398 25 22.5V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H15C14.337 27.5 13.7011 27.2366 13.2322 26.7678C12.7634 26.2989 12.5 25.663 12.5 25V17.5C12.5 16.837 12.7634 16.2011 13.2322 15.7322Z"
                      fill="#4640DE"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.9944 12.3273C24.4822 11.8395 25.1438 11.5654 25.8337 11.5654C26.5235 11.5654 27.1851 11.8395 27.6729 12.3273C28.1607 12.8151 28.4348 13.4767 28.4348 14.1665C28.4348 14.8564 28.1607 15.518 27.6729 16.0058L20.5896 23.0891C20.4333 23.2454 20.2213 23.3332 20.0003 23.3332H17.5003C17.0401 23.3332 16.667 22.9601 16.667 22.4999V19.9999C16.667 19.7788 16.7548 19.5669 16.9111 19.4106L23.9944 12.3273ZM25.8337 13.2321C25.5858 13.2321 25.3482 13.3305 25.1729 13.5058L18.3337 20.345V21.6665H19.6551L26.4944 14.8273C26.6696 14.652 26.7681 14.4144 26.7681 14.1665C26.7681 13.9187 26.6696 13.681 26.4944 13.5058C26.3192 13.3305 26.0815 13.2321 25.8337 13.2321Z"
                      fill="#4640DE"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.7441 13.5771C23.0695 13.2516 23.5972 13.2516 23.9226 13.5771L26.4226 16.0771C26.748 16.4025 26.748 16.9302 26.4226 17.2556C26.0972 17.581 25.5695 17.581 25.2441 17.2556L22.7441 14.7556C22.4186 14.4302 22.4186 13.9025 22.7441 13.5771Z"
                      fill="#4640DE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_407_15095">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(10 10)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between p-4 text-gray-500">
                <p className="text-gray-500">
                  Iam a product designer + filmmaker currently working remotely
                  at Twitter from beautiful Manchester, United Kingdom. Iam
                  passionate about designing digital products that have a
                  positive impact on the world.
                </p>
              </div>
              <div className="flex justify-between p-4 text-gray-500">
                <p>
                  For 10 years, I have specialised in interface, experience &
                  interaction design as well as working in user research and
                  product strategy for product agencies, big tech companies &
                  start-ups.
                </p>
              </div>
            </div>
            {/* Experiances */}
            <div className="flex flex-col p-4 mx-auto my-5 bg-white border border-gray-200 group rounded-xl sm:px-6 lg:px-8">
              <div className="flex justify-between items-center font-semibold text-xl p-1">
                <h6 className="text-gray-900">Experiences</h6>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="39"
                    height="39"
                    stroke="#D6DDEB"
                  />
                  <g clip-path="url(#clip0_407_18498)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20 12C20.5523 12 21 12.4477 21 13V27C21 27.5523 20.5523 28 20 28C19.4477 28 19 27.5523 19 27V13C19 12.4477 19.4477 12 20 12Z"
                      fill="#4640DE"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 20C12 19.4477 12.4477 19 13 19H27C27.5523 19 28 19.4477 28 20C28 20.5523 27.5523 21 27 21H13C12.4477 21 12 20.5523 12 20Z"
                      fill="#4640DE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_407_18498">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(8 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* 1st Experiences */}
              <div className="flex justify-between items-start p-4 gap-x-5 text-gray-500">
                <div className="hidden md:block">
                  <svg
                    width={80}
                    height={80}
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width={80}
                      height={80}
                      rx={40}
                      fill="url(#pattern0)"
                    />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <use
                          xlinkHref="#image0_407_18506"
                          transform="scale(0.0025)"
                        />
                      </pattern>
                      <image
                        id="image0_407_18506"
                        width={400}
                        height={400}
                        xlinkHref="data:image/jpeg;base64,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"
                      />
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between my-1">
                    <h6 className="text-gray-950 font-semibold">
                      Product Designer
                    </h6>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        stroke="#D6DDEB"
                      />
                      <g clip-path="url(#clip0_407_18511)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.2322 15.7322C13.7011 15.2634 14.337 15 15 15H17.5C17.9602 15 18.3333 15.3731 18.3333 15.8333C18.3333 16.2936 17.9602 16.6667 17.5 16.6667H15C14.779 16.6667 14.567 16.7545 14.4107 16.9107C14.2545 17.067 14.1667 17.279 14.1667 17.5V25C14.1667 25.221 14.2545 25.433 14.4107 25.5893C14.567 25.7455 14.779 25.8333 15 25.8333H22.5C22.721 25.8333 22.933 25.7455 23.0893 25.5893C23.2455 25.433 23.3333 25.221 23.3333 25V22.5C23.3333 22.0398 23.7064 21.6667 24.1667 21.6667C24.6269 21.6667 25 22.0398 25 22.5V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H15C14.337 27.5 13.7011 27.2366 13.2322 26.7678C12.7634 26.2989 12.5 25.663 12.5 25V17.5C12.5 16.837 12.7634 16.2011 13.2322 15.7322Z"
                          fill="#4640DE"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.9944 12.3273C24.4822 11.8395 25.1438 11.5654 25.8337 11.5654C26.5235 11.5654 27.1851 11.8395 27.6729 12.3273C28.1607 12.8151 28.4348 13.4767 28.4348 14.1665C28.4348 14.8564 28.1607 15.518 27.6729 16.0058L20.5896 23.0891C20.4333 23.2454 20.2213 23.3332 20.0003 23.3332H17.5003C17.0401 23.3332 16.667 22.9601 16.667 22.4999V19.9999C16.667 19.7788 16.7548 19.5669 16.9111 19.4106L23.9944 12.3273ZM25.8337 13.2321C25.5858 13.2321 25.3482 13.3305 25.1729 13.5058L18.3337 20.345V21.6665H19.6551L26.4944 14.8273C26.6696 14.652 26.7681 14.4144 26.7681 14.1665C26.7681 13.9187 26.6696 13.681 26.4944 13.5058C26.3192 13.3305 26.0815 13.2321 25.8337 13.2321Z"
                          fill="#4640DE"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.7441 13.5771C23.0695 13.2516 23.5972 13.2516 23.9226 13.5771L26.4226 16.0771C26.748 16.4025 26.748 16.9302 26.4226 17.2556C26.0972 17.581 25.5695 17.581 25.2441 17.2556L22.7441 14.7556C22.4186 14.4302 22.4186 13.9025 22.7441 13.5771Z"
                          fill="#4640DE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_407_18511">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(10 10)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-x-2">
                    <span className="text-gray-700 font-semibold">Twitter</span>
                    <span>
                      <svg
                        width="4"
                        height="5"
                        viewBox="0 0 4 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2.5" r="2" fill="#A8ADB7" />
                      </svg>
                    </span>
                    <span>Full-Time</span>
                    <span>
                      <svg
                        width="4"
                        height="5"
                        viewBox="0 0 4 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2.5" r="2" fill="#A8ADB7" />
                      </svg>
                    </span>
                    <span>Jun 2019 - Present (1y 1m)</span>
                  </div>
                  <div className="text-center sm:text-left">Manchester, UK</div>
                  <div className="flex justify-between py-4 text-gray-700">
                    <p>
                      Created and executed social media plan for 10 brands
                      utilizing multiple features and content types to increase
                      brand outreach, engagement, and leads.
                    </p>
                  </div>
                </div>
              </div>
              <hr></hr>
              {/* 2st Experiences */}
              <div className="flex justify-between items-start p-4 gap-x-5 text-gray-500">
                <div className="hidden md:block">
                  <svg
                    width={80}
                    height={80}
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width={80}
                      height={80}
                      rx={40}
                      fill="url(#pattern0)"
                    />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <use
                          xlinkHref="#image0_407_18506"
                          transform="scale(0.0025)"
                        />
                      </pattern>
                      <image
                        id="image0_407_18506"
                        width={400}
                        height={400}
                        xlinkHref="data:image/jpeg;base64,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"
                      />
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <h6 className="text-gray-950 font-semibold">
                      Growth Marketing Designer
                    </h6>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        stroke="#D6DDEB"
                      />
                      <g clip-path="url(#clip0_407_18511)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.2322 15.7322C13.7011 15.2634 14.337 15 15 15H17.5C17.9602 15 18.3333 15.3731 18.3333 15.8333C18.3333 16.2936 17.9602 16.6667 17.5 16.6667H15C14.779 16.6667 14.567 16.7545 14.4107 16.9107C14.2545 17.067 14.1667 17.279 14.1667 17.5V25C14.1667 25.221 14.2545 25.433 14.4107 25.5893C14.567 25.7455 14.779 25.8333 15 25.8333H22.5C22.721 25.8333 22.933 25.7455 23.0893 25.5893C23.2455 25.433 23.3333 25.221 23.3333 25V22.5C23.3333 22.0398 23.7064 21.6667 24.1667 21.6667C24.6269 21.6667 25 22.0398 25 22.5V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H15C14.337 27.5 13.7011 27.2366 13.2322 26.7678C12.7634 26.2989 12.5 25.663 12.5 25V17.5C12.5 16.837 12.7634 16.2011 13.2322 15.7322Z"
                          fill="#4640DE"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.9944 12.3273C24.4822 11.8395 25.1438 11.5654 25.8337 11.5654C26.5235 11.5654 27.1851 11.8395 27.6729 12.3273C28.1607 12.8151 28.4348 13.4767 28.4348 14.1665C28.4348 14.8564 28.1607 15.518 27.6729 16.0058L20.5896 23.0891C20.4333 23.2454 20.2213 23.3332 20.0003 23.3332H17.5003C17.0401 23.3332 16.667 22.9601 16.667 22.4999V19.9999C16.667 19.7788 16.7548 19.5669 16.9111 19.4106L23.9944 12.3273ZM25.8337 13.2321C25.5858 13.2321 25.3482 13.3305 25.1729 13.5058L18.3337 20.345V21.6665H19.6551L26.4944 14.8273C26.6696 14.652 26.7681 14.4144 26.7681 14.1665C26.7681 13.9187 26.6696 13.681 26.4944 13.5058C26.3192 13.3305 26.0815 13.2321 25.8337 13.2321Z"
                          fill="#4640DE"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.7441 13.5771C23.0695 13.2516 23.5972 13.2516 23.9226 13.5771L26.4226 16.0771C26.748 16.4025 26.748 16.9302 26.4226 17.2556C26.0972 17.581 25.5695 17.581 25.2441 17.2556L22.7441 14.7556C22.4186 14.4302 22.4186 13.9025 22.7441 13.5771Z"
                          fill="#4640DE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_407_18511">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(10 10)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-x-2  my-1">
                    <span className="text-gray-700 font-semibold">GoDaddy</span>
                    <span>
                      <svg
                        width="4"
                        height="5"
                        viewBox="0 0 4 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2.5" r="2" fill="#A8ADB7" />
                      </svg>
                    </span>
                    <span>Full-Time</span>
                    <span>
                      <svg
                        width="4"
                        height="5"
                        viewBox="0 0 4 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2.5" r="2" fill="#A8ADB7" />
                      </svg>
                    </span>
                    <span>Jun 2011 - May 2019 (8y)</span>
                  </div>
                  <div className="text-center sm:text-left">Manchester, UK</div>
                  <div className="flex justify-between py-4 text-gray-700">
                    <p>
                      Developed digital marketing strategies, activation plans,
                      proposals, contests and promotions for client initiatives
                    </p>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="text-violet-900 text-center py-3">
                Show 3 more experiences
              </div>
            </div>
            {/* Educations */}
            <div className="flex flex-col p-4 mx-auto my-5 bg-white border border-gray-200 group rounded-xl sm:px-6 lg:px-8">
              <div className="flex justify-between items-center font-semibold text-xl p-1">
                <h6 className="text-gray-900">Educations</h6>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="39"
                    height="39"
                    stroke="#D6DDEB"
                  />
                  <g clip-path="url(#clip0_407_18498)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20 12C20.5523 12 21 12.4477 21 13V27C21 27.5523 20.5523 28 20 28C19.4477 28 19 27.5523 19 27V13C19 12.4477 19.4477 12 20 12Z"
                      fill="#4640DE"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 20C12 19.4477 12.4477 19 13 19H27C27.5523 19 28 19.4477 28 20C28 20.5523 27.5523 21 27 21H13C12.4477 21 12 20.5523 12 20Z"
                      fill="#4640DE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_407_18498">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(8 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* 1st Educations */}
              <div className="flex justify-between items-start p-4 gap-x-5 text-gray-500">
                <div className="hidden md:block">
                  <svg
                    width={80}
                    height={80}
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width={80}
                      height={80}
                      rx={40}
                      fill="url(#pattern0)"
                    />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <use
                          xlinkHref="#image0_407_18506"
                          transform="scale(0.0025)"
                        />
                      </pattern>
                      <image
                        id="image0_407_18506"
                        width={400}
                        height={400}
                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gKgSUNDX1BST0ZJTEUAAQEAAAKQbGNtcwQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAADhjcHJ0AAABQAAAAE53dHB0AAABkAAAABRjaGFkAAABpAAAACxyWFlaAAAB0AAAABRiWFlaAAAB5AAAABRnWFlaAAAB+AAAABRyVFJDAAACDAAAACBnVFJDAAACLAAAACBiVFJDAAACTAAAACBjaHJtAAACbAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABwAAAAcAHMAUgBHAEIAIABiAHUAaQBsAHQALQBpAG4AAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAMgAAABwATgBvACAAYwBvAHAAeQByAGkAZwBoAHQALAAgAHUAcwBlACAAZgByAGUAZQBsAHkAAAAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEoAAAXj///zKgAAB5sAAP2H///7ov///aMAAAPYAADAlFhZWiAAAAAAAABvlAAAOO4AAAOQWFlaIAAAAAAAACSdAAAPgwAAtr5YWVogAAAAAAAAYqUAALeQAAAY3nBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR7AABMzQAAmZoAACZmAAAPXP/bAEMABQMEBAQDBQQEBAUFBQYHDAgHBwcHDwsLCQwRDxISEQ8RERMWHBcTFBoVEREYIRgaHR0fHx8TFyIkIh4kHB4fHv/bAEMBBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/CABEIAZABkAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMFBAb/2gAMAwEAAhADEAAAAYH2fw4BKATaN4rnQuUwAAXoDfOky4FACvfGZad8U6C5AACUwmjs409NOfVGm3D1xfLNJ1z6GXVlpnOWNLp9LxLy/b4uec9OUerzAAB0Z78mdkxpC1QTAAAASjWXk2yBBSaZkWraBxapqb52T6a83oZacKI1zXUDtyrjndrZzcJ0snzum4+N384YC4ABIROmcvs4u3ji4mNdIyDVrZk71SFWkoz2jqi+TLZSxbhdPB1YxeS9Ncpi1h5tKBPbGOWnONsi1Q6Moia034wdFM4DeMQbUoAKmYWRVaoGsplLKq26+aXg1y0gGgAAeh5/VnecZKmbUlmjIjXKYAmKU6ZbzXRx+j5edlq7ZCQgkIWqADFgq22iuNe1TnO6KOeGXoXAAASmqJgYAJgAAAAAAmNE8ywq93D6Gejip3p8C1dc0waEhDoyl0bQGS1mW7/N7MdfY+d9Dmy15IPZ5ACYAtUAmAAEwAATAbVnJ38maaJrc2AVa5ATDTu5tctOfq41T7nDjXHbevLppn27ePea9Ljzq1tmmprfC9K1NemK58r0qaC5AAC9BAlkAJjSicEtQmA1yE5Qa6Iw6sr5ZhrEwDtV1y7cfredlpiN8bdPJMUj06xfnxMbZpQEtspNL5azdba6524oXOQ1yAAAANsUTDQZ1/b+P2fnK1fb4gAAnqzrndOnl1DKN8qmPqfZ+j4vd4O5PJ66lyrwfi/1Gnt8H46+z7+tyPh/ovtPkPJ6/j7aY9nirKtbVyIm+dw2jLpz0wzW0zoKQAaZoBlqgSmqPrvuPk/rPmPqvnvz39i8nfD8wdnH3/ngqV6k+jm7uKKfYfKfrPP6W44H0YAAAAwF898V+k7dPk/C+LtPX43NWY9HnLQEBu1syFmiMSaUANGfVFcouV6wgGfa/Y/m/wCj/NfUSPD0Of4z7pv5vxyv6v8AK9rh/JTvz9DndPN14S/W/TPzr9F4P0Ic7qAAAACguX82x5fo/mExp7/B08VuqL45XuJprE1lGlmsXoUmuIaZzADo50u1ejnAKQBb9R/Nunn9D9Tc3T859MBQBTyPaVn8l5X6FHq8nxH26cdwx9AAAAEU05HH5IPsfim2IesRtFZM1Tt0cW0XpzIqbXyBFqzagCWsl9HH0ZTVExpIsL7n2fkf0D5r6fyPWl4vcCsAAAAAAAAAAI8n1/ld/N8GT9Z8hAA1tFYTY1VCkJDozjux180bZLxdOtBp6Xm9WenKvS85iQ7/AKr+T+z4Oh+mM9PnPpgGAAAAAAAAAAD87+//ACfp8jmTfv8Az+bTVPmdVEYTfpHxLy5zbUZWNLIxmYamowAF0b83p+fnrmNclqg9X7z4z2OL2/r3m+lx+1IVgAAAAAAACovmvgfQ876j5RMPX45QTGgRSbozmZZRvCeLolPGhUAwSETAJ6udF0b4OQpen+n/AI79Vyet94ieF9EAAAAAAAAAR837P5d0OZzxrp9B85zOnJmbXJoGlq6J0RLIAmucJg0ADol52Yphc9GNdJqkTFIBfQ/aflVuf0f2N+Y/f8btegPL7QAAAABnP5/6PLzeLen03yoa5yiURKG98b6RXPNrVOSZFVoHna9AqGpmpHRnmVTBSAQ7prhe7bDbwH1nrY7/AAH0f3G/P6XF2zHM6shUAAAAx8/4D28/u8Oj6H5y1TXIAXpKL5gJtA9860mrTVUoSDTOyKJik9PzNM79rg6tPJ6/CtEe7w6Z3qOLpR9F9f8AlbwdD9lfmX0PK6/1c+Z6Hk9txNgJFfPqPTfJ/P8Ar8f3nx/zUdXkWqdHnAC1QWqBaswAAATam0vO2dmae14vo+X054257nAejzgDfG0u+IwmGi0IjTPsmuMXK9Cfdt5bPT08OMGucTecTClrnFk6tLotlas1bPXQfI6pFyNVTnEyyqYadvF256ce/P6KK6c2UX6/l78QTGme2Vb0s1fOYDamdk9K1qLowgFrUhkw0DNrsnyNdEczsJ8brqzmdGbWYqSYGAkxdO98LRWl+ega523ZyvQwRz7dV4vz+nfkCtJXFsbyzK1VxpFCcwkSBgkcAU65RL0isML2RkTSiYsia6ZqrdHIDqtyRL6L8lw6t/LTXtR40zXozz5p9XN2czOaOmdMqax15a+XT0crjn26uROuOldM6S2awFI6fax2+dj1fKuAuCYBMAAAAAtXbKXaiWomDNFbxUZlKVqADS9NE61mBAwAG6fo+dSmem+NbXFW9Q1t15Yb+aX9Hmel5/RjtyV1a55aVsKtdswtahOsaVpWrEAaQFdcdEUlYKbUzDXJLGmUhFplFLLjzVNaXzpLvVNKpZqq2svXm6cIvPfHuZlNMZfVfnJ4aWw0zdmN1XNMNM+nmJckstSahMSCG+aKCkATE6p4335k7UaNU6MrRXreN6XlZ6bZ1nbGa2hqCWRvjMuJrLNsJ0Tz6N9MtNuXPoy08/O0evzQGr9d/X8nr87j+h+bT0w26dcvLXpvgAWvWs0jTRHPvjoycevkQFy0z2l0pbdPmt3cI6+j50has2c035zL0BNq2msSbUNOqHS+No059LUqM71mpolShMB//8QALBAAAgEDAwMDAwUBAQAAAAAAAQIDAAQREBIgBRMhIjAxI0BBBhQVMjM0Qv/aAAgBAQABBQLgBk180ystfFHkBktgrkcVO1sB6PiiCB7UbbHuABLbkBzB6G+Rupidtugeady0oj3psxVvLNb1eLOwWNwOWTU5Jb7BmDjyF5eTR8GcKqaeXFTbylD5b+ticXcuN+mTXekozuU5ReuZzl9R8chX54hqI1G3PilOKZ0qNFcsdxIwKU4a4XBxQGaKkCs+7D4j9yH/AGnG2bipxxGip27fQ4xRkfZoKUoWPZrbEaEING0mzJDJGOf4cbbXjilRmO1skY1HzB/tId0mrW30+ajJu/Rxhk2M3yWzSSximclA7Cu69dx8iRxTMx5iMlSMGX1W34pQp5ZNByCH87o6sygucIaCDPbO54ZUqF9tS7t4UnQZwCKcAaWibpp23y6AEis4o+fsY5ClFchVLM+32rRitb2AdyzKcNuOO49b6kcvxkXbS5js/G37EYradtKhNfTo7cDbiRwyiN8PG6eyjqINT7ET7a6ghjagCeOKz44HGIxueVMRlSKCMTg0uN1znu5G1jk8cms1nx7wBPCyUNOJhIzqVbU+fZhYrJcd1pP8ulK7LQRhRZEX88wcfYr8UDjSP02lJ9aNQSeITxtrtsRsNYrHlgQY/WtxL9KMRluXj3YgrSTrbLXo26YNeccbj0xDFWoTfMbbBnBPfpZgCs8dG4txLNLbly0ZOY6yDQNdzwHNA4p5Nygj7ONdzfnOn4rJoGtmeEYLvdNvn0hk2VKpjbxWBopUUGxRNKAaKqNF21hWS2gWUyp25GGDy3Hb7ceOHjtBQJNPOKycVaELJqduIzvjPg8DXjTxTqgjjyGxmruVZGd9w9wCiND7ATMHFba4av2dysDxSR8BnKhZBcpGV/GqRlx8HBo7UG4tREaVJ/Yt49ogjRqO7HOBI3DeCxxa6AEmy6Q71BaW8GpANXXS7aYXtlNanS2WZpX6csMf4BABoKxAICBsUfkKSUyjb13bsMTk+wQO1p5WrCHv3fU7BbiJlKtxjleMNI7ADJjbbUqBSoLN0vp6268nVXWXou6aDpFslRxpGvV71e7LGY2/GayeAJUqNzyRqtflgvsnQafpyPMldU6eLkSI0b8fTsthmXToNpn2+q9RESxwzTM9s0FvIjI2DyX5clmra3FBk8WOdP05/wA+l/YxXS3VtLbPw8Vbf5DyY42eSCMRRezIm9Y7C0SrmaK1hup3uJkIkVgQaAzyGa8njG215PD6n40/TbejWWJJUvukOtMpU6sNsFdFUP1D27q4jt4766kupdD9ZdYwxY/OD7Ph4eXQ5u3e8bm1guBddHcVNDLCauvD+k10D/u9pv63M8k8mjIy0pKs47q4rad2xg8mVO5gwbJWNWEkSK2mPGluQJWBVuKkg9OuBc23IqCJum2clXHR+47dGuhXS7K6t732n/prG+0uhARijPgsoyFyXeRXdnVlNDbS9vnN55LbzND0+7e0mglSaP7S7bbbcFbFThM6CsePGawdfHDBpB3IOP6dbNtNZW0tW1klu/2nV22dP54OM8I4pJA0brxHyXY1A/blcYfU4roMqpdfbfqN8W3D0FSqCvTQxxXGFaQJqqk0WJGm3vRaDSNzHJZzLcQfa9fl33vPBx7CjJZvGtu2GdSrcOl3htZY2V1+zkYIkzd2Wgua2+RGCOzmnj21jwGft7csEJBjagpNKpau22ufHGZu4vAmrG+ltWtL2C5H2XX5+3bc9rHXxjh/55KpZkhaGpF2Pw6ZZR3ifwi5tLZ4B9gTgdRuP3F1yAXbRYms1kUe1Q7VfR3AQ4Y+xnz/AKRcOmzm2ulIYfY9cuGjgx7KjPLf444ONCAKRijy7SeHRr/t/Y3U6W8M8zzTGRyO81O4I9FZUDh42cAM+wi5rcBqreGGCOHT+oyW9W13BOPddgq9VunupeAONQqkH2MHkkfokfdxz6eI8G1ur7fZi42e0xAHVuofuCWY8hon9pNrMBRXGmK2+WCit3j51NKCxG1Kdi5/HsojObTpE0lW1tDbr7UsiRp1PqLXDZGBjiu3LBeFtjvP5Pis+DqrbT7dvbPcV/E3lDpN3UfRJKh6PbJUUMUQ9u9vobYXl5Ncvz/GmPSK3HmNvCCxmmT+LuantLiEVnz4bUNgWfVpY6try3uPdubuC3F51aWSicnhmiNAM8h4LHcy4o7aUgN2IY7u4gjE8lu6Jqjuhj6hMFu+oGWLTGgXNbdPirfqV1DUPWojUd9ayUGB4lgKkvrSOputRCrjqd3LR8/YxLk0ATQxlpEq+CrdLJIvLagDKnNELnVXdaW6uQf5C9FG/vDRurg0WLHVCtHGvZkxsfAQ5II9r+loKjQySTqBJ2SqXarsVkCcf/Og0waxo7KkfuhiKV2DCSRQsjit70JJQFuJVpp5DRlXajKKZlIok51uPEdI6pbEopLU7b7Q4rb5xoBmimKxTROq7fT6Kytb6Pkk5pmz9pmkGWxCTsTPZamjdeBqOQqzrteMssNvt7743gns/nAbUEismsnQEgEk80DGtuD3IxW5KzDW23NbItxgO3sSV2ZaKMNQcHhjBwaCErgjTc1JK+VZGT6JMUEUii3XcyyYd2pCN42bsrX09M+WbdR2140JyeI81hANwBLNzx6a3NRlnCiaQUspFB13boMk21L+ypGiopHJUlu1LazKUt5trQyrWDXilZFqRUCliRQdgBcSit4I08+0Tk8seNoxr4wp4AZ1CnGoqFkjruFpGmiUrcSrSXEy0biY0LiQD9wgkaRQQ8bNMYQ+YM4pqxQik9weOYGRSrng+zci7i3jmpApiWbnCkcsTbcABqZSp0t5JEe5kkZ9LaPuyw2ssN31J2ebUYz7MP8Ab88AcUzZ1HjirFSOcH+pBV9M16XdkKtBGJ6vyjXWiqTVvPLHEzMx0C5rGmPDCPPjQbc+Nfipv9AM0uTpgK2BijQ2baGM0Bmm+fztNNGQMeOM3qZgc+KjdUokuySpHXeYteId1KMlm8Qf49xq7j53Gt7VmQDJrGG+GFEkjRaI0PmjilYih6uWKbbS4ob9SxI0JJ08Yx5TCll3LgCvysOxpGjpdtfTwHZAPJY+KtvnRIt0VZ8UzO+h9vxknI0jhdxcIIYxnLuWpTimOTwIXsjFKSrSyGQ1+IImlbEEVTRStS7MaudortvttziTiMUwxpkisnBdu2qsx4DydhpxEI9CFoH0Juq4lbta49OOHjTxXigoJSOKOoW3zT7/ANzPc5lr41Clj2e2GvZKZ6W3Z0eN045NBQRg6w5EsoxJwK0A2rY0tmRR5NDQdvLeW0THFIcr3Qqg+p8b6IHETsa/Y7jP02PtbVxA3akvrh5yqljrnxQJxtRgQRQU4uhiXh3Hrcagj7sk1ncRFgVOh8H0jiuzD9vFDGURnYduOvqSt2TgKAzNWfC7c/nX/8QAKxEAAQMDBAEEAwACAwAAAAAAAQACEQMQIQQSIDEFEyJBUTAyYUJxFCNS/9oACAEDAQE/AbwI4zcFEcXCDCBxCbG3Is3LxKLvdlMqbDITqjHGeB/XkERHEJvuObdJzhOLR/VsJRpuHY4QQqnaFsLCwmNyMogkrY5P2xIvCiKc/d5xCDyFuK3Fbjw2r+It+AiCO+FMwZW4qVuKJmwg4Kq+07frmGSJUFbftF2Z/ILUv2lT6nfai+0raVCYcbVWduIA+PxdZTnSerkWGGEproMp1QuEhb3IVnJ1SVlAlBricIzOeccRm4a53Sex7WgEWaYRpYkXhBBqc4uJniRFqGjfWpl4REXaWjKaVtMwtJ4wRuqprGtEBQtT4+nVGMFN8ZXJhO0dPTU5eZKMg23IITGFk8/HtjTha3x4q+9naewsMG5HtC8Xp9795+OJVfRuqnfVdAVUscYZwlAXGRHDxr91AD6tX0tOuPcFX8ZUp5bkItIwU8ZheKH/AE8SVrdc6sdo6t+3+1CjCgL0z3dpgynCDfQ6g6d/u6KBBEi76TH/ALBP8dQdmFp9O2g3a3i8w0lFAwv6FKa4wi6Vu4OyBfQ7atAB2YTWBggfi1b9lFxvtUXa0Gw/tqZEwb+P1Xovg9FT+Ly1SKYZ9qFtK2FBqgraVB4vaezfRHVNaCBITCSMiPw62v61Un44YtC28QYOURFvG6sUz6buvw+R1QpM2Dsr2oj+oiwv1cCVMdWmb6fyNSlg5C02sFfoHlqtS2gyT2qtQ1Hbjw7Ci0cC74u1pcYC/wCJW/8AKZ42u74hUfFMbl5lNaGiBx1WvZRwMlVaz6rtzri84i4tTLAfeE4aYskd2KyFQ8lVpYdkKl5Ki/swm1Gu6N3VGt7Kq+Sos6Mqv5KpVw3ARM8xnFqUDtP2BxBFwjdoHzYEhCvUHTijWqHtykm0rC9i9ihv2ouzolUwCcoublVXe6QoQWFhSiZU2Dftbf6vTK2OW08R/pSPpe0os/qbSd2FGwyviF3aeIKlRcoOIW8oOKFX+L1viFNPtO9PpexN2kdosH2iC3/JFAE2p0XPyqjdro5xi+O+A4ASYTn46UytqLXCn3amdrsLCEI3lQvi3XAWwsWATkwGcLcQcLdiCjjCaIcJsYsZtH1eCURC7TYVYicKTcWy4prMjciWmZxenR3/AK5VZlVhh62s2z88InpN7TxBsI+UBuwE5jmYcEx20zYGLDGbBkoT/iFEDh//xAAsEQABAwMEAQQCAgIDAAAAAAABAAIRAxAhBBIgMSIFE0FRMGEyQhQjUnGB/9oACAECAQE/AbyZ4xchA8WmcojMpwO7Bs7DDCDfHCfT3iCm03tEcB3yOEDI5O8RbtNaYzaf0vcCFRp6PCQVS6RtlZWU93iUCAFvambpg8J3VIvGZRYCtoW0LaOEr9oO+SgZ4VBIhBoULaEBFnSMhUvIbvvmXwYW4Iu+Ag3EfkNqp8YUe3kdKb7gtwUqoM7lRG0En5/EfpNZA7uDY5cAnN3CE2mAYK2NRotTacLCICL2tElCIxznifG7nNb2mVGOcSDZzZQq5i8oouTGAARxBm1bVso1AxyBm7g44Tgg7ErVepEnbTRcXGTbT66pSOchH1KiBKGrqaipDBAQgi22xic/g17pruWj15peL+k14eJbcHyK9Sr7GbB88qGrbSG2k3Kph7RLuEIm7sGeHqLNtcn7tQ1NSifFUfUqb8Owg4OyEw4leqH/AHf+ctHohR8j3b+H/SlTlSV7g6u4SITTIvraA1DfHsIiMG7KjmfxKZr67cSq9d1d253FvaCIlT/UqE5olNbC28Bgm+t3Uq5ITnlxk/i0zd9VovuU3c5zbG1QGJCGRbX6b3mSOx+P0unNQv8ApSt4QeCi5SFIW4cabh0L6waZziCYcnAA4P4dFR9qkBwzbct44kT0gZt6jpC8e43v8Pp+mNR+49BeSDv0gZseTnbUBPdoi+o9PZVyMFajSGh2eWm07q7oCpUxTbtHDoqbTw23e4NElf5dH/kE/wBRoN/areqPdhghFxJk8dNon1snAVKi2m3a25QttzNzaoHkeKadSHQbmCq/p1OpkYKqen1mfEosc3sXaxzugqfp9Z/xCoenU6eTkoCOZxm1aZwmb9oINyhdx+rEAo0KZ7ahRpjoIAC0IyvNeSl30pu/sBVCR0g0qkzxgoG2VlbUGwosXfS3fpe4F7jVubxI/ag/a8kH/pGqw4KneF/aULRxhQpuEWgr22otC9r9r2fmVFTpNNReadvB6QefpAh39UEXAWqV208Km7c2ec5vnrgeBMCU1me1ELcg4Gp1aq3c3KyjPCFK+bd8DbKzYlMTyPlbQRlbcy1DKf5NMWANhYH7vIQO5dJxKoA7cqBci2GhPqYO1Na8QRm9Stt/lhUX0nCWLc/fHxw3R2ndJhltjKJ25Ka9r8gp7dwixE2P1Zz4Rj+xXZ4f/8QAPRAAAQMBBQYEAwcCBgMBAAAAAQACESEDEBIgMSIyQVFhcRMwgZFAQqEEIzNSYnKxksEUNENT0eFjgvDx/9oACAEBAAY/AskX7QI8kVJcKKjcuJbO9y/4UFTHlh3JHDumoWFxhrqSi6Vw9FQlQXPxJgPFwT3dSsQ4aqhxKPEhjtQsOGR+kLdf/T5ABMwPgZcdqNVBFDnhQVZtG9EuvDeWiog8nWhuoqmqsp0xI4Zi+eaEOiBCwzE69c7QnHmfPrfDqhUqL6zF3/So36Qt6D2RJQNK3SE143HiRHDosJdrqtQtD38+0tOkeaz9wT28j5rnuoXbIvo64MxbIybTYHRaPC/EI7tQi1YqAO7FS9pHk2f6yTngKIVb6pn7k53M5GvY8Pnh5EJll+QV75dacaSpW6AtqxaVAa0BUj2Wv0U4qo7ZrqtpxPfPilv9ShWTh8stN+07Dm1U/wAqrWlVs/YrEAaAwPRHbj0X4jfVBrXMcTyKksMc+CwPGydOnVQ7ULQ3QoOipXrcHRsN2j6Jzoit88rqfBcwdQpZ7LCEA0k+Vauj/TIUfLyU6IFRNOSALiQNAardHdDESY0nLQyOad/5DHt/8FM15fBGSsXC4TQFcT1VJlTiM9kQzCAYnmVIH1W02PJc2Npx8mt8OEsOoTLP5Gih68bu2aIy0TW0KGycXTS4AA16LTVDFpxRGkaBA4WlaRm1+BpkEig2j2Cc223XmZ5HmsJ80FoxHksOLG01aoYA5zzVwX/SGIhndRZzi4uKr8STktHmJccAuw/6jRTqFA1zb0O5LgpiAtQfW7UKChYlgBBmePZWTWU4kL00PH4QB5wt4lBrC+Rqus3xC6ZrOy6YvdVKl9rgheNZ2JcJrXQrEbJnsvwrL2U+FZlV+zsWJliYiNVSzJAECCt13utH+6AAK01UYWeyKogDUhaT8HGSbtVVbP1pkbZ8yndKC8tcJa6hWGZHA87t6ewuq2VRouq8N7oxaNPpdtT6KWkU4KHFzcRhpiiLOSjPhmnmGY0yNbSZlND9DE3xdE3F5+UZKTK8I6gy3/hQc1bomAtl2I8VLXVQNo73WlBQJow6cfNkinlutHE0gDNs2L/ZE+C7ET9Ft2bm9xkovFeTI1EaptpZRXVuUng3UqQpUB2JBoLGYuQW1tj5XBTIQaABH18ut0DRYXEiNAfIdjLm/qGguYzmS7+18BB/2g4B+Uar7uzaOt9RKo3w3c2raEt/MLx4TC88oT/tNuYAE4BzUcFu1umKKC49gpbS4BoJU4RPVHY2Cd3kpap8kH5ib+pCZZ8JqpsxFo0U6otcIIzHAdeiguMKBqocJbyWy7E3gUGgSSvEtBNqfpnLXCQVLLQNs1L5tD1UMaGjovAjGwb65g6HndQKJySDVQTrxKpaMNLtl0+TTJaWnIRdjs6Wv8oseIcOGbjiQ1pW/wDxLx+zyzY2Rm058lsMc9Bn2l4bjMtHELC7XPrCk3aHLHkWh/VfWj+DlhtG9jwOa2INcP0UBNYBvJtmNAPKw4nDsqWLT3qi91AOCNo//wDF4Z3vlKg63QASc0BGXV/nKHcijki+1b2OTBaNDgsX2faH5eKhwIOQfrus54V8zHaH0WJ2nAcrqLF/qDXrk2dVB8ou+Zn1GcNOj6ZvvGA9VNg7F0Ki0s3Nuayoho1Wsd1/6+WVjtHSb6oOBgheI0V+YD+bsNPdBrqEqEDNUSRJKOyPRyjHN83w4SHbKLTqMwI1CD+PHPBEr8LCf00WNtuR3EqjrM+qa+0stnnI8s9skOq3iFig4ToVIUgQOSOzMVKAZU9F99ZkHm1VIdH5hVaAKoM91tYj2pnFp+bN4zWEtmKLF8p3gg+zMg/C2juTTlj5eIWKz3Tw5ZBjoF0y65Kpw4s2sz2cnLbshPNTYvc0cW8/hbXtHkTFMuxB6Stpjh3GWRIAVSgTEcUQMlDKLJjHp8Oxn5nZWjR06oTaTTgFqfZVJ9sszVN8O3kfln+2Q9EBwF4tNMFH5Q9urSm2jePw2DgwfAwsI0H1yYTuuoi11CMmqhx+7OqDmmQfhHPOgEp9o5wlxlareaERiavxGKltZn1W81ahRiBA6qApp7r5fcLh7qke6+X+oXxma/5oh2am0w6tWw+HflOvwfhDV/8AGTXIaaeRp654aJKJtPw9HItyu+8LXNK/zDvZV+0Wlp3+Bkpz/l0bnMk4rqlaBaKgcql63nR2Rlzp4CFDdPI5qOLP4ytf8po5SKg/BeEwGXanp5VTGYCBTNN/GEHDgsTBDTw5ZfAtjs/KeXwJtH8E60calQXkhbtn/QFHgsb2lbrvdHDWeYy9fNqYHErZHqb4O47XNgtNuz/hfdvHbzi5xgBUkWTdPI39qdPPL3Owjh1UAYW8ssH0zawgyye9x4DVT9peC7kBp5cmgXhWf4Y+qgnyAZUtK1qquF2q5Iw6VSBlgKTDjwHBS5R5UMaXHoptj4beXFYbJkdfLL3uwgLBZ0sv5UYR3VRl2iQOi2XTkBdoKqSueWWgetfM+7LJ5Erdb7rdaPVbdq0DotvE9RZsDe3mVMv/AChS8w3g0eXMjtdy7Z6mMgczAfVUNn7qXspfyN4ih5rDbfeN58V92+vLj5v3loJ5cVhsdhvPipJJza+TNB2VTC3vot4x2Qs3gkcfVFllaClK0WIwe2SWOLSsNoS9vLRCzs2YKVrfwu4e61b737+McnL72zcztVbNs31oqEZakLatm+lV91Zuf3ot/AP0qvwJkGAL6Yuqs7VjKh2J3IVoE7AXc6ppDjTTNV9eQWw+fTOY4Ccmy4jsVS2tPdfjuX47lW3tPdbbnOyEETOnRUvkCVOEwtD7KoPlT/uH+Fqg0TH8LwbJwhQSB1BVna2mpZ7rQ4u+bW+t2iN2BlSd4+dqpBgrCHUUh5W8VvFb091Uz3RGBtei2mByoyPW6cli39M3QQdvUhY2PM/tQgRCZJkhyoFEj3v4rUXYjEd1OIdkau6UQ2Z5yqYWR0UlaBDZAj4XDAM9VG236rZtAe9FSHV4OW0wjJRVqIgzyRbqnYhscO6b4gls1Rw6Itikzdsa8Qut1DdrcRzWueWgqpAX4Yd3VWfVaPBX4jh6LZtqdli8Rkd1pPqtwrdd7Xzl2gphYr94+6gkeoRJsmnDXWF8wRd42GNcQWy5loP3wmFthUU5qHN0QkUXRbv1XzXSt0DsuIvnPVxJ6LZELXXPMi6jiqvdCmQt2zI6hSbJqrZujo5btoPVSfE00WFtuGVmcC/zLXd6InxbL+pB3hh/EQaFfhOkqtk/2WhukB2JC0ayWu66KOF0BxC30cQ9vNnPwW+3JSZUOJjhnJ4DKXOGKkYeaxvqUDZCHcwjhca6qloVBtHEKuEzzaFGFpsiBIwBQ+wY7kQIQHgM14ErB/hxTWHLcfH7kSI9Sokel04DHX4M9LtQMmxIC1Cwxxz1WI+Rg8QTwlARUGq2XQeqg37D8M0Tha1deGYw2U0Qx4ptHgq2eBooMldPKjnRVzboFIv65ZHkAHQ0RbyyU2J9lCbH4g5DVODIAFJ53zwCNo1x2Tp/dS4k30F4NVR7j6X1LoWt8o3UF1dr1UlwF2sqszdpTJS6cTPR2fdBLqrS6fDxO/Ug+1tD6arYs8R/X/wmbRFfReLSHctL8I0Vt2B+q4eymntdvFCpAN0OoqVWsFRfoCjdUhUM3cBmotlVWJul8X1vrRTRyDsTe0rWt0WuyOq2GQFUwjWvBFrXS06i7C3T+bnt5sN5cJJHAZKknzh0vEN14yg2zg0qeaC0Auk5WnjMKqkKSBN0KgpxOiJaLR5+R5bRF58SRvYhotqZyYGn912ItMdlPQ5qmL6FRKwScKAAknLrCoQfVDf8TiDpfRyIk14c1igmELLxS5uScuuSA76L707X5R/dbRa1grg4I+OZM1iqcbEYQdZ45YaJU2zsP6eKDbMYWDgaynyA0xFFNmQ7opc0jLHBcsjCKVTx1y8VMG+lxLsU8IK0lVuaIp8xRwil7mu4jKHPOFqLbIYevFSjPpdplFnYtbZglGSHu+aqc5k4hoEQ+WOA05oPrRAOph4KBk0u5hbLq8iq0WLhzU/mE5d4rVYC4NnSVBbJ5AyVDgQb6LZr3y7QMrYxz1uqoaF/uP8AoFU+5hSFBb3kwtBdtXa3/wD/xAApEAEAAgEDBAEEAwEBAQAAAAABABEhMUFRECBhcYEwkaGxwdHwQPHh/9oACAEBAAE/IenvpUCs8s5vWA6CU2U5jeGlwUpjHHRrFN9j0WHtqXraDxKtAa3zFXV7HEakCLhfbrAUhSakELB73ZqKuNuIcpfSlwbXTEgP4RlgBbcPP3hl7j8PDxGZgIQa+AxgUGouKmQegj7hcAG5N8xnHLof7WZUBBoXiBgKkD7XyQ0cm+TGrMoxOGiPvtBdOhtsOEhLOysX3C69Ti6I69BRsaSMLGpTVjmAyFmvYdSgNucECgUmGB3+2eo6wR/aU3qmSU0vITTbWW1KZoNvCv5lvyou484rXmDTZN7gd2dUqyMBTGuJs9g89QUQZzPOhOcdUCHeYruNumN5hVNG19Srwa8ddKw9C9IRleSuq0XyR4D94Z+cjeU6Jv4n7zWyi0cPvM6rWLaehz0Q8SNkr/orc3+DKXiUvYDP4AsIqWa4Mt3uo4Bx9QxPIij29Mc/QxNtOjRBr+yCBgUiU632q2tymeuzyBvnol+2Ltqxq8aeehNrPFRjMnpldVWwnDCNW7ZxErrgaNw0X+RtDdXd7EmC8pZKIV3foXor5nFlHyGD+etdNIsLs+8wBX3BKGvguJgEfPWgKWSl7oBfvN9LHs0DG9j/APY3dJT1XTHZqynbzMho6Lyy9qaAe4xkqGdiFT7Ka1tNT0qczK3YjToFFYEXzvImGe2mH9k7gwtmJRAHkEuEjXDZB/6IrP3+JWqz10c4F3V9opo1AmxXGuKutLmo8NVfqCOkev8AdzADWlO7WDkvheuKpR8v6jtBT/6wDwgFr5mQ7dO/YShPeC5oXNg6KzZqytU84KNg/BjVFDCYbZbnGU36kpvPjooBjV0yC0aiVa31Q2foYrJnbqVv1ugrVOjBzSb7iFtTztPnIsx8dn57hbDWo5Qg6aFnCz/Yn2JVMEDTdMVzs7ppMPAgB8MNzbwwwfYyy6OL7BrDacXBQ35iEnxn1RYq+3PZ9H9/RK0GMY1iJRk0RxvELDeLtGjRJs0DWi4kMKBl2ZTEfhBhS3P0cn4M8B1NYr2zv5621XSq0N7dcv8A0pXmF0w+BQfdfQBQxq60mUx0UazVozvv0OuBZvcjUlu11BbXar/xmDCmpcXndEIAqAWeZuDPRrUycpjwEqWe8lV+oeIDjuyXa4p1r7RTR7cufpIUFfHTa+mdo1eMk4nCf6eoz1TpivPRKtb+iGULyLHEtCyi+KwYgCJ4A21mkVrvaMZNp4QZbzP4EMBF8nP0GtW5T9Ixp3ImpMaQ43OlBoLd+jLgEDsav8dDdbdfxQWVpoIiNJSdgLoSprlVY2lufugBQmisTqrXFoKHqJjZfiIqTDcxA3Aclxlx+pmjQWyNviW1VwxP30Sno2TUxnvW3QOhl6BheOls0fRGUNg0q5kQs3nSolMBReJlbrNSoZKPKNuVvttVNF18wEODjE8vsau5StFE0IIrHzqhbDQDpNnYmiTPHGLS7lWS75JU9FwiRsxBFZIyBeL1hi1xayxsW8YZ0eIiFImjMhMC3iEGytm9O/PHQafpVdDlboCIYiVesVjk3go2RFt5m3mYktTCLBY/iZW+Ksxt65lPEKvN10vU1TUveaWTgx1DCFT/ADFNWoGg2YWoWvMaa2cdD+QEFfsMVwYJ+P4/wRgUOiLP3Om4vSGpBWa5rm94R5yMeJcCqqbKhYSfN99t1i2D3O2e5B5irhiLexLmmN6TueI/qXFphjrHS6xFoS0aHTeFcTaVLZ0jl64HsXBwwhnd/wDECgUmp0vOc++opqHk+JrysBWPeJaKlyLr9QErVxWsDYTSi2kLNDGlXUKsFa5P0qNn79VHIGWIVe/RW3VQo1Ljrju1bWzo647MVPUqbd+cuTjBH5qg6+ZZqXGJg4r05jX4KDUreZ9Om2vQp0FcLAVsg7bByxNWnWiiFXrBNrzN8UcGoSwa28S8ieH5Q+lQUSyzowzuBflmMAysd3uOuNJjCi6L9hAUDfmPZteF/wAphV5uuhILXSEpbP7HEIpTwt+8qjofQDyRI/aD7S33emh/860rHZY+Y9DOLThfuW6jldTRB5MVt0fEUB0LWNNR0sPtlqge1axXqYjNdjeIWA/9EWMRfyz6M2hV4xTERZX6I7+SVwFdcN/0ic9LehCRPiriNgVSPceAFLsOnv3LL4zVxDC00QU486qpTWYGPo/z5igkUBvDQvtvE7xJmpHeWCxslpK9fMUfaUb7YVFk/kvr1CBYaz0ErVcoFexYoWVG3YNYDRGVQS2UnlhYuY5VCA5G1afQJW8sdOTpFVtblx7A+f8AzotqLfbwYkFlK7vFm1vEJTSrc8Fn5jlWW1V4hL1A/v6ZYkwj/czMsXUP5gZeg5Td8bRGdCJFpWaz2svUPZFTW1x0EFKjVrTtJrBY1bXYa61CYBsYOhOQg/HXElZgj2kbPYKuq8RwKV5xLFIPPkX/ABAgCroEZRaAxApqkfSzYLreli6qO/8AdKi9AN3gj75dDYcSoJXV/TEIoNRh5jO+NAjjCUz4jl0rrZkiCj4Dd9T46YPvJUOBotnZUo+fPU8vN0djZJ2ZYv52j+43KtROr4wTRuc/QPQS5T8fUf0eNzFT0fWOjWGwyz6tJx599QuDz89QN00Yg0jntBbrbsqzZi7f8VjrivPYGIBd/XdSXOGGX5R6mcNTkx9+hxhEoVKZpYYgmdli+mqQ2In4QbHQy1CBJTojctBCxlqarfmfpLDSVmoluPSXKKmrsy1xrbebA9I8SkIWqRE9CN/aCiuTt9+qtDHPU5QSvkq4YNJT3I1SWQdOODw99WQ4SZVHMv00hqudv/mlx8eh/UpiARDfz9P81HqVBf8A+h5gYfciXzp/ZEi9N5aRFB1TOmn8wsFrRll+ZhE9Upv04+1TIC0KD+3HmIdPQuMiI2JU/Uqu/EfyZ/XfZJtuOe3USY5UygBcXLB6/wDKvNA/Ha2bNh5ZS114tlbjBS869ArRrKH2IZhXSvC4uKAIIKGCLiuiYV7Y07EixWLL3lThouUxcfVdvvK+5/8AJc5LYUy1aajZG3/Je+fyY+huDZcEFGIqtrb1pHm0j9mF2Tz0ERpKepy5k1zLncKZQBLBciM1ZF4gpemSsk20+emfJ7FRhoGg/wDPlvNnwf8Ap0SuJ89Ck8xaVN3K2v8AGalZ/H/rNcOVirZ+826AuhMb2TIwDapYgjsYeLOeyxGgtWYimgHWqKA2bvE36C3bHM12jWVcItWjJw/82IuGfLl/j6Goprnt2qj32LU+XiYHtqp7ALXTe9B2YHFik6Ji5pNcojjgP+SC2FYn/I/NKT4ItoB+ekozhA/aXEiMX5lpr8K3+oBU1sWz+IrpQ5L5i938zPkeCn6lsP4tIkGB4wrkGPxSwrR4RavuAmny/wAa9AuWwYN/PZtr04GaLjRgLoX2aCLYVK8rmR/JwwZVuYR/x1jZ8+ka26a1kJRjCNYpvqYhO6tola9DJd3t2lWzW/hGrx3FrhoRIRbHdNPj3+oqDdOE0fPbaebgLsdP5gNgKkQGG1a/4SZKDKxr/D7HcfiYIthWIa4aiyq+8wpvRtP5xUKDvmcQ9BKwU83KXp+VH2XAtszxe/vvtGzEU2VXmF8fU87up08YavaCXAWJv/xXUdENIUAo06fRBOAEObIvjstYc8O4RAaNXqhbZZMVc111cKfzAcdo1zOr+HqCJY3/AMDPY0HLxFj33jaeCSLiaYpX+9IPug1yfuXY0N8f6iMtVXF6z24Pk6+OmK89UtVY89x0u6HBshcal/11cRln/qLU/DzBbVh76uspU4s59Jb1PLDL+qGAVq7TCDFFNfPYKNksWVfqazFaQbuUwx7uCmnorpandgusdxNGzZl8EBUw0HaBeofZLxW3a8gkbk5DwwO43APplbgZViK9NlkgShp21mriTSMoIpSOJpotzcFMHwh4gdyVnmFtkaUfa5QMF1NGXoGneszO77vUJqJcEDbAV2rDR7i1s8Bglvg7TXWu0uyaAuKHjzL/AKlTHLc+36YItUsZXFtv7zkv2uPLJ6c9pXvUWwi4G1lL1v19pjzfUS67ju5hRyRYYNXsRLrHXSpiyzEwvOyP5dlv0MQ7xjCFfh8qUp6wtlQtfLRKi/w+o7OK1JgRNRg7UTXrj2lY99K79cUMoMbMbK2SnWoYdJpGP5hW8KreZo27ERs21nviDjYrj/4ip5zG/mEGJKztATU4Noia9EoaG66ylH8BACl5cfZ9XDpw5+yXo/mJdoXd7dFUSgMXx0zMhXPZv0VLQ0/eWlAXTQQNqt6uC2ExgAeEVRVLIbMYlQO7c0L1C/5ekvFY+3X1uBjHjM3+5KDvB3b9QF0LrpTkV51iU6jERkXyJcSyOcoFtY+8FVjScSuMfy/nWVIxzgm9/hW/M1Jent0Je2EfZq34mLY5wSxDw8fzrEq0r57NdJ7hh0vsxW994NQta9Y6KBpelw5LqMKlpC6GpP6E10jpVlzE8h2XJ3OK/Ev8zEswzdO7TSFFMivsZt/0QpnSYH6pqn4o3+xltM3VtjV406FZu9MSgShSurczQy831HwILadJiZBw1H0a/b/bTRh7O2sDiavUgKUNEztAKzSImtzwgtJYsdXyx19ttj8S9GgNlm81k/B2nuo0Cr3qcT10peqvEavGksDLOnmaNibQy1LvGWH6+jmYpv47KKtE9ipLSwO0XQFma7K8xUA5tldVV3QvMdcJ2BEF02a3oXPzaKSiiubQaRAxEckKzb661AvGL230qnXTV4/iYKnQwr8y/WBS3rGtSxbxHvvmCYJQpjHnppQT4mZrGyNsE7SkI9Epl/alEumPklKhYYLWZmOtKy+8SiKuqzEwUVghGqBSm8RNSodH6+0tjxMAVhbSGRUev6yynoDAmTRRoh9+yJVaj1ouFEtGdSyjNBRwm8xELXueEyqaAbwkWpcLhmd2+rSCAZdKVTJ/EQoz5HE3lrcXrM13mYKtXQYONU1RdlYvp7zMsFbkNpnzFmN9eELL+zSWi5jS8EQFL83qJ2H2cwBb1co6G3A4uPydYJdKQa3DjXpU0GnR7DLRDVBiwcSwyVvGwqjGsdC21tt0DExusZgx1bosuyJclzc1+MwKZfAqN0QvchKlY01IzBHfMcTCN4GJqeeixp1kJTD8zpbJl8wMlHwlpgT8Q5L9p8xmWrr3BWC5TYBkFV8sQEqEUrfK3s26ArRrPlGm80cWQOj7mbgPnDNdHsHaoYixtHPIbmYRoLMNrYTBsaWrXnEKUZ5Ef8wQLm2ofKQBgK0KXH8Fwi8vxBpvwGYtRH3iev2olLt+0qanvZX2qaEZU6vDAicNuh6lN4ZuRxWcygjboiszx0QVYl6TTqzOsFERyddoljWbV02hhuKoHHS6Wyey5qsztT/XRV6WBg3Zgpgh5Ziq5m/RFR1WE5HsFtLXmX1Wo2+3iONLtzHquI82vI0D4u2AgxvNxFc3W24D4QW40APLVKlasAs+CKPBopziUirGiv7rNVS4mftG/XGKf1KICmgZSWNYECdBYw3CrwO1E1E70oRpOl9NeqoOi6mkxe/UrcjWLyZgK/bVxUcWp6Ihk1yRbrx2MWLrSOqLfoCaOq2kePUR1iatY1ncpNH3lEaeuu5mYnFGFTrlw6FN+IadYBQnb3H7Yaj++zEzyzXeNadcs4Vci4iUCJr0SlOJtKausRsjWDSuMH56oDZezqdMNrqtJqpaN+9goGWuwx0tKRiU10EeTiVWrwOiNHWNxxHd9F0B/ctan+x0VdWAIxqPEVdQC2Cxv2iJI8vVjWQytxfv10rcoLlqDwjnH+Zo1b9TG8x6m6jMq7lXrqXT7Ia0/iZmQov3A1MrAtCGKHHQbS+5M4qFXr8wA4hokb61tGtojdbbS9p8Slb6o3nLj4qIYK/cPEb5Zkc9DB2cUeYldNuhhubCkB3hMwLsR8nTiUQHkYPiGUO2ofG0SWwEvIi/YJauvtIbFZb2nx0eq6DVlwGj+fMab1fIpmAlDl4TcLekBbGnxKYN00BnWWuqs3vzxKwP4ENC1BqmCFt4irr0aClTd2iDescdLu7FQivwNIrepxswCVQM9GI9CrzC+q5VjKsXzELCo+ZUOAeTSLfTQivUFGyW3es5R01sN7TYX2R25XsyqBq/BNSrCypV1M3MK47sZ+I1RNi3MCc0JWtRy5gow6GIMEPhXXou/wCSOiqBxEu652jnpaxC9TaflNlpEuu30CzrqXYViMDOFdAvZYhBSqwJzlAMp3l9WWYStpgiuyvkuI+o9tSlXrzPI12hjWNIovGqHQaVDMEnkjQ+ZVXGMmfBKBoLtkZeXw7Cdzerl8eOibDg1fbJxjtvFY+0K/hSxvWzWszDUB6igSQ0L0j6eRcUvoA3iI069hKEeTLrwXEVk8MKRb16WNmtypVSLGGgzMDW6+CWKE35WvfWyqozBqxoajoyZ89DLrUoxbiVT+vQ5L9ujeL8ogLOzYYzGdYadFhXuMIuVZ7Y+8F3OAWMNyOWsXEVTh63wepE5MvByv6mIQ+R7cy9S0EMJNdzqQIHuinbSWfSWO73vpEC0aetuFUpIDtqMt99tAIelTQ1p1qOuYazJq+YNNku/IQUX7hkNj7Sl2MTfMuYstTzAWrLHVihsXw9qAt2V1+I6azL1f1EBvG4RmU5pNW203lBBXrl7Wa5mHL7YWt3tFPgC4J2rgbt4qoAJg1NURYyYB18QBx2QaQDnWOGnrTGAXT9w1Uy6OkNKv8AfMQoK4ZQWoOENQ6bYH3z11GtI1hiCjO0BbGb6wzSam5gk6aCT4i0q1ErpnOYrMi5dLZcj+JnnpfRYk8hntjhp03lrxL1nzse5ToDk/1cSzcu5D8y03JolZP4hBCmgYuuiNt6jbU26zaVPEa0OIBwjWhr0//aAAwDAQACAAMAAAAQAgp6hEkpbssTGgMAgAn/ALGVGQwEFG4AQGDNykA4kcOdDGhrTRiAAFggtIEn7TD7kyHuWAQlVpkgD3wSI2sAAAybE9qcTUTLQbNHHf7AQEM4AAFDBBGuw39qIRz0sQkICCREBELhSxhPUHgru301eKQQIAIxABgBlgA4ZHQzP10AJQC4IADAAdGTWNF0w+LdaXBJBaYmpUIA0Day3SQFsUPPPPBAbjy/LMwIEwEwLPPqjqy/PPPPo+IClJAJIF9wACQ/PMluPPPPNowiH8p6iOG/3OUMvPPPPPPPPNDTHuqWIgIcUNeuNPPPPPPPPPGyiK9CuVS2UI4BEeNPPPPPPPESAJvsklBowBBLEoN/PPPPPPPKKgCDEgIDoAMowEBEGH/PPPPEJwE7AMQ0KUBwCAEjy9FPPPPEZQaAyzJAGh5Fxp0NUxqPOUSk5TDQQUIMYAjAAM6BD/xEk9CwFc3zKj3gMJulYLtZAYwmvThzMCCAPE+6C/Ub/CXO4DDF4D2JyII8igfRE5DrQt5KQACAGFAK6zIjpjAIyALQMCAG1rK3W9UIK81WKN1jhiGV44BqehAQ5rDnSICQCFx3xyDdhqV4APEAhUNljByKeuInSazzCQB61TP/xAAoEQEAAgEDAQgDAQEAAAAAAAABABEhEDFBUSBhcYGRobHRweHwMPH/2gAIAQMBAT8Q04gjeewJzG7etOHaAbbf2/ZzyWP0xJFlf3zLzcqTkkKzlN8R7mNXd9jEd+fxoNdgChESPGgptGnaDUWbibhgzFu7haiUjf8AnyglQuWCG2p8yE2np2EFpBhW1HwfmC2tBtk0AuYCVNyXjr3kwLW0CA11O+Ukod4oaha5KvIzolRbZxELPgjZdy7lixS6bykgqtxBUtklXL3xChXY3tVX8YihVwQVc7yIrYz8wlrRsr795UqUx1RBxM1VCucP7pLV1RVbdbxvL7YtzMcwFFsZ9PuXw8Dv7parlSohO5go1le/8ecs7VA9rl6vaDBFkG8Ad2hUQ0r1Cj8v4gFS6mIR1AN/3Bs38QhWPQ+ozVr0lovFeU2Qw2K+kd3Ix2FWVoqr1XFS474MnwEvR6gscCBnZ50VbbxLtjfvrVYCmJSmw/ukILHHft6bxyW/ZTdAvwnAPsdevpEVOtAsvSsetyi+Bx8RwG8KCt6fcoSB3RDEye8PyRSgDquPv2jXpjpfhuwUHcmOZbFRF5idth4RQ31TF6OYvBCq82+8sMHI4f3Ep0mg1cqHrb+PxAccbPH9dlIYI3EHBsHi1KfIGC93x8eImalNXpaqgOpW833pdaHzCT8/nSqZuE3lt5Jv6fUboplFXGPv3hjeq/B2aC5sJPHXx+oClhHG/wDrv8YJ4jXIZY1cROjWk6JYBqGqn9jDSWOoFC+JH2wXosRspd57IIcE3MRWSsX1Xr/yZNywD9Rt0EU1qAFsorkw/jSpXwyGcyuNHT/LwBffErQTsnrozoHkb8n2x86A3hV3nQB+ePeIjToV3+J6wCWf5Uhur8j9wTBtogWkJUZdsRBqoOWEqLegK0QdFnn789Lg8n2FPbpLdc6b/wCC0WytNmDwPvUzNkK6zfVkG8nrFt0q4TEbHeWK0vHS2ej9MP8AC8H4CUuX0/cEcfL6lGgznUXZq7oiMPVpgp41FPONzwZsOrdxXr2t3C2Osbva6C6IWGGWqVLSjjTFxEpg1rzbB+Xozf8AzH/seLTpsQcdB07Jb4D08YgS1/sdJfGmDcW3apTHb+MF0SOHTIRO5qLlQGz19PzLTQbhCDzDf1mHsd/3C7J8G5cuHWR4tTB2O77hz5Bv6zkaDUW463wQzgJWUliPlzMSGeNjOqAbLiHIVpTFWrBopZAcDzZuo+bHe6ZFMDm+37j0XKWFTy/cuuvZ+5Srv5+pjTDoj5x8TgQMwCkzxTiobSMh8ZjSUvMVbS74P72j0kXdLesC2iA7qgHhO8PUiXER3GVqDFWMpTv6P3cBKLP7yglIMwNUZ779iJTL0eZhOG/n/wAjsztLSKd9FvUDiL6wboBFgSCYX1gfM2YD5EQbQ+ULljXi/c2EN9L28bHyhFWfKn8Eqm7fh+5hH2GHrvt1lj9/piFHy+pZyzZDQ0Bi6vf23guWw7q9u24GcaCm3pFtj3aIHMVcutRFwMExEDJFBZklj2XjOHrjugLgj5NNOe8LjZtX0/c6kAYmxtEAuU6TZcHIhV5hyqLfEGnaAmYSXmX0zZAljnENtvMXY+fSORC9d/mNmt3z0fCcLeNURiQUVDLFbO+jnWWoTEv0zOUNiy487Q46RZtY25dFQwXiOQuYdS34++kOGAaow+NR0MKbHp9sKJvt08ukteQOOH6lNXoJ4wkuW6SxO/TAwqNxmSB4kWpHvZ0EW4OQ0YW4Ov8AbxA9zn9TkQq6lRn/xAAoEQEAAgECAwkBAQEAAAAAAAABABEhEDFBUdEgYXGBkaGxwfDhMPH/2gAIAQIBAT8Q04xAnDsPdCpWt+TeK79gq5XpKT64ANF/viViXdwDHpsnHA7yCTVdjN92Pvpol9hoWGCcdEHeFm8S4mISocsCqqOEOB/uERuNXdEd7PJidB69gZQxZXzfmKi9Kph0LyRhKdmVjl3MyBe8YS3y8JYy0g2XGhwBfm466XA4DeEU/MKKqB8CAthptLGJuiIDTDLuD3QBY32NrXdfOYBuohbqd1DNEJ9AlaTuvp7Vcu5fZAFMF3LOJ+5ykckACjWpVdtUYjGsN3Hr03lV5ju7+spdaXBJ3kRBqeX58pT27L7/ALu7B2ndhzGqUzhG4Dp4Ut+j7jJarmZzyVdolivmOzn1esEgX6zFrN+c3THoVDVwPYAJegNayuh4nf5XUS0EIAu2/LQDvtBQzpeoVQ3m8p/d8W6TPvAQbdrLXjOIJu8uUAWa2Qwc7z8S+ndMwHlxo9HPpL4q98GoKF3D9MOhV5B+Ie5o518HdHaNmZrEpm4jWIDXc+MAHbUc1oYhzYl7hR7SozcLxP5CjWOiXLl5Uff3GJc7vD+9kBcwM9XF4vgfFy54rlrY8PvnBxcvNaUu5VqgvJ00q9H4BR+tLE8cuEqcrv29esOtsll3HPT2iJOQ7IXCt3n5eHWKXSy7V/x3eHKIOML4JKC6g7za2/NGBdUqx/SREhSapWh4MFMgcwgAAarHZFkOLNhDFMwabuYlEVZ/sDbEPHW1aJcXDc++vnpcCal04xLs28/8vHU9sy9Km/xoxopuV5nv/NE3RvADac4D8+3vEWGi0f3HKIjT/lYGw93+RBEN4tQxiqlW7Bs3EcLL4QK0UC2Jt8cOnl8VpVxqRboPvzjIsOe3+AXLc3cvi9NVrQ3ymy6ZRwfSBWl1pUvcbSpelCbG5zOp/jSr7GWdg9f5GTPw1CxjVB31AWxMvRpms1WfLNvSNY2+HH07WyYN3lD40GjWgtDklLlyjLeOmagBt31tzREepBcPkIRgOe7GS2vZfPEefhAw0H7MrjpkVBRvLGEaaETJpkEHvLg8ROfd637TDCLExN8m29Okz5R3dN4xTHiarUz4EzzR39N4qebbenWUNEuB2KZImbuBgbkTz4S+8Y47uoVKYEwt6WRyjc6AUxLA+RNkTyJsumDZFwn70hzVLOQHz/k53u/ktdV8dZm9M+YfjPzUJ5mJAHHGzNxiw4X5lkbrEAbyq5f3vDmYGyV9ItFsQ2XFnFO4fRgnGDbMvVSA5wlm355VLBbT+84rYrEuOB3fbBgY9ThARZbTC8byrgDbQK1U8YCVNFlrpiGQ9IpwnNp5sSm485i0d+B0uW2Erw38KT1jbaPOz7Zd9ivH+TMnuc922/KUM/HrDbfh1lDBNwdGFOautvfaMTKvvvtmQnHRAU9YFENApiAGDW4hxOQ5glhgVpwym7qzzPPvihlgYNlmO66hTAH7ynIgrmZXDBbqHem6omDG0xEVVwK4xLN4o4ieECVzzdFlBiICiHKUMSQ5f8hUlVcOZOK7RFhCEW2OCArG02mFcNUN5WsmMJUax+8oFb148/iBFBCjBpYkQ4wwAxFuHn05xDIJd8OGL6QNHZej69CNg235+fOUDBXHidZZdaJ5Rio15yodM2JSdglMJ8IFiXWxOagVFexjtAVGWWPtcJexG6uXCf/EACkQAQEAAgIBBAICAgMBAQAAAAERACExQVEQYXGBIJGhsTDB0eHw8UD/2gAIAQEAAT8Q9JI0Ca9EcBUEA/bkIFBwc3Ht7uQPOGrpUS50jAd84jqlSqj9+hByRXXD4wUaKfHoqgKsIXrBxWzch+8pji0UjiPjqYw6hFdW7Tr24/neIKivKvPp1fSeqtiafZOzyd4vewp0Ck9zt14NXcWiqIbHEhHE+cVQIaJo/KITDhVov/yYZsgVKYXxkgwpC8X0ZtTgo4ZxC7zszSUPW7CfQH6wdVmWTuG/R7xEPhBM/lW4IAUNJ/7xl59CSFvW+8SKCExEiL0R5xBTwUKbuq/zlDhKOB4Q5xSLx0r4rQ9vuY22ZFSGzj6UdYa4zzXVGLaeVx+7SGg5RKa0aR/FCBX0NByNJ5xHChre9vnf4CV0Hfpqe+PNk9BThT4wSh29pcup1nWbNJHeAEDQdPn0JuRRGI49RBTarz51N4Twa8I4p5PXXRMCik0V9X7gC7dOveH6x8C0HpM3olC7OA/U9dB1gSKbRf6y2hHmTJvQEulL9TEQLoNP3iIUV0jMCohZS4wYuRhQBZfgN/WMuhqYiu8QEid4KAKI0TFqWhVtpH+8NfclIHf7wlKkadbQfh/CLsh5C4X4wYnH3igGmxgxtagfwY5agiW6vFwQAhpp8epC2Ia3emzDZRXqPHqzonp59sXmI3DNHOAQG95Pg0esgo7VHGXXHoGqQnkPHje8aV10oTbBOBhdL68wttEJ43PjHcMeWnACIqUIw7275dZaEBdbCThaJkMnrjEK81r8S4qhXV8e+INgqAojNhx94ftx/ZyvSYZNMwyiWbsH6nwBiq5J2QNZ/wDcUaBGEH3vWE9KVVvAmr95RLVdY6EAuIRfn/InhlS6NhSLLr2voEV+ob9DnyfhWSs8ehyt41iiAAnfbnUussYEGpNPG/1gmIONpFwkAAUE79/xSGSAgieN4g7LJu+fwYLGEvT3PfA0tNYSqYLVRQb4h94iUr/JneDlN1sE+cjq8Yw0ZTAC7ettXbjtr6aVCb0P6xSUvCfS3JBstUfd1P5ys67R3fZxcZqR/KCYAmlAEFeC+XCS6QDSnJ84iMfzRMxtez7Yp9QY7ip9+sSgdl5zSrxgqpzg3k9G3A/7wQMyyT+3FAvyf6GJ+xwnozpuNhe8GXJfwIgFyLMVElq+vftiACg0B1rbsOkN+2SUAoiSPoaaacJIAhGd+tZOvGaoU4PbowkAkI45j9h9eiq18T1lnhKgfDi0OKwge0wZEzYHb7+2CKAICgrwu+scJSU3n55w2oRBQv8AJjIBwANMvXth1kCAB/WabNPciJ+oYDJDwrH7/KkhppdvxjcF81+luM6SimnwmnBipBGo0z4Gw+XPQK3rOV+eJ6NCaxS3ohx6GGGmmIVF7MyFjhbvC4vWEr8OAI6yqWp7Jx15yiS/DL94WJ8hqPtAT6wuANH2OFj/AO1n6NYzCmMBAFerGER0KgA5g0zveu5haI7oK8h4nftkalqHfve75xYppFWnFP5/XpBK9Qqe/wAYAKppEt3E/wCMU1LXxNSaTvFqB7rzgkdMNyEPA9H3gwTdOCuxqru/9YJEhfPj0XWlV49DgAjP05WJeV9EZZgCi+0jnPXHpqW/iQ6K5Xj/AJ9djF159YODAtH3/wBOckxFRX/Z74WTtuoHtfBkAELxKvPaJOY+mpj84gME9x+QX25InMe0XWPyihAFgpbHQvMwW1QQJ17C7zgG3QY8OLI1RJXFnF98trGJ+nQMWihRAQniIe9nRmgGQt26coa1xt4wF4FzZeun084NRA4bQ5AhZsfcx5c63xZnyo+n2y6OIPD5X0Ai0E68+oxv4aQAdvR08jMWq/0ekYPn0JSlMrrfHGBJ2UCq8e2QCuReU8H+8Gmj8ZymRJrszC5iF6F3qHxihwW1SW/8YMKn/mW4TdpuMLXXnaHYY8CLCI34vtgF/gRf1z/hR65J8g/lf/GVkuvHokCcm813SN7yq326/XqAhI86+f8AnLqVmJKAQPqBOQF488rrCr5RcoL24E9siFaXj3xTyFXR6OlwAcxw6ud4QMF42OEUNDppOh9FOh1N51IegLqRuOHBhKQl0WVkcpCAiV86VPA4xhD1B1ubx08aVfPR43llQFICpTyUT6wsw0flNz3mMUq9t8G9353ihxRM73yqTvpuIFxxSw6K5r8BThTNXUcNw4AoSxcCMIcU2ff3+LCmyG3f/tei6DWv8BN64BXFvm95HolnPpwBe1gtlLYG/OKxvOAq6GuIojk+DC1bz2TkT2SJ85WS6zg5234mGmmKUJ7WudBPv810aCYc+I2wjZ3pcg6YK2sDQQUTjT7YwUoagkb3r/nFb5VJHxcdDBsBaOYCplCZCATqeT50+2IUzRpI+cYqhN/mumbKFo/4TEqpG3WV9HTPQFLGYAKFZv8A975CEsShvV+cfF0e2OKgNtydeJ8+Mc3LIBQjnXX885ubmD1Gw5nycjiPguwrwYzYiI8mfQ+vKD8GaQpJhY23idYSHnUk9YEwNBBDveOCkhPCmann2849kOVeP+82kLbYn8Yk45x0bbKNh95qoBxAmnjY6wWhRTYWGqbvPHnFKJLd4lU04o7a+XokHn59NIj2b37fj3PSw7HQa9AgHLiIo9YiCTlv04AKJUfHnEPKHcAjHjak9sCpcV+j298aT8nuecMEkXe9+2WIrMNic5s0iHjev949sV3WuLqXXoiKOdXNEAPZVdfEPrGiskbXe/jFGTy1R0TH08s6p4PJU+cYZaEVATu8635rgRMiQq989ZE0gphOe+8BV6kAba6+ePjNjUA9NFDpmSIk6ABt1eLjYM1ADNb6+8dDWQSYfGC0RgpxZBuBAqHGSKuHKv3ghBOIAnxjhW0PGM4NdOeAHWHzgdgrz+JN0b1PRACoHinPo1gGibLyTFW7g8h+EZZz694BtbmmQ5RA5VcpJajaS8+cQcBFg2vlcJtEaYtYjG3a88Zqmu2iYCUEqXl84FBk5RXk9/nzhySCFHESnavBt8ZotTzMEGS7D0CigAeKguTHhJWaB/Hq0hvzs8D3GP8AHeP7XJ3rH1+tmBPcK2frCLcE3R33YhN52yg9YhxUm2b86xI8JN0iSMS4NRQBNRQmOwze0/2ZqThC17ISe8xE1/TcHMDoivyvH6cIMJv8Bonw2anMmWnUvVjU8jxwPOLXDCm9y7nvrJJAFux8muPWMvX4CGwVcLpnz38e35FCg0pHj2zU9/xkFDqXmak7xeBfc1lBohNHPvjXQamjI/AKwgDZ7U+cQqQgqQsvs88YlSyreMCxBUMUhMqOheWe8P1ljjyn5mmCV5Z+sIZR3dSCe5bjFRWtry+vJ/FBPreUrcO2AP2ie/zj+XROROsFGij7YOkFjdufOCnDPSukU7GmbtiR4XfWJQFHnFfngvmKfHesGB4tAdER+7ktGkdE37cLjAgGyKt6ho3/ADkFTG4gNKGz53hUVr+E4vWuPoz574/w0uiH216OX0KQ3p4wNCApu69BkCeQIY0XhQ3x75FbS6vPpqd2/ghrF+yu19IF+B/A2Ub1MBWBV6M1gxRkP2mJQQko6N0e8wggvCY/sx0xwY9OAyBh3hFCvU5uBpYW8JPXi/vPdIqQdLSx/WAUxtizV9ALdESHn03b9Do8Hy5Ku9FOzhM5FHKy+fnEmZ7B+ecDAciILVvZL73Iaddpv7eHSOQa5DreuMPlok2XnClk4mz/ABcAQoSnnAVhiJIbBNG1KnaD2A6uRLFIHPgnf4dc46Y4Sm0u4XAVu1pTecR1Ak88iLDW/ZzhEfR+uvvLpNIngOHnzbidNeCtnIb9FLKgOVxcY3As93Hw2/GERoiqflbcBAAmQ8YoXNIDlA2aKV78X+H3xNRodv2fL2f5z7wUdKOAD1SiO44nzk6AfMDTLxU113hdMwg6pwz7ckCsO9k8HH7uVkC7Yh+sSd0hoPfHPhCTe6n/AA4jbCNiPt9tazYKDtVvzmpAYCq8Af1g7Oom46kHW9kzhEAiF4hyVOMW1FLmXG5xrrjGxVVXv8frFWVWefXZgirgR+1f16nRCA8pp+FP4cZgX4juclEgggBp/wCnE7oGiOHO2Y8u6epLtmMt1Hb1Ehjts84fe0PQfj7f3jTAgOVeDEoOKnoAXpGPvI46dgElPA68jCxEGqngMA5l3sf7PL+vcIc4fWdY69LjBID0GWaW3ezOk+8RAnJT+m/5wRxSOP4w/wCtBpp693Lk3rjDJZtvsPc4TpwHDG6O3E0Qp2FfbxgFFlE6F51mpxvz68xsUE+HEfGegL2uMsYoEPtp7efvHdKvT3M0KJqY/Lr9ejzreXQQ1+MKCw7ccxEhKR9AAmuwa5cukpKuQUcyNirT/wA5xwujdcBP/FyBvSxH8hoPXQ1+Jbzj9hPVRbg40N46HK3OzbWXV84kvBk8ef8AU/xLOcKGipQfOJzfZSV3vgfeBmiNqIj07HcPGew57RHYj2JnFloKI/HP4WYm7wIgmle5j8GG9IBJPYwNL49sU7Ggp8vxQqKkAhd69vwAgQF2vWCvM85WBDhD+YF9Dadh8Gn9uGISYhRkH2ez5PbGaI9gPI/65/BZVKH0OP6whXk5wDXRtpJvWQePBYqIkRvwSX2x8LgCq+DGZYRTFlPP/WBqGkeD/D94TcikZ4vJ9RxG8Vq78twVzoUHqDzlurw3R4HsfzzhIGlHPza306++MT20BEfjIpsHcwahpsr9d4HhRbTfxhyaP+8VGPYYLELOUwF4LlojbQvLgzQKtIshB38z1iu06vp10S8gdmCOuQeHZ+EOdHe7Xie3radJPZEX+sPXmsSN+zw+5iL47V/Q/wD1iVjkZPVCwOjS3fnKdpt3sgnzX0cFgk8in+QdoDVy+Axiy0N/+jy4c7xGmyt68RwV/PDkzp4Tfn1RITRcNt7E4PnNUCl3Q3uYQoAgm06/HWlivx+F9nzJdEHtRrp9vV1xfLx+CaCPuHf8jB1+Dz4x91iEfsyM9ND/AC8LjBxYd59uD9Yta5ACcAqlXXlecCZsarWlqcHLx1jKHBF2/Gd/4m5EifrEXNrofAdegQEqzbMB64RD+nHxCD5E4cmbYorUsHW0hxrziaxdh3i2kbvRr3szVBDS+BvHGOirFCJOtmO2206o4/WA7eGgVeZ0mOYQQGCctOzfX1jAywAesnbnZM+5lwI2NkbL4+fWBgbeLAbCijvxiGEzekY4ab/f4q2AQ6TBGSO+PP75/NEmkQI4wpBBUfT+xg6B2fYIbGD6wdBnAsPuP5zWFzEpLCp9Z1r/AA95pu/+GKq+fUitXQp1s1HWKoK3CexRQfJg58ETpNI+yYfqEKfjXCtoUuiQXc5GH/GHZqTp3/WNkGRr37b3QfLIU6SrBOWiLiuuOsePeK/2XOgz8D3Rp/ZiLYekL0q/hy8npsfD6fT6CjRicYDkNEJyMb9jiVWV9vxch6AoAWhvsz6mkbyeEw1iUT+nw/nfRvjC97/xTFP5/Sr8dMLMFCb/AMu8t4CdqYg63Z5MAAg5HnEgbN4DGp0ecGHKTkc5Pb7xUt/wL94CAg89uMVeR6MRGkPb0C2NBuK8e+d64zqePRVwINGtk+m5zqOXKQL4Av7xCqQ8X04bjtuIiiInTh8/LAvnhNK+zF6bOJ3zw87POTw//JGef58/2/IUEFjyYS7szZMDwavi+cDQ2tDf7xkpGqtX0jLNXnGK940PkFfi5bGcJB+3Aui+2M3ByJxkQKS8egujB2o6bJu5uixkShvf2X3d5LB5QCiP0/WEvCYyNLp0uGkFsQZvq8OuTCXdl1X8ZqSfeACVCvKhZt7v/tY6qCwlNldV643fr06ya/8Ax8YYqLp5Hf8AOByFnvjA2y9Rw3pgXGDLZ4wsW0HbXC7ZPYx8WbspzFStC61e80RrejZ79MvuCZq6ERD33PDgFN2PHpyA/GQUaFpO8Ap9kI/zf4wGo5cKeRqF1N99+hOzrAwlCED/ALyaOAE35fLhO7j1gW4Uuk5HleMZSWdXHTHO5MXaDMBWk3oxNhDdiOCC8lvuH/8AKuAS1CXXMfpH1+J36RljMSDs8Nfv1MrJdeMpexb5Ye/qHiaVOAcr7YVMUZzjt/8Aa/C85YKI5HqMb4uK1WV5MVWrVwdSa53z8YLwY3pxFKD7uWozrdPHyYJHS1Ezr/8AH7ZJiCuA4OiMqn4e31g5RJwTnOa+Y9ng/wDTKEV7qmlgh9ZO3eD+GLiVkGutoD5YecCpVjQyHkL9ZtAg8H/LARyMYGNOzp549+MOQj0ROSthm7Wxov0Lv6yGYBx7zz4/9cPWoK0OPl3zjjbGP+0TIo6KfNPQlTrl8ZKmnRfiuInJPQUaMyG0W8bvoLCJofAnyQ+RxGMuYfhR3YOdfG/+MSqqNT5P+h7GGLSA2j6HfyXB97l/z85MHg/A5Er+2fpzgpdbpI+gC5RjR17uJcu86dfOsAEiTepMrEFnebTmzRXHgby7HyeMRQR9GD25ow+/Ppvi8+pelQgdDdE99frPMycuRb+KbNIOXIHAbtY2dkAnuMCF7BPQ9n0upr9er8XA0C25OwZQAVENP5ziDR/sK/znG/8AOYdwajgDCwlYeDx++fxjBeHjF0rW0MpiBTtb4X4xAa7c+MpAdnmvvhVdDu/84hqClDn5xj1RCHXe/wCcCSRy1RnW/ODEKoSR5YOdUBXGdl1fazNWBXkF0+78wBFHCamd24VW49bdxhVons1+L6EpeO8UbB+fRdtTQbaVnkUfr5wvoFKB2J/+F61kmzRtC52duB1chEHrLl9H8dgCKy76P3h0wTp7ygEE8GEpbO/Vc8EJK/Kbv5KJbwNG5v8AZ6EpVDuGBEI7YWeWd+ceqEHv7YlR9Kp2V/X4qT0jNJ7e7+MNgDsTv/8ABI+ejnqHuucWQygOg9gzb1Le9On4MUgDoexOv/HfOLCQ6792sv1m/iOOx+Hh/OWkyox3GoW9TjhfQ2xQxJHz6CKlHNNAaeTaenDp8m6/XprvDktFaDE1dfvArPwQWl1rfGFeLgunsoWHx2+2cv4WAheQfD1nyCA4Tp2J/OPy1z0DyZD2HagejgiKM1TNN7w21cLx7OAknloviORDvHn/ACL2wtAHeKVzqAXn7vXg+/w1ovuXGLUea/vAags5mVQK+bh3ocrgcFfkMOd8Y4JDiv4CbpafrIdYNSK5dcflTUgbfDPHlePfOMJFL52ry/jFljdaK08Rt+vdxSb0aGBWH9+oCgsLtxB3wGRPiYZKNCifD17uBwmMfsKcv+MvI0IAd4wLmVFHfxgMvgXUq/2uand/ADAPhunFdgfPjBtLffBtKxGwpsvLjZUd4AF1wfv541gPYoEu7744kPINH9YjgxzrxlUg+G+MYxYk2RxWoiAgeS5JDKg2akvLgOiab4PQFYbcHNYpTnEqvwGBtJpX5PfwfeDFUqAKKwDQexgSrZFPc/8Av4gQIC7Xr8UqlFU/RhDl2yB/XyanjDdCHc/nkf6x5/xA4qrgYmDfKi+fA8H7xYwDypz7zvx1gYcppgGP1LLrrr01O76lBgNGTNaUu/fF+ehTyNzYfvvv0Pi5ds4Bw6xBRsWqAL0Pc31iAJuGgPjG6njGHP7SfGEga3/ucQqqnjOfXbguv3g9AcgxcUgc0KPfpfeU6/BS1d8+t1IfP43ijkP1jz9Ylsvri0Q9jr6xm7QP/JrIQvnc/R/zmpWxiL8vL94743hcf8Dxgd5blT7+MbtQ6g+Ptnb6JGPqhonrzCO+vExQF1yPc9NPlQ9pOcjGPhcWFk6eQ9/OaNk84wGH2cTy34Tk84AdVPOAJurblE2+DCEoCCi9n5MFGnqUcI8leNB+j88ZExFav6mAIhdYJ7DYe6TFEYMeHATAtxp9pihH1aIvY8fesQgjjBg3B4J9E6wvU/3l/Q1tC+e/vL9028Ptz9XLrPfC4/kubly66xrAmlp9OPuGVNalNL56+sbaYPMv4d4v3u0MslScFp6QcMsXPse/r3gyoPPJhhIBBjxHWczFQhex4z52LDSeEWNfvNlg72dJqvvPv2yNWQ+EBLVsaPHWckzLSeeKf1jiNAaQhWxXDwvDghjR9l/eVkuvHpqRksrjpgidk40s9s72iISFB12Lu3L9oVhwYicnOLEEAt5l6/f8Y8ORKOFJzogD5rrGwhKDF8yuOw2PIMsUjSspI6B/6fcw9WwXPn6T9OFDWYUn1DhZsfA5TyelPOU8mHrF5gY+XoxjPqnLZeoOfP2/wZBVuq/7fyxaxNVVfUKzX24CoK4QdH4sxgKANjY/rHaoB7HXr7O3m6n5qkJ+rXKM3PQRBspQZhrUdAGpvd4S9fvDWVdErg3oEvG/gT1gUSOQI7N+2HTlIQbWDrn8eWYYHdlg/plO46EQ+3n/AK9Jr4/AVCkTsySaqUAPwBl3aL+M24jCp/vEUAjER/6y8fVB/RlYhfBf1huqbGH3hpa9L6f1o8+/84SnGX/sMPIWuDv29sJ4ya+5MVlRkaHb+8ms4qIuMVwmzgruS9sZm1mw3j6au86uMWq3V2fOOxCXo9VEYPs4uR3nLu/lxKaB0TnLScCmux9gxJWDDGm/Aw1wYXrhGyWUeaI/846q44ukEOwk+cT21yMF6k9j8QKiNLvDAU6J043524W8r7emn8ntnkPllgB0x/XzgrKQ7DXf/ucCA5WY4dIOwDgrvna9+gKL4/I005MqteeffBECs4PdOfq/gkmIh8YEXT6YYSBAEttweXRR5PGVLV7kMoswtedp/b+3J6BrRfJube0tLknj3wB+OICBCcFL9/NASrwqH6cSN7QohvUWYdJbb3cTqXVQ5uFlohdLW8e3frRU1Lisk/fpIQQEFkPDtswGsivDkeWKUEYpfG1641jlAcqiBC4lgCG1uzf84NCLNwH7uPVaooE+nvEmPoxtiwwEeKhFPqfzgVEn/cwKlSLZoPF8Jhqk1Ir8tEMGjYySG+rvif37bB5CNCvJIhirveTd6CFv3iwWqKritwkCFnb5ffC7sSL8uMgiQS+HZmyEX2MZdaMEZR9z87qeMmh1vNan5DsTnvG6vsxn1yQDh0rDjvHy21SLF7PCebL3oluYA5v9n84a6JDadB3dO5kMdUFQZziqAP8AXqm0Ty2axAB5uAmt6nJ1Qx418SDsT5JlckVyQ8vTxyYiI5YqTc3qLLerirYBRC+Bf7cXZgI0KTbhAICcg/w84h+QoAp5e/jDCWlIzl5xEh04cQzIZTxih1BETTfnFL7Sy63z/R6TfmBhuYEiB5Lp/AShIc+lXkqQ3iTGGhx95StizlfEMCx7QPyIPFxiErwMDb8/+Ma7OhKXzyuIDzaTbcad6wisGUj/AO/5wSugKFntzjQUgF1VDvwOCu2LkbNMnO/GAcihCfPjAqBE8npxeRhR9nFqsD1CAKugDnEHroKfGWA45ThwtatkFdaD7yZFKb2PQYDCBRnF+MYSFANJ285I3CKAIHfj7uAUdZWNaX/eS0OZirUTv2yFsIIbjydN+cKYfscNymjR8OJVOo3h454xKmNKVw7vy36wJrdAkZ84th7rf+JklAqOiTf/AFnDTNeReFHHvcDRxonGJLYkLYm/e3BDEnE5fzhJaviYldaqcvn8oxl7YuGS0xdaP3r7xBLyNVU53iOqkGVfX7zXZt4mdYSBVwBnugmB6c2SfeKhSHvu4QADgGTIQC5NJJzw6zVmvbDvv9L+8FkISIQl+ffBGxaEDxZvWr8XNFKed6RvJ5n1fqitCihboKaA+ctsnQ9kzaLCu+eMBR+lhmS1difAHnWMN6tVtZdg31mrMDECdg8/3esMyUhp7HY7T/eTOHWAjzTn94lNmb5PHGUIJbV1zgDtp8b2c4eg4F1Wjsf3iJVIRB5k29jdj7Qcr0HQfWD4cGCJChWb/jOK3mk0fnNXfoK4G/bvBUmAuJGeMMihaJTyYVCU7HO8f6yLqfWBEUOLj9BBHxOPVSIN7blIDAceCGV5NWzAVgKuRVxr94kAH2XEA04e3oK7qhex2c4oa9rGj46YKInJnIT9ejqXO3F+Ca/nEVco2DoSkvnLJK8Y+jUjhasIetOIDbRRT9xzr379QEJe11+sIXLBTYKoko4wscxnFIEEATQQ/rAC8/IENz3V+sEZiCBu+Gg3dN3NXvggfeOr75rCPCHnhPOX0dNi8lNfHHtl2LCmDuUR/jzwuL02XsCLfrNECWLtsUAN51MAJ+G2FihBIWpX4ywsmyw+7yP1kxr0Do2cX9TEkaF4Mu/d27c1fxhcM8amQUpXU1vLoPHpz6aOhvZL+a1kURiOO2uKQFUOPQFQFXo9W2IBTt3PQLRKrKoT+b9eqJsWnfXeMlWGnUe8vBJwfUHvkmMpNK9BfBv5vxnzgrrCXrHIgAgH4IitUeX3zaK6wh+vyWgePQPkCOq61wrLK7BsGkj+zDlnJxWkPCTnGaQ+x+Hv1JnNAU3l6oIh18ejpjnUJHkegDt688YBFwTHdnY1rfJ5wO7URGc6aXv8PYw807n4JHkfj1RVRnqL8/mkpqHnFTEgTY96w2y/vGViqMafszXlbz1mxSGLND/4cVViJezDQSFFLPd3748W78YFHjW+chPqLaH/AD/9zl+cGXjKpJff01v22KRJxkIrHaX0V/X4Oma+m45CHhARf5wJVFaNaxqEfhp6ThYI1sZ1k1LtUU+Sv8OHinoVd0fiYol2qp05ZxP2GAAkTVu7SG93riekCjCFeDEWkF+K4x2LWucQ7XAvn4xyzKttvPoC8C/WUzBVaJgCnZNFxvj+MiuiOB9ecLE1aMPjEu87RwnzcGEHPfZhPCDW6blcY1wse/h5xl1Z1r0qPW6vjAEKFG8Gg+DNCMQD4ch9V+sVGyQLjGwVDbDIS9ouzFVNpF1T55MEEF5Sa+OsCIkPKwzj2rNJrClsEAJo6l5szdoz3yNLLcrXCh/OGxh83xm7oDAF+n+8qw1dgIeyGLCgsET/AHiwVsOgaO7xjlFA0hs8Di6zC0lvjzjzU9EIafHokByNMvRQRTcKc7qPP8ZJkgm0LgsjEL7uzOYDxR8SCb+VPbDpLUNHgKI/WAhsFQfZqzyvf0R0sqBG0DR+8JA0GaXkXfI/eHPWK5bCcBhtXHO15e+/rIEQYSwAbeK/vEJAq/8Ayw96nj88TEL0A6cYOoHw6xmCL1Dn/eBYIOgNu/8AvBMM6Xsa8Y6BnY8mvDjDGEXPn9YxBOGhk2rAD49EQEf9LLltxrVvWKvLxiPCEq7Yf3m54StmvHvg0Sgr6NbmCRSvihry7x8WmKtga6wFpxpxbPbNTpd4hog+urkGgJo757nXX6ycIdR/9xLgXyInj3xEVWaLgxsH5wS0FsB5uAE2e2EiaPOE7VxXnDni4sMr2uve4AM7t2mTtkl0+8WZKuQj/wAuAzmBYl6+O8JStAamIiW5E54Xv3ye4b0ry/zjoApNW7MD11BQ++GkWpS7iPZ5MmUB2vAecGX2FmK8pfRgpqhyqUB9mGKSThrJjIhF8jd5nA/J6AJBGbSp8eMklirTrHAUtKuCCKSmLl2Iex6xRZo59SDsp49FsNX1KAgWsvkvnFdTuLdWh7cv7zqYkAy7njGx5UJ+3R7zB/IMqFeTrlD7mW2g6qHv3x3huogARANFyH2yIAT4cjlS6IHwZ3+C25u1hgj/ADM2kzFUcd/eKmD1JY4XO1iL/rF84qSab7PjGq7sURzVofbnGZx0BpVJZHnezibF8g9V5dT9YqBIgMDjTfnPr1HKRpIa6XMfy78ehpEDVSebm/JciUVXeH4KTMCvC79+c14u8qSfW805T2kR5wgYsm5n8wKZyy7KPgZWuIlIvEOUgmv2+yw4hK/DEAIGI9P4AAjrZD9ZZPzxVvg5wF3+hfBuvWJ5HRV2ASZ06P8AjK/UIulmzV71kYdWyArfwyfOBmhSrs0WbxR81zsNtCFg9TNXzjKwh1kGEeybPjAnplvdbNfTiCKxSf2xIzCAID29YUhFym0+sTqFmgXoFIl+hiAdqj+/GbQEQTZ54P8A1xQbN8X5h8a53kveADGR7oHvbgTRYMC+STkYXC4lCF4LlEwg50ED+8YkhpH1Aq11yfrI6CKQffGvtkasNwB5t+GvYwieowaSv2Dkp3rZ844ts4mD+Dp84EoeQtmNDrQluvnqbwAFwKacpEm/PonV+7bZTIOIE3pc/gM6HGvV5T1oTfvv9ZCnJIaD4cSp5LvODc3zMTBcLXt9dYgJEaZIJw9J0dT5xoGpaix5+su0ILBmAgAwintiRIB0GO0+DOqBkrrr1bMKHwkR/j+fxcK9Lw9nLhcKAG6Yx8t5dVDT5HH0EdzmlPrDiAOxzMAAQB4D49FVr36jVQKbdb9uD1+m7KCJ72z4wGVtmeVIJzzeI/G0QCdpwi0o/wAYCE0iL8vbIA8Bxa0V3qBhM9IdYFARGI9eojdIaTreHotUogP5zh0y22/0/GXDTOAF7iZ9O8RnHIRMlLhbAJwzq5QMCvJHfvbjNbe+RnDzM83TiKpGJrEcP108MtlXh284QlUFrpPuS+ZnujzwOA14esWAEWQ/D6DK4aovP1iBR6I84sIWKCWNOXtu9YqapfQRwo20fQD2Zph10nznOYXDUR5O7iTAgAlqK8a/nClKxjR5XRiuBYvS9S8vd185zXL9QCgMsCiFqGl9lHd63m2EZ6nQWf3ldXYHcBoF3M1t/qw4xC05IonuYQilaZihXgs3gDBa6dZwxz//2Q=="
                      />
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between my-1">
                    <h6 className="text-gray-950 font-semibold">
                      Harvard University
                    </h6>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        stroke="#D6DDEB"
                      />
                      <g clip-path="url(#clip0_407_18511)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.2322 15.7322C13.7011 15.2634 14.337 15 15 15H17.5C17.9602 15 18.3333 15.3731 18.3333 15.8333C18.3333 16.2936 17.9602 16.6667 17.5 16.6667H15C14.779 16.6667 14.567 16.7545 14.4107 16.9107C14.2545 17.067 14.1667 17.279 14.1667 17.5V25C14.1667 25.221 14.2545 25.433 14.4107 25.5893C14.567 25.7455 14.779 25.8333 15 25.8333H22.5C22.721 25.8333 22.933 25.7455 23.0893 25.5893C23.2455 25.433 23.3333 25.221 23.3333 25V22.5C23.3333 22.0398 23.7064 21.6667 24.1667 21.6667C24.6269 21.6667 25 22.0398 25 22.5V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H15C14.337 27.5 13.7011 27.2366 13.2322 26.7678C12.7634 26.2989 12.5 25.663 12.5 25V17.5C12.5 16.837 12.7634 16.2011 13.2322 15.7322Z"
                          fill="#4640DE"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.9944 12.3273C24.4822 11.8395 25.1438 11.5654 25.8337 11.5654C26.5235 11.5654 27.1851 11.8395 27.6729 12.3273C28.1607 12.8151 28.4348 13.4767 28.4348 14.1665C28.4348 14.8564 28.1607 15.518 27.6729 16.0058L20.5896 23.0891C20.4333 23.2454 20.2213 23.3332 20.0003 23.3332H17.5003C17.0401 23.3332 16.667 22.9601 16.667 22.4999V19.9999C16.667 19.7788 16.7548 19.5669 16.9111 19.4106L23.9944 12.3273ZM25.8337 13.2321C25.5858 13.2321 25.3482 13.3305 25.1729 13.5058L18.3337 20.345V21.6665H19.6551L26.4944 14.8273C26.6696 14.652 26.7681 14.4144 26.7681 14.1665C26.7681 13.9187 26.6696 13.681 26.4944 13.5058C26.3192 13.3305 26.0815 13.2321 25.8337 13.2321Z"
                          fill="#4640DE"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.7441 13.5771C23.0695 13.2516 23.5972 13.2516 23.9226 13.5771L26.4226 16.0771C26.748 16.4025 26.748 16.9302 26.4226 17.2556C26.0972 17.581 25.5695 17.581 25.2441 17.2556L22.7441 14.7556C22.4186 14.4302 22.4186 13.9025 22.7441 13.5771Z"
                          fill="#4640DE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_407_18511">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(10 10)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-x-2">
                    <span>Postgraduate degree, Applied Psychology</span>
                  </div>
                  <div className="text-center sm:text-left">2010 - 2012</div>
                  <div className="flex justify-between py-4 text-gray-700">
                    <p>
                      As an Applied Psychologist in the field of Consumer and
                      Society, I am specialized in creating business
                      opportunities by observing, analysing, researching and
                      changing behaviour.
                    </p>
                  </div>
                </div>
              </div>
              <hr></hr>
              {/* 2st Experiences */}
              <div className="flex justify-between items-start p-4 gap-x-5 text-gray-500">
                <div className="hidden md:block">
                  <svg
                    width={80}
                    height={80}
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width={80}
                      height={80}
                      rx={40}
                      fill="url(#pattern0)"
                    />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                      >
                        <use
                          xlinkHref="#image0_407_18506"
                          transform="scale(0.0025)"
                        />
                      </pattern>
                      <image
                        id="image0_407_18506"
                        width={400}
                        height={400}
                        xlinkHref="data:image/jpeg;base64,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"
                      />
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <h6 className="text-gray-950 font-semibold">
                      University of Toronto
                    </h6>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        stroke="#D6DDEB"
                      />
                      <g clip-path="url(#clip0_407_18511)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.2322 15.7322C13.7011 15.2634 14.337 15 15 15H17.5C17.9602 15 18.3333 15.3731 18.3333 15.8333C18.3333 16.2936 17.9602 16.6667 17.5 16.6667H15C14.779 16.6667 14.567 16.7545 14.4107 16.9107C14.2545 17.067 14.1667 17.279 14.1667 17.5V25C14.1667 25.221 14.2545 25.433 14.4107 25.5893C14.567 25.7455 14.779 25.8333 15 25.8333H22.5C22.721 25.8333 22.933 25.7455 23.0893 25.5893C23.2455 25.433 23.3333 25.221 23.3333 25V22.5C23.3333 22.0398 23.7064 21.6667 24.1667 21.6667C24.6269 21.6667 25 22.0398 25 22.5V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H15C14.337 27.5 13.7011 27.2366 13.2322 26.7678C12.7634 26.2989 12.5 25.663 12.5 25V17.5C12.5 16.837 12.7634 16.2011 13.2322 15.7322Z"
                          fill="#4640DE"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.9944 12.3273C24.4822 11.8395 25.1438 11.5654 25.8337 11.5654C26.5235 11.5654 27.1851 11.8395 27.6729 12.3273C28.1607 12.8151 28.4348 13.4767 28.4348 14.1665C28.4348 14.8564 28.1607 15.518 27.6729 16.0058L20.5896 23.0891C20.4333 23.2454 20.2213 23.3332 20.0003 23.3332H17.5003C17.0401 23.3332 16.667 22.9601 16.667 22.4999V19.9999C16.667 19.7788 16.7548 19.5669 16.9111 19.4106L23.9944 12.3273ZM25.8337 13.2321C25.5858 13.2321 25.3482 13.3305 25.1729 13.5058L18.3337 20.345V21.6665H19.6551L26.4944 14.8273C26.6696 14.652 26.7681 14.4144 26.7681 14.1665C26.7681 13.9187 26.6696 13.681 26.4944 13.5058C26.3192 13.3305 26.0815 13.2321 25.8337 13.2321Z"
                          fill="#4640DE"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.7441 13.5771C23.0695 13.2516 23.5972 13.2516 23.9226 13.5771L26.4226 16.0771C26.748 16.4025 26.748 16.9302 26.4226 17.2556C26.0972 17.581 25.5695 17.581 25.2441 17.2556L22.7441 14.7556C22.4186 14.4302 22.4186 13.9025 22.7441 13.5771Z"
                          fill="#4640DE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_407_18511">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(10 10)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col sm:flex-row text-center sm:text-start items-center gap-x-2  my-1">
                    <span>Bachelor of Arts, Visual Communication</span>
                  </div>
                  <div className="text-center sm:text-left">2005 - 2009</div>
                  <div className="flex justify-between py-4 text-gray-700">
                    <p>
                      Developed digital marketing strategies, activation plans,
                      proposals, contests and promotions for client initiatives
                    </p>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="text-violet-900 text-center py-3">
                Show 2 more educations
              </div>
            </div>
            {/* Skills */}
            <div className="flex flex-col p-4 mx-auto my-5 bg-white border border-gray-200 group rounded-xl sm:px-6 lg:px-8">
              <div className="flex justify-between items-center font-semibold text-xl p-1">
                <h6 className="text-gray-900">Skills</h6>
                <div>
                  <div className="flex gap-x-2">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width={39}
                        height={39}
                        stroke="#D6DDEB"
                      />
                      <g clipPath="url(#clip0_407_18498)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 12C20.5523 12 21 12.4477 21 13V27C21 27.5523 20.5523 28 20 28C19.4477 28 19 27.5523 19 27V13C19 12.4477 19.4477 12 20 12Z"
                          fill="#4640DE"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 20C12 19.4477 12.4477 19 13 19H27C27.5523 19 28 19.4477 28 20C28 20.5523 27.5523 21 27 21H13C12.4477 21 12 20.5523 12 20Z"
                          fill="#4640DE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_407_18498">
                          <rect
                            width={24}
                            height={24}
                            fill="white"
                            transform="translate(8 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width={39}
                        height={39}
                        stroke="#D6DDEB"
                      />
                      <g clipPath="url(#clip0_407_15149)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.2322 15.7322C13.7011 15.2634 14.337 15 15 15H17.5C17.9602 15 18.3333 15.3731 18.3333 15.8333C18.3333 16.2936 17.9602 16.6667 17.5 16.6667H15C14.779 16.6667 14.567 16.7545 14.4107 16.9107C14.2545 17.067 14.1667 17.279 14.1667 17.5V25C14.1667 25.221 14.2545 25.433 14.4107 25.5893C14.567 25.7455 14.779 25.8333 15 25.8333H22.5C22.721 25.8333 22.933 25.7455 23.0893 25.5893C23.2455 25.433 23.3333 25.221 23.3333 25V22.5C23.3333 22.0398 23.7064 21.6667 24.1667 21.6667C24.6269 21.6667 25 22.0398 25 22.5V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H15C14.337 27.5 13.7011 27.2366 13.2322 26.7678C12.7634 26.2989 12.5 25.663 12.5 25V17.5C12.5 16.837 12.7634 16.2011 13.2322 15.7322Z"
                          fill="#4640DE"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.9944 12.3273C24.4822 11.8395 25.1438 11.5654 25.8337 11.5654C26.5235 11.5654 27.1851 11.8395 27.6729 12.3273C28.1607 12.8151 28.4348 13.4767 28.4348 14.1665C28.4348 14.8564 28.1607 15.518 27.6729 16.0058L20.5896 23.0891C20.4333 23.2454 20.2213 23.3332 20.0003 23.3332H17.5003C17.0401 23.3332 16.667 22.9601 16.667 22.4999V19.9999C16.667 19.7788 16.7548 19.5669 16.9111 19.4106L23.9944 12.3273ZM25.8337 13.2321C25.5858 13.2321 25.3482 13.3305 25.1729 13.5058L18.3337 20.345V21.6665H19.6551L26.4944 14.8273C26.6696 14.652 26.7681 14.4144 26.7681 14.1665C26.7681 13.9187 26.6696 13.681 26.4944 13.5058C26.3192 13.3305 26.0815 13.2321 25.8337 13.2321Z"
                          fill="#4640DE"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.7441 13.5771C23.0695 13.2516 23.5972 13.2516 23.9226 13.5771L26.4226 16.0771C26.748 16.4025 26.748 16.9302 26.4226 17.2556C26.0972 17.581 25.5695 17.581 25.2441 17.2556L22.7441 14.7556C22.4186 14.4302 22.4186 13.9025 22.7441 13.5771Z"
                          fill="#4640DE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_407_15149">
                          <rect
                            width={20}
                            height={20}
                            fill="white"
                            transform="translate(10 10)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <a
                  type="button"
                  className="cursor-pointer my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400"
                >
                  Communication
                </a>
                <a
                  type="button"
                  className="cursor-pointer my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400"
                >
                  Analytics
                </a>
                <a
                  type="button"
                  className="cursor-pointer my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400"
                >
                  Facebook Ads
                </a>
                <a
                  type="button"
                  className="cursor-pointer my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400"
                >
                  Content Planning
                </a>
                <a
                  type="button"
                  className="cursor-pointer my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400"
                >
                  Community Manager
                </a>
              </div>
            </div>
            {/* Portfolios */}
            <div className="flex flex-col p-4 mx-auto my-5 bg-white border border-gray-200 group rounded-xl sm:px-6 lg:px-8">
              <div className="flex justify-between items-center font-semibold text-xl p-1">
                <h6 className="text-gray-900">Portfolios</h6>
                <div>
                  <div className="flex gap-x-2">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width={39}
                        height={39}
                        stroke="#D6DDEB"
                      />
                      <g clipPath="url(#clip0_407_18498)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 12C20.5523 12 21 12.4477 21 13V27C21 27.5523 20.5523 28 20 28C19.4477 28 19 27.5523 19 27V13C19 12.4477 19.4477 12 20 12Z"
                          fill="#4640DE"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 20C12 19.4477 12.4477 19 13 19H27C27.5523 19 28 19.4477 28 20C28 20.5523 27.5523 21 27 21H13C12.4477 21 12 20.5523 12 20Z"
                          fill="#4640DE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_407_18498">
                          <rect
                            width={24}
                            height={24}
                            fill="white"
                            transform="translate(8 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Portfolios Cards */}
              <div className="flex flex-nowrap flex-col sm:flex-row gap-3">
                <a
                  className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mx-2"
                  href="#"
                >
                  <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                    <img
                      className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                      src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      Card title
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                  </div>
                </a>
                <a
                  className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mx-2"
                  href="#"
                >
                  <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                    <img
                      className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                      src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      Card title
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                  </div>
                </a>
                <a
                  className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mx-2"
                  href="#"
                >
                  <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                    <img
                      className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                      src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      Card title
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                  </div>
                </a>
                {/* Repeat the above card structure for additional cards */}
              </div>
            </div>

            {/* End Of Profile */}
          </div>
          {/* Cards */}
          <div className="col-span-12 xl:col-span-4">
            {/* Card 1 */}
            <div className="relative p-5 mb-4 overflow-hidden bg-white border border-gray-200 group rounded-xl dark:border-gray-800 dark:bg-gray-900">
              <div
                aria-hidden="true"
                className="absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video group-hover:-translate-y-1/4 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl dark:opacity-5 dark:group-hover:opacity-10"
              />
              <div className="relative">
                <div className="flex flex-row-reverse items-center justify-between font-bold">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="39"
                      height="39"
                      stroke="#D6DDEB"
                    />
                    <g clip-path="url(#clip0_407_20467)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.2322 15.7322C13.7011 15.2634 14.337 15 15 15H17.5C17.9602 15 18.3333 15.3731 18.3333 15.8333C18.3333 16.2936 17.9602 16.6667 17.5 16.6667H15C14.779 16.6667 14.567 16.7545 14.4107 16.9107C14.2545 17.067 14.1667 17.279 14.1667 17.5V25C14.1667 25.221 14.2545 25.433 14.4107 25.5893C14.567 25.7455 14.779 25.8333 15 25.8333H22.5C22.721 25.8333 22.933 25.7455 23.0893 25.5893C23.2455 25.433 23.3333 25.221 23.3333 25V22.5C23.3333 22.0398 23.7064 21.6667 24.1667 21.6667C24.6269 21.6667 25 22.0398 25 22.5V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H15C14.337 27.5 13.7011 27.2366 13.2322 26.7678C12.7634 26.2989 12.5 25.663 12.5 25V17.5C12.5 16.837 12.7634 16.2011 13.2322 15.7322Z"
                        fill="#4640DE"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.9944 12.3273C24.4822 11.8395 25.1438 11.5654 25.8337 11.5654C26.5235 11.5654 27.1851 11.8395 27.6729 12.3273C28.1607 12.8151 28.4348 13.4767 28.4348 14.1665C28.4348 14.8564 28.1607 15.518 27.6729 16.0058L20.5896 23.0891C20.4333 23.2454 20.2213 23.3332 20.0003 23.3332H17.5003C17.0401 23.3332 16.667 22.9601 16.667 22.4999V19.9999C16.667 19.7788 16.7548 19.5669 16.9111 19.4106L23.9944 12.3273ZM25.8337 13.2321C25.5858 13.2321 25.3482 13.3305 25.1729 13.5058L18.3337 20.345V21.6665H19.6551L26.4944 14.8273C26.6696 14.652 26.7681 14.4144 26.7681 14.1665C26.7681 13.9187 26.6696 13.681 26.4944 13.5058C26.3192 13.3305 26.0815 13.2321 25.8337 13.2321Z"
                        fill="#4640DE"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.7441 13.5771C23.0695 13.2516 23.5972 13.2516 23.9226 13.5771L26.4226 16.0771C26.748 16.4025 26.748 16.9302 26.4226 17.2556C26.0972 17.581 25.5695 17.581 25.2441 17.2556L22.7441 14.7556C22.4186 14.4302 22.4186 13.9025 22.7441 13.5771Z"
                        fill="#4640DE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_407_20467">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(10 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Additional Details
                </div>
                <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_407_20474)">
                      <path
                        d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                        stroke="#7C8493"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 7L12 13L21 7"
                        stroke="#7C8493"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_407_20474">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex flex-col justify-center">
                    <div className="font-light text-zinc-500">Email</div>
                    <div className="text-sm">jakegyll@email.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_407_20482)">
                      <path
                        d="M16 4H8C7.44772 4 7 4.44772 7 5V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V5C17 4.44772 16.5523 4 16 4Z"
                        stroke="#7C8493"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 5H13"
                        stroke="#7C8493"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 17V17.01"
                        stroke="#25324B"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_407_20482">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex flex-col justify-center">
                    <div className="font-light text-zinc-500">Phone</div>
                    <div className="text-sm">+44 1245 572 135</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_407_20491)">
                      <path
                        d="M5 7H12M10 5V7C10 9.12173 9.47322 11.1566 8.53553 12.6569C7.59785 14.1571 6.32608 15 5 15M6 11C5.99834 12.0318 6.69452 13.0241 7.94307 13.7695C9.19163 14.5149 10.896 14.9558 12.7 15"
                        stroke="#7C8493"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 19L15 10L19 19M18.1 17H11.9"
                        stroke="#7C8493"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_407_20491">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex flex-col justify-center">
                    <div className="font-light text-zinc-500">Languages</div>
                    <div className="text-sm">English, French</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative p-5 mb-4 overflow-hidden bg-white border border-gray-200 group rounded-xl dark:border-gray-800 dark:bg-gray-900">
              <div
                aria-hidden="true"
                className="absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video group-hover:-translate-y-1/4 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl dark:opacity-5 dark:group-hover:opacity-10"
              />
              <div className="relative">
                <div className="flex flex-row-reverse items-center justify-between font-bold">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="39"
                      height="39"
                      stroke="#D6DDEB"
                    />
                    <g clip-path="url(#clip0_407_20467)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.2322 15.7322C13.7011 15.2634 14.337 15 15 15H17.5C17.9602 15 18.3333 15.3731 18.3333 15.8333C18.3333 16.2936 17.9602 16.6667 17.5 16.6667H15C14.779 16.6667 14.567 16.7545 14.4107 16.9107C14.2545 17.067 14.1667 17.279 14.1667 17.5V25C14.1667 25.221 14.2545 25.433 14.4107 25.5893C14.567 25.7455 14.779 25.8333 15 25.8333H22.5C22.721 25.8333 22.933 25.7455 23.0893 25.5893C23.2455 25.433 23.3333 25.221 23.3333 25V22.5C23.3333 22.0398 23.7064 21.6667 24.1667 21.6667C24.6269 21.6667 25 22.0398 25 22.5V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H15C14.337 27.5 13.7011 27.2366 13.2322 26.7678C12.7634 26.2989 12.5 25.663 12.5 25V17.5C12.5 16.837 12.7634 16.2011 13.2322 15.7322Z"
                        fill="#4640DE"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.9944 12.3273C24.4822 11.8395 25.1438 11.5654 25.8337 11.5654C26.5235 11.5654 27.1851 11.8395 27.6729 12.3273C28.1607 12.8151 28.4348 13.4767 28.4348 14.1665C28.4348 14.8564 28.1607 15.518 27.6729 16.0058L20.5896 23.0891C20.4333 23.2454 20.2213 23.3332 20.0003 23.3332H17.5003C17.0401 23.3332 16.667 22.9601 16.667 22.4999V19.9999C16.667 19.7788 16.7548 19.5669 16.9111 19.4106L23.9944 12.3273ZM25.8337 13.2321C25.5858 13.2321 25.3482 13.3305 25.1729 13.5058L18.3337 20.345V21.6665H19.6551L26.4944 14.8273C26.6696 14.652 26.7681 14.4144 26.7681 14.1665C26.7681 13.9187 26.6696 13.681 26.4944 13.5058C26.3192 13.3305 26.0815 13.2321 25.8337 13.2321Z"
                        fill="#4640DE"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.7441 13.5771C23.0695 13.2516 23.5972 13.2516 23.9226 13.5771L26.4226 16.0771C26.748 16.4025 26.748 16.9302 26.4226 17.2556C26.0972 17.581 25.5695 17.581 25.2441 17.2556L22.7441 14.7556C22.4186 14.4302 22.4186 13.9025 22.7441 13.5771Z"
                        fill="#4640DE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_407_20467">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(10 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Social Links
                </div>
                <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_407_20508)">
                      <path
                        d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z"
                        stroke="#7C8493"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="#7C8493"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.5 7.5V7.501"
                        stroke="#7C8493"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_407_20508">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex flex-col justify-center">
                    <div className="font-light text-zinc-500">Instagram</div>
                    <div className="text-sm text-blue-600">
                      instagram.com/jakegyll
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_407_20517)">
                      <path
                        d="M22 4.01001C21 4.50001 20.02 4.69901 19 5.00001C17.879 3.73501 16.217 3.66501 14.62 4.26301C13.023 4.86101 11.977 6.32301 12 8.00001V9.00001C8.755 9.08301 5.865 7.60501 4 5.00001C4 5.00001 -0.182 12.433 8 16C6.128 17.247 4.261 18.088 2 18C5.308 19.803 8.913 20.423 12.034 19.517C15.614 18.477 18.556 15.794 19.685 11.775C20.0218 10.5527 20.189 9.28987 20.182 8.02201C20.18 7.77301 21.692 5.25001 22 4.00901V4.01001Z"
                        stroke="#7C8493"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_407_20517">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex flex-col justify-center">
                    <div className="font-light text-zinc-500">Twitter</div>
                    <div className="text-sm text-blue-600">
                      twitter.com/jakegyll
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 pb-6 rounded-b-[--card-border-radius]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_407_20524)">
                      <path
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        stroke="#7C8493"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.59961 9H20.3996"
                        stroke="#7C8493"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.59961 15H20.3996"
                        stroke="#7C8493"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.4997 3C9.81501 5.69961 8.92188 8.81787 8.92188 12C8.92188 15.1821 9.81501 18.3004 11.4997 21"
                        stroke="#7C8493"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5 3C14.1847 5.69961 15.0778 8.81787 15.0778 12C15.0778 15.1821 14.1847 18.3004 12.5 21"
                        stroke="#7C8493"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_407_20524">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex flex-col justify-center">
                    <div className="font-light text-zinc-500">Website</div>
                    <div className="text-sm text-blue-600">
                      www.jakegyll.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
