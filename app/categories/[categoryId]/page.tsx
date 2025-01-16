import ArticleList from "@/components/article-list";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";

export default async function Page(props: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await props.params;

  return (
    <div>
      <CategoryFilter currentCategoryId={categoryId} />
      <ArticleList categoryId={categoryId} />
      <Pagination />
    </div>
  );
}
