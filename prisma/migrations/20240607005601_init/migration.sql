-- CreateTable
CREATE TABLE "Little_eyes" (
    "id" UUID NOT NULL,
    "clientFirstName" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "measures" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "treatment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Little_eyes_pkey" PRIMARY KEY ("id")
);
