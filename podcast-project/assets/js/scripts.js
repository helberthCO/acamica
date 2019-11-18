(function () {
    const addClassOnClick = (classToAdd, trigger, target = false) => {
        let triggerElem = document.querySelector(trigger),
            targetElem = document.querySelector(target !== false ? target : '');
        if(triggerElem != null){
            triggerElem.addEventListener('click', _=>{
                triggerElem.classList.toggle(classToAdd);
                if(targetElem !== null){
                    targetElem.classList.toggle(classToAdd);
                }
            })
        }
    };
    addClassOnClick('menu-open', '.js-menu-trigger', '.js-menu-target');
})();