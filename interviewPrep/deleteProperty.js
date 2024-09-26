// object inside it object it's called complex object.

let alien = {
    name : "suraj",
    tech : 'js',
    laptop : {
        ram : '3gb',
        brand : 'macOS',
        config : ['intel', '500gb', 'graphics-2gb']
    }
}

// delete alien.name;
// delete alien.tech

console.log(alien.laptop.brand.length); // 5
delete alien.laptop.brand; // delete brand
delete alien.laptop;    // laptop property is deleted
console.log(alien)