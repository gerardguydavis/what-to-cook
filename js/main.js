//Menu Functions
const question = document.querySelector(".question");
let updateQuestion = document.createElement("h2");
const allButtons = document.querySelector(".buttons")
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
let notes = document.querySelector(".notes");
let updateNotes = document.createElement("div");

//Meal Scores
let breakfast = 0;
let dinner = 0;
let vegetarian = 0;
let vegan = 0;
let chicken = 0;
let beef = 0;
let pork = 0;
let seafood = 0;
let marinate = 0;
let spice = 0;
let cookTime = 0;
let sweet = 0;
let savory = 0;
let bake = 0;
let breakFast = 0;

const whatMeal = function () {
    updateQuestion.innerText = "What are you trying to make?";
    question.append(updateQuestion);
    button1.innerText = "Breakfast";
    button2.innerText = "Dinner";
    button3.innerText = "Breakfast for dinner!";
    button1.addEventListener("click", function () {
        breakfast += 1;
        isVegetarian();
    });
    button2.addEventListener("click", function () {
        dinner += 1;
        isVegetarian();
    });
    button3.addEventListener("click", function () {
        breakfast += 2;
        isVegetarian();
    });
}

const isVegetarian = function () {
    updateQuestion.innerText = "Are you a vegetarian?";
    question.append(updateQuestion);
    button1.innerText = "Yes";
    button2.innerText = "No, I want the meats!";
    button3.innerText = "No, but I like vegetables";
    button1.addEventListener("click", function () {
        vegetarian += 2;
        isVegan();
    });
    button2.addEventListener("click", function () {
        if (breakfast > 0) {
            sweetSavory()
        } else whatMeat();
    });
    button3.addEventListener("click", function () {
        vegetarian += 1;
        isVegan();
    });
}

const isVegan = function () {
    updateQuestion.innerText = "Are you vegan?";
    question.append(updateQuestion);
    button1.innerText = "Yes";
    button2.innerText = "No";
    button3.innerText = "No, but I like vegan foods";
    button1.addEventListener("click", function () {
        vegan += 2;
        if (breakfast > 0) {
            sweetSavory();
        } else marinateTime();
    });
    button2.addEventListener("click", function () {
        marinateTime();
    });
    button3.addEventListener("click", function () {
        vegan += 1;
        if (breakfast > 0) {
            sweetSavory();
        } else marinateTime();
    });
}

const sweetSavory = function () {
    updateQuestion.innerText = "Do you want something sweet or savory?";
    question.append(updateQuestion);
    button1.innerText = "Sweet!";
    button2.innerText = "Savory!";
    button3.innerText = "Either!";
    button1.addEventListener("click", function () {
        sweet += 1;
        wannaBake();
    });
    button2.addEventListener("click", function() {
        savory += 1;
        wannaBake();
    });
    button3.addEventListener("click", function() {
        sweet += 1;
        savory += 1;
        wannaBake();
    });
}

const wannaBake = function() {
    updateQuestion.innerText = "Do you feel like baking something?";
    question.append(updateQuestion);
    button1.innerText = "Sure!";
    button2.innerText = "Not really";
    button3.innerText = "NOPE!";
    button1.addEventListener("click", function () {
        bake += 1;
        breakfastTime();
    });
    button2.addEventListener("click", function () {
        breakfastTime();
    });
    button3.addEventListener("click", function() {
        breakfastTime();
    });
}

const breakfastTime = function () {
    updateQuestion.innerText = "How soon doo you need breakfast?";
    question.append(updateQuestion);
    button1.innerText = "Uh, like now please.";
    button2.innerTet = "I can wait for a bit.";
    button3.innerText = "I have no idea what happened last night. I need hangover breakfast NOW.";
    /*button1.addEventListener("click", function() {

    })*/
    button2.addEventListener("click", function () {
        breakFast += 1;
    });
    button3.addEventListener("click", function() {
        hangoverBreakfast();
    });
}

const hangoverBreakfast = function () {
    allButtons.classList.add("hide");
    question.classList.add("hide");
    updateNotes.innerHTML = `<p>Oh, you are going to love this. It's my signature "Please just let me lay down <em>and</em> make breakfast at the same time" breakfast.</p>
        <h2>Gerard's Favorite Hangover Breakfast!</h2>
        <p>All you'll need is...</p>
        <ul>
            <li>An english muffin, two slices of bread, or a bagel</li>
            <li>1 egg</li>
            <li>2 strips of bacon, a sausage patty, or your favorite vegetarian substitute</li>
            <li>1 slice of American cheese (Yes, American cheese. <em>Trust me</em>.)</li>
        </ul>
        <p>And all you gotta do is...</p>
        <ol>
                <li>Preheat your oven to 400° F</li>
                <li>If you're using bacon, line a baking sheet with aluminum foil and place a baking rack on top</li>
                <li>Put your bacon on the cooling rack, or put your sausage patty directly on the sheet pan. Bake for 5 minutes</li>
                <li>Meanwhile, grease a ramekin with some butter or olive oil, then crack your egg into it. This is also a great time to get some coffee and ibuprofen.</li>
                <li>Once the 5 minutes has passed, leave the baking sheet in the oven and place the ramekin on it. Add your choice bread thing to the sheet pan too. Bake for another 12-14 minutes, until egg is fully opaque. Feel free to lay down on the floor and close your eyes while you wait.</li>
                <li>Remove sheet pan from oven and immediately add slice of American cheese to the open face of your bread thing. The residual heat will melt it quickly. Add bacon/sausage on top of cheese.</li>
                <li>Use a butter knife to gently loosen the egg from the edge of the ramekin. If it's still stuck, give it a few good thwacks on the counter. (The ramekin will be very hot, so use an oven mitt here.) Add the egg on top of the bacon, close the sandwich</li>
                <li>Enjoy! (And figure out if you owe anyone an apology.)</li>
        </ol>`;
        notes.append(updateNotes);
        notes.classList.add("hangover-breakfast");
    }

const whatMeat = function () {
    updateQuestion.innerText = "Chicken or beef?";
    question.append(updateQuestion);
    button1.innerText = "Chicken";
    button2.innerText = "Beef";
    button3.innerText = "Something else, please";
    button1.addEventListener("click", function () {
        chicken += 1;
        marinateTime();
    });
    button2.addEventListener("click", function () {
        beef += 1;
        marinateTime();
    });
    button3.addEventListener("click", function () {
        otherMeat();
    });
}

const otherMeat = function () {
    updateQuestion.innerText = "How about pork or seafood?";
    question.append(updateQuestion);
    button1.innerText = "Pork";
    button2.innerText = "Seafood";
    button3.innerText = "Actually, let's try a vegetarian meal";
    button1.addEventListener("click", function () {
        pork += 1;
        marinateTime();
    });
    button2.addEventListener("click", function() {
        seafood += 1;
        marinateTime();
    });
    button3.addEventListener("click", function() {
        vegetarian += 2;
        marinateTime();
    });
}

const marinateTime = function () {
    updateQuestion.innerText = "Do you have time to marinate something?";
    question.append(updateQuestion);
    button1.innerText = "No, I'm hungry now!";
    button2.innerText = "Yes, but only for an hour or two";
    button3.innerText = "Yes, I can marinate all day and night!";
    button1.addEventListener("click", function() {
        whatSpices();
    });
    button2.addEventListener("click", function() {
        marinate += 1;
        whatSpices();
    });
    button3.addEventListener("click", function() {
        marinate += 2;
        whatSpices();
    });
}

const whatSpices = function () {
    updateQuestion.innerText = "How stocked is your spice rack?";
    question.append(updateQuestion);
    button1.innerText = "Ummm... Is salt a spice? (No, it is not.)"
    button2.innerText = "Pretty decently! I have most of the basics (i.e. crushed red pepper, oregano, cumin, chili powders, etc.)";
    button3.innerText = `My rack is stacked! I have plenty of "exotic" spices (i.e. fenugreek, cardamom, Sichuan peppercorns, sumac, etc.)`;
    button1.addEventListener("click", function() {
        whatCookTime();
    });
    button2.addEventListener("click", function() {
        spice += 1;
        whatCookTime();
    });
    button3.addEventListener("click", function() {
        spice += 2;
        whatCookTime();
    });
}

const whatCookTime = function () {
    updateQuestion.innerText = "Do you feel like cooking?";
    question.append(updateQuestion);
    button1.innerText = "No, I want something quick and easy";
    button2.innerText = "Yes, but I don't wanna spend all day in the kitchen";
    button3.innerText = "Yes! I'll make anything, no matter how long it takes!";
    button1.addEventListener("click", function() {
        allButtons.classList.add("hide");
        question.classList.add("hide");
    });
    button2.addEventListener("click", function() {
        cookTime += 1;
        allButtons.classList.add("hide");
        question.classList.add("hide");
    });
    button3.addEventListener("click", function() {
        cookTime += 2;
        allButtons.classList.add("hide");
        question.classList.add("hide");
    })
}

whatMeal();