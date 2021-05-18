const words = [
    'Hello',
    'World',
    'This',
    'Yellow',
    'Purple',
    'Green',
    'React',
    'Seed',
    'Today',
    'Football',
    'Play',
    'Games',
    'Tomorrow',
    'Ricardo',
    'Javascript',
    'Programming',
    'Code',
    'Write',
    'Text',
    'Words'
]

export default class Seeder {

    static seeder() {
        let word = '';
        for(let i = 0; i < 5; i++) {
            word += words[Math.floor(Math.random() * words.length)] + ' ';
        }
        return word;
    }

}