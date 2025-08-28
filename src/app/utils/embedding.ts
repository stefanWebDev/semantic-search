import { FeatureExtractionPipeline, pipeline } from "@xenova/transformers";

let embedder: FeatureExtractionPipeline | null = null;

export async function getEmbedder() {
  if (!embedder) {
    embedder = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }
  return embedder;
}

export async function createEmbedding(text: string): Promise<number[]> {
  const emb = await (
    await getEmbedder()
  )(text, { pooling: "mean", normalize: true });
  return Array.from(emb.data);
}
