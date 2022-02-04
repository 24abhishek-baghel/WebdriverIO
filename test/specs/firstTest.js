describe('Ecommerce Application', function()
{
   it('Login page', function(){
       // webdriverIo code
       browser.url('https://www.flipkart.com/')
       console.log(browser.getTitle())
       browser.pause(3000)
   })

});