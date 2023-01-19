describe('empty spec', () => {
    before(() => {
      cy.visit('http://localhost:3000/');
    });

    it('should open rules page and close page', () => {
      cy.findByRole('button', { name: /game rules/i }).click();
      cy.url().should('include', '/rules');
      cy.findByRole('heading', {
        name: /rules/i,
      }).should('have.length', 1);
      cy.findByTestId(/confirm-button/i).click();
      cy.url().should('include', '/');
    });
    it('should start game in PvpP mode', () => {
      cy.findByRole('button', { name: /play vs player/i }).click();
    });

    it('should show correct players turn in beginning', () => {
      cy.findByRole('heading', {
        name: /player 1's turn/i,
      });
    });

    it('should show correct score at beginning', () => {
      cy.findByTestId('player1-score').should('have.text', '0');
      cy.findByTestId('player2-score').should('have.text', '0');
    });

    it('should render red pointer', () => {
      cy.findByTestId(/color-red/i).should('exist');
    });

    it('should be able to place counter', () => {
      cy.findByTestId('column0').click();
    });

    it('should change  players turn  and color of pointer after move', () => {
      cy.findByRole('heading', {
        name: /player 2's turn/i,
      });
      cy.findByTestId(/color-yellow/i).should('exist');
    });

    it('should pause game and show winner when player 1 wins', () => {
      cy.wait(400);
      cy.findByTestId('column1').click();
      cy.wait(400);
      cy.findByTestId('column0').click();
      cy.wait(400);
      cy.findByTestId('column1').click();
      cy.wait(400);
      cy.findByTestId('column0').click();
      cy.wait(400);
      cy.findByTestId('column1').click();
      cy.wait(400);
      cy.findByTestId('column0').click();
    });

    it('should show correct score after player 1 wins', () => {
      cy.findByTestId('player1-score').should('have.text', '1');
      cy.findByTestId('player2-score').should('have.text', '0');
    });

    it('should render winner component with right text', () => {
      cy.findByTestId('winner-name').should('have.text', 'Player 1');
      cy.findByTestId('game-status').should('have.text', 'wins');
    });

    it('should be able play again', () => {
      cy.findByRole('button', { name: /play again/i }).click();
    });
    it("should have yellow pointer and 'player 2 turn' text after starting new game", () => {
      cy.findByRole('heading', {
        name: /player 2's turn/i,
      });
      cy.findByTestId(/color-yellow/i).should('exist');
    });
    it('should pause game and show winner when player 2 wins', () => {
      cy.wait(400);
      cy.findByTestId('column1').click();
      cy.wait(400);
      cy.findByTestId('column0').click();
      cy.wait(400);
      cy.findByTestId('column1').click();
      cy.wait(400);
      cy.findByTestId('column0').click();
      cy.wait(400);
      cy.findByTestId('column1').click();
      cy.wait(400);
      cy.findByTestId('column0').click();
      cy.wait(400);
      cy.findByTestId('column1').click();
    });

    it('should show correct score after player 1 wins', () => {
      cy.findByTestId('player1-score').should('have.text', '1');
      cy.findByTestId('player2-score').should('have.text', '1');
    });

    it('should render winner component with right text', () => {
      cy.findByTestId('winner-name').should('have.text', 'Player 2');
      cy.findByTestId('game-status').should('have.text', 'wins');
    });

    it('should restart game after  restart button click', () => {
      cy.findByRole('button', { name: /play again/i }).click();
      cy.wait(400);
      cy.findByTestId('column1').click();
      cy.wait(400);
      cy.findByTestId('column1').click();

      cy.findAllByTestId(/empty/i).should('have.length', 40);
      cy.findByRole('button', { name: /restart/i }).click();
      cy.findAllByTestId(/empty/i).should('have.length', 42);
      cy.findByTestId(/color-red/i).should('exist');
    });

    it('should open menu after menu btn click', () => {
      cy.findByRole('heading', {
        name: /pause/i,
      }).should('not.exist');
      cy.findByRole('button', { name: /menu/i }).click();
      cy.findByRole('heading', {
        name: /pause/i,
      }).should('exist');
    });
    it('should continue game after continue bt click', () => {
      cy.findByRole('button', { name: /continue game/i }).click();
      cy.findByRole('heading', {
        name: /pause/i,
      }).should('not.exist');
    });
    it('should restart game after clicking restart btn in menu ', () => {
      cy.wait(400);
      cy.findByTestId('column1').click();
      cy.wait(400);
      cy.findByTestId('column1').click();
      cy.findAllByTestId(/empty/i).should('have.length', 40);
      cy.findByRole('button', { name: /menu/i }).click();
      cy.findByRole('heading', { name: /Restart/i }).click();
      cy.findAllByTestId(/empty/i).should('have.length', 42);
    });

    it('should quit game and return to main menu', () => {
      cy.findByRole('button', { name: /menu/i }).click();
      cy.findByRole('button', { name: /quit game/i }).click();
      cy.url().should('include', '/');
    });
  });
