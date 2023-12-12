import { memo } from "react";

const Testimonials = memo(() => {
  return (
    <div className="gradient-bg p-8 md:p-20">
      <section className="text-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-6"></div>
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-400 lg:mb-16 sm:text-xl text-center">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center  border-b border-gray-200 md:p-12 lg:border-r ">
            <blockquote className="mx-auto mb-8 max-w-2xl ">
              <h3 className="text-lg font-semibold ">Streamlined Security!</h3>
              <p className="my-4">
                "As someone always forgetting passwords, this app has been a
                game-changer! The simplicity and security it offers are
                unmatched. Now, I don't worry about remembering countless
                passwords. My information is safe, and accessibility is a
                breeze."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium  text-left">
                <div>Bonnie Green</div>
                <div className="text-sm font-light  ">Developer at Open AI</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center  border-b border-gray-200 md:p-12 ">
            <blockquote className="mx-auto mb-8 max-w-2xl ">
              <h3 className="text-lg font-semibold ">Peace of Mind Galore!</h3>
              <p className="my-4">
                "I've never felt more secure online since using this password
                manager. It's not just about easy access to passwords; it's the
                added layer of protection it brings. Knowing my data is
                encrypted and managed securely is a huge relief in today's
                digital world."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Roberta Casas</div>
                <div className="text-sm font-light ">
                  Lead designer at Dropbox
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center  border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r  ">
            <blockquote className="mx-auto mb-8 max-w-2xl ">
              <h3 className="text-lg font-semibold ">
                Effortless Organization!
              </h3>
              <p className="my-4">
                "Managing passwords used to be a headache, but not anymore! This
                app keeps everything organized, from bank accounts to social
                media logins. The autofill feature is a time-saver, and the
                ability to sync across devices makes life simpler."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium  text-left">
                <div>Jese Leos</div>
                <div className="text-sm font-light ">
                  Software Engineer at Facebook
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center  border-gray-200 md:p-12  dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl ">
              <h3 className="text-lg font-semibold ">A Must-Have Tool!</h3>
              <p className="my-4">
                "I've tried various password managers, but this one stands out.
                Its user-friendly interface coupled with top-notch security
                measures is unmatched. It's become an essential part of my
                digital life, ensuring I stay both efficient and secure online."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium  text-left">
                <div>Joseph McFall</div>
                <div className="text-sm font-light  ">CTO at Google</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
});

export default Testimonials;
