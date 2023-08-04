import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { LoginWithGoogle } from "@/components/buttons";

export default function Home() {
  return (
    <main className="flex justify-center">
      <section className="max-w-[520px] w-full my-16 sm:my-24 mx-4">
        {/* Greetings */}
        <div className="space-y-2.5 mb-6">
          <h1 className="font-medium text-4xl">Login</h1>
          <p>Hi, Welcome back 👋</p>
        </div>

        {/* Google */}
        <LoginWithGoogle />

        {/* Divider */}
        <div className="mt-6 flex gap-x-6 items-center">
          <div className="h-0.5 bg-greyish-1 w-full rounded" />
          <p className="shrink-0 text-greyish-2">or Login with Email</p>
          <div className="h-0.5 bg-greyish-1 w-full rounded" />
        </div>

        {/* Email Form */}
        <form className="my-6 space-y-6">
          <div className="space-y-1">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="E.g. johndoe@example.com"
              className="w-full ring-2 ring-greyish-1 focus:ring-primary rounded px-3 py-2.5 outline-none"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full ring-2 ring-greyish-1 focus:ring-primary rounded px-3 py-2.5 outline-none"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2.5" />
              <label htmlFor="remember" className="">
                Remember me
              </label>
            </div>
            <Link href="#" className="text-primary">
              Forgot password?
            </Link>
          </div>
          <button
            type="button"
            className="w-full bg-primary text-white rounded px-3 py-2.5"
          >
            Login
          </button>
        </form>

        {/* Registration */}
        <p className="text-greyish-2 text-center">
          Not registered yet?{" "}
          <Link href="#" className="text-primary block sm:inline">
            Create an account <FiArrowUpRight className="inline" />
          </Link>
        </p>
      </section>
    </main>
  );
}
