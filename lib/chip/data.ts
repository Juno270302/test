import { faker } from "@faker-js/faker";

export interface Chip {
  key: string;
  chipName: string;
  chipInfo: String;
}

export function createRandomUser(): Chip {
  return {
    key: faker.string.uuid(),
    chipName: faker.name.fullName(), // Generates a random full name
    chipInfo: faker.lorem.sentence(),
  };
}

export function generateChips(count: number): Chip[] {
  return Array.from({ length: count }, () => createRandomUser());
}

export const USERS: Chip[] = generateChips(5);
