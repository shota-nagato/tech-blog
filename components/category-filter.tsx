import { getCategories } from "@/lib/client";
import { Button } from "./ui/button";

export default async function CategoryFilter() {
  const { contents: categories } = await getCategories();

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <Button>ALL</Button>
        {categories.map((category) => (
          <Button variant="outline" key={category.id}>
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
