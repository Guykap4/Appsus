import { storageService } from './storage.service.js'
import { utilsService } from './utils.service.js'

export const emailService = {
    query,
    getEmailById,
    deleteEmail,
    addEmail,
    getUnreadCount,
    makeRead,
    toggleRead,
    UpdateEmail,
}

function makeRead(id) {
    const idx = _getEmailldx(id)
    gEmails[idx].isRead = true;
    storageService.saveToStorage('emails', gEmails);
}

function toggleRead(id) {
    const idx = _getEmailldx(id)
    gEmails[idx].isRead = !gEmails[idx].isRead;
    storageService.saveToStorage('emails', gEmails);
}

function _getEmailldx(id) {
    return gEmails.findIndex(email => email.id === id)
}

function getUnreadCount() {
    let count = 0;
    gEmails.forEach(email => {
        if (!email.isRead) count++
    })
    return count;
}

function query(searchBy, filterBy) {
    if (!searchBy && !filterBy) return Promise.resolve(gEmails);
    let filteredEmails = gEmails;
    if (searchBy) filteredEmails = gEmails.filter(email => {
        return (
            email.title.includes(searchBy) || email.sender.includes(searchBy) || email.content.includes(searchBy)
        );
    });
    switch (filterBy) {
        case 'all':
            break;
        case 'read':
            filteredEmails = filteredEmails.filter(email => email.isRead)
            break;
        case 'unread':
            filteredEmails = filteredEmails.filter(email => !email.isRead)
            break;
        case 'newest':
            filteredEmails.sort((a, b) => {
                if (a.time > b.time) return -1
                if (a.time < b.time) return 1
            })
            break;
        case 'oldest':
            filteredEmails.sort((a, b) => {
                if (a.time > b.time) return 1
                if (a.time < b.time) return -1
            })
            break;
        default:
            break;
    }
    return Promise.resolve(filteredEmails);
}

function getEmailById(id) {
    return gEmails.find(email => email.id === id);
}

function deleteEmail(id) {
    const idx = _getEmailldx(id)
    gEmails.splice(idx, 1);
    storageService.saveToStorage('emails', gEmails);
}

function addEmail(sender, title, content) {
    const newEmail = {
        id: utilsService.makeId(),
        sender,
        title,
        content,
        isRead: false,
        isStarred: false,
        time: Date.now(),
    }

    gEmails.unshift(newEmail);
    storageService.saveToStorage('emails', gEmails);
}

function UpdateEmail(sender, title, content, id) {
    const idx = _getEmailldx(id);
    gEmails[idx].sender = sender;
    gEmails[idx].title = title;
    gEmails[idx].content = content;
    gEmails[idx].isRead = false;
    gEmails[idx].time = Date.now();
    const mail = gEmails.splice(idx, 1);
    gEmails.unshift(mail[0]);
    storageService.saveToStorage('emails', gEmails);
}

const gEmails = storageService.loadFromStorage('emails') && storageService.loadFromStorage('emails').length > 0 ? storageService.loadFromStorage('emails') : [

    {
        id: utilsService.makeId(),
        sender: 'Coding Academy',
        title: 'Job Interview',
        content: 'Hello, we would like to inform you that you passed our job interview!!! you are now officially a Coding Academy employee. let\'s start on this monday, even though it\'s Shavuot? \n Greetings and happy coding, \n Coding Academy',
        isRead: false,
        isStarred: false,
        time: 1593945418000,
    },

    {
        id: utilsService.makeId(),
        sender: 'Suspicous sender',
        title: 'YOUV\'E BEEN HACKED',
        content: 'if you don\'t give us 100000 bit coin in money money cash we will publish lewd photos of you!!!!111!one!! BE WARNED!',
        isRead: false,
        isStarred: false,
        time: 1593945418000,
    },

    {
        id: utilsService.makeId(),
        sender: 'Dentist Office',
        title: 'scheduled appointment',
        content: 'Hi mr., This is a reminder for your appointment at Yeriho\'s Dentist, accuring at 24/13/2090, please approve you arrival at least 20 years before the mentioned date. \n\n Thanks, \n\n Lord Dentist',
        isRead: false,
        isStarred: false,
        time: 1612525018000,
    },

    {
        id: utilsService.makeId(),
        sender: 'Shufersal',
        title: 'Update on your Shufersal club program',
        content: `We are pleased to update that we are continuing to prepare the new customer club plan and we will update in detail soon.
        All current club benefits will continue according to the existing plan until October 18, 2121, including benefits for Shufersal credit card payers, including a 10% discount on 10 selected products and a 5% discount on Shufersal private label products.
        
        Also, until that date it will be possible to continue to accumulate points and redeem them - all in accordance with the terms of the current valid club program.
        
        This announcement is a continuation of our previous announcement regarding the termination of the customer club program on 31.5.2021.
        The validity of the existing club plan and the benefits according to it will end as stated on 18.10.2021.
         
        Regards,
        Shufersal customer club
        `,
        isRead: false,
        isStarred: false,
        time: Date.now(),
    },

    {
        id: utilsService.makeId(),
        sender: 'Udacity',
        title: 'Learning Program',
        content: `Hi

        To help you gain the in-demand tech skills no‍w required by leading tech firms, Udacity is offering a special, limited-time opportunity. We’ll give you Free Access to the Nanodegree program of your choice for 3‍0 da‍ys. Choose one from our catalog of dozens of courses no‍w.
        
        With Udacity part-ti‍me online tech education programs, you can work at your own pace, when and where it’s convenient for you. They are designed with the guidance of some of the world’s top tech companies, so you get industry ready skills to take your tech career to the next level.
        
        To get Free Access, use the links in this email. Enroll N‍ow!
        `,
        isRead: false,
        isStarred: false,
        time: 1580044218000,
    }
]