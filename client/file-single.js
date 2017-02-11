Template.tfileSingle.helpers({
        isfolder: () => {
        var folderId = Router.current().params._id;
    	return Nodes.findOne({_id: folderId, type: "default"});
    },
    isfile: () => {
    	var nodeId = Router.current().params._id;
        return Nodes.findOne({_id: nodeId, type: "file"});
    }
});