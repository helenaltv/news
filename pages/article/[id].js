import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DIN_API_NYCKEL = "pub_3850178e481fc9ab97759e3811e1212dd0850";

export default function Article({ article }) {
  const [article, setArticle] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=pizza`)
      .then((res) => res.json())
      .then((data) => {
        const allArticles = data.results;

        const article = allArticles.find((article) => article.article_id == id);

        setArticle(article);
      });
  }, [id]);

  return (
    <div>
      {article && (
        <>
          <h2>{article.title}</h2>

          <img src={article.image_url} />
        </>
      )}
    </div>
  );
}
