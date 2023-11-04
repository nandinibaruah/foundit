const supabase = require('../../supabaseClient')

const listItems = (req, res) => {
    console.log(req?.query)
}

module.exports = listItems;