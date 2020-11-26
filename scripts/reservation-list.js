const docList = document.querySelector('#doc-list');
const resList = document.querySelector('#res-list');

function renderList(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let time = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    time.textContent = doc.data().time;
    cross.textContent = 'x';
    
    
    li.appendChild(name);    
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
    snapshot.docs.forEach(doc => {
        renderList(doc);
    });
});