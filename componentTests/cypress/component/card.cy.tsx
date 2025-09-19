import Card from "../../../SWfrontend/src/components/card";
import Item, { DetailsContent } from "../../../SWfrontend/src/items/item";
import { mount } from 'cypress/react';
import Planet from "../../../SWfrontend/src/items/planet";

describe("<card /> component", () => {

    const contents: DetailsContent[] = [
        { displayName: "Property 1", value: "Value 1" },
        { displayName: "Property 2", value: "Value 2" }
    ];
    beforeEach(() => {

    })

    const onClickFunction = () => { };

    cy.spy(onClickFunction);

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
})
