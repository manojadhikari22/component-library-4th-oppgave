
const libraryButtons = document.querySelectorAll('.library-button');
const components = document.querySelectorAll('.component');

// for each overview button
libraryButtons.forEach(button => {
	button.addEventListener('click', displayComponent)
});

// iterate through all components and display the one that matches with the "data-component" value.
// then, iterate through all overview buttons and set the active class based on the same value.
function displayComponent(event) {
	// event.currentTarget always refers to the element used
	// in (element).addEventListener, in this case, it refers
	// to the button that was clicked
	const button = event.currentTarget;
	// extract the "data-component" value, e.g. "accordion",
	// "breadcrumbs", "button", etc.
	const componentToDisplay = button.dataset.component;

components.forEach(component => {
	component.classList.remove('component--visible');

		// but if the "data-name" value equals the value
		// from the button we just clicked, add the class
	if (component.dataset.name === componentToDisplay) {
			component.classList.add('component--visible');
		}
	});

	libraryButtons.forEach(button => {
		button.classList.remove('library-button--active');
		// but if this button has a "data-component" value that
		// equals to the one we just clicked (meaning it's the
		// same button), add the active class
		if (button.dataset.component === componentToDisplay) {
			button.classList.add('library-button--active');
		}
	});
}

//For Accordion

const acc = document.querySelectorAll('.accordion1');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        //this.classList.toggle('active');
        const desc = this.nextElementSibling;
		const allDesc = document.querySelectorAll('.desc');
		const activeAcc = document.getElementsByClassName('active accordion1');

        if (desc.style.maxHeight) {
            desc.style.maxHeight = null;
			this.classList.remove('active');
        } else {
			for(let i = 0; i < activeAcc.length; i++) {
				activeAcc[i].classList.remove('active');
			} 
			for(let i = 0; i < allDesc.length; i++) {
				allDesc[i].style.maxHeight = null;
			} 
			
            desc.style.maxHeight = desc.scrollHeight + 'px';
			//this.classList.remove('active');
        }
    });
};

// For Counter
const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (e) => {
    if(e.target.classList.contains('inc')) {
        count.innerHTML++;
        setColor();
    }
    if(e.target.classList.contains('dec')) {
        count.innerHTML--;
        setColor();
    }
    if(e.target.classList.contains('reset')) {
        count.innerHTML = 0;
        setColor();
    }
});

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = 'orange';
    } else if (count.innerHTML < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'white';
    }
};

// Registration form
let loginForm = document.getElementById('myForm');
loginForm.addEventListener('submit', (e) =>{
	e.preventDefault();
  	let name = document.getElementById('name').value;
  	let email = document.getElementById('email').value;
  	let address = document.getElementById('address').value;
  

	  if(!name || !email || !address )
  {
    let errorMsg = document.querySelector('.errorMsg');
    errorMsg.textContent ='Please add all input value'
  } else {
    let succssMsg = document.querySelector(".successMsg");
    succssMsg.textContent= "Form submitted successfully";
    loginForm.reset(); // Clear the form fields
    let showsData = document.querySelector(".datas");

    showsData.innerHTML = `
    Name: <strong>
     ${name}</strong> <br>
     Email:
     <strong>${email}</strong> <br> 
     Address:
     <strong>${address}</strong><br>
    `;
  }
});

// For Popup modal

const model = document.querySelector('.model');
const modelContent = document.querySelector('.model-content');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close');

btn.addEventListener('click', openModel);
close.addEventListener('click', closeModel);
model.addEventListener('click', closeModel);

//open modal
function openModel(e){
    e.preventDefault();
    model.style.display = 'block';
}
//close Model
function closeModel(){
   model.style.display = 'none';
}

// For Alert

const showAlertBtn = document.getElementById("showAlertBtn");
const alertDiv = document.getElementById("alert");

showAlertBtn.addEventListener("click", () => {
  alertDiv.style.display = "block";
});

//For Countdown

const countTo = '16 april 2024';

const f = setInterval(() => {
   
    const endDate = new Date(countTo);
    const currentDate = new Date();
    const totalSeconds = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    const count = document.getElementById('count');
    
    count.textContent = `${days}Days ${add(hours)}Hrs : 
    ${add(minutes)}Min : ${add(seconds)}s`;

    if (totalSeconds < 0) {
        clearInterval(f);
        count.textContent = 'Labour Day';
    }
}, 1000);
// this function put 0 infront of hours,minutes,days.
function add(t) {
    return t < 10 ? `0${t}` : t;
}

// Random number generator
const number = document.querySelector('.number');
const btn1 = document.querySelector('.generate');

const generateNumber = () => {
    //between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    number.innerHTML = randomNumber;
}
btn1.addEventListener('click', generateNumber);


// For Search engine
const input = document.getElementById('search');
input.addEventListener('keyup', search);

function search() {
    const inputVal = input.value;
    const li = document.querySelectorAll('#lists');

    for(let i = 0; i < li.length; i++) {
        if(li[i].textContent.toLowerCase().includes(inputVal)) {
            li[i].style.display = '';
        }else {
            li[i].style.display = 'none';
        }
    }
};


// For Product Card
const productCard = document.querySelector('.product-card');
productCard.addEventListener('click', () => {
    window.location.href = 'https://www.zalando.no/nike-performance-revolution-6-noeytrale-loepesko-blackwhiteiron-grey-n1242a2ae-q13.html?size=45&allophones=0&wmc=SEM470_NB_GO._8547063993_710858624_36657267065.&opc=2211&mpp=google|v1||pla-294505072980||9047434||g|c||163890259613||pla|N1242A2AE-Q130011000|294505072980|1|&gclsrc=aw.ds&gclid=CjwKCAjw7c2pBhAZEiwA88pOF5hHshQzx7GUKrSpA4pYnSEHHta8lmLAtpvHM2vv558uxdToORE6KhoCPMwQAvD_BwE'
    //alert('Product clicked! You can add your custom action here.');
});


// For Palindrome chacking
const btns = document.querySelector('#btn2');
const results = document.querySelector('.result');

btns.addEventListener('click', palindrome);

function palindrome() {
    const text = document.querySelector('.input-text').value;
    const textWithoutSpaces = text.replace(/\s/g, ''); // Remove spaces
    const textLowerCase = textWithoutSpaces.toLowerCase(); // Convert to lowercase
    const textArray = textLowerCase.split('');
    //made a copy of array using .slice() befor reversing.
    //because .reverse() method would effect the original arry.
    const reversedArray = textArray.slice().reverse(); 
    const reverseString = reversedArray.join('');
        if (text.toLowerCase() === reverseString.toLowerCase()) {
         results.innerHTML = 'palindrome';
        } else
        results.innerHTML = 'not palindrome';
}