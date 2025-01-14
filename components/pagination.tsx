import { Button } from "./ui/button";

export default function Pagination() {
  return (
    <div className="mt-8 flex items-center justify-center space-x-2">
      <Button>1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
      <Button variant="outline">4</Button>
    </div>
  );
}
