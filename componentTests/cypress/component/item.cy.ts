import Item from "../../../SWfrontend/src/items/item";

describe('item.cy.js', () => {

  let item: Item;

  beforeEach(() => {
    item = new Item({
      name: "Test Item",
      url: "http://swapi.dev/api/test-item/",
      exitButtonIMG: "exit-button.png",
      backgroundImage: "test-image.jpg"
    });
  })

  it('Creating an Item instance should have the correct properties', () => {
    expect(item.name).to.equal("Test Item");
    expect(item.url).to.equal("http://swapi.dev/api/test-item/");
    expect(item.exitButtonIMG).to.equal("exit-button.png");
    expect(item.backgroundImage).to.equal("test-image.jpg");
  })

  it("getDetailsContent should return correct details", () => {
    const details = item.getDetailsContent();
    expect(details).to.be.an("array").that.has.length(2);
    expect(details[0]).to.deep.equal({ displayName: "nane", value: "Test Item" });
    expect(details[1]).to.deep.equal({ displayName: "URL", value: "http://swapi.dev/api/test-item/" });
  });
})