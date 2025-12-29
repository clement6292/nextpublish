
import articles from "@/data/articles";
import { Article } from "../types/article.type";

export async function getArticles(): Promise<Article[]> {
  // Données mockées (pour l’instant)
  return articles;
}