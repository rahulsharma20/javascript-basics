// Function with undefined arguments

function add(a, b) {
    if (a === undefined || b === undefined) {

        document.write('Variabe is undefined <br>');
        return;
    }

    document.write(a + ' + ' + b + ' = ' + (a+b) + '<br>');
}

add(5, 4);
add();
add(5);