Nodes = new Mongo.Collection('nodes');

var noteFields = {
    id: {
        type: String,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },

    parent: {
        type: String,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    position: {
        type: String,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    tree: {
        type: String,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    text: {
        type: String
    },
    type: {
        type: String,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    content: {
        type: String,
        label: 'Body',
        optional: true
    }
};

noteSchema = new SimpleSchema(noteFields);
Nodes.attachSchema(noteSchema);