import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    const users = await prisma.AppUser.findMany();
    return NextResponse.json(users);
}

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email } = body;

    const user = await prisma.AppUser.create({
        data: { name, email },
    });

    return NextResponse.json(user);
}
