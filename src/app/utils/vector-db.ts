import { ChromaClient } from "chromadb";

const client = new ChromaClient();
const COLLECTION_NAME = "posts";

export async function getCollection() {
  try {
    return await client.getCollection({ name: COLLECTION_NAME });
  } catch {
    return await client.createCollection({
      name: COLLECTION_NAME,
      embeddingFunction: null,
    });
  }
}
