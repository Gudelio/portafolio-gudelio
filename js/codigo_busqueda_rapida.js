$(function(){
	$('#tblTable').searchable({
		striped:true, 
		oddRow:{'background-color':'#f5f5f5'},
		eventRow:{'background-color':'#ffffff'},
		searchType:'fuzzy'
	});
});