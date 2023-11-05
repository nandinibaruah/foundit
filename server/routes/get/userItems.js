const supabase = require('../../supabaseClient')

const userItems = (req, res) => {
    console.log(req?.query)

    res.send(req?.params)
}

module.exports = userItems;