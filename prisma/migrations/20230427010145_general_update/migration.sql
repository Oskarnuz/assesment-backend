/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `List` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `List` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `List` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `List` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "List" DROP CONSTRAINT "List_userId_fkey";

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "List" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
