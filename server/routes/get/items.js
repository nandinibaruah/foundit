const supabase = require('../../supabaseClient')

const items = (req, res) => {
    console.log(req?.query)
}

module.exports = items;