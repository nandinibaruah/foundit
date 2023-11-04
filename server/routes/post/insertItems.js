const supabase = require('../../supabaseClient')

const insertItems = (req, res) => {
    console.log(req?.query)
}

module.exports = insertItems;