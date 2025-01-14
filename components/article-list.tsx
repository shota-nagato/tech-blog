import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { getArticles } from "@/lib/client";

export default async function ArticleList() {
  const { contents: articles } = await getArticles();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Link href="#" key={article.id}>
          <Card className="overflow-hidden">
            <div className="relative h-48 border">Image</div>
            <CardContent className="p-4">
              <Badge>{article.category.name}</Badge>
              <h2 className="text-xl font-semibold">{article.title}</h2>
            </CardContent>
            <CardFooter className="text-sm text-slate-600">
              {article.publishedAt}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
