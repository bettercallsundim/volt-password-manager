import { Button } from "@/components/ui/button";
import { memo } from "react";

const Hero3 = memo(() => {
  return (
    <div className="p-8 md:p-20 bg-gray-900 gradient-bg min-h-screen min-w-full">
      <div className="flex flex-col md:flex-row  items-center justify-between">
        <div className="one bg-[url('https://unsplash.com/photos/I3HS3JwYYqw/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAyMjg4MTMwfA&force=true&w=640')] h-[400px] w-[90%] mb-8 md:mb-0 md:w-[35%] object-cover rounded relative mr-8">
          <img
            className="rounded h-[70%]  absolute top-1/2 left-[80%] transform -translate-x-1/2 -translate-y-1/2
"
            src="https://unsplash.com/photos/qB8tpVXQh6Y/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAyMjg3NzIxfA&force=true&w=640"
            alt=""
          />
        </div>
        <div className="two md:w-[70%]">
          <p className="md:pl-10 text-white text-lg md:text-xl">
            It all starts with Customer Identity - from enhancing the customer
            experience with seamless logins to simplifying Multi-Factor
            Authentication (MFA) to a mere click. Your login system must strike
            the right balance between user convenience, privacy, and security.
            That's why two leading companies have come together. Because in
            collaboration, we can assist you in creating an improved Customer
            Identity (CIAM) solution. This partnership aims to reduce security
            and compliance risks, elevate your user experience, and empower your
            developers to make the most of their time. <br />
            <Button className="bg-white text-black rounded-xl hover:text-white duration-500 hover:outline mt-4">
              Learn More
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
});

export default Hero3;
