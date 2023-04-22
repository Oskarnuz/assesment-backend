/*
  Warnings:

  - You are about to drop the column `listId` on the `Favorite` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_listId_fkey";

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "listId";

-- CreateTable
CREATE TABLE "_FavoriteToList" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteToList_AB_unique" ON "_FavoriteToList"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteToList_B_index" ON "_FavoriteToList"("B");

-- AddForeignKey
ALTER TABLE "_FavoriteToList" ADD CONSTRAINT "_FavoriteToList_A_fkey" FOREIGN KEY ("A") REFERENCES "Favorite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteToList" ADD CONSTRAINT "_FavoriteToList_B_fkey" FOREIGN KEY ("B") REFERENCES "List"("id") ON DELETE CASCADE ON UPDATE CASCADE;
