import { NextRequest, NextResponse } from "next/server";

import { createEmbedding } from "../../utils/embedding";
import { getCollection } from "../../utils/vector-db";

export async function POST(req: NextRequest) {
  const { post_id, post } = await req.json();

  const embedding = await createEmbedding(
    post.post_title + " " + post.post_content
  );
  const collection = await getCollection();

  await collection.add({
    ids: [post_id],
    embeddings: [embedding],
    metadatas: [{ title: post.post_title, content: post.post_content }],
  });

  return NextResponse.json({ success: true });
}
