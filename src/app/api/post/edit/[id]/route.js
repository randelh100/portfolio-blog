import { prisma } from '../../../../../app/lib/prisma'
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    const id = params.id;
    const body = await req.text();
    const { header, description } = JSON.parse(body);
    console.log(header, description, id);
    const post = await prisma
        .post.update({
            where: {
                id: Number(id),
            },
            data: {
                header,
                description,
            }
        });
    return NextResponse.json(post);
}
