describe('Ecommerce Application', function()
{
   it('Login page', function(){
       // webdriverIo code
       browser.url('https://rahulshettyacademy.com/loginpagePractise/#')
       console.log(browser.getTitle())      
       expect(browser).toHaveTitleContaining("Rahul Shetty Academy") // Assertion to validate title of webpage
     
       // Locators: CSS:
       $("input[name='username']").setValue("rahulshettyacademy") // enetr value in edit box
       browser.pause(3000)

       //XPath: //tagname[@attribute='value']
      const password = $("//input[@name ='password']")
      password.setValue("learning123")
      $("#signInBtn").click()   // clicking on button

      // $("#signInBtn").getAttribute('value') === "sign In"  --> Wait mechanism 
      browser.waitUntil(()=> $("#signInBtn").getAttribute('value') === "sign In" , 
          { timeout : 4000, timeoutMsg : "Error message " })

     console.log($(".alert-danger").getText + "is the text i can see the screen") // extract the text out


    })

});