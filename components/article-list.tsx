import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";

export default function ArticleList() {
  const articles = [
    {
      id: 1,
      title: "Article 1",
      category: "Frontend",
      date: "2024-12-12",
    },
    {
      id: 2,
      title: "Article 2",
      category: "Backend",
      date: "2024-12-12",
    },
    {
      id: 3,
      title: "Article 3",
      category: "Data Science",
      date: "2024-12-12",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Link href="#" key={article.id}>
          <Card className="overflow-hidden">
            <div className="relative h-48 border">Image</div>
            <CardContent className="p-4">
              <Badge>{article.category}</Badge>
              <h2 className="text-xl font-semibold">{article.title}</h2>
            </CardContent>
            <CardFooter className="text-sm text-slate-600">
              {article.date}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
