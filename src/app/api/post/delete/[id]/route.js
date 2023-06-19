import { prisma } from '../../../../lib/prisma'
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    const id = params.id;
    try {
        const res = await prisma.post.delete({
            where: {
                id: Number(id),
            },
        })
        return NextResponse.json(res);
    } catch (error) {
        return NextResponse.json(error);
    }
}