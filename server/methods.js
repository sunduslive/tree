Meteor.methods({
    /////////////////////////////////////////////////////////////////////////////////////////
    //  T R E E  -  N O D E S
    /////////////////////////////////////////////////////////////////////////////////////////
    createNode: function(nodeAttributes) {
        //  var user = Meteor.user(),
        //      nodeWithSameName = Nodes.findOne({label: nodeAttributes.label});

        // ensure the user is logged in
        //  if (!user)
        //      throw new Meteor.Error(401, "You need to login to create new nodes");

        // ensure the organization has a name
        //  if (!nodeAttributes.label)
        //      throw new Meteor.Error(422, 'Please fill in a node name');

        // check that there are no previous nodes with the same name
        // if (nodeAttributes.label && nodeWithSameName) {
        //     throw new Meteor.Error(302,
        //         'This node is already there.',
        //         nodeWithSameName._id);
        //}

        // pick out the whitelisted keys
        var node = _.extend(_.pick(nodeAttributes, 'text', 'type', 'parent', 'position', 'tree'));

        var nodeId = Nodes.insert(node);
        Nodes.update({ _id: nodeId }, { $set: { "id": nodeId } });

        return nodeId;
    },

    removeNodes: function(nodesArray) {
        //  var user = Meteor.user();

        // ensure the user is logged in
        //   if (!user)
        //       throw new Meteor.Error(401, "You need to login to delete nodes");

        // ensure the organization has a name
        if (nodesArray) {
            Nodes.remove({ _id: { $in: nodesArray } });
        }

        return true;
    },
    updateNodes: function(_nodes) {
        //    var user = Meteor.user(),
        var nodeIds = [];

        // ensure the user is logged in
        //    if (!user)
        //        throw new Meteor.Error(401, "You need to login to create new nodes");

        for (var p = 0; p < _nodes.length; p++) {
            // pick out the whitelisted keys
            var node = _.extend(_.pick(_nodes[p], 'text', 'id', 'type', 'parent', 'position', 'tree'), {
                //            userId: user._id,
                //            author: user.username,
                
            });

            nodeIds.push(Nodes.update({ _id: node.id }, { $set: node }));

        }
        return nodeIds;
    },

    rootNodes: function(_tree) {
        if (Nodes.find().count() === 0) {
            Nodes.insert({
                parent: '#',
                position: 0,
                text: "Root",
                tree: "Projects",
                type: "root",
                id: "root",
                state: {
                    opened: true
                }
            });
        }
    }
});