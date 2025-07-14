import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Seed DemandTypes
  const residentialDemand = await prisma.demandType.create({
    data: {
      demand_code: "RES",
      demand_description: "Residential",
      base_charge: 100,
      rate_per_unit: 10,
      minimum_service_charge: 50,
    },
  });

  const commercialDemand = await prisma.demandType.create({
    data: {
      demand_code: "COM",
      demand_description: "Commercial",
      base_charge: 500,
      rate_per_unit: 15,
      minimum_service_charge: 150,
    },
  });

  // Seed Branch
  const branch = await prisma.branch.create({
    data: {
      branch_name: "Kathmandu Main Branch",
      address: "New Road, Kathmandu",
      contact_number: "9800000001",
      email: "ktm.main@nea.gov.np",
    },
  });

  // Seed Users (Admin and Staff)
  const adminUser = await prisma.user.create({
    data: {
      full_name: "Admin User",
      email: "admin@nea.gov.np",
      password: "adminpass", // hash this in real-world!
      mobile_number: "9800000002",
      user_type: "admin",
      branchID: branch.id,
    },
  });

  const staffUser = await prisma.user.create({
    data: {
      full_name: "Staff User",
      email: "staff@nea.gov.np",
      password: "staffpass",
      mobile_number: "9800000003",
      user_type: "staff",
      branchID: branch.id,
    },
  });

  // Seed Customer
  const customer = await prisma.customer.create({
    data: {
      sc_number: "SC123456",
      full_name: "Bibek Subedi",
      address: "Chabahil, Kathmandu",
      mobile_number: "9800000004",
      citizenship_number: "123456789",
      dob: new Date("1995-05-20"),
      branchID: branch.id,
      demandID: residentialDemand.id,
    },
  });

  // Link User (customer type) to Customer
  await prisma.user.create({
    data: {
      full_name: "Bibek Subedi",
      email: "bibek@nea.gov.np",
      password: "customerpass",
      mobile_number: "9800000004",
      user_type: "customer",
      customerID: customer.id,
    },
  });

  // Seed Bill
  const bill = await prisma.bill.create({
    data: {
      customerID: customer.id,
      amount: 1200,
      bill_month: "July",
      bill_year: "2025",
      current_reading: "500",
      previous_reading: "400",
      units_consumed: 100,
      minimum_service_charge: 50,
      unit_charge: 10,
      total_amount: 1200,
      rebate_amount: 0,
      penalty_amount: 0,
      status: "unpaid",
      due_date: new Date("2025-07-30"),
      verified_by: staffUser.id,
    },
  });

  // Seed Payment
  await prisma.payment.create({
    data: {
      customerID: customer.id,
      amount: 1200,
      payment_status: "completed",
    },
  });

  console.log("✅ Seed data inserted successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed script error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
