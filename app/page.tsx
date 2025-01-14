import ArticleList from "@/components/article-list";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";

export default function Home() {
  return (
    <div>
      <CategoryFilter />
      <ArticleList />
      <Pagination />
    </div>
  );
}
