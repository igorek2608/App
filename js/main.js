/* import './index.js' */
const form = document.getElementById('auth_form')
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat__password');
const btnEnter = document.getElementById('btn__enter');
const btnReg = document.getElementById('btn__reg');
const btnReady = document.getElementById('btn__ready');
const users = [];

btnReg.onclick = (event) => {
    event.preventDefault();
    document.querySelector('.wrapper__repeat-password').classList.toggle('wrapper__repeat-password-active');
    document.querySelector('.btn-ready').classList.toggle('btn-ready-active');
}


btnEnter.addEventListener('click', function (event) {
    event.preventDefault();
    checkInputsAuth();
});

btnReady.addEventListener('click', function (event) {
    event.preventDefault();
    checkInputsReg();
});



function checkInputsReg() {
    const emailValue = email.value;
    const passwordValue = password.value;
    const repeatPasswordvalue = repeatPassword.value;

    if (emailValue === '') {

        setError(email, '*Email не может быть пустым')
    } else if (!isEmail(emailValue)) {
        setError(email, '*Непральный формат Email')
    } else {

        setSuccess(email)
    }


    if (passwordValue === '') {

        setError(password, '*Password не может быть пустым')
    } else {

        setSuccess(password)
    }


    if (repeatPasswordvalue === '') {
        setError(repeatPassword, '*Repeat Password не может быть пустым')
    } else if (passwordValue !== repeatPasswordvalue) {
        setError(repeatPassword, '*Пароли должны совпадать')
    } else {
        setSuccess(repeatPassword)
    }

    const user = {
        email: emailValue,
        password: passwordValue,
    }

    if (user.email && user.password!==''){users.push(user)};
    console.log(users);

    for (obj of users) {
        let objEmail = obj.email;
        if (objEmail !== '') {
            btnReady.onclick = createMenu();
        }
    }

}

function setError(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;

}

function setSuccess(input) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');
    span.classList.add('success');

}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

/*******Auth */

function checkInputsAuth() {
    const emailValue = email.value;
    const passwordValue = password.value;


    if (emailValue === '') {

        setError(email, '*Email не может быть пустым')
    } else if (!isEmail(emailValue)) {
        setError(email, '*Непральный формат Email')
    } else {

        setSuccess(email)
    }


    if (passwordValue === '') {

        setError(password, '*Password не может быть пустым')
    } else {

        setSuccess(password)
    }

    
    function setError(input, message) {
        const formControl = input.parentElement;
        const span = formControl.querySelector('span');
        span.innerText = message;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        const span = formControl.querySelector('span');
        span.classList.add('success');

    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };

    const user = {
        email: emailValue,
        password: passwordValue,
    }

    localStorage.setItem(user.email, user.password)
    if (localStorage.getItem(user.email)!==''){
        createMenu()
    } 
  
}


/* createMenu() */



function createMenu() {
    const menuWrapper = document.createElement('div');
    const welcome = document.createElement('h1')
    const navList = document.createElement('ul');
    const navItemmain = document.createElement('li');
    const navItemcustomers = document.createElement('li');
    const navItemmap = document.createElement('li');
    const navLinkmain = document.createElement('a');
    const navLinkcustomers = document.createElement('a');
    const navLinkmap = document.createElement('a');
    welcome.classList.add('title');
    menuWrapper.classList.add('menu__wrapper');
    navList.classList.add('nav__list');
    navItemmain.classList.add('nav__item');
    navItemcustomers.classList.add('nav__item');
    navItemmap.classList.add('nav__item');
    navLinkmain.classList.add('nav__link');
    navLinkcustomers.classList.add('nav__link');
    navLinkmap.classList.add('nav__link');
    welcome.innerText = "Hey Guys!!!"
    navLinkmain.innerText = "Главная";
    navLinkmain.setAttribute('id', 'main')
    navLinkcustomers.innerText = "Клиенты";
    navLinkcustomers.setAttribute('id', 'customers')
    navLinkmap.innerText = "Карта";
    navLinkmap.setAttribute('id', 'map')
    navItemmain.appendChild(navLinkmain);
    navItemcustomers.appendChild(navLinkcustomers);
    navItemmap.appendChild(navLinkmap);
    navList.append(navItemmain, navItemcustomers, navItemmap);
    menuWrapper.append(navList);
    document.body.append(menuWrapper, welcome);
    /* document.getElementById('auth').classList.add('hidden') */
    document.body.removeChild(document.body.children[0])
    document.getElementById('main').classList.add('nav__link-active')

    if (document.getElementById('customers')!==null){
        document.getElementById('customers').addEventListener('click', createTable)
    }
    
    if(document.getElementById('map')!==null){
        document.getElementById('map').addEventListener('click', createMap)
    }
    
    if(document.getElementById('main')!==null){
        document.getElementById('main').addEventListener('click', createMain)
    }
}

      
    
    



        /******main********/

    function createMain() {

        const mapBlock = document.querySelector('.map-wrapper');
        const tableBlock = document.querySelector('.wrapper-table');
        if (typeof (tableBlock) != 'undefined' && tableBlock != null) {
            document.body.removeChild(tableBlock);
        }
        if (typeof (mapBlock) != 'undefined' && mapBlock != null) {
            document.body.removeChild(mapBlock);
        }


        const welcome = document.createElement('h1')
        welcome.classList.add('title');
        welcome.innerText = "Hey Guys!!!"
        document.body.append(welcome);


        document.getElementById('main').classList.add('nav__link-active')
        document.getElementById('customers').classList.remove('nav__link-active');
        document.getElementById('map').classList.remove('nav__link-active');


        if (document.body.hasChildNodes()) {
            document.body.removeChild(document.body.childNodes[0])
        }

    }



    function createTable() {
        const mapBlock = document.querySelector('.map-wrapper');
        const mainBlock = document.querySelector('.title');
        if (typeof (mainBlock) != 'undefined' && mainBlock != null) {
            document.body.removeChild(mainBlock);
        }
        if (typeof (mapBlock) != 'undefined' && mapBlock != null) {
            document.body.removeChild(mapBlock);
        }


        document.getElementById('main').classList.remove('nav__link-active')
        document.getElementById('customers').classList.add('nav__link-active');
        document.getElementById('map').classList.remove('nav__link-active');

        let request = fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json')
            .then(Response => Response.json())
            .then(
                function (data) {
                    console.log(data)
                    const people = data.map(person => {
                        return person.name
                    })
                    console.log(people)
                    const tablewrapper = document.createElement('div');
                    tablewrapper.classList.add('wrapper-table')
                    const table = document.createElement('table');
                    const tbody = document.createElement('tbody');
                    const trName = document.createElement('tr');
                    trName.classList.add('tr-name')
                    table.setAttribute('border', '1')
                    const trNameHead = document.createElement('td');


                    for (let i = 0; i < people.length; i++) {
                        const td = document.createElement('td');
                        td.classList.add('cell-name');
                        td.innerText = people[i];
                        trName.appendChild(td)
                    }
                    trNameHead.classList.add('cell-head')
                    trNameHead.innerHTML = 'Имя';
                    trName.prepend(trNameHead);
                    tbody.appendChild(trName);
                    table.appendChild(tbody);
                    tablewrapper.appendChild(table)
                    document.body.appendChild(tablewrapper)


                    const trCompany = document.createElement('tr');
                    const trCompanyHead = document.createElement('td');
                    const companies = data.map(a => {
                        return a.company
                    })
                    console.log(companies)
                    for (let j = 0; j < companies.length; j++) {
                        const td = document.createElement('td');
                        td.classList.add('cell');
                        td.innerText = companies[j];
                        trCompany.appendChild(td)
                    }
                    trCompanyHead.classList.add('cell-head');
                    trCompanyHead.innerHTML = 'Компания';
                    trCompany.prepend(trCompanyHead);
                    tbody.append(trCompany);


                    const trEmail = document.createElement('tr');
                    const trEmailHead = document.createElement('td');
                    const Emails = data.map(a => {
                        return a.email
                    })
                    console.log(Emails)
                    for (let j = 0; j < Emails.length; j++) {
                        const td = document.createElement('td');
                        td.classList.add('cell');
                        td.innerText = Emails[j];
                        trEmail.appendChild(td)
                    }
                    trEmailHead.classList.add('cell-head');
                    trEmailHead.innerHTML = 'Email';
                    trEmail.prepend(trEmailHead);
                    tbody.append(trEmail);

                    const trPhone = document.createElement('tr');
                    const trPhoneHead = document.createElement('td');
                    const Phones = data.map(a => {
                        return a.phone
                    })
                    console.log(Phones)
                    for (let j = 0; j < Phones.length; j++) {
                        const td = document.createElement('td');
                        td.classList.add('cell');
                        td.innerText = Phones[j];
                        trPhone.appendChild(td)
                    }
                    trPhoneHead.classList.add('cell-head');
                    trPhoneHead.innerHTML = 'Телефон';
                    trPhone.prepend(trPhoneHead);
                    tbody.append(trPhone);

                    const trBalance = document.createElement('tr');
                    const trBalanceHead = document.createElement('td');
                    const Balances = data.map(a => {
                        return a.balance
                    })
                    console.log(Balances)
                    for (let j = 0; j < Balances.length; j++) {
                        const td = document.createElement('td');
                        td.classList.add('cell');
                        td.innerText = Balances[j];
                        trBalance.appendChild(td)
                    }
                    trBalanceHead.classList.add('cell-head');
                    trBalanceHead.innerHTML = 'Баланс';
                    trBalance.prepend(trBalanceHead);
                    tbody.append(trBalance);

                    const trReg = document.createElement('tr');
                    const trRegHead = document.createElement('td');
                    const Regs = data.map(a => {
                        return a.registered
                    })
                    console.log(Regs)
                    for (let j = 0; j < Regs.length; j++) {
                        const td = document.createElement('td');
                        td.classList.add('cell');
                        td.innerText = Regs[j];
                        trReg.appendChild(td)
                    }
                    trRegHead.classList.add('cell-head');
                    trRegHead.innerHTML = 'Дата регистрации';
                    trReg.prepend(trRegHead);
                    tbody.append(trReg);

                    const active = data.map(a => {
                        return a.isActive
                    })
                    console.log(active)
                    for (let i = 0; i < active.length; i++) {
                        console.log(active[i])
                        let strActive = document.querySelectorAll('.cell-name');


                        for (var el of strActive) {
                            if (active[i] === true) {
                                el.style.backgroundColor = "white";
                            } else el.style.backgroundColor = "grey";


                        }
                    }


                    let arrGender = data.map(b => b.gender)
                    console.log(arrGender)
                    let female = arrGender.filter(t => t.length > 4)
                    console.log(female.length)
                    const women = document.createElement('div')
                    women.innerText = `Количество женщин: ${female.length}`
                    women.classList.add('people')
                    tablewrapper.appendChild(women)


                    let male = arrGender.filter(t => t.length < 5)
                    console.log(male.length)
                    const man = document.createElement('div')
                    man.innerText = `Количество мужчин: ${male.length}`
                    man.classList.add('people')
                    tablewrapper.appendChild(man)

                    let arrBalance = data.map(a => a.balance)
                    console.log(arrBalance);
                    let maxBalance = arrBalance.sort();
                    console.log(maxBalance[maxBalance.length - 1])
                    const valueBalance = document.createElement('div')
                    valueBalance.innerText = `Наибольший баланс: ${maxBalance[maxBalance.length-1]}`
                    valueBalance.classList.add('people')
                    tablewrapper.append(valueBalance)



                    const nameStr = document.querySelectorAll('.cell-head');
                    for (let element of nameStr) {
                        const btnRemovestr = document.createElement('button');
                        btnRemovestr.innerText = 'Удалить строку';
                        btnRemovestr.classList.add('btn-remove-str')
                        element.append(btnRemovestr)
                    }

                    let btnsDelstr = document.querySelectorAll('.btn-remove-str');
                    btnsDelstr.forEach(function (item) {
                        item.addEventListener('click', function () {

                            const windowModal = document.createElement('div')
                            windowModal.classList.add('window-modal')
                            const madalText = document.createElement('div')
                            madalText.classList.add('modal__text')
                            const btnsModal = document.createElement('div')
                            const btnConfirm = document.createElement('button')
                            btnConfirm.classList.add('modal__btn')
                            const btnCancel = document.createElement('button')
                            btnCancel.classList.add('modal__btn')
                            madalText.innerText = 'Вы действительно хотите удалить строку?';
                            btnConfirm.innerText = 'Потвердить';
                            btnCancel.innerText = 'Отмена'
                            btnsModal.append(btnConfirm, btnCancel);
                            windowModal.append(madalText, btnsModal);
                            document.querySelector('.wrapper-table').append(windowModal)

                            btnConfirm.addEventListener('click', function () {
                                document.querySelector('.wrapper-table').removeChild(windowModal)
                                item.parentNode.parentNode.parentNode.removeChild(item.parentNode.parentNode)
                                createNotice();
                            })


                            btnCancel.addEventListener('click', function () {
                                document.querySelector('.wrapper-table').removeChild(windowModal)
                            })

                            function createNotice() {
                                const notice = document.createElement('div')
                                notice.innerText = 'Данные успешно удалены';
                                const close = document.createElement('div');
                                close.classList.add('close')
                                notice.classList.add('notice')
                                notice.prepend(close)
                                document.body.append(notice)
                                close.addEventListener('click', function () {
                                    document.body.removeChild(notice)
                                })
                            }

                        })
                    })

                    const comeBack = document.createElement('button');
                    comeBack.innerText = 'Вернуться к началу';

                    document.querySelector('table').append(comeBack);
                    comeBack.classList.add('come-back')
                    document.querySelector('.come-back').addEventListener('click', function () {
                        window.setTimeout(slowComeback, 700)

                        function slowComeback() {
                            window.scroll(0, 0);
                        }
                    })




                })


    }


    function createMap() {
        const titleBlock = document.querySelector('.title');
        const tableBlock = document.querySelector('.wrapper-table');
        if (typeof (tableBlock) != 'undefined' && tableBlock != null) {
            document.body.removeChild(tableBlock);
        }
        if (typeof (titleBlock) != 'undefined' && titleBlock != null) {
            document.body.removeChild(titleBlock);
        }
        document.getElementById('main').classList.remove('nav__link-active')
        document.getElementById('customers').classList.remove('nav__link-active')
        document.getElementById('map').classList.add('nav__link-active')
        const mapWrapper = document.createElement('div');
        mapWrapper.classList.add('map-wrapper');
        document.body.append(mapWrapper);
        mapWrapper.id='mapWrapper'
        
    }
    

    function initMap() {};
  

    function call(){
        var mapProp= {
            center:new google.maps.LatLng(51.508742,-0.120850),
            zoom:5,
        };
        var map=new google.maps.Map(document.getElementById("mapWrapper"),mapProp);
    }


   