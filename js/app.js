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
            ui.showfeedback('customer added to the list', 'success')
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



// submit the form


//     let value = ui.checkEmpty(name, lastName, email)

//     if (value) {
//       let customer = new Customer(name, lastName, email)
//       console.log(customer);
//       ui.addCustomer(customer)
//       ui.showFeedback('custumer added to the list', 'success')
//       ui.clearFields()

//     }
//     else {
//       ui.showFeedback('some form values empty', 'error')
//     }

//   })

//   UI.prototype.showFeedback = function (text, type) {
//     const feedback = document.querySelector('.drink-form__feedback');
//     if (type === 'success') {
//       feedback.classList.add('success');
//       feedback.innerText = text;
//       this.removeAlert('success');
//     }
//     else if (type === 'error') {
  
//       feedback.classList.add('error');
//       feedback.innerText = text;
//       this.removeAlert('error');
//     }
//   }

