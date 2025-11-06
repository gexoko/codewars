function combat(health, damage) {
    if (health - damage > 0) {
        return health - damage;
    } else {
        return 0;
    }
}
console.log(combat(100, 90));