//Extract the domain name from a URL

/* 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/


function domainName(url) {

    return url.match(
      // eslint-disable-next-line no-useless-escape
      /(https?:\/\/)?(w*\.)?([\da-z\-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?/
    )[3];
  //your code here
}


console.log(domainName('http://google.com')); // -> domain name = "google"
console.log(domainName('www.xakep.ru')); // -> domain name = "xakep"
console.log(domainName('https://youtube.com')); // -> domain name = "youtube"