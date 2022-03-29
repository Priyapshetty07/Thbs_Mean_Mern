function apiCall(url, resolve, reject) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function () {
        if (request.status === 200) {
            resolve(request.response);
        }
        else {
            reject(Error('image not found' + request.statusText));
        }
    };
    request.onerror = function () {
        reject(Error('there was a network error'));
    };
    request.send();
};

function loadImage(url) {
    console.log('sending image to api ${url}');
    let mypromise = new Promise((resolve, reject) => {
        apiCall(url, resolve, reject);
    });
    return mypromise;
};

function addImagesToBody(imageResponse) {
    let body = document.querySelector('body'); 
    let image = document.createElement('img');

    let myimgurl = URL.createObjectURL(imageResponse);
    image.src = myimgurl;
    image.width = '300';
    image.height = '200';
    body.append(image);
};

loadImage('https://mdn.github.io/js-examples/promises-test/myLittleVader.jpg')
    .then(
        (sucess) => {
            console.log(`sucess coming from loadimage`);
            addImagesToBody(sucess);
        }
        ,
        (error) => {
            console.log(`error coming from loadimage`);
        }

    );