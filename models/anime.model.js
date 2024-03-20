const { EntitySchema } = require("typeorm")
module.exports = new EntitySchema({
    name: "anime",
    tableName: "anime",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: "uuid"

        },
        fav_character: {
            type: "varchar"
        },
        fav_series: {
            type: "varchar",


        },

    }
})