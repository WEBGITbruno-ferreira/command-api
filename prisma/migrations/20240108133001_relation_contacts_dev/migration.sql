/*
  Warnings:

  - Added the required column `userId` to the `Contatcs` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contatcs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Contatcs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Contatcs" ("email", "id", "name", "phone") SELECT "email", "id", "name", "phone" FROM "Contatcs";
DROP TABLE "Contatcs";
ALTER TABLE "new_Contatcs" RENAME TO "Contatcs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
