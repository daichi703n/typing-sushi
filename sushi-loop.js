var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

//WebブラウザーはChrome
var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();
driver.manage().timeouts().implicitlyWait(3000);
driver.switchTo().defaultContent();
var $ = driver.findElement.bind(driver);


driver.get('http://neutral.x0.com/home/sushida/play1.html');

//~~ 省略 ~~

// タイピングを制御する部分
for(var i = 0; i<100000; i++){
  driver.actions()
    .sendKeys('abcdefghijklmnopqrstuvwxyz-?!,')
    .perform();
}

