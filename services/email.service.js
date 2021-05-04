import { storageService } from './storage.service.js'
import { utilsService } from './utils.service.js'

export const emailService = {
    query,
    getEmailById,
    deleteEmail,
}

function query(filterBy) {
    return Promise.resolve(gEmails);
}

function getEmailById(id) {
    return gEmails.find(email => email.id === id)
}

function deleteEmail(id) {
    const idx = gEmails.findIndex(email => email.id === id)
    gEmails.splice(idx, 1);
    storageService.saveToStorage('emails', gEmails)
}

const gEmails = storageService.loadFromStorage('emails') && storageService.loadFromStorage('emails').length > 0 ? storageService.loadFromStorage('emails') : [
    {
        id: 1234,
        sender: 'Bobby bob',
        title: 'Test email',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore error animi magnam tempora! Porro, animi quibusdam vel, dolor placeat voluptas corporis expedita in non cum magni necessitatibus dolorem nobis omnis provident ad eligendi est ut?',
        isRead: false,
        isStarred: false,
        time: '12:34',
    },
    {
        id: 2218,
        sender: 'YO YO HAK',
        title: 'Test email2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore error animi magnam tempora! Porro, animi quibusdam vel, dolor placeat voluptas corporis expedita in non cum magni necessitatibus dolorem nobis omnis provident ad eligendi est ut? Quas molestiae aperiam alias vitae dolor nam minus. Illum quaerat architecto deserunt numquam odio aperiam modi, rem corporis qui ipsum eligendi atque, cupiditate consequuntur placeat quis blanditiis minima inventore dolore non quam?',
        isRead: false,
        isStarred: false,
        time: '12:55',
    },
    {
        id: 4561,
        sender: 'wassaappppp',
        title: 'regswrthswth',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore error animi magnam tempora! Porro, animi quibusdam vel, dolor placeat voluptas corporis expedita in non cum magni necessitatibus dolorem nobis omnis provident ad eligendi est ut? Quas molestiae aperiam alias vitae dolor nam minus. Illum quaerat architecto deserunt numquam odio aperiam modi, rem corporis qui ipsum eligendi atque, cupiditate consequuntur placeat quis blanditiis minima inventore dolore non quam? Incidunt ducimus neque cupiditate molestiae porro numquam modi inventore reiciendis eius iste atque enim facere deleniti omnis quidem cumque, dolor non est quisquam accusantium temporibus repellendus, assumenda totam eos. Repellendus quos quis earum ea in quisquam optio nulla illo eaque delectus cum voluptate eum similique tempore aliquid magni, fugit distinctio explicabo necessitatibus provident magnam ipsa corrupti. Iste exercitationem voluptatibus laudantium voluptatem ratione fuga hic cumque reiciendis quas sapiente, ipsa porro, repellendus dignissimos quasi in laborum quisquam commodi nam, amet aperiam nobis facilis corrupti! Ad harum voluptate architecto quisquam incidunt quo mollitia porro quis dolorem fuga id quia sit eos totam molestiae doloribus quod autem, error aliquam! Sit minus optio neque perspiciatis quam, tenetur nemo dolores id earum illum beatae voluptatum corporis, atque sapiente! Quibusdam vero provident expedita in, fugiat odit consectetur obcaecati reiciendis.',
        isRead: false,
        isStarred: false,
        time: '09:55',
    },
]