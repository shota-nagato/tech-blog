import ArticleList from "@/components/article-list";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";
import { getArticles } from "@/lib/client";

export default async function Home() {
  const { contents: articles } = await getArticles();

  return (
    <div>
      <CategoryFilter />
      <ArticleList articles={articles} />
      <Pagination />
    </div>
  );
}
