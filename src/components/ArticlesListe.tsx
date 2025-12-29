import { getArticles } from "@/utils/article.util";
import ArticlesListClient from "./ArticlesListClient";

export default async function ArticlesList() {
    const articles = await getArticles();
  
    return <ArticlesListClient articles={articles} />;
  }