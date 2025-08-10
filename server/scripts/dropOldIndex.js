const mongoose = require('mongoose');
require('dotenv').config();

const dropOldIndex = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://zaheersoftwere:zaheer1234@cluster0.ofjg8.mongodb.net/pharmacy-project');
    console.log('Connected to MongoDB');

    // Get the users collection
    const db = mongoose.connection.db;
    const collection = db.collection('users');

    // List existing indexes
    console.log('Current indexes:');
    const indexes = await collection.listIndexes().toArray();
    indexes.forEach(index => {
      console.log(`- ${index.name}: ${JSON.stringify(index.key)}`);
    });

    // Drop the old emailOrPhone index if it exists
    try {
      await collection.dropIndex('emailOrPhone_1');
      console.log('✅ Successfully dropped emailOrPhone_1 index');
    } catch (error) {
      if (error.code === 27) {
        console.log('ℹ️  emailOrPhone_1 index does not exist');
      } else {
        console.error('❌ Error dropping index:', error.message);
      }
    }

    // List indexes after dropping
    console.log('\nIndexes after cleanup:');
    const newIndexes = await collection.listIndexes().toArray();
    newIndexes.forEach(index => {
      console.log(`- ${index.name}: ${JSON.stringify(index.key)}`);
    });

    await mongoose.disconnect();
    console.log('✅ Migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
};

dropOldIndex();
