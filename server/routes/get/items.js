const supabase = require('../../supabaseClient')

const items = async (req, res) => {
    const data = await getItem()

    console.log(data)

    res.send(data)
}

async function getItem(){
    let { data, error } = await supabase
    .from('item')
    .select('*')
    .order('id', { ascending: false })

    return data;
}

module.exports = items;