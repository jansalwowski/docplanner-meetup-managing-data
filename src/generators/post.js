import faker from 'faker';


const USER_AVATARS = [
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00d0bdbfff10a2bdc1047b266a00cc0adf6faf6e_full.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00d0be56ede4eed87c364d649098e334b36fcc86_full.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00d0bf2399769d8303e500a63d91ff45a88b0584_full.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00d0bf7753f9b47a102c901c712d6f92cd6f8a7d_full.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00d0bfde0f1a19b3e0ccb03e83fad50c11a33a35_full.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00d103665dd3c62051e567e132dfb79ecb94f7bb_full.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00d104b394270ae57c37877490336dd8c7d3cf61_full.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00d105a5c3a74fea68bce64bcb7b6b4dd7914fb3_full.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00d105dc724c20a790ae1e1a35206b5efeea263e_full.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00d106258f3a6ece4dc24baf7c6d3f8c5e2677df_full.jpg',
  'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00d107231717f3a67122778263726343690cc0e1_full.jpg',
];

const USER_IDS = [
  {
    id: faker.random.uuid(),
    name: faker.name.findName(),
  },
  {
    id: faker.random.uuid(),
    name: faker.name.findName(),
  },
  {
    id: faker.random.uuid(),
    name: faker.name.findName(),
  },
  {
    id: faker.random.uuid(),
    name: faker.name.findName(),
  },
];

export function generateUser() {
  const { id, name } = faker.random.arrayElement(USER_IDS);

  return {
    id,
    name,
    avatar: faker.random.arrayElement(USER_AVATARS),
  };
}

const USERS = [
  generateUser(),
  generateUser(),
  generateUser(),
  generateUser(),
  generateUser(),
  generateUser(),
  generateUser(),
];

export function generateComment() {
  return {
    id: faker.random.uuid(),
    content: faker.random.words(faker.random.number({ min: 1, max: 15 })),
    user: faker.random.arrayElement(USERS),
  };
}

export function generateCollection(generator) {
  return Array(5)
    .fill(null)
    .map(generator);
}

export function generateComments() {
  return generateCollection(generateComment);
}

export function generatePost() {
  return {
    id: faker.random.uuid(),
    content: faker.lorem.sentences(faker.random.number({ min: 1, max: 5 })),
    user: generateUser(),
    comments: generateComments(),
  };
}

export function generatePosts() {
  return generateCollection(generatePost);
}
