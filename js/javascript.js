var links = [
    
    // Home page
    {
        name: "Home",
        url: "/" 
    },

    // Login/register page
    {
        name: "",
        url: "/"
    },
    
    // Profile page
    {
        name: "",
        url: "/"
    },
    
    // Gameslist page
    {
        name: "",
        url: "/"
    },
    
    // Gameinfo page
    {
        name: "",
        url: "/"
    },

    // Shoppingchart page
    {
        name: "",
        url: "/"
    },

    // Contactus page
    {
        name: "",
        url: "/"
    }
]


// this is copy paste from Oliver dipple. 
function createNavItem(item) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = item.url;
    a.innerText = item.name;
    li.append(a);
    return li;
  }
  
  var ul = document.querySelector('ul.nav');
  
  for (var i = 0; i < links.length; i++) {
    var item = links[i];
    var itemHtml = createNavItem(item);
    ul.append(itemHtml);
  }


  function createHeader(header){
    var header = 
  document.createElement('header');
    return header;
  }
  