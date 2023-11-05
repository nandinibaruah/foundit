const supabase = require('../../supabaseClient')

const insertItems = (req, res) => {
    console.log(req?.body)

    res.send(req?.body)
}

module.exports = insertItems;