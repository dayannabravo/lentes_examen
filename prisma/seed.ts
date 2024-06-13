import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const orders = [
    {
      clientFirstName: 'John',
      contactPhone: '1234567890',
      measures: 2.5,
      type: 'Monofocal',
      brand: 'BrandA',
      treatment: 'Antirreflejo',
    },
    {
      clientFirstName: 'Jane',
      contactPhone: '0987654321',
      measures: 1.75,
      type: 'Progresivo',
      brand: 'BrandB',
      treatment: 'Fotocromático',
    },
    {
      clientFirstName: 'Alice',
      contactPhone: '1112223333',
      measures: 0.75,
      type: 'Bifocal',
      brand: 'BrandC',
      treatment: 'Protección UV',
    },
  ];

  for (const order of orders) {
    await prisma.little_eyes.create({
      data: order,
    });
  }

  console.log('Seed data created successfully');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
