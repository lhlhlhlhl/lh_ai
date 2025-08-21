import {
  NextResponse //把结果返回给界面调用
} from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://api.github.com/users/lhlhlhlhl/repos')
    const repos = await response.json()
    return NextResponse.json(repos)

  } catch (err) {
    return NextResponse.json({
      error: '获取失败'
    }, {
      status: 500
    })

  }
}