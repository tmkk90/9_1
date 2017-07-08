var     a=prompt('a=?'),
		h=prompt('h=?');



function getTriangleArea(a, h)    {
            if (a <= 0 || h <= 0) {
                        alert('Niepoprawne dane!');
                        console.log('Niepoprawne dane!');
            }
            else {
                        return a*h/2;
            }
}


alert('Pole trójkąta: ' + getTriangleArea(a, h));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(20, 15);
var triangle3Area = getTriangleArea(30, 15);

console.log(getTriangleArea(10,6))
console.log(triangle1Area)
console.log(triangle2Area)
console.log(triangle3Area)
