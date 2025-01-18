import ArticleList from "@/components/article-list";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";
import { getArticles } from "@/lib/client";
import { LIMIT } from "@/lib/constants";

export default async function Page(props: {
  params: Promise<{ categoryId: string; currentPage: string }>;
}) {
  const { categoryId } = await props.params;
  const { currentPage } = await props.params;
  const currentPageInt = parseInt(currentPage, 10);

  const { contents: articles, totalCount } = await getArticles({
    limit: LIMIT,
    offset: (currentPageInt - 1) * LIMIT,
    filters: `category[equals]${categoryId}`,
  });

  return (
    <div>
      <CategoryFilter currentCategoryId={categoryId} />
      <ArticleList articles={articles} />
      <Pagination
        totalCount={totalCount}
        currentPage={currentPageInt}
        basePath={`/categories/${categoryId}`}
      />
    </div>
  );
}
