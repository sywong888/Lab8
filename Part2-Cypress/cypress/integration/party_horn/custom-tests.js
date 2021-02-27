describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
    .then(($el) => {
      expect($el).to.have.value('75');
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider')
    .invoke('val', 33)
    .trigger('input');

    cy.get('#volume-number')
    .then(($el) => {
      expect($el).to.have.value('33');
    });
  });

  it('Value of <audio> changes when slider changes', () => {
    cy.get('#volume-slider')
    .invoke('val', 33)
    .trigger('input');

    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image changes when party horn radio button selected', () => {
    cy.get('#radio-party-horn')
    .check();

    cy.get('#sound-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
  });

  it('Sound changes when party horn radio button selected', () => {
    cy.get('#radio-party-horn')
    .check();

    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image high when volume input >66', () => {
    cy.get('#volume-slider')
    .invoke('val', 67)
    .trigger('input');

    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Volume image med when volume input >33 and <67', () => {
    cy.get('#volume-slider')
    .invoke('val', 35)
    .trigger('input');

    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image low when volume input >0 and <34', () => {
    cy.get('#volume-slider')
    .invoke('val', 32)
    .trigger('input');

    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image zero when volume input 0', () => {
    cy.get('#volume-slider')
    .invoke('val', 0)
    .trigger('input');

    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  it('Honk button disabled when text input empty', () => {
    cy.get('#volume-number').clear();
    
    cy.get('#honk-btn').should('be.disabled');
  });

  it('Honk button disabled when text input NaN', () => {
    cy.get('#volume-number').clear().type('a');
    
    cy.get('#honk-btn').should('be.disabled');
  });

  it('Error shown when volume input is out of range', () => {
    cy.get('#volume-number').clear().type('500');
    cy.get('input:invalid').should('have.length',1);
  });
});
