import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, res: NextResponse) {
  const url = req.nextUrl;
  const queryParams = url.searchParams.toString();
  const navigateToKey: string = 'navigateTo'; // KEY to get from Query Params
  const hasNavigateParam = url.searchParams.has(navigateToKey)

  // Test: http://localhost:3000/api/books?name=GOOGLE&navigateTo=google
  // Test: http://localhost:3000/api/books?name=GOOGLE&navigateTo=facebook
  // Test: http://localhost:3000/api/books?name=GOOGLE&navigateTo=NonExisting

  if (hasNavigateParam) {
    const navigateTo = url.searchParams.get(navigateToKey)?.toLowerCase();
    switch (navigateTo) {
      case 'google':
        return NextResponse.redirect('https://www.google.com');
      case 'facebook':
        return NextResponse.redirect('https://www.facebook.com');
      default:
        return NextResponse.json({
          url: `${url}`,
          searchParams: queryParams,
          navigateParam: navigateTo
        })
    }
  }

  return NextResponse.json({
    url: `${url}`,
    searchParams: queryParams
  })
}