import { prisma } from '../../../../../app/lib/prisma'
import { NextResponse } from "next/server";

export async function GET(req, { params }) {

    const id = parseInt(params.id)

    try {
        const post = await prisma.post.findUnique({ where: { id } });

        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.error(error);
    }
}


