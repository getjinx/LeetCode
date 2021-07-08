function format(str, max = 5) {
    console.log(str);
    const space = "&nbsp";
    for(let i = 0; i < max; i++) {
        let exp = "//format" + i, alt = "<br>" + space.repeat(i*4);
        console.log(exp,alt);
        str = str.replace(new RegExp(exp,"g"), alt);
    }
    return str;
}