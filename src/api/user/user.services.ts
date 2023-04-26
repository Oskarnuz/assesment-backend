import { PrismaClient } from "@prisma/client"

interface UserInput {
  email: string
  password: string
}

interface ListInput {
  name: string
  favorites: { connect: { id: number } }[]
}

const prisma = new PrismaClient()

export const getAllUsers = () => {
  return prisma.user.findMany({
    select: {
      email: true,
      lists: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  })
}

export const createUser = async (input: any)  => {
  const totalItems = await prisma.favorite.count()
  const indexArr = []

  for (let i = 0; i < Math.floor(Math.random() * 4) + 3; i++) {
    indexArr.push(Math.floor(Math.random() * totalItems))
  }

  const favorite_data = await prisma.favorite.findMany({
    where: {
      OR: Array.from(indexArr).map(index => ({ id: index })),
    },
  })

  return prisma.user.create({
    data: {
      email: input.email,
      password: input.password,
      lists: {
        create: {
          name: "My first list",
          favorites: {
            connect: favorite_data.map((favorite) => ({ id: favorite.id })),
        },
      },
    },
  },
  });
};

export const getUserById = (id: string) => {
  return prisma.user.findUnique({
    where: {
      id: id
    },
    select: {
      email: true,
      lists: {
        select: {
          id: true,
          name: true,
          favorites: true,
        },
      },
    },
  })
}
