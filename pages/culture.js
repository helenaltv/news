import { GetStaticProps } from "next";
import { useBookmark } from "@/contexts/bookmarkContext";

//add removeBookmark or not?
const Culture = ({ articles }) => {
  const { bookmarks, addBookmark } = useBookmark(); //the custom hook with state and functions

  //check if an article is already bookmarked with the some method
  const isBookmarked = (articleId) => {
    return bookmarks.some((bookmark) => bookmark.id === articleId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        <div className="grid grid-cols-3 gap-4">
          {articles.map((article) => (
            <div key={article.article_id} className="bg-white shadow-md p-4">
              <button
                className={`rounded-xl border-2 border-blue-500 px-2 py-0.5 text-sm text-blue-500 transition duration-200 hover:bg-blue-600/5 active:bg-blue-700/5 ${
                  isBookmarked(article.article_id) ? "bookmarked" : ""
                }`}
                onClick={() => addBookmark(article)}
              >
                {isBookmarked(article.article_id) ? "Bookmarked" : "Bookmark"}
              </button>{" "}
              <h2 className="text-xl font-bold">{article.title}</h2>
              <img src={article.image_url} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

//the API should probably be in its own file (but it works for now)

const API_KEY = "pub_38633481d241041912d1acb86a53616512d68";
export const getStaticProps = async () => {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=culture`
  );
  const articles = await res.json();
  console.log(articles);

  return {
    props: {
      articles: articles.results,
    },
  };
};

export default Culture;

{
  /*button for the bookmark  
              <button
                className={`rounded-xl border-2 border-blue-500 px-3 py-1 text-base font-small text-blue-500 transition duration-200 hover:bg-blue-600/5 active:bg-blue-700/5 ${
                  isBookmarked(article.article_id) ? "bookmarked" : ""
                }`}
                onClick={() => addBookmark(article)}
              >
                {isBookmarked(article.article_id) ? "Bookmarked" : "Bookmark"}
              </button>{" "}
              */
}
