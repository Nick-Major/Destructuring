export const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }

export function showSpecialAttacks(specialAttacks) {
    let { special: [{id, name, icon, description = 'обратите внимание, описание "засекречено"'}] } = specialAttacks;
    return {
        id: id, 
        name: name, 
        icon: icon, 
        description: description
    };
};

showSpecialAttacks(character);
