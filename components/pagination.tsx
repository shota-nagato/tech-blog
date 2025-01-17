import { getArticles } from "@/lib/client";
import { Button } from "./ui/button";

type Props = {
  currentPage?: number;
};

export default async function Pagination(props: Props) {
  const currentPage = props.currentPage ?? 1;

  const { totalCount } = await getArticles();

  return (
    <div className="mt-8 flex items-center justify-center space-x-2">
      <Button>1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
      <Button variant="outline">4</Button>
      {currentPage}
      {totalCount}
    </div>
  );
}
