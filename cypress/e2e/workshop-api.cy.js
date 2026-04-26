describe ('Activities', () => {
    const baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1'
    it('Criar uma nova atividade', () => {        
        cy.request ({
            method: 'POST',
            url: `${baseUrl}/Activities`,
            body: {
                "id": 10,
                "title": "workshop",
                "dueDate": "2026-04-26T18:19:22.938Z",
                "completed": true
            }
            //assertion
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(10)
            expect(response.body.title).to.equal('workshop')
        })
    });
});