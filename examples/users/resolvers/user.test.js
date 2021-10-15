const user = require("./user")
// @ponicode
describe("user.messages", () => {
    test("0", () => {
        let param2 = [[-5.48, -5.48, -5.48], [1, 0, 1], [-5.48, -5.48, 100]]
        let object = [["New Error ", "No updates are to be performed.", "the specified credentials were rejected by the server"], ["ValueError exception should be raised", "Exception not raised: %s", "Error in retrieving email."], ["Wait time out reached, while waiting for results", "No os dependencies found. ", "To force deletion of the LAG use delete_force: True"]]
        let callFunction = () => {
            user.messages({ userId: 9876, id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, param2, { models: { messages: object } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [[100, -5.48, -100], [-5.48, -5.48, 100], [1, -100, 100]]
        let object = [["Ran out of iterations", "Warning: ", "Sorry, The video you are looking for does not exist."], ["No response", "An error occurred processing your request.", "cannot be found."], ["Error getting key from: %s", "Message recipient is not the grader, the person being graded, or the controller", "TrainerCourseDetailError: Either not an ajax call or not a GET request!!!"]]
        let callFunction = () => {
            user.messages({ userId: "bc23a9d531064583ace8f67dad60f6bb", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, param2, { models: { messages: object } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [[100, 1, -100], [1, 1, -100], [0, 1, 100]]
        let object = [["Grader id does not match submission id that was passed in", "TrainerCourseDetailError: Either not an ajax call or not a GET request!!!", "Top level object in 'override.yml' needs to be an object"], ["Counterparty sent error: %s", "This is an exception, voilà", "Ran out of iterations"], ["Internal Server Error\n", "Unable to allocate address", "Error:"]]
        let callFunction = () => {
            user.messages({ userId: "da7588892", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, param2, { models: { messages: object } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [[-5.48, -5.48, 1], [-100, 100, -5.48], [1, -5.48, -5.48]]
        let object = [["ValueError exception should be raised", "Sorry, The video you are looking for does not exist.", "Sorry, This video cannot be accessed via this website"], ["Unknown error", "No error", "Sorry, The video you are looking for does not exist."], ["No updates are to be performed.", "Empty name specified", "Connection is closed"]]
        let callFunction = () => {
            user.messages({ userId: "c466a48309794261b64a4f02cfcc3d64", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, param2, { models: { messages: object } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [[-100, 100, -100], [-5.48, -100, 1], [-5.48, 1, 100]]
        let object = [["TrainerCourseDetailError: Either not an ajax call or not a GET request!!!", "the specified credentials were rejected by the server", "unexpected error"], ["\n\nThe first error message:\n", "New Error ", "Message recipient is not the grader, the person being graded, or the controller"], ["New Error ", "Internal Server Error\n", "ValueError exception should be raised"]]
        let callFunction = () => {
            user.messages({ userId: "da7588892", id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, param2, { models: { messages: object } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            user.messages(undefined, undefined, { models: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
