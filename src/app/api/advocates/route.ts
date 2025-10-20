import { NextRequest } from "next/server";
import { getAdvocatesBy } from "./query";


export async function GET(request:NextRequest) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('searchTerm');
  const data = await getAdvocatesBy(searchTerm);
  return Response.json({ data });
}
