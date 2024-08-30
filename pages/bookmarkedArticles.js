import { useBookmark } from "@/contexts/bookmarkContext";

const BookmarkedArticles = () => {
  const { bookmarks } = useBookmark(); //the custom hook to get the array in state

  return (
    <div className="mx-auto p-4 space-y-4">
      <h1 className="text-xl font-extrabold">Your Bookmarks</h1>
      {bookmarks.map((article) => (
        <div
          key={article.article_id}
          className="shadow-md rounded-lg p-4 bg-white"
        >
          <h2 className="text-xl font-bold">{article.title}</h2>
          <img
            src={article.image_url}
            className="w-64 h-auto rounded-lg"
            alt={article.title}
          />
        </div>
      ))}
    </div>
  );
};

export default BookmarkedArticles;
