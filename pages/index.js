import Link from "next/link";
import Culture from "./culture";
import Economy from "./economy";
import BookmarkedArticles from "./bookmarkedArticles";

export default function Home() {
  return (
    <div>
      <div className="text-blue-600 text-6xl flow-root m-4 gap-9">News:</div>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow p-4">
          <div className="grid grid-cols-3 gap-4">
            {/* News articles will go here */}
            <div className="bg-white shadow-md p-4">
              <h2 className="text-xl font-bold">Article Title</h2>
              <p className="text-gray-700">Article summary...</p>
            </div>
            <div className="bg-white shadow-md p-4">
              <h2 className="text-xl font-bold">Article Title</h2>
              <p className="text-gray-700">Article summary...</p>
            </div>
            <div className="bg-white shadow-md p-4">
              <h2 className="text-2xl">
                <Link href={"/economy"}>Economy news</Link>
              </h2>
            </div>
            {/* Repeat the above div for each article */}
          </div>
        </main>
      </div>
    </div>
  );
}
