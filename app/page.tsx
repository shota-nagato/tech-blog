import ArticleList from "@/components/article-list";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";
import { getArticles } from "@/lib/client";
import { LIMIT } from "@/lib/constants";

export const revalidate = 0;

export default async function Home() {
  const { contents: articles, totalCount } = await getArticles({
    limit: LIMIT,
    offset: 0,
  });

  return (
    <div>
      <CategoryFilter />
      <ArticleList articles={articles} />
      <Pagination totalCount={totalCount} />
    </div>
  );
}
