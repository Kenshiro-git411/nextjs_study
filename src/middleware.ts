/* ページを表示する前に実行したい処理を記述 ex) 認証しているかどうか */

import { NextResponse } from 'next/server';
import type { NextResponse } from "next/server";

export function middleware(request: NextRequest){
    // console.log('ミドルウェアのテスト');

    if(!request.nextUrl.pathname.includes('.')) {
      console.log('ミドルウェアのテスト');

    } return NextResponse.next();
}

export const config = {
  matcher: ['/blog/:path*']
}