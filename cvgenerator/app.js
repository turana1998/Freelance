
const inputfields = document.querySelector('.input-fields');
const output = document.querySelector('.output');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const mainn = document.querySelector('.mainn');

let inputShow = true
let select = true;

async function TextEditor(element) {
  const newEditor = await ClassicEditor
    .create(element, {
      toolbar: ['heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote'],
    })
  return newEditor

}

let workExpdetails;
TextEditor(inputfields["workexp"]).then(nEditor => {
  workExpdetails = nEditor
})
let Academic;
TextEditor(inputfields["academics"]).then(nEditor => {
  Academic = nEditor
})
function select1(el){
  select=false;
  event.preventDefault();
  second.style.border="none"; 
  second.style.padding="0";
  el.style.border="5px solid #fff"; 
  el.style.padding="10px";
}
function select2(el){
  select=true;
  event.preventDefault();
  first.style.border="none"; 
  first.style.padding="0";
  el.style.border="5px solid #fff"; 
  el.style.padding="10px";
  
}

function toggle() {
  event.preventDefault()
  console.log(select);
  if (inputShow) {
    inputfields.style.display = "none"
    inputShow = false
    if(select){
      output.innerHTML = `
         
       <div id="invoice">
       <div class="">
        <div class="container d-flex">
            <div class="w-30">
                <div class="left">
                    <img  src="./user.png" />
                    <h2>Elaqe Melumatlari</h2>
                    <ul>
                        <li>
                            <i class="bi bi-pin-map"></i>
                            <a>${inputfields["contact"].value}
                            </a>
                        </li>
                        <li>
                            <i class="bi bi-envelope"></i>
                            <a>hello@reallygreatsite.com
                            </a>
                        </li>
                    </ul>
                    <h2>Bacariqlar</h2>
                    <p${inputfields["skills"].value}</p>
                </div>
            </div>
            <div class="w-70">
                <div class="right">
                    <h1>${inputfields["name"].value}</h1>
                    <hr>
                    <p class="profession">${inputfields["title"].value}</p>
                    <div class="">
                        <h3>P E R S O N A L  P R O F I L E</h3>
                        <p>${inputfields["objective"].value}</p>
                        <h3>W O R K E X P E R I E N C E</h3>
                        <p>
                        ${workExpdetails.getData()}
                        </p>
                        <h3>Tehsil</h3>
                        <p>
                        ${Academic.getData()}
                        </p>
                        <h3>Personal</h3>
                        <p>
                        ${inputfields["projects"].value}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
          
  
         `
    }
    else{
      output.innerHTML = `
         
       <div id="invoice2">
       <div class="">
        <div class="container d-flex">
            <div class="w-30">
                <div class="left">
                    <img  src="./user.png" />
                    <h2>Elaqe Melumatlari</h2>
                    <ul>
                        <li>
                            <i class="bi bi-pin-map"></i>
                            <a>${inputfields["contact"].value}
                            </a>
                        </li>
                        <li>
                            <i class="bi bi-envelope"></i>
                            <a>hello@reallygreatsite.com
                            </a>
                        </li>
                    </ul>
                    <h2>Bacariqlar</h2>
                    <p${inputfields["skills"].value}</p>
                </div>
            </div>
            <div class="w-70">
                <div class="right">
                    <h1>${inputfields["name"].value}</h1>
                    <hr>
                    <p class="profession">${inputfields["title"].value}</p>
                    <div class="">
                        <h3>P E R S O N A L  P R O F I L E</h3>
                        <p>${inputfields["objective"].value}</p>
                        <h3>W O R K E X P E R I E N C E</h3>
                        <p>
                        ${workExpdetails.getData()}
                        </p>
                        <h3>Tehsil</h3>
                        <p>
                        ${Academic.getData()}
                        </p>
                        <h3>Personal</h3>
                        <p>
                        ${inputfields["projects"].value}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
          
  
         `
    }
    
  } else {
    inputfields.style.display = "block"
    inputShow = true
    output.innerHTML = ""
  }
}
