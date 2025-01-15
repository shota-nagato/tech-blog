import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { getArticles } from "@/lib/client";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

export default async function ArticleList() {
  const { contents: articles } = await getArticles();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Link href={`articles/${article.id}`} key={article.id}>
          <Card className="overflow-hidden">
            <div className="relative border">
              {/* 修正 */}
              <Image
                className="w-full"
                src={article.eyecatch?.url ?? "/no-image.png"}
                width={345}
                height={240}
                alt="アイキャッチ"
              />
            </div>
            <CardContent className="p-4">
              <Badge>{article.category.name}</Badge>
              <h2 className="text-xl font-semibold">{article.title}</h2>
            </CardContent>
            <CardFooter className="text-sm text-slate-600">
              {formatDate(article.publishedAt!)}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
