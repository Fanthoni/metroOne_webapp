const docList = document.querySelector('#doc-list');
const resList = document.querySelector('#res-list');

function renderList(doc){
    let li = document.createElement('li');   
    let name = document.createElement('span')
    let date = document.createElement('span');
    let time = document.createElement('span');
    let cross = document.createElement('button');
    
    db.collection('users').doc(localStorage.getItem("thisUserID")).get().then(function (doc) {        
        name.textContent = doc.data().name;    
    })
    
    li.setAttribute('data-id', doc.id);   
  
    date.textContent = doc.data().date;
    time.textContent = doc.data().time;
    cross.textContent = 'x';
    
    li.appendChild(name);
    li.appendChild(date);    
    li.appendChild(time);
    li.appendChild(cross);

    docList.appendChild(li);
   
    // deleting data
    cross.addEventListener('click', e => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('reservations').doc(id).delete();
    });
};


db.collection('reservations').get().then((snapshot) => { 
    let hasRes = false;   
    snapshot.docs.forEach(doc => {
        if (doc.data().UID == localStorage.getItem("thisUserID")){
            renderList(doc);
            hasRes = true;
        }
    });

    if (!hasRes){
        // Give message that this user dont have any reservation yet
        let mes = document.createElement('p');
        mes.textContent = 'You have no reservations.';
        $("#res-list").append(mes);
    }
});