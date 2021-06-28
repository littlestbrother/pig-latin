// back end variables here 
let str = null

//functions here
function convertToArrary(text) {
    text = text.replace(/[^\w\s]/gi, '');
    if(text == ''){
        alert("please enter a valid sentence.");
    }
    text = text.split(" ");
    return text;
}

function pigLatin(text) {
    for (let i = 0; i < text.length; i++) {
        switch (text[i].substring(0, 1)) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                text[i] = text[i].concat('way');
                break;
            default:
                text[i] = text[i].concat(text[i].substring(0, 1));
                text[i] = text[i].slice(1);
                text[i] = text[i].concat('ay');
                break;
            case 'q':
            case 'Q':
                if (text[i].substring(0, 2) == 'QU' || text[i].substring(0, 2) == 'qu' || text[i].substring(0, 2) == 'Qu' || text[i].substring(0, 2) == 'qU') {
                    text[i] = text[i].concat(text[i].substring(0, 2));
                    text[i] = text[i].slice(2);
                    text[i] = text[i].concat('ay');
                }
                break;
        }
    }
    console.log(text);
    text = text.toString();
    text = text.replace(/,/g, ' ')
    return text;
}

$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        str = $("textarea#text").val();
        str = convertToArrary(str);
        str = pigLatin(str);
        str.replace();
        $("#result").text(str);
    });
});
