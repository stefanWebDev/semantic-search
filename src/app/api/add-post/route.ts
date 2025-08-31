import { NextRequest, NextResponse } from "next/server";

import { createEmbedding } from "../../utils/embedding";
import { getCollection } from "../../utils/vector-db";

export async function POST(req: NextRequest) {
  const { id, title, content } = await req.json();

  const embedding = await createEmbedding(title + " " + content);
  const collection = await getCollection();

  await collection.add({
    ids: [id],
    embeddings: [embedding],
    metadatas: [{ title, content }],
  });

  return NextResponse.json({ success: true });
}
