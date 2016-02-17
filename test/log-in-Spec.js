
describe("Log in", () => {
    const auth = require('etech-auth');
    const VALID_PASSWORD = 'Balance2016';
    const VALID_USER_NAME = 'minecraft';
    it("with a valid username and valid password should return true", () => {
        expect(auth.authorize(VALID_USER_NAME, VALID_PASSWORD)).toBe(true)
    });
    it("with a invalid username and valid password should return false", () => {
        expect(auth.authorize('mickey', VALID_PASSWORD)).toBe(false)
    });
    it("with a valid username and invalid password should return false", () => {
        expect(auth.authorize(VALID_USER_NAME, 'mouse')).toBe(false)
    });
    it("with a invalid username and invalid password should return false", () => {
        expect(auth.authorize('mickey', 'mouse')).toBe(false)
    });
});


//make the forms look better, read articles
//
//upload to github
//
//start test driven url and server setup. read index.html display index.html or 404