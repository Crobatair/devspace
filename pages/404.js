import Layout from "@/components/Layout";
import Image from "next/image";


export default function NotFoundPage({}){
  return (
    <Layout title="Page Not Found">
      <div className="flex flex-col items-center mt-20">
        <Image
          src='/images/logo.png'
          alt='404 Not Found'
          width={70}
          height={70}
          className="bg-gray-800 rounded-2xl"
        />
        <h1 className="text-6xl my-5">Whoooops!</h1>
        <h2 className="text-4xl text-gray-400 mb-5">
          Page Does Not Exist
        </h2>
      </div>
    </Layout>
  );
}