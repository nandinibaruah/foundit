const { createClient } = require('@supabase/supabase-js');

const dotenv = require('dotenv');
dotenv.config();

const options = {
  auth: {
    persistSession: false,
  },
};

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY, options);

module.exports = supabase;