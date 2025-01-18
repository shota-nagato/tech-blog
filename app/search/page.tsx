import ArticleList from "@/components/article-list";
import CategoryFilter from "@/components/category-filter";
import { getArticles } from "@/lib/client";

type Props = {
  searchParams: { q: string };
};

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;

  const { contents: articles } = await getArticles({
    q: searchParams.q,
  });

  return (
    <div>
      <CategoryFilter />
      <ArticleList articles={articles} />
    </div>
  );
}
