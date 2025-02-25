let mainvalidDiv = document.querySelector('.main-valid');
let nameArea = document.querySelector('.name');
let eamilArea = document.querySelector('.email-address');
let checkBoxsArea = document.querySelector('.query-type');
let messageArea = document.querySelector('.messege');
let theOkArea = document.querySelector('.consents');
let firstNameInp = document.querySelector('.name .first-name input');
let lastNameInp = document.querySelector('.name .last-name input');
let emailInp = document.querySelector('.email-address input');
let queryTypeInp = document.getElementsByName('query-type-input');
let supportRequestInp = document.querySelector('.support-request button');
let messageInp = document.querySelector('.messege input');
let theOkInp = document.querySelector('.consents button');
document.querySelector('.btn-sub').onclick = () => {
    if (firstNameInp.value !== "" || lastNameInp.value !== "" || emailInp.value !== "" || messageInp.value !== ""){ 
        let emailRe = /\w+\n*@\w+.\w+/;
        if (emailInp.value.match(emailRe)){
            console.log("fdssdf");
            
            firstNameInp.value = "";
            lastNameInp.value = "";
            emailInp.value = "";
            messageInp.value = "";        
            Swal.fire({
                title: "success",
                icon: "success",
                draggable: true
              });                                                                  
        }else{
            let validDiv = document.createElement('div');         
            eamilArea.prepend(validDiv);   
            let detailsIcon = document.createElement('i');
            detailsIcon.className ='fa-solid fa-circle-info';
            detailsIcon.classList.add('animation');
            validDiv.appendChild(detailsIcon);
            let validSpan = document.createElement('span');
            validSpan.textContent  ='enter a valid email';
            validSpan.classList.add('valid');
            validDiv.appendChild(validSpan);
        }
    }else{
        if (mainvalidDiv.innerHTML !== "") {
            return;
        }else{
            mainvalidDiv.classList.remove('d-none');
            let infoIcon = document.createElement('i');
            infoIcon.className = 'fa-solid fa-circle-info';
            mainvalidDiv.prepend(infoIcon);
            let validSpanInMain = document.createElement('span');
            validSpanInMain.textContent='valid data entry';
            validSpanInMain.classList.add('valid');
            mainvalidDiv.appendChild(validSpanInMain);

        }
    }

}