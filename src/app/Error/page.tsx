import Image from "next/image";
import TopBar from "../TopBar/page";
import Header from "../Header/page";
import Footer from "../Footer/page";
import Link from "next/link";
function ErrorPage() {
  return (
    <div>
      {/* <TopBar />
      <Header/> */}
              <header className="bg-gray-100 py-6 sm:py-8 md:py-12 bg-cover bg-center relative">
          <div className="container mx-auto px-6 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
              404 Not Found
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Home / Pages / <span className="text-pink-500">404 Not Found</span>
            </p>
          </div>
        </header>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Image
          src="/images/err1.png"
          alt="404"
          width={600}
          height={600}
        />
        <Link href="/Hero">
          <button className="px-6 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ErrorPage;