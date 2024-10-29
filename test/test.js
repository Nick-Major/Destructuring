import { character, showSpecialAttacks } from "../src/app.js";

test ('showSpecialAttacks test', () => {
    let result = showSpecialAttacks(character);

    expect(result).toEqual({
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
    });
});