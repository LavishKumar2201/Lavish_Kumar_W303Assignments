/*
    Assignment 05
    Student Name : Lavish Kumar
    Student Id : 0823298
*/
$(document).ready(function () {

    class ContentItem {
        // properties 
        id;
        name;
        description;
        categoryGenre;
    
        // constructor
        constructor(id,name,description,categoryGenre){
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
          }

        //methods
        updateContentItem(id,name,description,categoryGenre){
            if((this.id == id) && (name != null) && (description != null) && (categoryGenre != null)){
                this.name = name;
                this.description = description;
                this.categoryGenre = categoryGenre;
            }
        }
        tostring() {
            $('#content-item-list').append(
                '<div class ="content-item-wrapper"id= "content-item-ID' +this.id +'">'+
                 '<h2>Name:- '+ this.name+'</h2>'+
                 '<p>Description :- '+ this.description+' </p>'+
                 '<div>categoryGenre :- '+ this.categoryGenre+' </div>'+
                  '</div>');
         
        }
    }
    // crete a list of books
    let allsingers = [
        {
        id : '1',
        name : 'Merchant Of Venice',
        description : 'Novel',
        categoryGenre : 'Acton And Adventure' 
      },
      {
        id : '2',
        name : 'Half Girlfriend',
        description : 'Story',
        categoryGenre : 'Drama' 
      },
      {
        id : '3',
        name : 'Milka Singh',
        description : 'Sports',
        categoryGenre : 'Documentary' 
    },
      {
        id : '4',
        name : 'Kissing Booth',
        description : 'Story',
        categoryGenre : 'Romantic' 
    },
      {
        id : '5',
        name : 'In Five Years',
        description : 'Novel',
        categoryGenre : 'Classic' 
      }
    ]
    for(i = 0; i < allsingers.length; i++){
      $('#content-item-list').append(
  '<div class ="content-item-wrapper"id= "content-item-' +allsingers[i].id + '">'+
   '<h4>Name:- '+ allsingers[i].name+'</h4>'+
   '<p>Description :- '+ allsingers[i].description+' </p>'+
   '<div> CategoryGenre :- '+ allsingers[i].categoryGenre+' </div>'+
    '</div>'); 
  };
    //succssfull button click
          $('#successful-button').click(function(){
            updateContentItemSuccessfully();
        });
        //unsuccssfull button click
        $('#unsuccessful-button').click(function(){
            updateContentItemUnsuccessfully();
        });
        // Apply styles using jQuery 
        for(i = 0; i < allsingers.length; i++){
        $('#content-item-list').css({
          border: '4px solid darkblue ',
          width: '250px', 
          padding: '15px', 
          margin: '40px auto', 
         } )};
        
});
