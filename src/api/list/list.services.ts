import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllLists = () => {
  return prisma.list.findMany({
    select: {
      id: true,
      name: true,
      favorites: true
    },
  });
};

export const getListById = (id: number) => {
  return prisma.list.findUnique({
    where: {
      id: id,
    },
    select: {
      name: true,
      favorites: true
      },
  });
};

export const createList = async (name: string, ownerId: string) => {
  
  const totalItems = await prisma.favorite.count();
  const indexArr = [];

  for (let i = 0; i < Math.floor(Math.random() * 4) + 3; i++) {
    indexArr.push(Math.floor(Math.random() * totalItems));
  }

  const favorite_data = await prisma.favorite.findMany({
    where: {
      OR: Array.from(indexArr).map((index) => ({ id: index })),
    },
  });

  const listOwner = await prisma.user.findUnique({
    where: {
      id: ownerId,
    },
  });

  if (listOwner === null) {
    return "Invalid User identification";
  } else {
    return prisma.list.create({
      data: {
        name,
        owner:{
          connect: {
            id:ownerId,
          }
        },
        favorites: {
          connect: favorite_data.map((favorite) => ({ id: favorite.id })),
        },
      },
    });
  }
};

export const deleteList = (id: number) => {
  return prisma.list.delete({
    where: {
      id: id,
    },
    select: {
      name: true,
      favorites: true
    },
  });
};

// export const updateList = async (id: number, data: object) => {
//   const list = await prisma.list.update({
//     where: {
//       id: id,
//     },
//     data: data,
//     select: {
//       name: true,
//       favorites: true
//     },
//   });
//   return list;
// };

export const updateList = async (id: number, newData: { name?: string; favorites?: { id: number }[] }) => {
  const { name, favorites } = newData;
  const listOwner = await prisma.list.findUnique({
    where: {
      id,
    },
    select: {
      owner: {
        select: {
          id: true,
        },
      },
    },
  });

  if (!listOwner) {
    throw new Error('List not found');
  }

  if (name || favorites) {
    const updatedData: any = {};

    if (name) {
      updatedData.name = name;
    }

    if (favorites) {
      const favoriteIds = favorites.map((f) => f.id);
      const existingFavorites = await prisma.favorite.findMany({
        where: {
          id: {
            in: favoriteIds,
          },
        },
      });

      if (existingFavorites.length !== favoriteIds.length) {
        throw new Error('Some favorites do not exist');
      }

      updatedData.favorites = {
        set: favoriteIds.map((id) => ({ id })),
      };
    }

    return prisma.list.update({
      where: {
        id,
      },
      data: updatedData,
    });
  }
  }