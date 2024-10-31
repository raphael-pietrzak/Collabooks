

// seeds/xxxxxx_seed_data.js

// seed_collabook_data.js
exports.seed = async function (knex) {
  // Supprime toutes les données existantes dans l'ordre correct
  await knex('Collaborations').del();
  await knex('Stories').del();
  await knex('Users').del();

  // Insère des utilisateurs de base
  const [user1, user2, user3] = await knex('Users').insert([
    { email: 'user1@example.com', pseudo: 'UserOne', password: 'hashedpassword1' },
    { email: 'user2@example.com', pseudo: 'UserTwo', password: 'hashedpassword2' },
    { email: 'user3@example.com', pseudo: 'UserThree', password: 'hashedpassword3' },
  ]).returning('user_id');

  // Insère des histoires de base
  const [story1, story2] = await knex('Stories').insert([
    { title: 'The First Adventure', content: 'Once upon a time...', creator_id: user1.user_id },
    { title: 'A Tale of Two Users', content: 'It was the best of times, it was the worst of times...', creator_id: user2.user_id },
  ]).returning('story_id');

  // Associe les utilisateurs aux histoires via Collaborations
  await knex('Collaborations').insert([
    { user_id: user1.user_id, story_id: story2.story_id, role: 'co-author' },
    { user_id: user2.user_id, story_id: story1.story_id, role: 'co-author' },
    { user_id: user3.user_id, story_id: story1.story_id, role: 'reader' },
  ]);
};