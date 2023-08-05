// init -> fn -> build whole chessboard
window.addEventListener("load", function () {
    let table = document.querySelector("#table");
    // chess grid creation  
    for (let ri = 0; ri < 8; ri++) {
        let tr = document.createElement("tr");
        let white = ri % 2 == 0 ? true : false;
        // cell loop
        for (let ci = 0; ci < 8; ci++) {
            let cell = document.createElement("td");
            cell.setAttribute("class", `box ${white == true ? "white" : "black"}`);
            // cell.innerText = `${ri}-${ci}`;
            cell.setAttribute("data-index", `${ri}-${ci}`)
            tr.appendChild(cell);
            white = !white;
        }
        table.appendChild(tr);
    }

    let boxesArr = document.querySelectorAll(".box");
    // how to indentify -> hover -> cell
    table.addEventListener("mouseover", function (e) {
        // console.log(e.target);
        console.log(e.target.dataset.index);
        let dataIndex = e.target.dataset.index;
        let [cRi, cCi] = e.target.dataset.index.split("-").map((idx) => idx);
        // remove color from every  box;
        for (let i = 0; i < boxesArr.length; i++) {
            boxesArr[i].classList.remove("yellow");
        }
        /****************marking the the path for bishop*********************/ 
        // e.target.classList.add("yellow");
        let storage = {};
        storage[dataIndex] = true;

        console.log("35", storage);
        findTopLeft(cRi, cCi, storage)
        findTopRight(cRi, cCi, storage)
        findBottomLeft(cRi, cCi, storage)
        findBottomRight(cRi, cCi, storage);
/************************************************/ 
        // console.log("40", storage);
        // color wherever -> dataIndex;
        for (let i = 0; i < boxesArr.length; i++) {
            let cDataIndex = boxesArr[i].dataset.index;
            if(storage[cDataIndex]==true){
                // color it 
                boxesArr[i].classList.add("yellow");
            }
        }
    })

    table.addEventListener("mouseleave", function () {
        // console.log("leave");
        for (let i = 0; i < boxesArr.length; i++) {
            boxesArr[i].classList.remove("yellow");
        }
    })


    function findTopLeft(cRi, cCi, storage) {
        cRi--;
        cCi--;
        while (cRi >= 0 && cCi >= 0) {
            let dataIndex = `${cRi}-${cCi}`;
            storage[dataIndex] = true;
            cRi--;
            cCi--;
        }

    }

    function findTopRight(cRi, cCi, storage) {
        cRi--;
        cCi++;
        while (cRi >= 0 && cCi <= 7) {
            let dataIndex = `${cRi}-${cCi}`;
            storage[dataIndex] = true;
            cRi--;
            cCi++;
        }

    }

    function findBottomLeft(cRi, cCi, storage) {
        cRi++;
        cCi--;
        while (cRi <= 7 && cCi >= 0) {
            let dataIndex = `${cRi}-${cCi}`;
            storage[dataIndex] = true;
            cRi++;
            cCi--;
        }

    }
    function findBottomRight(cRi, cCi, storage) {
        cRi++;
        cCi++;
        while (cRi <= 7 && cCi <= 7) {
            let dataIndex = `${cRi}-${cCi}`;
            storage[dataIndex] = true;
            cRi++;
            cCi++;
        }

    }

})