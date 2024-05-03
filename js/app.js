// pre-loader
window.addEventListener('load', function () {
    document.querySelector('.pre-loader').style.display = "none";
})
//nav
document.querySelector('.navbtn').addEventListener('click', function () {
    document.querySelector('.nav-item').classList.toggle('nav-show')
})

//video play/pause
document.querySelector('.video-switch').addEventListener('click', function(){
    let btn = document.querySelector('.video-switch-btn');
    if (!btn.classList.contains('play-pause')){
        btn.classList.add('play-pause');
        document.querySelector('.video-items').pause();
    }
    else{
        btn.classList.remove('play-pause');
        document.querySelector('.video-items').play();
    }
})


eventListeners();
function eventListeners(){
    const ui = new UI();
    //drink section
    document.querySelector('.drink-form').addEventListener('submit', function(event){
        event.preventDefault();
        const firstName = document.querySelector('.firstname').value;
        const lastName = document.querySelector('.laststname').value;
        const inputEmail = document.querySelector('.email').value;

        let value = ui.checkEmpty(firstName, lastName, inputEmail);
        if(value){

            let Customer = new customer(firstName, lastName, inputEmail);
            console.log(Customer);
            ui.addCustomer(Customer)
            ui.showfeedback('customer added to the list', 'success')
            ui.clearFields();
            

        }
        else{
            ui.showfeedback('Please fill all the fields', 'error');
        }
    })
}





//constructor function
function UI(){

}
//function control
UI.prototype.checkEmpty = function (firstName, lastName, inputEmail){
    let result; 
    if(firstName === '' || lastName === '' || inputEmail === ''){
        result = false;
    }
    else{
        result = true;
    }
    return result;
}
//showfeedback
UI.prototype.showfeedback = function(text, type){
    if (type === "success"){
        let feedback = document.querySelector('.drink-form-feedback');
        feedback.classList.add('success');
        feedback.innerHTML = text;
        this.removeAlert('success');

    }else if(type === 'error'){
        let feedback = document.querySelector('.drink-form-feedback');
        feedback.classList.add('error');
        feedback.innerHTML = text;
        this.removeAlert('error');
    }
}
//remove alert
UI.prototype.removeAlert = function(type){
    setTimeout(function(){
        document.querySelector('.drink-form-feedback').classList.remove(type);
    }, 3000);
}
//add customer
UI.prototype.addCustomer= function(customer){
    const image = [1,2,3,4,5];
    const random = Math.floor(Math.random()*image.length);
    console.log(random);
    const div = document.createElement('div');
    div.classList.add('person');

    div.innerHTML =`<img src="./image/person-${random}.jpeg" alt="Jon Doe" class="demo-person-img">
    <h3 class="person-firstname">${customer.firstName}</h3>
    <h3 class="person-lastname">${customer.lastName}</h3>`
    document.querySelector('.drink-card-list').appendChild(div)
    
}


//clear field
UI.prototype.clearFields = function(){
    document.querySelector('.firstname').value = '';
    document.querySelector('.laststname').value = '';
    document.querySelector('.email').value = '';
}


//customer list
function customer(firstName, lastName, inputEmail){
    this.firstName = firstName;
    this.lastName = lastName;
    this.inputEmail = inputEmail;
}

