//function declaration for newImage
function newImage (ImageSource,ImagePosition, ImageLeft, ImageBottom){let Image = document.createElement('img')

Image.src = ImageSource;
Image.style.position = ImagePosition;
Image.style.left = ImageLeft;
Image.style.bottom = ImageBottom;
document.body.appendChild(Image);
}

// creating the character using newImage function
newImage("assets/green-character.gif", "fixed", "100px", "100px");

// creating the pine tree using newImage function
newImage("assets/pine-tree.png","fixed", "450px", "200px");

// creating the tree using newImage function
newImage("assets/tree.png","fixed", "200px", "300px");

// creating the pillar using newImage function
newImage("assets/pillar.png","fixed", "350px", "100px");

// creating the crate using newImage function
newImage("assets/crate.png","fixed", "150px", "200px");

// creating the well using newImage function
newImage("assets/well.png","fixed", "5000px", "450px");


//function declaration for newItem
function newItem (ImageSource,ImagePosition, ImageLeft, ImageBottom) {let Item = newImage (ImageSource,ImagePosition, ImageLeft, ImageBottom); 

Item.addEventListener('dblclick', function (){
    Item.remove() });

}

// creating the sword using newItem function

newItem("assets/sword.png", "fixed", "500px", "405px")

// creating the sheild using newItem function

newItem("assets/sheild.png", "fixed", "165px", "185px")

// creating the staff using newItem function
    
newItem("assets/staff.png", "fixed", "600px", "100px")

