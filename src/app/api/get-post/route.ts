import { NextRequest, NextResponse } from "next/server";
import { createEmbedding } from "../../utils/embedding";
import { getCollection } from "../../utils/vector-db";

export async function POST(req: NextRequest) {
  //e.g. Where is the post about cakes?
  const { query } = await req.json();

  const embedding = await createEmbedding(query);
  const collection = await getCollection();

  const results = await collection.query({
    queryEmbeddings: [embedding],
    nResults: 3,
  });

  return NextResponse.json({ results });
}
