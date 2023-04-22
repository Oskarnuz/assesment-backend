import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllFavorites = () => {
  return prisma.favorite.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      link: true,
      lists: {
        select: {
          id: true,
          name: true,
          userId: true
        }
      }
    }
  })
}

export const getFavoriteById = (id: string) => {
  return prisma.favorite.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      title: true,
      description: true,
      link: true,
      lists: {
        select: {
          id: true,
          name: true,
          userId: true
        }
      }
    }
  })
}

export const createFavorite = (input: any) => {
  return prisma.favorite.create({
    data: {
      title: input.title,
      description: input.description,
      link: input.link,
      lists: input.lists
    }
  })
}

export const updateFavorite = (id: string, input: any) => {
  return prisma.favorite.update({
    where: {
      id: id
    },
    data: {
      title: input.title,
      description: input.description,
      link: input.link,
      lists: input.lists
    }
  })
}

export const deleteFavorite = (id: string) => {
  return prisma.favorite.delete({
    where: {
      id: id
    }
  })
}
