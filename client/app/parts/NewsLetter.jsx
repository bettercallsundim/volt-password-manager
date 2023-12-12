import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { memo } from "react";

const NewsLetter = memo(() => {
  return (
    <div className="gradient-bg p-8  md:p-20">
      <p className="text-white mb-8 text-3xl md:text-5xl md:mb-16">
        Subscribe to our newsletter.
      </p>
      <Input
        placeholder="Your email"
        className="text-white outline-white rounded-2xl h-[80px] text-xl p-8"
      />
      <p>
        <Button className="bg-white text-black rounded-xl hover:text-white duration-500 hover:outline mt-10 text-md md:text-xl px-4 md:px-8 py-3 md:py-6">
          Subscribe
        </Button>
      </p>
    </div>
  );
});

export default NewsLetter;
