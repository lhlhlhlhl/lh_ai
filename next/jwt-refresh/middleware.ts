import {
  NextRequest,
  NextResponse
} from 'next/server'

export async function middleware(request: NextRequest) {
  return Response.redirect(new URL('/login', request.url))
}
