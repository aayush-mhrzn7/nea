-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile_number" TEXT NOT NULL,
    "user_type" TEXT NOT NULL,
    "customerID" INTEGER,
    "branchID" INTEGER,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "sc_number" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "mobile_number" TEXT NOT NULL,
    "citizenship_number" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "branchID" INTEGER NOT NULL,
    "demandID" INTEGER NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Branch" (
    "id" SERIAL NOT NULL,
    "branch_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bill" (
    "id" SERIAL NOT NULL,
    "customerID" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "bill_month" TEXT NOT NULL,
    "bill_year" TEXT NOT NULL,
    "current_reading" TEXT NOT NULL,
    "previous_reading" TEXT NOT NULL,
    "units_consumed" INTEGER NOT NULL,
    "minimum_service_charge" INTEGER NOT NULL,
    "unit_charge" INTEGER NOT NULL,
    "total_amount" INTEGER NOT NULL,
    "rebate_amount" INTEGER NOT NULL,
    "penalty_amount" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "generated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verified_by" INTEGER NOT NULL,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paid_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerID" INTEGER NOT NULL,
    "payment_status" TEXT NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DemandType" (
    "id" SERIAL NOT NULL,
    "demand_code" TEXT NOT NULL,
    "demand_description" TEXT NOT NULL,
    "base_charge" INTEGER NOT NULL,
    "rate_per_unit" INTEGER NOT NULL,
    "minimum_service_charge" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DemandType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_number_key" ON "User"("mobile_number");

-- CreateIndex
CREATE UNIQUE INDEX "User_customerID_key" ON "User"("customerID");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_sc_number_key" ON "Customer"("sc_number");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_mobile_number_key" ON "Customer"("mobile_number");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_citizenship_number_key" ON "Customer"("citizenship_number");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_demandID_key" ON "Customer"("demandID");

-- CreateIndex
CREATE UNIQUE INDEX "Branch_contact_number_key" ON "Branch"("contact_number");

-- CreateIndex
CREATE UNIQUE INDEX "Branch_email_key" ON "Branch"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_branchID_fkey" FOREIGN KEY ("branchID") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_customerID_fkey" FOREIGN KEY ("customerID") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_branchID_fkey" FOREIGN KEY ("branchID") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_demandID_fkey" FOREIGN KEY ("demandID") REFERENCES "DemandType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_customerID_fkey" FOREIGN KEY ("customerID") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_verified_by_fkey" FOREIGN KEY ("verified_by") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_customerID_fkey" FOREIGN KEY ("customerID") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
