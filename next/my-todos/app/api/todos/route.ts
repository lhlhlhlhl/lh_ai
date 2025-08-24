import {
  NextResponse
} from 'next/server';
import {
  PrismaClient
} from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { title } = await req.json()
  const todo = await prisma.todo.create({
    data: {
      title
    }
  });
  return NextResponse.json(todo)
}

export async function GET() {
  // 取所有的
  const todos = await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
  return NextResponse.json(todos)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { completed } = await req.json()
  const todo = await prisma.todo.update({
    where: {
      id: Number(params.id)
    },
    data: {
      completed
    }
  })
  return NextResponse.json(todo)
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const todo = await prisma.todo.delete({
    where: {
      id: Number(params.id)
    }
  })
  return NextResponse.json(todo)
}

