const internetPage = require('../../pages/internet.page')

describe('Interacting with elements', () => {

  it('should get text from element', () => {
    browser.url('https://the-internet.herokuapp.com/')
    let text = $('#page-footer').getText()
    console.log(text)
    internetPage.get_li_text()
  })
})