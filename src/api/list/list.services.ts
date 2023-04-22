import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllLists = () => {
  return prisma.list.findMany({
    select: {
      id: true,
      name: true,
      favorites: {
        select: {
          id: true,
          title: true,
          description: true,
          link: true,
        },
      },
    },
  });
};

export const getListById = (id: string) => {
  return prisma.list.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      favorites: {
        select: {
          id: true,
          title: true,
          description: true,
          link: true,
        },
      },
      User: {
        select: {
          id: true,
          email: true,
        },
      },
    },
  });
};

export const createList = (input: any) => {
  return prisma.list.create({
    data: {
      name: input.name,
      favorites: {
        createMany: {
          data: input.favorites,
        },
      },
      User: {
        connect: {
          id: input.userId,
        },
      },
    },
    select: {
      id: true,
      name: true,
      favorites: {
        select: {
          id: true,
          title: true,
          description: true,
          link: true,
        },
      },
      User: {
        select: {
          id: true,
          email: true,
        },
      },
    },
  });
};

export const updateList = (id: string, input: any) => {
  return prisma.list.update({
    where: {
      id: id,
    },
    data: {
      name: input.name,
      favorites: {
        deleteMany: {},
        createMany: {
          data: input.favorites,
        },
      },
    },
    select: {
      id: true,
      name: true,
      favorites: {
        select: {
          id: true,
          title: true,
          description: true,
          link: true,
        },
      },
      User: {
        select: {
          id: true,
          email: true,
        },
      },
    },
  });
};

export const deleteList = (id: string) => {
  return prisma.list.delete({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      favorites: {
        select: {
          id: true,
          title: true,
          description: true,
          link: true,
        },
      },
      User: {
        select: {
          id: true,
          email: true,
        },
      },
    },
  });
};
