let form = document.querySelector('form');

//Custom Error class for type error
class typeError extends Error{
    constructor(message){
        super(message);
        this.name = "TypeError";
    }
}

/*
var AjaxTCRExamples = {};
AjaxTCRExamples.errorReportingURL = "http://127.0.0.1:5500/index.html";

AjaxTCRExamples.reportJSError = function (errorMessage,url,lineNumber)
{
    function sendRequest(url,payload)
    {
         var img = new Image();
         img.src = url+"?"+payload;
    }
    
    // form payload string with error data 
    var payload = "url=" + AjaxTCRExamples.encodeValue(url);
    payload += "&message=" + AjaxTCRExamples.encodeValue(errorMessage);
    payload += "&line=" + AjaxTCRExamples.encodeValue(lineNumber);
 
    // submit error message  
    sendRequest(AjaxTCRExamples.errorReportingURL,payload);
 
    alert("JavaScript Error Encountered.  \nSite Administrators have been notified.");
 
    return true; // suppress normal JS errors since we handled
}
 
AjaxTCRExamples.registerErrorHandler = function () 
{    
    if (window.onerror) // then one exists
      {
       var oldError = window.onerror;
       var newErrorHandler = function (errorMessage,url,lineNumber) { AjaxTCRExamples.reportJSError(errorMessage,url,lineNumber); oldError(errorMessage,url,lineNumber); }
       window.onerror = newErrorHandler;
      }
    else
      window.onerror = AjaxTCRExamples.reportJSError;
}

AjaxTCRExamples.registerErrorHandler();*/

form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    //try, catch and finally
    try{
        if (isNaN(firstNum)){
            throw new Error('firstNum is not defined as a number!!')
        }
        if(isNaN(secondNum)){
            throw new Error('secondNum is not defined as a number!!')
        }
            output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    }catch(err){
        alert(err);
    }finally{
        console.log("Still did a good job!");
    }
});



let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish

// First Button: shows a log on console
errorBtns[0].addEventListener('click', () => {console.log("Yay, Console!")});

// Second Button: shows error on console
errorBtns[1].addEventListener('click', () => {console.error("That's a mistake...")});

// Third Button: shows count on console
errorBtns[2].addEventListener('click', () => {console.count()});

// Fourth Button: shows warning on console
errorBtns[3].addEventListener('click', () => {console.warn("Warning!!")});

// Fifth Button: shows assert on console
errorBtns[4].addEventListener('click', () => {
    const number = Math.random() * 100;
    const errMsg = "The number is not less than 50";
    console.assert(number < 50, {number, errMsg});
});

// Sixth Button: clears console
errorBtns[5].addEventListener('click', () => {console.clear()});

// Seventh Button: shows interactive list on console
errorBtns[6].addEventListener('click', () => {console.dir(document.querySelectorAll('#error-btns'))});

// Eighth Button: dirxml
errorBtns[7].addEventListener('click', () => {console.dirxml(document.querySelectorAll('#error-btns'))});

// Ninth Button: Group Start
errorBtns[8].addEventListener('click', () => {
    let label = 'List of animals that can be eaten raw in Japan';
    console.group(label);
    console.info('Chicken');
    console.info('Sushi');
    console.info('Cow');
    console.info('Duck');
});

// Tenth Button: Group End
errorBtns[9].addEventListener('click', () => {
    let label = 'List of animals that can be eaten raw in Japan';
    console.group(label);
    console.info('Chicken');
    console.info('Sushi');
    console.info('Cow');
    console.info('Duck');
    console.group(label);
});

// Eleventh Button: Table
errorBtns[10].addEventListener('click', () => {
    var location = [
        {
          Country: 'Japan',
          Capital: 'Tokyo',
          Identity: 'My Home', 
        },
        {
          Country: 'Taiwan',
          Capital: 'Taipei',
        },
        {
          Country: 'Canada',
          Capital: 'Otawa',
        }
      ];
      console.table(location);
})

// Twelvth Button: starting timer
errorBtns[11].addEventListener('click', () => {
    console.time();
});

// Thirteenth Button: end timer
errorBtns[12].addEventListener('click', () => {
    console.timeEnd();
});

// Fourteenth Button: trace
errorBtns[13].addEventListener('click', () => {
    const first = () => { second(); };
    const second = () => { third(); };
    const third = () => { fourth(); };
    const fourth = () => { console.trace(); };
    first();
});

// Fifteenth Button: triggering a global error
errorBtns[14].addEventListener('click', () => {
    console.log(number);
});
