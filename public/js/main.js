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

// Enhanced JavaScript with Smooth Animations and Effects

// DOM Ready
$(document).ready(function() {
    initializeAnimations();
    setupEventListeners();
    initializeSelect2();
    setupScrollEffects();
    addLoadingStates();
});

// Initialize entrance animations
function initializeAnimations() {
    // Stagger animation for cards
    $('.frontdatabranch').each(function(index) {
        $(this).css({
            'animation-delay': (index * 0.1) + 's',
            'animation-fill-mode': 'both'
        });
    });
    
    // Add floating animation to navbar brand
    $('.navbar-brand').hover(
        function() {
            $(this).addClass('animate__animated animate__pulse');
        },
        function() {
            $(this).removeClass('animate__animated animate__pulse');
        }
    );
}

// Setup event listeners
function setupEventListeners() {
    // Enhanced form submission with loading state
    $('#f1').on('submit', function(e) {
        const submitBtn = $(this).find('input[type="submit"]');
        const originalText = submitBtn.val();
        
        submitBtn.val('Searching...').prop('disabled', true);
        submitBtn.html('<span class="loading"></span> Searching...');
        
        // Add subtle shake effect to form
        $('.myselect').addClass('animate__animated animate__pulse');
        
        setTimeout(() => {
            $('.myselect').removeClass('animate__animated animate__pulse');
        }, 600);
    });
    
    // Smooth scroll for better UX
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 800, 'easeInOutCubic');
        }
    });
    
    // Enhanced card hover effects
    $('.frontdatabranch').hover(
        function() {
            $(this).find('.fi').css('transform', 'scale(1.1)');
            $(this).find('.h3meal').css('color', 'var(--primary-color)');
        },
        function() {
            $(this).find('.fi').css('transform', 'scale(1)');
            $(this).find('.h3meal').css('color', 'var(--dark-color)');
        }
    );
    
    // Add ripple effect to buttons
    $('.btn').on('click', function(e) {
        const button = $(this);
        const ripple = $('<span class="ripple"></span>');
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.css({
            width: size,
            height: size,
            left: x,
            top: y
        }).addClass('ripple-animate');
        
        button.append(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    
    // Add back to top button functionality
    addBackToTopButton();
}

// Initialize Select2 with custom styling
function initializeSelect2() {
    $('.js-example-basic-single').select2({
        placeholder: "Select an option",
        allowClear: true,
        width: '100%'
    });
    
    // Custom styling for Select2
    $('.select2-container').addClass('custom-select2');
}

// Setup scroll effects
function setupScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        
        // Parallax effect for navbar
        if (scrollTop > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
        
        // Animate elements on scroll
        $('.frontdatabranch').each(function() {
            const elementTop = $(this).offset().top;
            const elementVisible = 150;
            
            if (scrollTop > (elementTop - windowHeight + elementVisible)) {
                $(this).addClass('animate-in');
            }
        });
        
        ticking = false;
    }
    
    $(window).on('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
}

// Add loading states to interactions
function addLoadingStates() {
    // Loading overlay for form submissions
    const loadingOverlay = $(`
        <div class="loading-overlay">
            <div class="loading-spinner">
                <div class="spinner-ring"></div>
                <div class="loading-text">Fetching delicious recipes...</div>
            </div>
        </div>
    `);
    
    $('body').append(loadingOverlay);
    
    // Show loading on form submit
    $('form').on('submit', function() {
        $('.loading-overlay').fadeIn(300);
    });
    
    // Hide loading when page loads
    $(window).on('load', function() {
        $('.loading-overlay').fadeOut(300);
    });
}

// Add back to top button
function addBackToTopButton() {
    const backToTop = $(`
        <div class="back-to-top">
            <i class="fas fa-arrow-up"></i>
        </div>
    `);
    
    $('body').append(backToTop);
    
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            backToTop.addClass('show');
        } else {
            backToTop.removeClass('show');
        }
    });
    
    backToTop.on('click', function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });
}

// MAIN FUNCTION - Combined and Enhanced actionurl
function actionurl() {
    const selectValue = document.getElementById('s1').value;
    const form = document.getElementById('f1');
    const secondSelect = document.getElementById('ds2');
    const textField = document.getElementById('tf');
    const s2 = document.getElementById('s2');
    
    // Add transition effects
    $(secondSelect).fadeOut(200);
    $(textField).fadeOut(200);
    
    setTimeout(() => {
        form.action = selectValue;
        
        // Clear previous options
        s2.options.length = 0;
        
        if(selectValue === "/fl" || selectValue === "/cat" || selectValue === "/ing" || selectValue === "/area") {
            
            if(selectValue === "/fl") {
                // Add first letter options A-Z
                for(let i = 0; i < 26; i++) {
                    s2.options[i] = new Option(String.fromCharCode(i + 65));
                }
                $(secondSelect).fadeIn(300);
            }
            else if(selectValue === "/cat") {
                // Add category options - BEEF REMOVED
                const cat = ["Breakfast","Chicken","Dessert","Goat","Lamb","Miscellaneous","Pasta","Pork","Seafood","Side",
                             "Starter","Vegan","Vegetarian"];
                
                for(let i = 0; i < cat.length; i++) {
                    s2.options[i] = new Option(cat[i]);
                }
                $(secondSelect).fadeIn(300);
            }
            else if(selectValue === "/ing") {
                // Add ingredient options - BEEF REMOVED
                const ing = ["Salmon","Chicken","Avocado","Apple Cider Vinegar","Asparagus","Aubergine","Baby Plum Tomatoes",
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

                        for(let i = 0; i < ing.length; i++) {
                            s2.options[i] = new Option(ing[i]);
                        } 
                $(secondSelect).fadeIn(300);
            }
            else if(selectValue === "/area") {
                // Add area options
                const area = ["American","British","Canadian","Chinese","Croatian","Dutch","Egyptian","Filipino","French",
                              "Greek","Indian","Irish","Italian","Jamaican","Japanese","Kenyan","Malaysian","Mexican",
                              "Moroccan","Polish","Portuguese","Russian","Spanish", "Thai","Tunisian","Turkish","Vietnamese"];

                for(let i = 0; i < area.length; i++) {
                    s2.options[i] = new Option(area[i]);
                }
                $(secondSelect).fadeIn(300);
            }
            
            // Reinitialize Select2 for the second dropdown
            $(s2).select2({
                placeholder: "Select an option",
                allowClear: true,
                width: '100%'
            });
        }
        else if(selectValue === "/name") {
            $(textField).fadeIn(300);
        }
        
    }, 200);
}

// Helper function to populate select options (not used in main function but kept for consistency)
function populateSelect(selectElement, options, placeholder) {
    $(selectElement).append(`<option value="">${placeholder}</option>`);
    options.forEach(option => {
        $(selectElement).append(`<option value="${option}">${option}</option>`);
    });
    $(selectElement).select2('destroy').select2({
        placeholder: placeholder,
        allowClear: true,
        width: '100%'
    });
}

// Show loading state for select elements
function showSelectLoading(selectElement) {
    $(selectElement).empty().append('<option value="">Loading...</option>');
}

// Enhanced recipe navigation
function toRecipe(mealId) {
    // Add loading animation to clicked card
    const clickedCard = event.currentTarget;
    $(clickedCard).addClass('loading-card');
    
    // Create and submit form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/recipePage';
    form.style.display = 'none';
    
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'foods';
    input.value = mealId;
    
    form.appendChild(input);
    document.body.appendChild(form);
    
    // Add slight delay for better UX
    setTimeout(() => {
        form.submit();
    }, 300);
}

// Input validation with visual feedback - Enhanced
function validateInput(event) {
    const input = event.target;
    const value = input.value.trim().toLowerCase();
    const forbiddenWords = ['beef'];
    
    // Remove previous validation classes
    $(input).removeClass('valid invalid');
    
    // Check for forbidden words
    let hasForbiddenWord = false;
    forbiddenWords.forEach(word => {
        if (value.includes(word)) {
            hasForbiddenWord = true;
        }
    });
    
    if (hasForbiddenWord) {
        event.preventDefault();
        $(input).addClass('invalid');
        alert('The word "beef" is not allowed.');
        input.value = '';
        return false;
    }
    
    if (value.length > 0) {
        if (value.length >= 2) {
            $(input).addClass('valid');
        } else {
            $(input).addClass('invalid');
            showTooltip(input, 'Please enter at least 2 characters');
        }
    } else {
        hideTooltip(input);
    }
}

// Update the sorryRadhaKrishn function to use the enhanced validation
function sorryRadhaKrishn(event) {
    return validateInput(event);
}

// Tooltip functions
function showTooltip(element, message) {
    hideTooltip(element); // Remove existing tooltip first
    const tooltip = $(`<div class="input-tooltip">${message}</div>`);
    $(element).parent().append(tooltip);
    setTimeout(() => tooltip.addClass('show'), 10);
}

function hideTooltip(element) {
    $(element).parent().find('.input-tooltip').remove();
}

// Smooth page transitions
function smoothTransition() {
    $('body').addClass('page-transition');
    setTimeout(() => {
        $('body').removeClass('page-transition');
    }, 300);
}

// Add CSS for enhanced effects
const additionalStyles = `
<style>
.navbar.scrolled {
    background: rgba(44, 62, 80, 0.95) !important;
    backdrop-filter: blur(10px);
}

.animate-in {
    animation: slideInUp 0.6s ease-out;
}

.loading-card {
    opacity: 0.7;
    transform: scale(0.98);
    pointer-events: none;
}

.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    display: none;
    z-index: 9999;
    justify-content: center;
    align-items: center;
}

.loading-spinner {
    text-align: center;
}

.spinner-ring {
    width: 60px;
    height: 60px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
}

.loading-text {
    font-size: 1.1rem;
    color: var(--dark-color);
    font-weight: 500;
}

.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    z-index: 1000;
    box-shadow: var(--shadow-medium);
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.back-to-top:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: var(--shadow-heavy);
}

.back-to-top i {
    color: white;
    font-size: 1.2rem;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    pointer-events: none;
    transform: scale(0);
}

.ripple-animate {
    animation: ripple-effect 0.6s ease-out;
}

@keyframes ripple-effect {
    to {
        transform: scale(2);
        opacity: 0;
    }
}

.input-tooltip {
    position: absolute;
    bottom: -30px;
    left: 0;
    background: var(--danger-color);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    opacity: 0;
    transform: translateY(-10px);
    transition: var(--transition);
    z-index: 1000;
}

.input-tooltip.show {
    opacity: 1;
    transform: translateY(0);
}

.input-tooltip::before {
    content: '';
    position: absolute;
    top: -5px;
   left: 10px;
   border-left: 5px solid transparent;
   border-right: 5px solid transparent;
   border-bottom: 5px solid var(--danger-color);
}

.it.valid {
   border-color: var(--success-color);
   box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);
}

.it.invalid {
   border-color: var(--danger-color);
   box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}

.page-transition {
   opacity: 0.8;
   transform: scale(0.98);
   transition: all 0.3s ease;
}

@keyframes slideInUp {
   from {
       opacity: 0;
       transform: translateY(30px);
   }
   to {
       opacity: 1;
       transform: translateY(0);
   }
}

@keyframes spin {
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
}

.custom-select2 .select2-container--default .select2-selection--single {
   border: 2px solid #e0e0e0;
   border-radius: 8px;
   height: 45px;
   transition: all 0.3s ease;
}

.custom-select2 .select2-container--default.select2-container--focus .select2-selection--single {
   border-color: var(--primary-color);
   box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.loading {
   display: inline-block;
   width: 16px;
   height: 16px;
   border: 2px solid #ffffff;
   border-radius: 50%;
   border-top-color: transparent;
   animation: spin 1s ease-in-out infinite;
   margin-right: 8px;
}

/* Smooth transitions for all interactive elements */
* {
   transition: var(--transition);
}

/* Enhanced button hover effects */
.btn:hover {
   transform: translateY(-2px);
   box-shadow: var(--shadow-heavy);
}

.btn:active {
   transform: translateY(0);
}

/* Card animation improvements */
.frontdatabranch {
   animation: slideInUp 0.6s ease-out;
   animation-fill-mode: both;
}

.frontdatabranch:hover {
   transform: translateY(-10px);
   box-shadow: var(--shadow-heavy);
}

/* Loading state improvements */
.loading-overlay.show {
   display: flex !important;
}

/* Responsive improvements */
@media (max-width: 768px) {
   .back-to-top {
       bottom: 20px;
       right: 20px;
       width: 45px;
       height: 45px;
   }
   
   .input-tooltip {
       font-size: 0.7rem;
       padding: 4px 8px;
   }
}
</style>
`;

// Inject additional styles
$('head').append(additionalStyles);

// Initialize everything when DOM is ready
$(document).ready(function() {
   // Additional initialization code
   $('input[type="text"]').on('input', sorryRadhaKrishn);
   
   // Add smooth transitions to all elements
   $('*').not('.loading-overlay, .loading-spinner, .spinner-ring').addClass('smooth-transition');
   
   // Initialize tooltips
   $('[data-toggle="tooltip"]').tooltip();
   
   // Add loading states to all forms
   $('form').on('submit', function() {
       $(this).find('input[type="submit"], button[type="submit"]').prop('disabled', true);
   });
});

// Error handling for failed API calls
function handleAPIError(error, fallbackData, selectElement) {
   console.error('API Error:', error);
   if (fallbackData && fallbackData.length > 0) {
       populateSelect(selectElement, fallbackData, 'Select Option');
   } else {
       $(selectElement).empty().append('<option value="">Error loading data</option>');
   }
}

// Add keyboard navigation support
$(document).on('keydown', function(e) {
   // Escape key to close tooltips
   if (e.key === 'Escape') {
       $('.input-tooltip').remove();
   }
   
   // Enter key on cards to navigate
   if (e.key === 'Enter' && $(e.target).hasClass('frontdatabranch')) {
       $(e.target).click();
   }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
   let timeout;
   return function executedFunction(...args) {
       const later = () => {
           clearTimeout(timeout);
           func(...args);
       };
       clearTimeout(timeout);
       timeout = setTimeout(later, wait);
   };
}

// Apply debouncing to scroll handler
const debouncedScrollHandler = debounce(function() {
   // Additional scroll optimizations
   const scrollTop = $(window).scrollTop();
   if (scrollTop > 100) {
       $('body').addClass('scrolled');
   } else {
       $('body').removeClass('scrolled');
   }
}, 10);

$(window).on('scroll', debouncedScrollHandler);


