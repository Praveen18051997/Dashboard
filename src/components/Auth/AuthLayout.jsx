import loginIllustration from "../../assets/images/login-illustration.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#21943A] overflow-hidden">

      <div className="mx-auto flex min-h-screen max-w-[1700px]">

        {/* Left */}

        <div className="hidden lg:flex w-1/2 items-center justify-center">

          <img
            src={loginIllustration}
            alt="Illustration"
            className="
              w-[92%]
              max-w-[820px]
              object-contain
              translate-y-8
            "
          />

        </div>

        {/* Right */}

        <div className="flex w-full lg:w-1/2 items-center justify-center px-10">

          <div
            className="
              w-full
              max-w-[640px]
              bg-white
              rounded-[32px]
              px-16
              py-20
              shadow-[0_15px_45px_rgba(0,0,0,0.08)]
            "
          >

            {children}

          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthLayout;