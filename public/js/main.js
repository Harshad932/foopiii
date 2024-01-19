
function actionurl()
{

    var s=document.getElementById("f1");

    document.getElementById("ds2").style.display = "none";
    document.getElementById("tf").style.display = "none";

    var siv=document.getElementById("s1").value;
    var sd=document.getElementById("s2");

    $(document).ready(function() {
      $('.js-example-basic-single').select2();
    });
    

    if(siv==="/fl" || siv==="/cat" || siv==="/ing" || siv==="/area")
    {

        sd.options.length=0;

        if(siv==="/fl")
        {

            for(i=0;i<26;i++)
            {

                sd.options[i]=new Option(String.fromCharCode(i+65));

            }

        }

        else if(siv==="/cat")
        {

            var cat=["Breakfast","Chicken","Dessert","Goat","Lamb","Miscellaneous","Pasta","Pork","Seafood","Side",
                     "Starter","Vegan","Vegetarian"];

            for(i=0;i<cat.length;i++)
            {

              sd.options[i]=new Option(cat[i]);

            }

        }

        else if(siv==="/ing")
        {

            var ing=["Salmon","Chicken","Avocado","Apple Cider Vinegar","Asparagus","Aubergine","Baby Plum Tomatoes",
                    "Pork","Bacon","Baking Powder","Balsamic Vinegar","Basil","Basil Leaves","Basmati Rice","Bay Leaf",
                    "Bay Leaves","Bicarbonate Of Soda","Biryani Masala","Black Pepper","Black Treacle","Borlotti Beans",
                    "Bowtie Pasta","Bramley Apples", "Brandy", "Bread", "Breadcrumbs", "Broccoli", "Brown Lentils", 
                    "Brown Rice", "Brown Sugar", "Butter", "Cacao", "Cajun", "Canned Tomatoes", "Cannellini Beans", 
                    "Cardamom", "Carrots", "Cashew Nuts", "Cashews", "Caster Sugar", "Cayenne Pepper", "Celeriac", 
                    "Cheese Curds", "Cherry Tomatoes", "Chestnut Mushroom", "Chicken Breast", "Chicken Breasts", 
                    "Chicken Legs", "Chicken Stock", "Chicken Thighs", "Chickpeas", "Chili Powder", "Chilled Butter", 
                    "Chilli", "Chilli Powder", "Chinese Broccoli", "Chocolate Chips", "Chopped Onion", "Chopped Parsley",
                    "Chopped Tomatoes", "Chorizo", "Christmas Pudding", "Cilantro", "Cinnamon","Cinnamon Stick","Cloves",
                    "Coco Sugar", "Cocoa", "Coconut Cream", "Coconut Milk", "Colby Jack Cheese", "Cold Water", 
                    "Condensed Milk", "Coriander", "Coriander Leaves","Coriander Seeds", "Corn Tortillas", "Cornstarch",
                    "Cream","Celery", "Celery Salt", "Challots","Charlotte Potatoes", "Cheddar Cheese", "Cheese",
                    "Creme Fraiche", "Cubed Feta Cheese", "Cucumber","Cumin", "Cumin Seeds", "Curry Powder",
                    "Dark Brown Sugar", "Dark Soft Brown Sugar","Dark Soy Sauce", "Demerara Sugar", "Diced Tomatoes", 
                    "Digestive Biscuits", "Dill","Doner Meat", "Double Cream", "Dried Oregano", "Dry White Wine", 
                    "Egg Plants", "Egg Rolls","Egg White", "Egg Yolks", "Eggs", "Enchilada Sauce", "English Mustard", 
                    "Extra Virgin Olive Oil","Fajita Seasoning", "Farfalle", "Fennel Bulb", "Fennel Seeds", "Fenugreek",
                    "Feta", "Fish Sauce", "Flaked Almonds", "Flax Eggs", "Flour", "Flour Tortilla", "Floury Potatoes", 
                    "Free-range Egg, Beaten", "Free-range Eggs, Beaten", "French Lentils", "Fresh Basil","Fresh Thyme", 
                    "Freshly Chopped Parsley", "Fries", "Full Fat Yogurt", "Garam Masala", "Garlic","Garlic Clove",
                    "Garlic Powder", "Garlic Sauce", "Ghee", "Ginger", "Ginger Cordial","Ginger Garlic Paste",
                    "Ginger Paste", "Golden Syrup", "Gouda Cheese", "Granulated Sugar","Grape Tomatoes", "Greek Yogurt",
                    "Green Beans", "Green Chilli", "Green Olives","Green Red Lentils", "Green Salsa", "Ground Almonds", 
                    "Ground Cumin", "Ground Ginger","Gruyère", "Hard Taco Shells", "Harissa Spice", "Heavy Cream", 
                    "Honey", "Horseradish","Hotsauce", "Ice Cream", "Italian Fennel Sausages", "Italian Seasoning", 
                    "Jalapeno","Jasmine Rice", "Jerusalem Artichokes", "Kale", "Khus Khus", "King Prawns", "Kosher Salt", 
                    "Lamb", "Lamb Loin Chops", "Lamb Mince", "Lasagne Sheets", "Leek", "Lemon","Lemon Juice", 
                    "Lemon Zest", "Lemons","Lettuce", "Lime", "Little Gem Lettuce", "Macaroni","Mackerel","Madras Paste",
                    "Marjoram", "Massaman Curry Paste", "Medjool Dates","Meringue Nests", "Milk", "Minced Garlic", 
                    "Miniature Marshmallows", "Mint","Monterey Jack Cheese", "Mozzarella Balls", "Muscovado Sugar",
                    "Mushrooms", "Mustard","Mustard Powder", "Mustard Seeds", "Nutmeg", "Oil", "Olive Oil","Onion Salt",
                    "Onions","Orange", "Orange Zest", "Oregano", "Oyster Sauce", "Paprika", "Parma Ham", "Parmesan", 
                    "Parmesan Cheese", "Parmigiano-reggiano", "Parsley", "Peanut Butter", "Peanut Oil", "Peanuts", 
                    "Peas", "Pecorino", "Penne Rigate", "Pepper", "Pine Nuts", "Pitted Black Olives","Plain Chocolate", 
                    "Plain Flour", "Plum Tomatoes","Potato Starch", "Potatoes", "Prawns","Puff Pastry", "Raspberry Jam",
                    "Raw King Prawns", "Red Chile Flakes", "Red Chilli","Red Chilli Powder", "Red Onions","Red Pepper",
                    "Red Pepper Flakes", "Red Wine","Refried Beans", "Rice", "Rice Noodles", "Rice Stick Noodles",
                    "Rice Vermicelli", "Rigatoni","Rocket", "Rolled Oats", "Saffron", "Sage", "Sake", "Salsa", "Salt", 
                    "Salted Butter", "Sausages","Sea Salt", "Self-raising Flour", "Semi-skimmed Milk", "Sesame Seed", 
                    "Shallots","Shredded Mexican Cheese", "Shredded Monterey Jack Cheese", "Small Potatoes",
                    "Smoked Paprika","Smoky Paprika", "Sour Cream", "Soy Sauce", "Soya Milk", "Spaghetti", "Spinach",
                    "Spring Onions","Squash","Stir-fry Vegetables","Strawberries","Sugar","Sultanas", "Sunflower Oil", 
                    "Tamarind Ball", "Tamarind Paste", "Thai Fish Sauce","Thai Green Curry Paste","Thai Red Curry Paste",
                    "Thyme", "Tomato Ketchup", "Tomato Puree", "Tomatoes","Toor Dal", "Tuna", "Turmeric",
                    "Turmeric Powder", "Turnips", "Vanilla", "Vanilla Extract","Veal", "Vegan Butter", "Vegetable Oil", 
                    "Vegetable Stock", "Vegetable Stock Cube","Vinaigrette Dressing", "Vine Leaves", "Vinegar", "Water",
                    "White Chocolate Chips", "White Fish","White Fish Fillets", "White Vinegar", "White Wine",
                    "Whole Milk", "Whole Wheat","Wholegrain Bread", "Worcestershire Sauce", "Yogurt", "Zucchini", 
                    "Pretzels", "Cream Cheese","Icing Sugar", "Toffee Popcorn", "Caramel","Caramel Sauce","Tagliatelle",
                    "Fettuccine","Clotted Cream", "Corn Flour", "Mussels", "Fideo", "Monkfish", "Vermicelli Pasta", 
                    "Baby Squid","Squid", "Fish Stock", "Pilchards", "Black Olives","Onion","Tomato","Duck","Duck Legs", 
                    "Chicken Stock Cube", "Pappardelle Pasta", "Paccheri Pasta", "Linguine Pasta", "Sugar Snap Peas", 
                    "Crusty Bread", "Fromage Frais", "Clams", "Passata", "Rapeseed Oil", "Stilton Cheese", "Lamb Leg", 
                    "Lamb Shoulder", "Apricot", "Butternut Squash", "Couscous", "Turkey Mince","Barbeque Sauce", 
                    "Sweetcorn", "Goose Fat", "Duck Fat", "Fennel", "Red Wine Vinegar","Haricot Beans", "Rosemary",
                    "Butter Beans", "Pinto Beans", "Tomato Sauce","Mascarpone","Mozzarella", "Ricotta","Dried Apricots",
                    "Capers", "Banana","Raspberries", "Blueberries", "Walnuts", "Pecan Nuts", "Maple Syrup",
                    "Light Brown Soft Sugar", "Dark Brown Soft Sugar", "Dark Chocolate Chips","Milk Chocolate",
                    "Dark Chocolate", "Pumpkin", "Shortcrust Pastry","Peanut Cookies","Gelatine Leafs","Peanut Brittle",
                    "Peaches","Yellow Pepper","Green Pepper","Courgettes","Tinned Tomatoes","Chestnuts","Wild Mushrooms",
                    "Truffle Oil", "Paneer", "Naan Bread", "Lentils","Roasted Vegetables", "Kidney Beans", "Mixed Grain",
                    "Tahini", "Tortillas","Udon Noodles", "Cabbage", "Shiitake Mushrooms", "Mirin","Sesame Seed Oil",
                    "Baguette", "Vine Tomatoes", "Suet", "Swede", "Ham", "Oysters", "Stout","Lard", "Lamb Kidney", 
                    "Haddock", "Smoked Haddock","Brussels Sprouts", "Raisins", "Currants", "Custard", "Mixed Peel",
                    "Redcurrants", "Blackberries", "Hazelnuts", "Braeburn Apples","Red Food Colouring",
                    "Pink Food Colouring", "Blue Food Colouring","Yellow Food Colouring", "Apricot Jam", "Marzipan", 
                    "Almonds","Black Pudding", "Baked Beans", "White Flour","Yeast","Fruit Mix","Dried Fruit","Cherry",
                    "Glace Cherry", "Treacle", "Oatmeal","Oats", "Egg", "Bouquet Garni", "Single Cream",
                    "Red Wine Jelly", "Apples", "Goats Cheese", "Prosciutto","Unsalted Butter","Brie","Tarragon Leaves",
                    "Chives","Pears","White Chocolate","Star Anise","Tiger Prawns","Custard Powder","Desiccated Coconut",
                    "Frozen Peas", "Minced Pork", "Creamed Corn", "Sun-Dried Tomatoes","Dijon Mustard", "Tabasco Sauce",
                    "Canola Oil", "Cod", "Salt Cod", "Ackee", "Jerk", "Baby Aubergine", "Paella Rice", 
                    "Scotch Bonnet","Oxtail","Broad Beans","Red Snapper","Malt Vinegar","Rice Vinegar","Water Chestnut",
                    "Tofu", "Doubanjiang", "Fermented Black Beans", "Scallions", "Sichuan Pepper", "Wonton Skin", 
                    "Starch", "Rice wine", "Cooking wine", "Duck Sauce", "Gochujang", "Bean Sprouts", "Noodles", 
                    "Wood Ear Mushrooms", "Dark Rum", "Light Rum", "Rum", "English Muffins", "Muffins",
                    "White Wine Vinegar", "Smoked Salmon", "Mars Bar", "Rice Krispies", "Ancho Chillies", 
                    "Almond Milk", "Allspice", "Almond Extract", "Tripe", "Goat Meat", "Black Beans", "Anchovy Fillet", 
                    "Ras el hanout", "Filo Pastry", "Orange Blossom Water", "Candied Peel", "Grand Marnier","Sherry", 
                    "Rose water", "Mixed Spice", "Mincemeat", "Sweet Potatoes", "Bread Rolls", "Bun", "Potatoe Buns", 
                    "Ground Pork", "Pork Chops", "Yukon Gold Potatoes", "Yellow Onion", 
                    "Chicken Stock Concentrate", "Persian Cucumber", "Mayonnaise", "Sriracha", "Rhubarb", "Pita Bread", 
                    "Bulgur Wheat", "Quinoa", "Dill Pickles", "Sesame Seed Burger Buns", "Buns", "Iceberg Lettuce", 
                    "Gherkin Relish", "Cheese Slices", "Shortening", "Warm Water","Boiling Water", "Pickle Juice", 
                    "Powdered Sugar", "Kielbasa", "Polish Sausage", "Sauerkraut", "Caraway Seed", "Herring", "Jam", 
                    "Mulukhiyah", "Sushi Rice","Figs","Cider","Beetroot","Sardines","Ciabatta","Buckwheat","Prunes"];

                    for(i=0;i<ing.length;i++)
                    {
        
                      sd.options[i]=new Option(ing[i]);
        
                    } 

        }

        else if(siv==="/area")
        {

            var area=["American","British","Canadian","Chinese","Croatian","Dutch","Egyptian","Filipino","French",
                      "Greek","Indian","Irish","Italian","Jamaican","Japanese","Kenyan","Malaysian","Mexican",
                      "Moroccan","Polish","Portuguese","Russian","Spanish", "Thai","Tunisian","Turkish","Vietnamese"];

            for(i=0;i<area.length;i++)
              {
          
                sd.options[i]=new Option(area[i]);
          
              }

        }

        document.getElementById("ds2").style.display = "block";

    }
    else if(siv==="/name")
    {

        document.getElementById("tf").style.display = "block";

    }

    f1.action=siv;
    

}

function toRecipe(sm)
{

  fetch('/recipePage', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ foods:sm}),
  })
  .then(response => response.text())
  .then(html => {
    
    document.open();
    document.write(html);
    document.close();
})
  .catch(error => console.error('Error:', error));

} 

function sorryRadhaKrishn(event) {
  const forbiddenWord = 'beef';
  const inputValue = event.target.value.toLowerCase();

  if (inputValue.includes(forbiddenWord)) {
      // If the input contains the forbidden word, prevent the input
      event.preventDefault();
      alert('The word "beef" is not allowed.');
      // Optionally, you can clear the input field
      event.target.value = '';
  }
}


