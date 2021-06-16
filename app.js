let movierating = [];
let idValues =[]
let id = 0;


$(function() {

function getIds(){        
    for (let arr of movierating){
        if(arr!=null)
            idValues.push(arr[0])
            }
        }
     

function append(arr){
        $('#tableBody').append('<tr><td>'+arr[id][1]+'</td><td>'+arr[id][2]+'</td><td><button class="delete" data-delete-attr='+id+'>Delete</button></td></tr>')
     }
     

function clearFields(){
    $('#movie').val("");
    $('#rating').val(5);
    $('output').val('5');
}


$('form').on('submit', function(e){
    e.preventDefault();
    let movie = $('#movie').val();
    let rating = $('#rating').val();
    let toPush = [id, movie, rating]
    movierating.push(toPush);
    append(movierating);
    clearFields();  
    id++;

  

});



$('body').on('click', '.delete',function(e){
    e.preventDefault();
    $(e.target).closest('tr').remove()
    getIds()
    let toRemove = idValues.findIndex(ind=>{
        ind === $(e.target).data('delete-attr')
    });
    movierating.splice(toRemove,1)
    movierating.length ++  

});
    
});



   


