import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    for (let i = 0; i < 50; i++) {
    await prisma.team.create({
        data: {
        country: 'Country ' + Math.floor(Math.random()*100),
        },
    })
    await prisma.player.create({
        data: {
        name: 'Player ' + Math.floor(Math.random()*100),
        goalCount: Math.floor(Math.random()*100),
        birthDate: new Date(),
        team: {
            connect: { id: i + 1 },
        },
        },
    }
)}

    }
    main()
    .catch(e => {
    throw e
    })