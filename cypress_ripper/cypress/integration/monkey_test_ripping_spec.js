describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomEvent(10);
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
function randomClick(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.Dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            setTimeout(randomClick, 1000, monkeysLeft);
        });
    }   
}
function randomEvent(monkeysLeft){
    if(monkeysLeft>0){
        var eventSelected = getRandomInt(0,4);
        console.log(eventSelected);
        if(eventSelected == 1){
            cy.get('a').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.Dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({force: true});
                    monkeysLeft = monkeysLeft - 1;
                }
                setTimeout(randomEvent, 1000, monkeysLeft);
            });
        }
        if(eventSelected == 2){
            cy.get('input').then($inputs => {
                var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                if(!Cypress.Dom.isHidden(randomInput)) {
                    cy.wrap(randomInput).click({force: true}).type("monkey");
                    monkeysLeft = monkeysLeft - 1;
                }
                setTimeout(randomEvent, 1000, monkeysLeft);
            });
        }
        if(eventSelected == 3){
            cy.get('combobox').then($selects => {
                var randomCombos = $combos.get(getRandomInt(0,$combos.length));
                if(randomCombos.length > 0){
                    cy.wrap(randomCombos).click();
                    monkeysLeft = monkeysLeft - 1;
                }
                setTimeout(randomEvent, 1000, monkeysLeft);
            });
        }
        if(eventSelected == 4){
            cy.get('button').then($buttons => {
                var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
                if(!Cypress.Dom.isHidden(randomButton)) {
                    cy.wrap(randomButton).click({force: true});
                    monkeysLeft = monkeysLeft - 1;
                }
                setTimeout(randomEvent, 1000, monkeysLeft);
            });
        }
    }
}