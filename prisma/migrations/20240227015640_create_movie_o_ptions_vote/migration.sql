-- CreateTable
CREATE TABLE "movieVoteOptions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "movieVoteOptions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movieVoteOptions" ADD CONSTRAINT "movieVoteOptions_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
