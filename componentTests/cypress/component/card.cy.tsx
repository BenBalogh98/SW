import Card from "../../../SWFrontend/src/components/card";
import Item, { DetailsContent } from "../../../SWFrontend/src/items/item";
import { mount } from 'cypress/react';
import Planet from "../../../SWFrontend/src/items/planet";

describe("<card /> component", () => {

    const contents: DetailsContent[] = [
        { displayName: "Property 1", value: "Value 1" },
        { displayName: "Property 2", value: "Value 2" }
    ];
    beforeEach(() => {

    })

    const onClickFunction = () => { };



    it("mounts", () => {
        mount(
            <Card
                isSelected={false}
                isLeaveButtonVisible={false}
                onClick={onClickFunction}
                title={"title"}
                className={"className"}
                content={contents}
                hasLeaveButton={true}
                leaveButtonIMGContent={"leaveButtonIMGContent"}
                backgroundImage={"backgroundImage"}
                onSelect={() => { }}
                key={"title"}
            />
        )
    })

    it("displays the correct title", () => {
        mount(
            <Card
                isSelected={false}
                isLeaveButtonVisible={false}
                onClick={onClickFunction}
                title={"title"}
                className={"className"}
                content={contents}
                hasLeaveButton={true}
                leaveButtonIMGContent={"leaveButtonIMGContent"}
                backgroundImage={"backgroundImage"}
                onSelect={() => { }}
                key={"title"}
            />
        )
        cy.get('.title').contains("title");
    })

    it("calls onClick when clicked", () => {
        const onClickSpy = cy.spy().as('onClickSpy');
        mount(
            <Card
                isSelected={false}
                isLeaveButtonVisible={false}
                onClick={() => { onClickSpy("something"); }}
                title={"title"}
                className={"className"}
                content={contents}
                hasLeaveButton={true}
                leaveButtonIMGContent={"leaveButtonIMGContent"}
                backgroundImage={"backgroundImage"}
                onSelect={() => { }}
                key={"title"}
            />
        )
        cy.get('.SWCard').click();
        cy.get('@onClickSpy').should('have.been.called');
        cy.get('@onClickSpy').should('have.been.calledWith', 'something');
    })
})
