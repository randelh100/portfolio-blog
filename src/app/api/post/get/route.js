import { prisma } from '../../../../app/lib/prisma'
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const post = await prisma.post.findMany();
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json(error);
    }
}