const supabase = require('../../supabaseClient')

const userItems = (req, res) => {
    console.log(req?.query)
}

module.exports = userItems;