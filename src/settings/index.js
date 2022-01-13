//Depositions
const depositions = [
    {
        author: 'Matheus Matos',
        profile_picture: undefined,
        content: `Sincerely, I can’t say that I’m the same person that started the competition. I’m totally different,
        with a new vision, and most importantly, someone that has seen proof that my dreams can
        become true.`
    },
    {
        author: 'Laís Santos',
        profile_picture: undefined,
        content: `I loved the experience, I learned so much from researching cryptocurrencies! It has inspired me
        to continue studying this area, to make scientific research in the future. Thank you so much for
        this opportunity!`
    }
]  


//Navigation
const TheCompetition = {
    title: 'The Competition',
    multiple: true,
    options: ['Home', "Global", "Brazil"],
    route: '/competition'
}

const LatestNews = {
    title: 'Latest News',
    route: '/latest-news'
}

const BeAPartner = {
    title: 'Be a Partner',
    route: '/be-a-partner'
}

const AboutUs = {
    title: 'About Us',
    route: '/about-us'
}

const navigation = [TheCompetition, LatestNews, BeAPartner, AboutUs]

export {
    navigation,
    depositions
}