import { NextRequest, NextResponse } from "next/server";
import { createEmbedding } from "../../utils/embedding";
import { getCollection } from "../../utils/vector-db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query = body?.query;

    if (!query) {
      return NextResponse.json({ error: "Missing query" }, { status: 400 });
    }

    const embedding = await createEmbedding(query);
    const collection = await getCollection();

    const results = await collection.query({
      queryEmbeddings: [embedding],
      nResults: 10,
    });

    return NextResponse.json({ results });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        error:
          (error as { message?: string }).message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
