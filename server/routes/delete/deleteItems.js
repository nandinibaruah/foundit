const supabase = require('../../supabaseClient')

const deleteItems = (req, res) => {
    console.log(req?.query)
}

module.exports = deleteItems;