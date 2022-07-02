'use strict'
const API = " https://62ab6beda62365888bdc2f11.mockapi.io/Hw13";
const row = document.querySelector('.firstTr');
const table = document.querySelector('.tbody')


const getData = async () => {
    const prom = await fetch(API);
    const res = await prom.json();
    console.log(res);
    let ProjectIds = [];

    await res.forEach(element => {
        ProjectIds.push(element.ProjectId)
    });
    let mainProject = ProjectIds.filter((item, pos) => {
        return ProjectIds.indexOf(item) == pos;
    });


    let newArr = [];
    await res.forEach(element => {
        newArr.push(element.SiteId)
    });
    let mainSiteId = newArr.filter((item, pos) => {
        return newArr.indexOf(item) == pos;
    });
    mainSiteId.forEach(element => {
        let el = document.createElement('td');
        el.dataset.id = res.Id;
        console.log(el.id);
        el.innerText = element;
        el.className = 'id';
        el.setAttribute('rowSpan', '2');
        row.appendChild(el);
    })

    let rows = [];
    mainProject.forEach((project) => {
        rows.push({
            mainSiteId: res.filter(item => item.ProjectId === project)
        })
    })

    console.log(rows);
    let targets1 = [];
    let targets2 = [];
    let targets3 = [];


    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < 7; j++) {
            if (targets1.length < 7) {
                targets1.push(rows[i].mainSiteId[j].Target);
            }
            else if (targets2.length < 7) {
                targets2.push(rows[i].mainSiteId[j].Target);
            } else if (targets3.length < 7) {
                targets3.push(rows[i].mainSiteId[j].Target);
            }
        }

    }
    console.log(targets1);
    console.log(targets2);
    console.log(targets3);

    mainProject.forEach(element => {
        let col = document.createElement('tr');
        let el = document.createElement('td');
        el.dataset.id = res.Id
        el.innerText = element;
        el.className = 'id';
        el.setAttribute('colSpan', '2')
        col.appendChild(el);

        table.appendChild(col);
        if (el.innerHTML == 1) {
            targets1.forEach(el => {
                let targetTd = document.createElement('td');
                targetTd.innerHTML = el;
                targetTd.className = 'id';
                col.appendChild(targetTd);
            })
        }
        if (el.innerHTML == 10093) {
            targets2.forEach(el => {
                let targetTd = document.createElement('td');
                targetTd.innerHTML = el;
                targetTd.className = 'id';
                col.appendChild(targetTd);
            })
        }
        if (el.innerHTML == 10094) {
            targets3.forEach(el => {
                let targetTd = document.createElement('td');
                targetTd.innerHTML = el;
                targetTd.className = 'id';
                col.appendChild(targetTd);
            })
        }
    })

}
getData();