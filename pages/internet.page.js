class Internet {

  get pageHeader() { return $('h1.heading') }
  get subHeading() { return $('h2') }
  get pageFooter() { return $('#page-footer') }
  get parent() { return $('ul') }
  get childElements() { return this.parent.$$('li') }

  get_li_text() {
    this.childElements.filter((element) => {
      console.log(element.getText())
    })
  }
}
module.exports = new Internet()