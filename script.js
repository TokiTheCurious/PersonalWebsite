function repositionTests(){
    var el = document.getElementById("fcc_test_suite_wrapper");
    if(el != null){
        var shadow = el.shadowRoot;
        shadow.innerHTML += `
        <style>.fcc_test_ui{
            opacity:20%;
        }
        </style>`
        console.log(el);
    }
    else{
        console.log("not found");
        setTimeout(() => {
            repositionTests();
        }, 500);
    }
}
