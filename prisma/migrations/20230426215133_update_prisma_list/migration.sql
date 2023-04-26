/*
  Warnings:

  - The primary key for the `List` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `List` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `B` on the `_FavoriteToList` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_FavoriteToList" DROP CONSTRAINT "_FavoriteToList_B_fkey";

-- AlterTable
ALTER TABLE "List" DROP CONSTRAINT "List_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "List_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_FavoriteToList" DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteToList_AB_unique" ON "_FavoriteToList"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteToList_B_index" ON "_FavoriteToList"("B");

-- AddForeignKey
ALTER TABLE "_FavoriteToList" ADD CONSTRAINT "_FavoriteToList_B_fkey" FOREIGN KEY ("B") REFERENCES "List"("id") ON DELETE CASCADE ON UPDATE CASCADE;
