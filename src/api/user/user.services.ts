import { PrismaClient } from "@prisma/client";

interface UserInput {
  email: string;
  password: string;
}

interface ListInput {
  name: string;
  favorites: { connect: { id: string } }[];
}

const prisma = new PrismaClient();

export const getAllUsers = (): Promise<User[]> => {
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
  });
};

export const createUser = async (input: UserInput): Promise<User> => {
  const totalItems = await prisma.favorite.count();
  const indexArr = [];

  for (let i = 0; i < (Math.floor(Math.random() * 4) + 3); i++) {
    indexArr.push(Math.floor(Math.random() * totalItems))
  }
  
  const favorite_data = await prisma.favorite.findMany({
    where: {
      OR: Array.from(indexArr).map(index => ({ id: index })),
    },
  });

  const listInput: ListInput = {
    name: "My favorites",
    favorites: favorite_data.map(favorite => ({ id: favorite.id })),
  };

  return prisma.user.create({
    data: {
      email: input.email,
      password: input.password,
      lists: {
        create: listInput,
      },
    },
  });
};

export const getUserById = (id: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: {
      id,
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
  });
};
