import { Button } from "./ui/button";

export default function CategoryFilter() {
  const categories = ["Frontend", "Backend", "Data Science", "DevOps"];

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <Button>ALL</Button>
        {categories.map((category) => (
          <Button variant="outline" key={category}>
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
