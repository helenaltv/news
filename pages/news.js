import { useEffect, useState } from "react";
import Link from "next/link";

const DIN_API_NYCKEL = "pub_3850178e481fc9ab97759e3811e1212dd0850";

/*export async function getNewsArticles() {
  const res = await fetch(
    "https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=pizza"
  );
  const data = await res.json();
  return data.results;
}*/

export default function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://newsdata.io/api/1/news?apikey=${DIN_API_NYCKEL}&q=pizza")
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, []);

  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li>
            <Link href={`/article/${article.article_id}`}>
              <h2>{article.title}</h2>
            </Link>
            <img src={article.image_url} />
          </li>
        ))}
      </ul>
    </div>
  );
}
