import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient()

const seedFavorite = async (prisma: PrismaClient): Promise<void> => {
  const favorite_arr = []
  for(let i = 0; i < 200; i++) {
    const favorite = {
      title: faker.music.songName(),
      description: faker.music.genre(),
      link: faker.internet.url(),
    }

    favorite_arr.push(favorite)
  }

  await prisma.favorite.createMany({
    data: favorite_arr
  })

  console.log('Favorite seeded successfully');

}

export default seedFavorite