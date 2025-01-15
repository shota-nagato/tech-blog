import {
  createClient,
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
} from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICED_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export type Category = {
  id: string;
  name: string;
};

export type Article = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category: Category;
} & MicroCMSDate;

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export async function getCategories() {
  const categories = await client.getList<Category>({
    endpoint: "categories",
  });

  return categories;
}

export async function getArticles(queries?: MicroCMSQueries) {
  const articles = await client.getList<Article>({
    endpoint: "articles",
    queries,
  });

  return articles;
}

export async function getArticle(contentId: string) {
  const article = await client.getListDetail<Article>({
    endpoint: "articles",
    contentId,
  });

  return article;
}
